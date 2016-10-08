import { Meteor } from 'meteor/meteor';
import tempMembers from '/imports/api/containers/NewRoomContainer.jsx';

export default Meteor.methods({
  getUserId: function(email){
    return Meteor.users.findOne({"emails.address": email})._id
  },
  changeInviteStatus: function(id){
    Rooms.update({_id: id, invited: {$elemMatch:{userId: Meteor.userId()}}},{$set:{"invited.$.status": true, "invited.$.ignored": false}})
  },
  addToIgnoreList: function(id){
    Rooms.update({_id: id, invited: {$elemMatch:{userId: Meteor.userId()}}},{$set:{"invited.$.ignored": true, "invited.$.status": false }})
  }
})