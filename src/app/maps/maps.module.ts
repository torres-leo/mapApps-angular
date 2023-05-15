import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken =
  'pk.eyJ1IjoibHRvcnJlczI0IiwiYSI6ImNsZ2t6amN6YTAxcjAzbG9maXgzOGZyemUifQ.CLcuGSqHrMOxOjTC6LnsNw';

import { CounterAloneComponent } from '../standalone/components/counter-alone/counter-alone.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from '../standalone/components/side-menu/side-menu.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';

@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    ZoomPageComponent,
  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    FontAwesomeModule,
    MapsRoutingModule,
    SideMenuComponent,
  ],
})
export class MapsModule {}
