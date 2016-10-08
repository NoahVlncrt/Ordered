import React from 'react';
import RoomCard from '/imports/ui/components/RoomCard.jsx';

import { Tabs, Tab} from 'material-ui/Tabs';

export default class InvitePage extends React.Component {
  constructor(props) {
    super(props);
  }
  RenderInvites = () => {
    if(this.props.loading === true){
      return <h4>Give us a second. Where loading!</h4>
    } else {
      return <div className="cards">
              {this.props.activeInvites.map((room) => {
                return <RoomCard key={room._id} invite={true} room={room}/>
              })}
             </div>
    }
  }
  RenderJoined = () => {
    if(this.props.loading === true){
      return <h4>Give us a second. Where loading!</h4>
    } else {
      return <div className="cards">
              {this.props.ignoredInvites.map((room) => {
                return <RoomCard key={room._id} invite={true} room={room}/>
              })}
             </div>
    }
  }
  
  render(){
    return (
      <div>
        <Tabs>
          <Tab label="Pending">
            {this.RenderInvites()}
          </Tab>
          <Tab label="Ignored">
            {this.RenderJoined()}
          </Tab>
        </Tabs>
        
      </div>
    )
  }
}