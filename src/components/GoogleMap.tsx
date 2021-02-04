import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import GoogleIcon from "./../assets/icon.png";

const shawBar = {
  lat: 50.4449,
  lng: 30.4923,
};
export class MapContainer extends Component<any, any> {
  static defaultProps = {
    center: shawBar,
    zoom: 18,
  };
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            disableDefaultUI: true,
            draggable: false,
            fullscreenControl: false,
          }}
          onGoogleApiLoaded={({ map, maps }) => {
            new maps.Marker({
              position: shawBar,
              map,
              icon: GoogleIcon,
            });
          }}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
