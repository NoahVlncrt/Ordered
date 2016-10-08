import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class ItemList extends React.Component {
  
  render(){
    return (
      <div>
        {this.props.db.map((item) => {
          return <Card key={item._id}>
                  <CardHeader title={item.text}/>
                  <CardText>
                    "TEST"
                  </CardText>
                 </Card>
        })}
      </div>
    )
  }
}