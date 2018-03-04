import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Menu extends Component {
    render() {
        return <div className="menu">
            <div className="button button__active">
                <FontAwesome name="map"/>
            </div>
            <div className="button button__inactive">
                <FontAwesome name="star"/>
            </div>
            <div className="button button__inactive">
                <FontAwesome name="user"/>
            </div>
        </div>;
    }
}

export default Menu;
