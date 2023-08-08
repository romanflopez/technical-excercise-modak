import { Component, Input, OnInit } from '@angular/core';
import { Datum } from 'src/app/shared/model/interfaces.model';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent {
  @Input({ required: true }) artwork: Datum;
}
