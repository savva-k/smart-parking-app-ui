import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';

const styles = theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
});

class App extends Component {

    render() {
        const { classes } = this.props;

        return <MuiThemeProvider>
            <Router>
                <div className={ classes.wrapper }>
                    <Header/>
                    <MainContent/>
                    <Footer/>
                </div>
            </Router>
        </MuiThemeProvider>
    }
}

export default withStyles(styles)(App);