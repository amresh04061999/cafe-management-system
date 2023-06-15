import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { AsideComponent } from './component/aside/aside.component';
import { MasterComponent } from './component/master/master.component';
import { LoaderComponent } from './component/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    MasterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
