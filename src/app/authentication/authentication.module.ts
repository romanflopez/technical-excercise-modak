import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { LoginComponent } from './components/login/login.component';
import { ArtGalleryComponent } from './components/login/art-gallery/art-gallery.component';
import { AuthService } from './services/auth.service';
import { ImageDirective } from '../shared/directives/image.directive';

@NgModule({
  declarations: [LoginComponent, ArtGalleryComponent],
  imports: [
    GalleriaModule,
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ImageDirective,
  ],
  providers: [AuthService],
})
export class AuthenticationModule {}
