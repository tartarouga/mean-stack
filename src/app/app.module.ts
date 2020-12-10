import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localFrExtra from '@angular/common/locales/extra/fr'
registerLocaleData(localeFr, 'fr', localFrExtra);


import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AgePipe } from './age.pipe';
import { CalcagePipe } from './pipes/calcage.pipe';
import { SanitizerPipe } from './pipes/sanitizer.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HeaderComponent,
    AgePipe,
    CalcagePipe,
    SanitizerPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
