import React from 'react';

import Rooms from '/imports/api/Collections/rooms.jsx';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class RoomCard extends React.Component {
  openRoom = () => {
    FlowRouter.go("/room/"+this.props.room._id)
  }
  declineInvite = () => {
    Meteor.call("addToIgnoreList",this.props.room._id)
  }
  acceptInvite = () => {
    Meteor.call("changeInviteStatus",this.props.room._id)
  }
  cardActions = () => {
    if(this.props.invite === true){
      return (
        <div>
          <FlatButton label="Accept" onTouchTap={this.acceptInvite}/>
          <FlatButton label="Decline" onTouchTap={this.declineInvite}/>
        </div>
      )
    } else {
      return (
        <FlatButton label="Leave"/>
      )
    }
  }
  
  render(){
    return(
      <Card>
        <CardHeader onTouchTap={this.openRoom} title={this.props.room.name} subtitle={this.props.room.createdby.email}/>
        <CardActions>
          {this.cardActions()}
        </CardActions>
      </Card>
    )
  }
}