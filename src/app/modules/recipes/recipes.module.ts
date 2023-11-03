import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesContainerComponent } from './components/containers/recipes.container/recipes.container.component';
import { RecipeCardComponent } from './components/views/recipe-card/recipe-card.component';
import { RecipesPageComponent } from './components/pages/recipes.page.component';
import { RouterModule, Routes } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

const routes: Routes = [
  {
    path: '',
    component: RecipesPageComponent,
  },
];

const MODULES = [
  CommonModule,
  NzCardModule,
  NzGridModule,
];

@NgModule({
  declarations: [
    RecipesContainerComponent,
    RecipesPageComponent,
    RecipeCardComponent,
  ],
  imports: [RouterModule.forChild(routes), ...MODULES],
})
export class RecipesModule {}
