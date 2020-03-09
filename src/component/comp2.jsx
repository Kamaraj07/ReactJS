import React, { Component } from "react";
import ReactDOM from "react-dom";

class Class extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>its from second div </p>
        <button onClick={this.show}>table</button>
      </React.Fragment>
    );
  }

  show = () => {
    const myelement = (
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </table>
    );
    ReactDOM.render(myelement, document.getElementById("table"));
  };

  addstr = () => {
    console.log(this.props.value);
  };
}

export default Class;
