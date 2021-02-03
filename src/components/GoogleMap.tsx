import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export class MapContainer extends Component<any> {
  static defaultProps = {
    center: {
      lat: 50.44494579226836,
      lng: 30.492384025297348,
    },
    zoom: 16,
  };
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
