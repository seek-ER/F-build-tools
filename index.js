import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

let mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="World" />, mountNode);