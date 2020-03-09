import React, { Component } from "react";

class Employ extends Component {
  state = {
    employs: "blank",
    number: 100
  };

  render() {
    return (
      <div>
        <h1>ready to begin</h1>
        <button onClick={this.updatestate}>get emoloys</button>

        <button onClick={this.incre}> am i</button>
        <p id="print"></p>
        <p id="text"></p>
      </div>
    );
  }

  incre = () => {
    this.setState({ number: this.state.number + 10 });
    {
      console.log(this.state.employs);
      document.getElementById("print").innerHTML = this.state.number;
      console.log(this.state.number);
    }
  };

  updatestate = () => {
    console.log("m working");
    var x = new XMLHttpRequest();
    //
    x.open("GET", "https://api.github.com/users", true);
    x.onload = function() {
      if (this.status === 200) {
        var emp = JSON.parse(this.responseText);
        var data = "";
        for (var i in emp) {
          console.log(emp[i].login);
          data +=
            "<ul>" +
            "<li>" +
            emp[i].login +
            "</li>" +
            "<li>" +
            emp[i].type +
            "</li>" +
            "<li>" +
            emp[i].id +
            "</li>" +
            '<img src="' +
            emp[i].avatar_url +
            '" alt="Smiley face" height="42" width="42">' +
            "</ul>";

          document.getElementById("text").innerHTML = data;
        }
      }
    };
    x.send();
  };
}

export default Employ;
