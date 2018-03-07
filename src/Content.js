import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ParkingsMap from './ParkingsMap';

const styles = theme => ({
  content: {
    flex: '1 0 auto',
  },
  aaa: {
    backgroudColor: 'black',
    border: '1px solid green',
  },
  bbb: {
    backgroudColor: 'yellow',
    border: '1px solid green',
  },
})

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapWidth: 0,
      mapHeight: 0,
      isSizeDefined: false
    };
  }

  updateMapSize() {
    // const bodyHeight = document.querySelector('body').clientHeight;
    // const headerHeight = document.querySelector('header').clientHeight;
    // const footerHeight = document.querySelector('footer').clientHeight;

    // const mapWidth = window.screen.width;
    // const mapHeight = bodyHeight - headerHeight - footerHeight;

    // this.setState({
    //   mapWidth: mapWidth,   
    //   mapHeight: mapHeight,
    //   isSizeDefined: true
    // });
  }

  componentDidMount() {
    this.updateMapSize();
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={ classes.content }>
        <Grid container spacing={12} alignItems="stretch">
          <Grid className={ classes.bbb } item sm={12}>
            <p>123123</p>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Content);
