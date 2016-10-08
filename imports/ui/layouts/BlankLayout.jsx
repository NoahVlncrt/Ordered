import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default MainLayout = ({content}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      {content}
    </div>
  </MuiThemeProvider>
)
