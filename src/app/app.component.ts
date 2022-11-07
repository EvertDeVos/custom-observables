import { Component, OnInit } from '@angular/core';
import { EzObservable, EzSubscription } from '../custom-rxjs/observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public counter$: EzObservable<number>;
  public counterSub: EzSubscription;

  constructor() {
    this.counter$ = this._setupCounter();
  }

  public ngOnInit(): void {
    this.counterSub = this.counter$.subscribe();
  }

  public onStopCounter(): void {
    this.counterSub.unsubscribe();
  }

  private _setupCounter(): EzObservable<number> {
    return new EzObservable<number>();
  }
}
