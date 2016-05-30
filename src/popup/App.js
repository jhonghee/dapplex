import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PopupComponent from './PopupComponent';

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
	<PopupComponent />
	</MuiThemeProvider>
);

ReactDOM.render(
	<App />,
	document.querySelector('#app')
);