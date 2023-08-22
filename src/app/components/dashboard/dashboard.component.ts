import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public isOverViewActive: boolean = false;
  public mobileView: boolean = false;

  ngOnInit(): void {
      if(window.innerWidth<700){
          this.mobileView = true;
      }else{
        this.mobileView = false;
        this.isOverViewActive = true;
      }
  }

  toggle(){
    this.isOverViewActive = !this.isOverViewActive;
  }

}
