import React from 'react'
/*
    Map Class to interface with the HERE maps API
    Current Functionality of class:
        -Display a Map Centered on 1 location
        -Display Real-Time Traffic on the map
        -Zoom
        -Layer Manipulation
*/
class MapContainer extends React.Component {

    constructor(props) {
      super(props);
      this.platform = null; //Object that also authenticates with the API
      this.layers = null; //Layers on top of the map
      this.map = null; //The map itself
      this.center = { lat: 51.5, lng: -0.1}; //Location for map to center on 
    }
  
    componentDidMount() { //Once component has been created
      // Initialize the platform object
      this.platform = new window.H.service.Platform({
        'app_id': 'YOUR_APP_ID_HERE', 
        'app_code': 'YOUR_APP_CODE_HERE'
      });
      this.layers = this.platform.createDefaultLayers(); 
      var container = document.getElementById('here-map');
      this.map = new window.H.Map( //Create the map
        container,
        this.layers.normal.traffic, //Traffic layer
        { //Additional Properties
          zoom: 10,
          center: this.center,
      });

      var ui = new window.H.ui.UI.createDefault(this.map, this.layers); //Add UI to the map
      var events = new window.H.mapevents.MapEvents(this.map); //Event Manager for the Map
      var behavior = new window.H.mapevents.Behavior(events);  //Pan + Zoom for the map

  }
  
  
  render() {  
    return (<div id='here-map' className="map"></div>);
    }
  
}

export default MapContainer;