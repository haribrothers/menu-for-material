import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Page1Component, Page2Component, Page1S1Component, Page1S2Component, Page1s2Sp1Component, Page1s2Sp2Component } from './views';

export const routeComponents = [
  Page1Component,
  Page2Component,
  Page1S1Component,
  Page1S2Component,
  Page1s2Sp1Component,
  Page1s2Sp2Component
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'page1',
        component: Page1Component,
        children: [
          {
            path: '',
            redirectTo: 's1',
            pathMatch: 'full'
          },
          {
            path: 's1',
            component: Page1S1Component
          },
          {
            path: 's2',
            component: Page1S2Component,
            children: [
              {
                path: '',
                redirectTo: 'sp1',
                pathMatch: 'full'
              },
              {
                path: 'sp1/:id',
                component: Page1s2Sp1Component
              },
              {
                path: 'sp2',
                component: Page1s2Sp2Component
              },
            ]
          }
        ]
      },
      { path: 'page2', component: Page2Component },
      { path: '**', redirectTo: 'page1' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule { }

