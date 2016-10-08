import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class LoginPage extends React.Component{
  
  _LoginUser(){
    email = document.getElementById('LoginEmail').value
    password = document.getElementById('LoginPassword').value
    Meteor.loginWithPassword(email,password)
    FlowRouter.go('/')
  }
  
  render(){
    const styles = {
      padding: 10,
      width: "300px",
      height: "40%",
      position: "absolute",
      margin: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "3px"
    }
    
    const styles2 = {
      textAlign: "center"
    }
    return(
      <Card style={styles}>
        <div style={styles2}>
          <h3>Login</h3>
          <div>
            <TextField id="LoginEmail" hintText="Email"/>
          </div>
          <div>
            <TextField id="LoginPassword" hintText="Password" type="password"/>
          </div>
          <RaisedButton label="Login" primary={true} type="submit" onMouseUp={this._LoginUser}/>
        </div>
      </Card>
    )
  }
}