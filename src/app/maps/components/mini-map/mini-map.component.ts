import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.scss'],
})
export class MiniMapComponent implements AfterViewInit {
  @ViewChild('map') mapContainer!: ElementRef;
  @Input() lngLat?: [number, number];

  protected color = '#xxxxxx'.replace(/x/g, (y) =>
    ((Math.random() * 16) | 0).toString(16)
  );

  protected map?: Map;

  ngAfterViewInit(): void {
    if (!this.lngLat) throw new Error('lngLat is required');

    this.map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 16, // starting zoom
      interactive: false, // disable map interactio
    });

    new Marker({ color: `${this.color}` })
      .setLngLat(this.lngLat)
      .addTo(this.map);
  }
}
