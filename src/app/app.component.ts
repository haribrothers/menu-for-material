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
  sample: any[] = [
    {
      name: 'File',
      icon: 'domain',
      children: [
        {
          name: 'New',
          children: [
            {
              name: 'New File',
              icon: 'insert_drive_file',
              link: ['page2']
            },
            {
              name: 'New Folder',
              icon: 'create_new_folder',
              link: ['page1']
            },
            {
              name: 'New Project',
            },
            { divider: true },
            {
              name: 'New from Template',
              icon: 'file_copy',
              disabled: false,
              children: [
                {
                  name: 'Material design Template',
                  icon: 'android',
                },
                {
                  name: 'iOS design Template',
                  icon: 'phone_iphone',
                },
                {
                  name: 'Bootstrap design Template'
                },
                { divider: true },
                {
                  name: 'Browse more Template...',
                  icon: 'search',
                }
              ]
            },
            { divider: true },
            { name: 'Create new Template...' }
          ]
        },
        {
          name: 'Open File',
        },
        {
          name: 'Open Folder'
        },
        {
          name: 'Open Workspace',
          disabled: true
        },
        { divider: true },
        {
          name: 'Save File',
          icon: 'save'
        },
        {
          name: 'Save All Files...',
          disabled: true,
          icon: 'save'
        },
        { divider: true },
        {
          name: 'Exit',
          icon: 'exit_to_app'
        },
      ]
    }, {
      name: 'Edit',
      icon: 'edit',
      children: [
        {
          name: 'Undo',
          icon: 'undo'
        },
        {
          name: 'Redo',
          icon: 'redo'
        },
        { divider: true },
        {
          name: 'Cut',
          icon: 'crop_free'
        },
        {
          name: 'Copy',
          icon: 'file_copy'
        },
        {
          name: 'Paste',
          icon: 'add_to_photos'
        },
        { divider: true },
        {
          name: 'Find',
          icon: 'search',
          children: [
            {
              name: 'Find'
            },
            {
              name: 'Find Next...'
            },
            {
              name: 'Find All...'
            },
            { divider: true },
            {
              name: 'Search in web',
              disabled: true
            }
          ]
        }
      ]
    },
    { name: 'Help', icon: 'help', disabled: true }
  ];

  addMenu() {
    this.sample.push({
      name: 'menu3',
      children: [
        {
          name: 'childmenu4',
          icon: 'home',
        }, {
          name: 'childmenu5',
          icon: 'home',
          children: [
            { name: 'subchildmenu1' },
            { divider: true },
            { name: 'subchildmenu2' },
            { name: 'subchildmenu2' },
            { name: 'subchildmenu2' },
            { name: 'subchildmenu2' }
          ]
        }, {
          name: 'childmenu6'
        },
      ]
    });
  }

  addSubItem() {
    this.sample[0].children.push({ divider: true }, {
      name: 'childmenu5',
      children: [
        { name: 'subchildmenu1' },
        { divider: true },
        { name: 'subchildmenu2' },
        { name: 'subchildmenu2' },
        { name: 'subchildmenu2' },
        { name: 'subchildmenu2' }
      ]
    })
  }

}

