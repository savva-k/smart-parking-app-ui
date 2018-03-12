import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import CarIcon from 'material-ui-icons/DirectionsCar';

const styles = theme => ({
    header: {
        flexShrink: 0,
    },
    toolbar: {
        justifyContent: "center",
    },
    carIcon: {
        marginRight: "5px",
    },
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return <header className={ classes.header }>
            <AppBar position="static" color="default">
                <Toolbar className={ classes.toolbar }>
                    <CarIcon className={ classes.carIcon } />
                    <Typography variant="title" color="inherit">
                        Smart Parking
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>;
    }
}

export default withStyles(styles)(Header);
