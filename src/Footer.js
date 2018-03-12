import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import AccountCircle from 'material-ui-icons/AccountCircle';

const styles = theme => ({
    footer: {
        flexShrink: 0,
    },
});

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return <footer className={ classes.footer }>
            <BottomNavigation>
                <BottomNavigationAction label="Map" showLabel={ true } icon={<LocationOnIcon/>} />
                <BottomNavigationAction label="Favorites" showLabel={ true } icon={<FavoriteIcon/>} />
                <BottomNavigationAction label="Profile" showLabel={ true } icon={<AccountCircle/>} />
            </BottomNavigation>
        </footer>;
    }
}

export default withStyles(styles)(Footer);
