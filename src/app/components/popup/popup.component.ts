import { Component, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  public skills = ['UI/UX and Design', 'No. of Question', 'Web Development', 'UI/UX and Design','Web Development'];
  public toShow: boolean = false;
  public subscription!: Subscription;

  constructor(private genericService: GenericService, private zone: NgZone) {}
  
  public ngOnInit() {
      this.subscription = this.genericService.popupState.subscribe((state:any) => {
          this.zone.run(() => {
              this.toShow = state.show;
          });
      });
  }

  public ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  public remove(i:any){
    this.skills.splice(i,1);
  }

  public hide(){
    this.genericService.hide()
  }

}
