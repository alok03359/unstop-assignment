import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assessment-card',
  templateUrl: './assessment-card.component.html',
  styleUrls: ['./assessment-card.component.css']
})
export class AssessmentCardComponent {
  @Input() isLast: boolean = false; 

}
