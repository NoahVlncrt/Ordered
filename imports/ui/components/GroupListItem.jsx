import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default class GroupListItem extends React.Component{
  render(){
    return(
      <ListItem primaryText={this.props.name} leftCheckbox={<Checkbox onCheck={this.props.function}/>}/>
      
    )
  }
}