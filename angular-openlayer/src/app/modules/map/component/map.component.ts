import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()

        })
      ],
      view: new View({
        center: [-11.8633681,-50.2069378],
        zoom: 8
      })
    });
  }
}
