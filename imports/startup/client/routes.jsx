import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';
import LoginMessage from '/imports/ui/components/LoginMessage.jsx';

import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import BlankLayout from '/imports/ui/layouts/BlankLayout.jsx';

import NewGroupContainer from '/imports/api/containers/NewGroupContainer.jsx';
import UserOrdersContainer from '/imports/api/containers/userOrdersContainer.jsx';
import NewRoomContainer from '/imports/api/containers/NewRoomContainer.jsx'
import InviteContainer from '/imports/api/containers/InviteContainer.jsx';
import IndividualRoomContainer from '/imports/api/containers/IndividualRoomContainer.jsx';
import SignUpPage from '/imports/ui/pages/SignUp.jsx';
import LoginPage from '/imports/ui/pages/login.jsx';

FlowRouter.route('/',{
  name: "Rooms",
  action: function(){
    mount(MainLayout, {content: <UserOrdersContainer/>})
  }
})
FlowRouter.route('/create/room',{
  name: "Create Room",
  action: function(){
    mount(MainLayout, {content: <NewRoomContainer/>})
  }
})
FlowRouter.route('/create/group',{
  name: "Create Group",
  action: function(){
    mount(MainLayout, {content: <NewGroupContainer/>})
  }
})

FlowRouter.route('/room/:_id',{
  name: "Room",
  action: function(){
    mount(MainLayout, {content: <IndividualRoomContainer/>})
  }
})
FlowRouter.route('/invites', {
  name: "Invites",
  action: function(){
    mount(MainLayout, {content: <InviteContainer/>})
  }
})
FlowRouter.route('/profile', {
  name: "Profile",
  action: function(){
    mount(Mainlayout)
  }
})
FlowRouter.route('/signup',{
  action: function(){
    mount(BlankLayout, {content: <SignUpPage/>})
  }
})
FlowRouter.route('/login',{
  action: function(){
    mount(BlankLayout, {content: <LoginPage/>})
  }
})
