import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class GenericService {

    public popupSubject = new Subject<any>();
    public popupState = this.popupSubject.asObservable();

    public menuBarSubject = new Subject<any>();
    public menuBarState = this.menuBarSubject.asObservable();

    public show() {
        this.popupSubject.next({ show: true});
    }
    public hide() {
        this.popupSubject.next({ show: false});
    }

    public showMenu() {
        console.log("showMenu")
      this.menuBarSubject.next({ show: true});
    }

    public hideMenu() {
        console.log("hideMenu")
        this.menuBarSubject.next({ show: false});
    }
}
