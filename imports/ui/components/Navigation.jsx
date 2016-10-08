import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

export default class Navigation extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      loggedIn: false
    }
  }
  
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false})
  checkUser = () => {
    if(Meteor.user() === null){
      return "login/signup"
    } else {
      return "Sign Out"
      this.setState({
        loggedIn: true
      })
    }
  }
  sideBarActions = () => {
    if(this.state.loggedIn === true){
      return Accounts.logout()
    } else {
      return FlowRouter.go('/login')
    }
  }
  pageTitle = () => {
    return FlowRouter.getRouteName()
  }
  checkForTabs = () => {
    if(FlowRouter.getRouteName() === "Invites"){
      return <AppBar
          title={this.pageTitle()}
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{boxShadow: "none"}}/>
    } else {
      return <AppBar
          title={this.pageTitle()}
          onLeftIconButtonTouchTap={this.handleToggle}/>
    }
  }
  openLink = function(label){
    FlowRouter.go(label)
  }
  
  
  render(){
    return (
      <div>
        {this.checkForTabs()}
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem>Profile</MenuItem>
          <MenuItem onTouchTap={this.handleClose,this.sideBarActions}>{this.checkUser()}</MenuItem>
          <Divider/>
          <MenuItem>Rooms</MenuItem>
          <MenuItem>Invites</MenuItem>
          <MenuItem>Groups</MenuItem>
          <Divider/>
          <MenuItem>Help</MenuItem>
          <MenuItem>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}