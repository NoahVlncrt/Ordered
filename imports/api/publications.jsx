import { Meteor } from 'meteor/meteor';

export default Meteor.publish('invites', function() {
  return Rooms.find({invited: {$elemMatch: {userId: this.userId, status: false}}})
})