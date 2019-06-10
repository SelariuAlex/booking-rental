import React, { Component } from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MapComponent = props => {
  const coordinates = props.coordinates;
  return (
    <GoogleMap defaultZoom={8} defaultCenter={coordinates} center={coordinates}>
      <Marker position={coordinates} />
    </GoogleMap>
  );
};

function withGeocode(WrappedComponent) {
  return class extends Component {
    state = {
      coordinates: {
        lat: 0,
        lng: 0
      }
    };

    componentWillMount() {
      this.geocodeLocation();
    }

    geocodeLocation = () => {
      const location = this.props.location;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (result, status) => {
        if (status === 'OK') {
          const geometry = result[0].geometry.location;
          const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
          this.setState({ coordinates: coordinates });
        }
      });
    };

    render() {
      return <WrappedComponent {...this.state} />;
    }
  };
}

export const MapWithGeocode = withScriptjs(
  withGoogleMap(withGeocode(MapComponent))
);
