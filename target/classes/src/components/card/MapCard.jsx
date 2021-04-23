import React from 'react';
import {
  StaticGoogleMap,
  Marker,
  Direction
} from 'react-static-google-map';
import GoogleApiWrapper from "./test"
class MapCard extends React.Component {

  render() {
      console.log(this.props.resAddress)
      console.log(this.props.cusAddress)

    return this.props.resAddress && this.props.cusAddress ? (
      // <StaticGoogleMap size="350x350" apiKey="AIzaSyBbm3n9WGdulBin6G5j9iJnH1SVeNMMPSU">
      //   <Marker location={this.props.resAddress} color="green" label="S" />
      //   <Marker location={this.props.cusAddress} color="red" label="E" />
      //   <Direction weight="5"
      //     origin={this.props.resAddress}
      //     destination={this.props.cusAddress}
      //   />
      // </StaticGoogleMap>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=20
        &markers=color:blue%7Clabel:S%7C${this.props.resAddress[0]},${this.props.resAddress[1]}
        &key=AIzaSyBbm3n9WGdulBin6G5j9iJnH1SVeNMMPSU`} alt="Logo" />
    ) : null;

    }
  //     return (
  //         // <GoogleApiWrapper size="350x350"/>
//&markers=color:blue%7Clabel:S%7C${this.props.resAddress[0]},${this.props.resAddress[1]}
  //
  //

}

export default MapCard;