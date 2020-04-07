import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

declare var gtag;

interface Token {
  token: string;
}

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tokenCollections: AngularFirestoreCollection<Token>;

  constructor(private router: Router,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private database: AngularFirestore
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const navEndEvents$ = this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        );

      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', 'UA-162503749-1', {
          page_path: event.urlAfterRedirects
        });
      });
    }

    this.tokenCollections = this.database.collection<Token>('tokens');
  }

  ngOnInit() {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA() {
    this.swUpdate.available
      .subscribe(value => {
        console.log('update:', value);
        window.location.reload();
      });
  }

  requestPermission() {
    this.messaging.requestToken
      .subscribe(token => {
        console.log(token);
        this.tokenCollections.add({token});
      });
  }

  listenNotifications() {
    this.messaging.messages
      .subscribe(message => {
        console.log(message);
      })
  }

}
