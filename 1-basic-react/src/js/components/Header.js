import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    // this.props.changeTitle("ChangedNow"); //passed function executes fine, but makes input nonEditable
    // this.props.varBind = "GotChanged"; //CANNOT CHANGE Header's own props values.
    //Note for input value attribute/props
       //CANNOT CHANGE STRING.
        //Must be the value, event is changing or empty.
       //REASON:
        //When a change occurs, example event-changeState, Render executes and is reset to value placed there.
    this.props.varObjEdit.editThis = "GotChanged"; //CAN CHANGE Header's own obj/array props.
    return (
      <div>
        <Title title={this.props.title} />
        <input onChange={this.handleChange.bind(this)} value={this.props.title} /><br/><br/>

        <p>this.props.varObjEdit.editThis: <b>{this.props.varObjEdit.editThis}</b></p>
        <p>this.props.varBind: <b>{this.props.varBind}</b></p>
        <input onChange={this.props.handleThatA} value={this.props.title} />
      </div>
    );
  }
}
