import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page1s2-sp1',
  templateUrl: './page1s2-sp1.component.html',
  styleUrls: ['./page1s2-sp1.component.css']
})
export class Page1s2Sp1Component implements OnInit, OnDestroy {
  public productID: number = 0;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.productID = params['id'];
    });
   }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    
  }

}