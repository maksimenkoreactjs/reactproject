"use strict";

var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      bgColor: "#FF9218"
    };
  },
  handleColorChange: function handleColorChange(color) {
    this.setState({ bgColor: color });
  },
  updateBackgroundColor: function updateBackgroundColor() {
    var body = document.querySelector('body');
    body.style.background = this.state.bgColor;
  },
  componentDidMount: function componentDidMount() {
    this.updateBackgroundColor();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.updateBackgroundColor();
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "colors" },
      React.createElement(
        "h1",
        null,
        "Hello, World!"
      ),
      React.createElement(
        "label",
        null,
        "What color?",
        React.createElement(ColorPicker, { value: this.state.bgColor, onColorChange: this.handleColorChange })
      )
    );
  }
});
var ColorPicker = React.createClass({
  displayName: "ColorPicker",

  propTypes: {
    value: React.PropTypes.string.isRequired,
    onColorChange: React.PropTypes.func
  },
  handleChange: function handleChange(e) {
    e.preventDefault();
    var color = e.target.value;

    if (this.props.onColorChange) this.props.onColorChange(color);
  },
  render: function render() {
    return React.createElement(
      "select",
      { value: this.props.value, onChange: this.handleChange },
      React.createElement(
        "option",
        { value: "orange" },
        "orange"
      ),
      React.createElement(
        "option",
        { value: "blue" },
        "blue"
      ),
      React.createElement(
        "option",
        { value: "black" },
        "black"
      ),
      React.createElement(
        "option",
        { value: "purple" },
        "purple"
      ),
      React.createElement(
        "option",
        { value: "red" },
        "red"
      )
    );
  }
});

React.render(React.createElement(App, null), document.querySelector('#main'));