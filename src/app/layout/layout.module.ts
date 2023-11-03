import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './components/containers/layout/layout.container';
import { SidebarComponent } from './components/views/sidebar/sidebar.component';
import { TopbarComponent } from './components/views/topbar/topbar.component';
import { LayoutPageComponent } from './components/pages/layout.page';
import { RouterModule, Routes } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
  },
];

@NgModule({
  declarations: [
    LayoutContainerComponent,
    LayoutPageComponent,
    SidebarComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    RouterModule.forChild(routes),
  ],
})
export class LayoutModule {}
