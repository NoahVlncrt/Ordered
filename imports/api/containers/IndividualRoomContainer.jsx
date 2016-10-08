import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

import IndividualRoomPage from '/imports/ui/pages/IndividualRoom.jsx';
import Rooms from '/imports/api/Collections/rooms.jsx';
import Items from '/imports/api/Collections/items.jsx';

export default IndividualRoomContainer = createContainer(({params}) => {
  
  const roomInfo = Rooms.findOne({_id: FlowRouter.getParam("_id")})
  const openItems = Items.find({parentRoom: FlowRouter.getParam("_id")}).fetch()
  const closedItems = Items.find({parentRoom: FlowRouter.getParam("_id"), completed: true}).fetch()
  
  return {
    roomInfo: roomInfo,
    room: Rooms,
    items: Items,
    openItems: openItems,
    closedItems: closedItems
  }
}, IndividualRoomPage)