import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      {props.options.length == 0 && <p>Please Add an option to get started</p>}
      <button onClick={props.removeAll} disabled={!props.hasOptions}>
        Remove All
      </button>
      {/* leeeeeeeeeeh 3mlt ll arrow function ()=>() */}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
