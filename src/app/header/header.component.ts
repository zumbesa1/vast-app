import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor(private viewportScroller: ViewportScroller) {}
  showIcons = false;

  ngOnInit() {
    this.checkMediaQuery();
    window.addEventListener('resize', this.checkMediaQuery.bind(this));
  }


  checkMediaQuery() {
    this.showIcons = window.innerWidth < 991;
  }

}
