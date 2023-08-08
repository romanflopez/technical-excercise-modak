import { environment } from 'src/environments/environment';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ImageSizeEnum } from '../model/interfaces.model';

@Directive({
  selector: '[artSrc]',
  standalone: true,
})
export class ImageDirective implements OnChanges {
  el = inject<ElementRef<HTMLImageElement>>(ElementRef);
  @Input({ required: true, alias: 'src' }) imagen_id: string;
  @Input({ required: false }) size = ImageSizeEnum.size600;

  @HostListener('error')
  private onError() {
    this.el.nativeElement.src = environment.placeholder;
  }
  ngOnChanges(changes: SimpleChanges): void {
    const change_image_id = changes['imagen_id'];
    this.el.nativeElement.src = `${environment.iiif_url}/${change_image_id.currentValue}/${this.size}`;
  }
}
