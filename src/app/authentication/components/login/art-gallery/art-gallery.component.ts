import { Component, Input } from '@angular/core';
import { Datum } from 'src/app/shared/model/interfaces.model';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.scss'],
})
export class ArtGalleryComponent {
  @Input({ required: true }) artworks: Datum[];
  responsiveOptions: { breakpoint: string; numVisible: number }[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
