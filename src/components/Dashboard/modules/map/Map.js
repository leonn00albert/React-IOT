import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export class Map extends Component {
  render() {
    return (
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420.84277114870525!2d44.7477243452987!3d41.72381102202787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044731a27fd33b3%3A0xef6edc2d0fa9dd0b!2s24%20Ana%20Antonovskaia%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1620063767586!5m2!1sen!2sge" width="400" height="300"  allowfullscreen="" loading="lazy"></iframe>
    )
  }
}