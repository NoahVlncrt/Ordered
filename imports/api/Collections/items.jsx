Items = new Mongo.Collection("items");

const Schemas = {}

Schemas.Items = new SimpleSchema({
  "text": {
    type: String,
    label: "Inputted Data"
  },
  "additionalInfo": {
    type: String,
    label: "Additional Info",
    optional: true
  },
  "parentRoom": {
    type: String,
    label: "ID of parent room"
  },
  "completed": {
    type: Boolean,
    label: "Completed",
    autoValue: function(){
      if(this.isInsert){
        return false
      }
    }
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
Items.attachSchema(Schemas.Items);

export default Items