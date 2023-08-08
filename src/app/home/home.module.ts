import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { ButtonModule } from 'primeng/button';
import { HomeService } from './services/home.service';
import { ImageDirective } from '../shared/directives/image.directive';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent, ArtworkComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PaginatorModule,
    CardModule,
    ButtonModule,
    ImageDirective,
    ReactiveFormsModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
