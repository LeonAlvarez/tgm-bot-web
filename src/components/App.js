/* eslint-disable react/prefer-stateless-function */
import { Component, h } from "preact";
import TelegramPlane from "../img/telegram-plane-brands.svg";
import Dots from "../img/ellipsis-v-solid.svg";
import { commands } from "./../helpers";
import bot from "../json/user/1.json";
import user from "../json/user/2.json";

const welcome_message = {
  text: "Selecciona el comando que quieras saber la explicación.",
  user: 1
};

const delay = (t, data) => {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, data), t);
  });
}

export default class App extends Component {
  constructor() {
    super();
    commands().then(commands => this.setState({ commands }));
    this.setState({
      messages: [welcome_message],
      suggestions: []
    });
    this.commandLauch = this.commandLauch.bind(this);
  }

  commandLauch(command) {
    this.addMessages(...command.messages);
  }

  async addMessages (...new_messages) {

    this.setState({ text: "" });
    this.setState({ suggestions: [] });

    await delay(150);

    const messages = new_messages.map(message => {
      const { username } = user;
      const text = message.text.replace("{{username}}", username);
      return { ...message, text };
    });

    for (let message of messages) {
        console.log(new Date());
        await delay(150);
        this.setState({
          messages: this.state.messages.concat(message)
        });
    }
    
    this.messagesElement.scrollTop = this.messagesElement.scrollHeight;
 
  }

  senUserdMessage = text => {
    this.addMessages({ user: 2, text });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.senUserdMessage(this.state.text);
    }
  };

  showAllComands = () => {
    const { commands } = this.state;
    this.setState({
      suggestions: commands
    });
  };

  updateText = e => {
    const { value } = e.target;
    const search = value.toLowerCase();
    this.setState({ text: value });
    if (value.length > 2) {
      const suggestions = this.state.commands.filter(command =>
        command.name.toLowerCase().includes(search)
      );
      this.setState({
        suggestions:
          suggestions.length > 0
            ? suggestions
            : [{ name: "no se encontraron comandos" }]
      });
    } else {
      this.setState({ suggestions: [] });
    }
  };

  render({}, { text, messages, suggestions }) {
    return (
      <div class="font-sans relative flex flex-col h-screen shadow leading-normal w-full text-grey-darkest">
        <div class="bg-blue w-inherit fixed pin-t z-10 text-white p-4 flex items-center justify-between cc-box">
          <div class="text-white flex items-center">
            <span class="mr-6">&larr;</span>
            <img src={bot.img} class="rounded-full w-10 h-10 mr-4" />
            <div class="flex flex-col justify-between">
              <span>{bot.username}</span>
              <span>bot</span>
            </div>
          </div>
          <Dots class="h-6" />
        </div>
        <MessageList messages={messages} messagesRef={el => this.messagesElement = el}/>
        <button
          class="p-4 z-20 rounded-full border-blue border focus:outline-none text-xs fixed pin-b pin-r mb-16 mr-4 bg-white hover:bg-blue text-blue hover:text-white cursor"
          onClick={
            suggestions.length > 0
              ? () => this.setState({ suggestions: [] })
              : this.showAllComands
          }
        >
          {suggestions.length > 0 ? "Ocultar" : "Comandos"}
        </button>
        <div class="bg-white fixed w-inherit pin-b cc-box">
          <div>
            <SuggestionList
              clickHandler={this.commandLauch}
              suggestions={suggestions}
            />
          </div>
          <div class="relative">
            <input
              value={text}
              onInput={this.updateText}
              onKeyPress={e => this.handleKeyPress(e)}
              placeholder="Escribe el comando"
              type="text"
              class="p-4 cc-box w-full h-full outline-none"
            />
            <TelegramPlane
              onClick={() => this.senUserdMessage(text)}
              class={`chat__send ${text ? "text-blue cursor-pointer" : ""}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const MessageList = ({ messages, messagesRef }) => (
  <ul class="chat-body" ref={messagesRef}>
    {messages.map(message => (
      <li class={`chat__message ${message.user != 1 ? "user" : ""}`}>
        <span>{message.text}</span>
      </li>
    ))}
  </ul>
);

export const SuggestionList = ({ suggestions, clickHandler }) => (
  <ul class="list-reset px-2 flex z-10 flex-col border-grey-light border-b">
    {suggestions.map(suggestion => (
      <li
        class="px-2 py-2 text-blue-light hover:text-blue cursor-pointer border-grey-light border-b"
        onClick={e => clickHandler(suggestion)}
      >
        {suggestion.name}
      </li>
    ))}
  </ul>
);
