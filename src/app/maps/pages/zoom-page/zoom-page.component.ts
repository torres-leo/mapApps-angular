import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrls: ['./zoom-page.component.scss'],
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapContainer?: ElementRef;

  protected zoom = 10;
  protected map?: Map;
  protected currentLngLat: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    if (!this.mapContainer) return;

    this.map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListener();
  }

  mapListener(): void {
    if (!this.map) return;

    this.map.on('zoom', (e) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (e) => {
      if (this.map!.getZoom() < 16) return;
      this.map!.zoomTo(16);
    });

    this.map.on('moveend', () => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomChange(value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
