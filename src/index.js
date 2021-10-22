import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		darkBlue: {
			main: '#1e5168',
			contrastText: "#FFF"
		}
	}
});

ReactDOM.render(
	<Provider store={Store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);