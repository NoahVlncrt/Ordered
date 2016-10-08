import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NewRoomPage from '/imports/ui/pages/NewRoom.jsx';
import Rooms from '/imports/api/Collections/rooms.jsx';
import Groups from '/imports/api/Collections/groups.jsx';

tempMembers = new Mongo.Collection(null)

export default NewRoomContainer = createContainer(({params}) => {
  return {
    tempMembersList: tempMembers.find().fetch(),
    tempMembers: tempMembers,
    rooms: Rooms,
    groupsList: Groups.find({createdBy: Meteor.userId()}).fetch(),
    groups: Groups
    
  }
}, NewRoomPage)
