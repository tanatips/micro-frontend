import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('mfe1/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  }
  ,
  {
    path: 'mfe2',
    loadChildren: () =>
      import('mfe2/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  },
  {
    path: 'mfe3',
    loadChildren: () =>
      import('mfe3/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  },
  {
    path: 'mfe4',
    loadChildren: () =>
      import('mfe4/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  },
  {
    path: 'mfe5',
    loadChildren: () =>
      import('mfe5/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
