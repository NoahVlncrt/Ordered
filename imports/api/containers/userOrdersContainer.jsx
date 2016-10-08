import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Rooms from '/imports/api/Collections/rooms.jsx'
import UserOrdersPage from '/imports/ui/pages/userOrders.jsx';


export default userOrdersContainer = createContainer(({params}) => {
  return {
    rooms: Rooms.find({invited: {$elemMatch: {userId: Meteor.userId(), status: true}}}).fetch()
  }
}, UserOrdersPage)