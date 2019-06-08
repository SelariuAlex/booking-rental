import React, { Component } from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

export const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 45.749, lng: 21.227 }}>
      <Marker position={{ lat: 45.749, lng: 21.227 }} />
    </GoogleMap>
  ))
);
