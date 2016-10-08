Rooms = new Mongo.Collection("rooms");

const Schemas = {}

Schemas.Rooms = new SimpleSchema({
  "name": {
    type: String,
    label: "Room Name"
  },
  "members": {
    type: [String],
    label: "Who's there",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  },
  "listItems": {
    type: [Object],
    label: "all the todos",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  },
  "listItems.$.text": {
    type: String,
    label: "What needs to be done",
    optional: true
  },
  "listItems.$.checked": {
    type: Boolean,
    label: "checked or not",
    autoValue: function(){
      if(this.isUpdate){
        return false
      }
    },
    optional: true
  },
  "listItems.$.owner": {
    type: String,
    label: "who added this",
    autoValue: function(){
      if(this.isUpdate){
        return this.userId
      }
    }
  },
  "invited":{
    type: [Object],
    label: "All the invited members"
  },
  "invited.$.email":{
    type: String,
    label: "invitee email",
  },
  "invited.$.status":{
    type: Boolean,
    label: "joined yet?",
  },
  "invited.$.ignored":{
    type: Boolean,
    label: "ignored yet?",
    optional: true
  },
  "invited.$.userId":{
    type: String,
    label: "id of the userjoined in"
  },
  "createdby.userId": {
    type: String,
    label: "_id",
    autoValue: function(){
      if(this.isInsert){
        return this.userId
      }
    }
  },
  "createdby.email":{
    type: String,
    label: "email",
    autoValue: function(){
      if(this.isInsert){
        return Meteor.users.findOne({_id: this.userId}).emails[0].address
      }
    }
  },
  "createdAt": {
    type: Date,
    label: "Created At",
    autoValue: function(){
      if(this.isInsert){
        return new Date
      }
    }
  }
})

Rooms.attachSchema(Schemas.Rooms);

export default Rooms