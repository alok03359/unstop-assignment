import { Component } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-add-assessment-card',
  templateUrl: './add-assessment-card.component.html',
  styleUrls: ['./add-assessment-card.component.css']
})
export class AddAssessmentCardComponent {

  constructor(private genericService: GenericService){}


  openPopup(){
    this.genericService.show();
  }
}
