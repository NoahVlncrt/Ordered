import React from 'react';

import ItemList from '/imports/ui/components/ItemList.jsx';
import FlatButton from 'material-ui/RaisedButton';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export default class IndividualRoomPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  SubmitNewItem = () => {
    text = document.getElementById("listItem").value
    id = FlowRouter.getParam("_id")
    this.props.items.insert({text: text, parentRoom: id})
  }
  EnterInsert = (target) => {
    text = document.getElementById("listItem").value
    id = FlowRouter.getParam("_id")
     if(target.charCode === 13){
      this.props.items.insert({text: text, parentRoom: id})
    }
  }
  
  render(){
    const addBar = {
      position: "absolute",
      bottom: "0px",
      width: "100%",
      height: "50px"
    }
    return(
      <div>
        <h1>{this.props.roomInfo.name}</h1>
        <div>
          <ItemList db={this.props.openItems}/>
        </div>
        
        <Paper id="addBar" style={addBar} zDepth={2}>
          <TextField hintText="Add new Item" id="listItem" onKeyPress={this.EnterInsert}/>
          <RaisedButton label="send" onTouchTap={this.SubmitNewItem}/>
        </Paper>
      </div>
    )
  }
}