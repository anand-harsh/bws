import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  clickMe() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
    //console.log("I was clicked: ", this.props.name)
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.clickMe()}>
          Hello this is {this.props.name}, my age is {this.props.age}
        </h1>
        <span>{this.state.clicks} is the number of clicks</span>
      </div>
    );
  }
}

export default Item;
