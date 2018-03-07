import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    header: {
        flexShrink: 0,
        border: '1px solid red',
    },
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return <header className={ classes.header }>
            Ororo!
        </header>;
    }
}

export default withStyles(styles)(Header);
