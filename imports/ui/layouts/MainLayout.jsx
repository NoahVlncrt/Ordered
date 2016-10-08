import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from '/imports/ui/components/Navigation.jsx';


export default BlankLayout = ({content}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <Navigation/>
      {content}
    </div>
  </MuiThemeProvider>
)
