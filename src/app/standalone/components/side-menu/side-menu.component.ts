import { Component } from '@angular/core';
import { MenuItem } from '../../../maps/interfaces/menuItem.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { name: 'Fullscreen', route: '/maps/fullscreen' },
    { name: 'Zoom Range', route: '/maps/zoom-range' },
    { name: 'Markers', route: '/maps/markers' },
    { name: 'Houses', route: '/maps/properties' },
    { name: 'StandAlone Page', route: '/standalone' },
  ];
}
