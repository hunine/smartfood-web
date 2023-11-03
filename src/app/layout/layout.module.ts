import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './components/containers/layout/layout.container';
import { SidebarComponent } from './components/views/sidebar/sidebar.component';
import { TopbarComponent } from './components/views/topbar/topbar.component';
import { LayoutPageComponent } from './components/pages/layout.page';
import { RouterModule, Routes } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipes',
      },
      {
        path: 'recipes',
        loadChildren: () =>
          import('../modules/recipes/recipes.module').then(
            (m) => m.RecipesModule
          ),
      },
    ],
  },
];

const MODULES = [
  CommonModule,
  NzLayoutModule,
  NzAvatarModule,
  NzInputModule,
  NzIconModule,
];

@NgModule({
  declarations: [
    LayoutContainerComponent,
    LayoutPageComponent,
    SidebarComponent,
    TopbarComponent,
  ],
  imports: [...MODULES, RouterModule.forChild(routes)],
})
export class LayoutModule {}
