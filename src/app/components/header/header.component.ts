import { Component } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private genericService: GenericService){}
  
   public showMenu(){
    this.genericService.showMenu();
  }

}
