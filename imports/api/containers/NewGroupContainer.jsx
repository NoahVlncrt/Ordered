import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NewGroupPage from '/imports/ui/pages/NewGroup.jsx';
import Groups from '/imports/api/Collections/groups.jsx';

tempMembers = new Mongo.Collection(null)

export default NewGroupContainer = createContainer(({params}) => {
  return {
    tempMembersList: tempMembers.find().fetch(),
    tempMembers: tempMembers,
    groups: Groups
    
  }
}, NewGroupPage)