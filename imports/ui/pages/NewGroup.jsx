import React from 'react';
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import EmailChip from '/imports/ui/components/EmailChip.jsx';

export default class NewGroupPage extends React.Component{
  constructor(props) {
    super(props);
  }
  
  onChipInsert = () => {
    email = document.getElementById("emailAdd").value
    db = this.props.tempMembers
    Meteor.call('getUserId', email, function(error,result){
      db.insert({email: email, userId: result})
    })
  }
  
  submitNewGroup = () => {
    groupName = document.getElementById("groupName").value
    description = document.getElementById("groupDescription").value
    shortName = document.getElementById("shortName").value
    
    membersData= []
    this.props.tempMembersList.map((member) => {
      var data = {
        email: member.email,
        userId: member.userId,
      }
      membersData.push(data)
    })
    finalData = {name: groupName, description: description, shortName: shortName, members: membersData}
    console.log(finalData)
    db = this.props.groups
    db.insert(finalData)
  }
  
  
  render(){
    const wrapper = {
      display: 'flex',
      flexWrap: 'wrap',
    }
    return(
      <div>
        <h2>Create New Group</h2>
        <TextField hintText="Group Name" id="groupName"/>
        <br/>
        <TextField hintText="Group Username" id="shortName"/>
        <br/>
        <TextField hintText="Group Description" id="groupDescription" multiLine={true} rows={3}/>
        <br/>
        <div>
          <TextField hintText="Email" id="emailAdd"/>
          <RaisedButton label="add" onTouchTap={this.onChipInsert}/>
          <div style={wrapper}>
            {this.props.tempMembersList.map((member, database) =>{
              return <EmailChip key={member._id} data={member} db={this.props.tempMembers}/>
            })}
          </div>
        </div>
        <RaisedButton label="submit" primary={true} onTouchTap={this.submitNewGroup}/>
      </div>
    )
  }
}