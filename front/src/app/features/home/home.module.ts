import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    MainComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ], 
  exports : [
    HomeComponent
  ]
})
export class HomeModule { }
