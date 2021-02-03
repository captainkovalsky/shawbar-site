import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        /** @ts-ignore */
        google={this.props.google}
        style={mapStyles}
        /** @ts-ignore */
        zoom={12}
        initialCenter={{
          lat: 50.44494579226836,
          lng: 30.492384025297348,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  /** @ts-ignore */
})(MapContainer);
