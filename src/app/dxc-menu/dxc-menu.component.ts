import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dxc-menu',
  templateUrl: './dxc-menu.component.html',
  styleUrls: ['./dxc-menu.component.css']
})
export class DxcMenuComponent implements OnInit {
  @Input() navItems: any = [];
  @Input() leaveIconSpace: boolean = false;
  @Input() highlightActiveLink: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}