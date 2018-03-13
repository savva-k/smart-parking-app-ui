import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import MapPage from './MapPage';
import FavoritesPage from './FavoritesPage';
import ProfilePage from './ProfilePage';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    content: {
        flex: '1 0 auto',
    },
});

class MainContent extends Component {

    render() {
        const { classes } = this.props;

        return <main className={ classes.content }>
            <Grid container spacing={8} alignItems="stretch">
                <Grid item sm={8}>
                    <Route path="/" exact component={ MapPage }/>
                    <Route path="/map" component={ MapPage }/>
                    <Route path="/favorites" component={ FavoritesPage }/>
                    <Route path="/profile" component={ ProfilePage }/>
                </Grid>
            </Grid>
        </main>;
    }
}

export default withStyles(styles)(MainContent);