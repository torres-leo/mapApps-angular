import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface IMarker {
  color: string;
  marker: Marker;
}

interface IMarkerStorage {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.scss'],
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') mapContainer?: ElementRef;

  trashIcon = faTrashCan;
  protected Markers: IMarker[] = [];
  protected zoom = 14.5;
  protected map?: Map;
  protected currentLngLat: LngLat = new LngLat(
    -74.00869097424365,
    40.711250610085926
  );

  ngAfterViewInit(): void {
    if (!this.mapContainer) return;

    this.map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.getFromLocalStorage();
    /**
     * This is a basic reference to add a marker to the map.
     */
    // const marker = new Marker({ color: 'red' })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }

  protected createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  protected addMarker(lngLat: LngLat, color: string = 'red') {
    if (!this.map) return;

    const marker = new Marker({ color, draggable: true })
      .setLngLat(lngLat)
      .addTo(this.map!);

    this.Markers.push({
      color,
      marker,
    });

    this.saveToLocalStorage();

    marker.on('dragend', () => this.saveToLocalStorage());
  }

  protected removeMarker(index: number) {
    this.Markers[index].marker.remove();
    this.Markers.splice(index, 1);
  }

  protected goToMarker(marker: Marker) {
    if (!this.map) return;

    this.map.flyTo({
      center: marker.getLngLat(),
      zoom: 16,
    });
  }

  private saveToLocalStorage() {
    const markers = this.Markers.map((marker) => {
      return {
        color: marker.color,
        lngLat: marker.marker.getLngLat().toArray(),
      };
    });

    localStorage.setItem('markers', JSON.stringify(markers));
  }

  private getFromLocalStorage() {
    const markers = localStorage.getItem('markers') ?? '[]';
    if (!markers) return;

    const parsedMarkers = JSON.parse(markers);

    parsedMarkers.forEach((marker: IMarkerStorage) => {
      const [lng, lat] = marker.lngLat;
      const coords = new LngLat(lng, lat);

      this.addMarker(coords, marker.color);
    });
  }
}
