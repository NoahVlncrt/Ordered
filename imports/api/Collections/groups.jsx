Groups = new Mongo.Collection("groups");

const Schemas = {}

Schemas.Groups = new SimpleSchema({
  "name": {
    type: String,
    label: "Name"
  },
  "description": {
    type: String,
    label: "Description"
  },
  "shortName": {
    type: String,
    label: "Short Name"
  },
  "members": {
    type: [Object],
    label: "members objects"
  },
  "members.$.email": {
    type: String,
    label: "Member Email"
  },
  "members.$.userId": {
    type: String,
    label: "User ID"
  },
  "createdBy": {
    type: String,
    label: "Created By",
    autoValue: function(){
      if(this.isInsert){
        return this.userId
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

Groups.attachSchema(Schemas.Groups);

export default Groups