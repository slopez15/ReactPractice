import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  //methods
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }//constructor

  changeTitle(title) {
    this.setState({title});
  }//changeTitle(title)

  //React Component method
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }//render

}//Layout
