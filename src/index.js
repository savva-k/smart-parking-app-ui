import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import './index.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const app = <MuiThemeProvider>
        <Router>
            <div>
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        </Router>
    </MuiThemeProvider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
