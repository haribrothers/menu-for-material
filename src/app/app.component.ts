import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  sampleMenu: any[] = [
    {
      name: 'Page 1',
      icon: 'looks_one',
      link: ['page1'],
      children: [
        {
          name: 'Sub Page 1',
          link: ['page1', 's1']
        },
        {
          name: 'Sub Page 2',
          icon: 'message',
          link: ['page1', 's2'],
          children: [
            {
              name: 'Child Page 1(123)',
              link: ['page1', 's2','sp1',123]
            },
            {
              name: 'Child Page 1(345)',
              link: ['page1', 's2','sp1',345]
            },
            {
              name: 'Child Page 2',
              link: ['page1', 's2','sp2']
            },
          ]
        },
        {divider:true},
        {
          name: 'More Pages',
          icon: 'add_box',
          disabled: true,
          link: ['page1', 's2']
        }
      ]
    },
    {
      name: 'Page 2',
      icon: 'looks_two',
      link: 'page2',
      disabled: false
    }
  ];

}

