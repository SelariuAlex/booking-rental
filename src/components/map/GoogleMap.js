import React, { Component } from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MapComponent = props => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 45.749, lng: 21.227 }}>
      <Marker position={{ lat: 45.749, lng: 21.227 }} />
    </GoogleMap>
  );
};

function withGeocode(WrappedComponent) {
  return class extends Component {
    render() {
      return <WrappedComponent />;
    }
  };
}

export const MapWithGeocode = withScriptjs(
  withGoogleMap(withGeocode(MapComponent))
);
