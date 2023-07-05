import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './components/application/application.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicationComponent, SidebarComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    CdkMenuModule,

    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class ApplicationModule {}
