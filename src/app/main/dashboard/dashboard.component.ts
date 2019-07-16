import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened;
  position = 'start';
  mode;
  mediaQuery;

  constructor() { }

  ngOnInit() {

    this.mediaQuery = window.matchMedia('(max-width: 900px)');

    if(this.mediaQuery.matches === true){
      this.opened = false;
      this.mode = 'over';
    }
    else{
      this.opened = true;
      this.mode = 'side';
    }
  }

  navBarOpenEvent(event): void {
    if (event.opened === true) {
      if (this.opened === true) {
        this.opened = false;
      }
      else{
        this.opened = true;
      }
    }
  }

  closeNavBar(event): void {
    if (event.closeSideNav === true && this.mediaQuery.matches === true) {
        this.opened = false;
      }
  }

  navPosition(event): void{
      if ( event.toggleNav === true){
        if ( this.position === 'start') {
          this.position = 'end';
        }
        else{
          this.position = 'start';
        }
      }
  }

  backdropCheck(){
    this.opened = false;
  }

}
