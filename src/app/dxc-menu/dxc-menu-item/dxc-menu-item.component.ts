import { Component, OnInit, Input, Output, HostBinding, HostListener, ElementRef, EventEmitter, Optional, Host } from '@angular/core';
import { Router } from '@angular/router';

import { DxcMenuHeaderItemComponent } from '../dxc-menu-header-item/dxc-menu-header-item.component'

@Component({
  selector: 'dxc-menu-item',
  templateUrl: './dxc-menu-item.component.html',
  styleUrls: ['./dxc-menu-item.component.css']
})
export class DxcMenuItemComponent implements OnInit {
  private _navItems: any[] = []
  public hasIcon: boolean = false;
  @Input()
  set navItems(value: any[]) {
    this._navItems = value;
    this.hasIcon = value ? value.filter(obj => obj.icon).length > 0 : false;
  }
  get navItems(): any[] {
    return this._navItems;
  }
  @Input()
  set show(value: boolean) {
    if (value) {
      this.display = 'block';
    } else {
      this.display = 'none';
      this.currentSubNav = -1;
    }

  }
  @Input()
  set submenu(value: boolean) {
    if (value) {
      this.positionTop = '0';
      this.positionLeft = '100%';
    } else {
      this.positionTop = '100%';
      this.positionLeft = '0';
    }
  }

  @Input() leaveIconSpace: boolean = false;
  @Input() highlightActiveLink: boolean = false;

  @Output()
  public clickOutside = new EventEmitter();
  @Output()
  public clickLink = new EventEmitter();

  @HostBinding('style.display') display: string = 'none';
  @HostBinding('style.left') positionLeft: string = '0';
  @HostBinding('style.top') positionTop: string = '100%';

  public currentSubNav: number = -1;

  @HostListener('document:click', ['$event.target'])
  @HostListener('document:touchstart', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(targetElement);
    }
  }


  constructor(private _elementRef: ElementRef, public router: Router) {
    if ((_elementRef.nativeElement as HTMLElement).parentElement)
      console.log((_elementRef.nativeElement as HTMLElement).parentElement);
  }

  onLinkClick(event:any, isDisabled: boolean = false) {
    if (!isDisabled) {
      this.clickLink.emit();
    }else{
      console.log('noevent');
      event.preventDefault();
    }
  }

  ngOnInit() {
  }

  shownav(i) {
    return (this.currentSubNav === i)
  }

  toggleNav(i: number, isDisabled: boolean = false) {
    if (!isDisabled) {
      this.currentSubNav = i;
    } else {
      this.currentSubNav = -1;
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