import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ParkingsMap from './ParkingsMap';
import Menu from './Menu';
import './App.css';

class App extends Component {
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
    console.log(this.state.mapWidth + 'x' + this.state.mapHeight);
    return (
      <div className="App">
        <div className="wrapper">
          <header className="App-header">
            <h1 className="App-title">
              <FontAwesome name="car" className="App-title-icon" />
              Parking App
            </h1>
          </header>
          <div className="main-content" id="mainContent">
            { this.state.isSizeDefined &&
              <ParkingsMap width={this.state.mapWidth} height={this.state.mapHeight}/>
            }
          </div>
        </div>
        <footer>
          <Menu/>
        </footer>
      </div>
    );
  }
}

export default App;
