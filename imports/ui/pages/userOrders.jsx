import React from 'react';
import { Meteor } from 'meteor/meteor'

import Rooms  from '/imports/api/Collections/rooms.jsx';
import Tracker from 'tracker-component';

import RoomCard from '/imports/ui/components/RoomCard.jsx';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class UserOrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      open: false,
      
    })
  }
  render(){
    const buttonStyles = {
      position: "fixed",
      bottom: "45px",
      right: "24px"
    }
    const textfieldstyles = {
      width: "100%"
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose,this.createNewRoom}
      />,
    ]
    return(
      <div>
        <FloatingActionButton style={buttonStyles}>
          <ContentAdd/>
        </FloatingActionButton>
        <div className="roomcards">
          {this.props.rooms.map((room)=>{
            return <RoomCard key={room._id} room={room} />
          })}
        </div>
      </div>
    )
  }
}