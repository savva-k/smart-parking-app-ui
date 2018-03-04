import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
 
const mapState = { center: [54.604603, 39.723595], zoom: 15 };

class ParkingsMap extends Component {
    render() {
        const width = this.props.width;
        const height = this.props.height;

        return (
            <YMaps>
                <Map state={mapState} width={width} height={height}>
            
                <Placemark
                    geometry={{
                        coordinates: [54.604634, 39.723576]
                    }}
                    properties={{
                        hintContent: 'Собственный значок метки',
                        balloonContent: 'Это красивая метка'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: 'images/placemark.png',
                        iconImageSize: [35, 29],
                        iconImageOffset: [-3, -42]
                    }}
                />
            
                </Map>
            </YMaps>
        );
    }
}

export default ParkingsMap;