import { Component, Input, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent {
  public IMG_BASE: string = "assets/images/";
  public subscription!: Subscription;

  @Input() isMobile: boolean = false;

  public items = [
    {
      label:"Dashboard",
      icon:"dashboard.svg",
      active_icon:"dashboard_active.svg",
      isActive: false
    },
    {
      label:"Assessment",
      icon:"note_alt.svg",
      active_icon:"note_alt_active.svg",
      isActive: true
    },
    {
      label:"My Library",
      icon:"quiz.svg",
      active_icon:"quiz_active.svg",
      isActive: false
    }
  ];
  public toShow: any;

  constructor(private genericService: GenericService, private zone: NgZone) {}


  
  public ngOnInit() {
      this.subscription = this.genericService.menuBarState.subscribe((state:any) => {
          this.zone.run(() => {
              this.toShow = state.show;
          });
      });
  }

  public ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  public hideMenu(){
    this.genericService.hideMenu()
  }



  public openPage(label: string){
    console.log('page :',label)
  }

}
