import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';

@NgModule({
  declarations: [   
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  providers: [SearchService]
})
export class SearchModule {
}
