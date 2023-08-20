import { Component, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericService } from './services/generic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'assessment-app';

  public toShow: boolean = false;
  public subscription!: Subscription;

  public isMobile: boolean = false;

  constructor(private genericService: GenericService, private zone: NgZone) {}


  
  public ngOnInit() {
      if(window.innerWidth<700){
        this.isMobile = true; 
      }
      console.log("Mobile :",this.isMobile)
      this.subscription = this.genericService.menuBarState.subscribe((state:any) => {
          this.zone.run(() => {
              this.toShow = state.show;
          });
      });
  }

  public ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
