import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { orange } from '@mui/material/colors';

ReactDOM.render((
    <MuiThemeProvider>
        <div>
            <center>
            <AppBar title="Games Arena" showMenuIconButton={false} style={{backgroundColor: '#e65100',boxShadow:'#F4AAB9'}} />
            </center>
            <App />
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
