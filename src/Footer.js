import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import AccountCircle from 'material-ui-icons/AccountCircle';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
    footer: {
        flexShrink: 0,
    },
});

class Footer extends Component {
    state = {
        routeValue: 'map',
        redirect: false,
    };

    handleMenuClick = (event, value) => {
        this.setState({
            routeValue: value,
            redirect: true,
        });
    }

    render() {
        const { classes } = this.props;
        const value = this.state.routeValue;
    
        if (this.state.redirect) {
            this.setState({
                routeValue: value,
                redirect: false,
            });
            return <Redirect push to={ `/${value}` } />
        }

        return <footer className={ classes.footer }>
            <BottomNavigation value={value} onChange={ this.handleMenuClick }>
                <BottomNavigationAction label="Map" value="map" showLabel={ true } icon={<LocationOnIcon/>} />
                <BottomNavigationAction label="Favorites" value="favorites" showLabel={ true } icon={<FavoriteIcon/>} />
                <BottomNavigationAction label="Profile" value="profile" showLabel={ true } icon={<AccountCircle/>} />
            </BottomNavigation>
        </footer>;
    }
}

export default withStyles(styles)(Footer);
