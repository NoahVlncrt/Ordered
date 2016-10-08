import React from 'react';
import Chip from 'material-ui/Chip';

export default class EmailChip extends React.Component {
  onChipRemove = () => {
    this.props.db.remove({_id: this.props.data._id})
  }
  render(){
    return (
     <Chip onRequestDelete={this.onChipRemove}>{this.props.data.email}</Chip>
    )
  }
}