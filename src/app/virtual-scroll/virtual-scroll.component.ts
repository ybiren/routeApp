import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  private totalHeight = 1000;
  private scrollTop = 0;

  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    return {'padding-top': `${this.scrollTop}px` , 'padding-bottom': `${this.totalHeight - this.scrollTop}px`};
  }

  doScroll(eve) {
    this.scrollTop = eve.target.scrollTop;
  }
}
