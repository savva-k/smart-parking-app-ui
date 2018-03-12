import React, { Component } from 'react';
import ParkingsMap from './ParkingsMap';

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapWidth: 0,
      mapHeight: 0,
      isSizeDefined: false
    };
  }

  updateMapSize() {
    const bodyHeight = document.querySelector('body').clientHeight;
    const headerHeight = document.querySelector('header').clientHeight;
    const footerHeight = document.querySelector('footer').clientHeight;

    const mapWidth = window.screen.width;
    const mapHeight = bodyHeight - headerHeight - footerHeight;

    this.setState({
      mapWidth: mapWidth,   
      mapHeight: mapHeight,
      isSizeDefined: true
    });
  }

  componentDidMount() {
    this.updateMapSize();
  }

  render() {
    return (
      <div>
        { this.state.isSizeDefined &&
          <ParkingsMap width={ this.state.mapWidth } height={ this.state.mapHeight } />
        }
      </div>
    );
  }
}

export default MapPage;
