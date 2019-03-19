/* eslint-disable react/prefer-stateless-function */
import { Component } from "preact";
import TelegramPlane from "../img/telegram-plane-brands.svg";
import Dots from "../img/ellipsis-v-solid.svg";
import {commands} from "./../helpers";
import bot from "../json/user/1.json";
import user from "../json/user/2.json";


const welcome_message = {
  text: "Selecciona el comando que quieras saber la explicación.",
  user: 1,
};

export default class App extends Component {
  constructor() {
    super();
    commands().then(commands => this.setState({commands}));
    this.setState({ messages: [welcome_message]}); 
  }

  commandLauch(command){
    this.addMessages(...command.messages);
    this.setState({text: ""});
  }

  addMessages(...new_messages) {
    const messages = new_messages.map(message => {
      console.log(message);
      const { username } = user;
      const text = message.text.replace("{{username}}", username);
      return { ...message, text };
    });
    this.setState({
      messages: this.state.messages.concat(...messages)
    });
  }

  updateText = e => {
    this.setState({ text: e.target.value });
  };

  render({ }, { text, messages, commands }) {
    return (
      <div class="font-sans relative flex flex-col h-screen shadow leading-normal w-full md:w-1/2 mx-auto text-grey-darkest">
        <div class="bg-blue w-inherit fixed pin-t z-10 text-white p-4 flex items-center justify-between">
          <div class="text-white flex items-center">
            <span class="mr-6">&larr;</span>
            <img
              src={`/../${bot.img}`}
              class="rounded-full w-10 h-10 mr-4"
            />
            <div class="flex flex-col justify-between">
              <span>{bot.username}</span>
              <span>bot</span>
            </div>
          </div>
          <Dots class="h-6" />
        </div>
        <div class="chat-body h-full w-full relative mt-20 mb-12">
          <MessageList messages={messages} />
        </div>
        <div class="bg-white fixed w-inherit pin-b">
          <input
            value={text}
            onInput={this.updateText}
            placeholder="Escribe el comando"
            type="text"
            class="p-4 w-full h-full outline-none"
          />
          <TelegramPlane
            class={`w-6 mt-4 absolute pin-r mr-8 ${
              text ? "text-blue cursor-pointer" : ""
            }`}
          />
        </div>
      </div>
    );
  }
}

export const MessageList = ({ messages }) => (
  <ul class="list-reset px-6 flex flex-col">
    {messages.map(message => (
      <Message message={message} />
    ))}
  </ul>
);

export const Message = ({ message }) => (
  <li class={`chat__message ${message.user != 1 ? 'user' : ''}`}>
    {message.text}
  </li>
);

export const SuggestionList = ({ suggestions }) => (
  <ul class="list-reset px-6 flex flex-col">
    {messages.map(message => (
      <Suggestion message={message} />
    ))}
  </ul>
);
