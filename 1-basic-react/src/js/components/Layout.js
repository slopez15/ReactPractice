import React from "react";

import Footer from "./Footer";
import Header from "./Header";

/*Edits added
I want to test events (in class and through binded function props),
see if bind is needed for functions that have already been binded before passing via props,
I want to run function props,
Cause I can call a certain component's function and run it in context of which component it belongs to,
  Can I alter a component's variable by binding and passing via props and thus editing in context of the components IT belongs to? -NO YOU CANNOT



*/

export default class Layout extends React.Component {
  //methods
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      varBind: "ChangeMe-handleThatA",
      varObjEdit: {
        editThis: "AmIDirectlyPropChangeable",
      }
    };
  }//constructor

  changeTitle(title) {
    this.setState({title});
  }//changeTitle(title)

	handleThisA(e){
	  const title = e.target.value;
		this.changeTitle(title);
	} //MY-WAY; to be JS event handled here
	handleThatA(e){
		const title = e.target.value;
		this.changeTitle(title);
	} //MY-WAY; to be JS event handled in another component

  //React Component method
  render() {
    return (
      <div>
        <h1>Layout</h1>
        <p>{this.state.title}</p>
        <input onChange={this.handleThisA.bind(this)} value={"default-HandleThisA"} />
        <Header changeTitle={this.changeTitle.bind(this)} varObjEdit={this.state.varObjEdit} varBind={this.state.varBind} title={this.state.title} handleThatA={this.handleThatA.bind(this)} />
        <Footer />
      </div>
    );
  }//render

}//Layout
