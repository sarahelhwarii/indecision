import React from "react";
export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.AddOptionHandler = this.AddOptionHandler.bind(this);
    this.state = {
      error: undefined,
    };
  }
  AddOptionHandler(e) {
    const newOption = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(newOption);
    this.setState(() => {
      return {
        error,
      };
    });
    if (!error) {
      e.target.elements.option.value = "";
    }
    setTimeout(() => {
      this.setState(() => {
        return { error: undefined };
      });
    }, 1500);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.AddOptionHandler}>
          <input
            type="text"
            name="option"
            placeholder="add your option here"
          ></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
