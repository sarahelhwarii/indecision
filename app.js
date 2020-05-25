console.log("is working now");
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.removeAll = this.removeAll.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleDeleteOption = this.handleDeleteOption.bind(this);
//     this.state = {
//       options: [],
//     };
//   }
//   componentDidMount() {
//     try {
//       const json = localStorage.getItem("options");
//       const options = JSON.parse(json);
//       if (options) {
//         this.setState(() => ({ options }));
//       }
//     } catch (e) {}
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options);
//       localStorage.setItem("options", json);
//     }
//   }
//   handlePick() {
//     const length = this.state.options.length;
//     const rand = Math.floor(Math.random() * length);
//     const randOption = this.state.options[rand];
//     alert(randOption);
//   }
//   handleDeleteOption(optionToBeRemoved) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => {
//         return optionToBeRemoved !== option;
//       }),
//     }));
//   }
//   removeAll() {
//     this.setState(() => {
//       return {
//         options: [],
//       };
//     });
//   }
//   handleAddOption(option) {
//     if (!option) {
//       return "Please enter a valid option";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists";
//     }
//     this.setState((prevState) => ({
//       options: prevState.options.concat(option),
//     }));
//   }
//   render() {
//     const subtitle = "put your life in a computer's hands";
//     return (
//       <div>
//         <Header subtitle={subtitle} />
//         <Action
//           handlePick={this.handlePick}
//           hasOptions={this.state.options.length > 0}
//         />
//         <Options
//           removeAll={this.removeAll}
//           options={this.state.options}
//           handleDeleteOption={this.handleDeleteOption}
//           hasOptions={this.state.options.length > 0}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.subtitle && <h2>{props.subtitle}</h2>}
//     </div>
//   );
// };
// Header.defaultProps = {
//   title: "Indecision App version 2.0.0",
// };

// const Action = (props) => {
//   return (
//     <div>
//       <button onClick={props.handlePick} disabled={!props.hasOptions}>
//         What shall I do?
//       </button>
//     </div>
//   );
// };

// const Options = (props) => {
//   return (
//     <div>
//       {props.options.length == 0 && <p>Please Add an option to get started</p>}
//       <button onClick={props.removeAll} disabled={!props.hasOptions}>
//         Remove All
//       </button>
//       {/* leeeeeeeeeeh 3mlt ll arrow function ()=>() */}
//       {props.options.map((option) => (
//         <Option
//           key={option}
//           optionText={option}
//           handleDeleteOption={props.handleDeleteOption}
//         />
//       ))}
//     </div>
//   );
// };
// const Option = (props) => {
//   return (
//     <div>
//       {props.optionText}
//       <button
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         remove
//       </button>
//     </div>
//   );
// };
// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.AddOptionHandler = this.AddOptionHandler.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }
//   AddOptionHandler(e) {
//     const newOption = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(newOption);
//     this.setState(() => {
//       return {
//         error,
//       };
//     });
//     if (!error) {
//       e.target.elements.option.value = "";
//     }
//     setTimeout(() => {
//       this.setState(() => {
//         return { error: undefined };
//       });
//     }, 1500);
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.AddOptionHandler}>
//           <input
//             type="text"
//             name="option"
//             placeholder="add your option here"
//           ></input>
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
