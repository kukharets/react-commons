import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.changePlaceHandler = this.changePlaceHandler.bind(this);

        // Set some state
        this.state = {
            center: false
        };
    }

    changePlaceHandler = (coordinates) => {
       console.log(coordinates)
        this.setState({
            center: coordinates.place_id
        })
    };

    render() {
        const placeT = {
            lat: 59.95,
            lng: 30.33
        };
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <SearchBox action={this.changePlaceHandler}/>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCfRf4wZiXGBDydd9Dt-nk_-KasZ-em7aM' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    center={placeT}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
