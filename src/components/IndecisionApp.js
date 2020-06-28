import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  handlePick() {
    const length = this.state.options.length;
    const rand = Math.floor(Math.random() * length);
    const randOption = this.state.options[rand];
    alert(randOption);
  }
  handleDeleteOption(optionToBeRemoved) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToBeRemoved !== option;
      }),
    }));
  }
  removeAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handleAddOption(option) {
    if (!option) {
      return "Please enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }
  render() {
    const subtitle = "put your life in a computer's hands";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          removeAll={this.removeAll}
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          hasOptions={this.state.options.length > 0}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
