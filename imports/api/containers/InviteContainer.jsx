import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import InvitePage from '/imports/ui/pages/Invite.jsx';
import Rooms from '/imports/api/Collections/rooms.jsx';



export default InviteContainer = createContainer(({params}) => {
  const activeInvites = Rooms.find({invited: {$elemMatch: {userId: Meteor.userId(), status: false, ignored: false}}}).fetch()
  const ignoredInvites = Rooms.find({invited: {$elemMatch: {userId: Meteor.userId(), ignored: true, status: false}}}).fetch()
  const loading = !activeInvites
  return {
    loading: loading,
    activeInvites: activeInvites,
    ignoredInvites: ignoredInvites
  }
}, InvitePage)