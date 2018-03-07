import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

const app = <MuiThemeProvider>
        <Content />
        <Footer/>
    </MuiThemeProvider>;
    
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
