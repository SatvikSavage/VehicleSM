import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageSideNavComponent } from './components/page-side-nav/page-side-nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PageTableComponent } from './components/page-table/page-table.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PageSideNavComponent,
    PageNotFoundComponent,
    PageTableComponent
  ],
  imports: [
    CommonModule,MaterialModule,RouterModule,ReactiveFormsModule,
  ],
  exports: [CommonModule,
  MaterialModule,
  PageHeaderComponent,
  PageFooterComponent,
  PageSideNavComponent,
  PageNotFoundComponent,
  RouterModule,
  ReactiveFormsModule,
  PageTableComponent
  ]
})
export class SharedModule { }
