import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';

export default class SignUpPage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      SnackbarMessage: "suprise ;)"
    };
  }
  
  _RegisterUser = () => {
    email = document.getElementById('RegisterEmail').value
    password = document.getElementById('RegisterPassword').value
    password2 = document.getElementById('RegisterPassword2').value
    const userData = {
      email: email,
      password: password
    }
    if(password === password2){
      Accounts.createUser(userData)
      FlowRouter.go('/')
    } else {
      this.setState({
        open: true,
        SnackbarMessage: "Your passwords don't match. Try again :)"
      })
    }
  }
  
  _CloseSnackbar = () => {
    this.setState({
      open: false
    });
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
          <h3>Sign Up</h3>
          <div>
            <TextField id="RegisterEmail" hintText="Email"/>
          </div>
          <div>
            <TextField id="RegisterPassword" hintText="Password" type="password"/>
          </div>
          <div>
            <TextField id="RegisterPassword2" hintText="Password Confirmation" type="password"/>
          </div>
          <RaisedButton label="Submit" primary={true} type="submit" onMouseUp={this._RegisterUser}/>
        </div>
        <Snackbar open={this.state.open} message={this.state.SnackbarMessage} autoHideDuration={4000} onRequestClose={this._CloseSnackbar}/>
      </Card>
    )
  }
}