/*global google*/
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import propTypes from 'prop-types';

export default class SearchBox extends React.Component {
    render() {
        return <input ref="input" type="text"/>;
    }
    onPlacesChanged = () => {
        console.log('places changed');
        if (this.props.onPlacesChanged) {
            this.props.onPlacesChanged(this.searchBox.getPlaces());
        }
        this.props.action(this.searchBox.getPlaces())
    }
    componentDidMount() {
        var input = ReactDOM.findDOMNode(this.refs.input);
        this.searchBox = new google.maps.places.SearchBox(input);
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
    }
    componentWillUnmount() {
        // https://developers.google.com/maps/documentation/javascript/events#removing
        google.maps.event.clearInstanceListeners(this.searchBox);
    }
}
