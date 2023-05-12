import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.scss'],
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map') mapContainer?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.mapContainer) return;

    const map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
