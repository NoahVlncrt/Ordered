import React from 'react';
import { Meteor } from 'meteor/meteor';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import EmailChip from '/imports/ui/components/EmailChip.jsx';

import ContentSend from 'material-ui/svg-icons/content/send';

export default class NewRoomPage extends React.Component{
  constructor(props) {
    super(props);
  }
  
  AddUser = (email) => {
    Meteor.call("getUserId", email, (error, result) => {
      this.props.tempMembers.insert({email: email, userId: result, status: false, ignored: false})
    })
  }
  
  SearchGroupEmails = (name) => {
    const emails = this.props.groups.findOne({shortName: name}).members
    emails.map((member) => {
      this.props.tempMembers.insert({email: member.email, userId: member.userId, status: false, ignored: false})
    })
  }
  
  CheckForType = () => {
    input = document.getElementById("email").value
    console.log(document.getElementById("email"))
    Meteor.call("getUserId", input, (error, result) => {
      if(!error){
        this.AddUser(input)
        document.getElementById("email").value=""
      } else {
        this.SearchGroupEmails(input)
        document.getElementById("email").value=""
      }
    })
    
    
  }
  
  SubmitAllData = () => {
    const invitedData = []
    ownerData = {
      email: Meteor.user().emails[0].address,
      userId: Meteor.userId(),
      status: true
    }
    invitedData.push(ownerData)
    this.props.tempMembersList.map((member) => {
      data = {
        email: member.email,
        userId: member.userId,
        status: false,
        ignored: false
      }
      invitedData.push(data)
    })
    name = document.getElementById("name").value
    this.props.rooms.insert({name: name, invited: invitedData}, (error, result) =>{
      FlowRouter.go("/room/"+result)
    })
  }
  
  render(){
    const bottomSubmit = {
      position: "absolute",
      bottom: "0px",
      width: "100%",
      height: "48px",
      backgroundColor: "#00bcd4"
    }
    const wrapper = {
      display: 'flex',
      flexWrap: 'wrap',
    }
    return(
      <div>
        <div className="form">
          <TextField hintText="Name" id="name"/>
          <br/>
          <TextField hintText="Email or Group" id="email"/>
          <RaisedButton label="add" onTouchTap={this.CheckForType}/>
          <br/>
          <div style={wrapper}>
            {this.props.tempMembersList.map((member) => {
              return <EmailChip key={member._id} data={member} db={this.props.tempMembers}/>
            })}
          </div>
        </div>
        <div style={bottomSubmit}>
          <IconButton style={{float: "right"}} onTouchTap={this.SubmitAllData}>
            <ContentSend color="white"/>
          </IconButton>
        </div>
      </div>
    )
  }
}