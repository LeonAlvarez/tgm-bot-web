/* eslint-disable react/prefer-stateless-function */
import { Component } from "preact";
import TelegramPlane from "../img/telegram-plane-brands.svg";
import Dots from "../img/ellipsis-v-solid.svg";
import { commands } from "./../helpers";
import bot from "../json/user/1.json";
import user from "../json/user/2.json";

const welcome_message = {
  text: "Selecciona el comando que quieras saber la explicación.",
  user: 1
};

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

  addMessages(...new_messages) {
    const messages = new_messages.map(message => {
      const { username } = user;
      const text = message.text.replace("{{username}}", username);
      return { ...message, text };
    });

    this.setState({
      messages: this.state.messages.concat(...messages)
    });
    this.setState({ text: "" });
    this.setState({ suggestions: [] });
  }

  senUserdMessage = (text) => {
    this.addMessages({ user: 2, text });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.senUserdMessage(this.state.text);
    }
  }

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
        <div class="chat-body h-full flex w-full relative mt-16 mb-12">
          <MessageList messages={messages} />
        </div>
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
              onKeyPress={(e) => this.handleKeyPress(e)}
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

export const MessageList = ({ messages }) => (
  <ul class="list-reset px-6 flex flex-col w-100">
    {messages.map(message => (
      <li class={`chat__message ${message.user != 1 ? "user" : ""}`}>
        {message.text}
      </li>
    ))}
  </ul>
);

export const SuggestionList = ({ suggestions, clickHandler }) => (
  <ul
    class="list-reset px-2 flex flex-col border-grey-light border-b"
  >
    {suggestions.map(suggestion => (
      <li class="px-2 py-2 text-blue cursor-pointer border-grey-light border-b"
        onClick={(e) => clickHandler(suggestion)}>
        {suggestion.name}
      </li>
    ))}
  </ul>
);
