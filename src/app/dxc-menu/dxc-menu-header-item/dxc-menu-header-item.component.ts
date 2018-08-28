import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'dxc-menu-header-item',
  templateUrl: './dxc-menu-header-item.component.html',
  styleUrls: ['./dxc-menu-header-item.component.css']
})
export class DxcMenuHeaderItemComponent implements OnInit {
  @Input() item: any = {};
  @Input() leaveIconSpace: boolean = false;
  @Input() highlightActiveLink: boolean = false;

  public show: boolean = false;
  constructor(private _elementRef: ElementRef, public router: Router) { }

  ngOnInit() {
    
  }

  toggle() {
    this.show = !this.show;
  }

  closeMenu(target: any) {
    const clickedInside = this._elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.show = false;
    }
  }

  isRouterActive(item:any):boolean{
    // item.link ? router.isActive(router.createUrlTree(item.link), false):false
    if(item.link && this.highlightActiveLink){
      return this.router.isActive(this.router.createUrlTree(item.link),false);
    } else{
      return false;
    }
  }

}