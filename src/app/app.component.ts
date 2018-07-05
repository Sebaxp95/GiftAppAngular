/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';
import { Poll, Product } from './giftapp/model/product';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public name = 'Angular Starter';
  public tipe = 'assets/img/tipe.png';
  public twitter = 'https://twitter.com/gdi2290';
  public url = 'https://tipe.io';
  public showDevModule: boolean = environment.showDevModule;
  public pages = [
    {value: 'googl', viewValue: 'Google'},
    {value: 'gith', viewValue: 'GitHub'},
    {value: 'wikip', viewValue: 'Wikipedia'}
  ];
  public product1 = new Product(
    'Poduszka dla samotnych',
    20,
    'https://cdn1.prezenty.pl/media/catalog/product/cache/8/small_image/480x/9df78eab3' +
    '3525d08d6e5fb8d27136e95/p/o/poduszka-dla-samotnych-meskie-ramie-prezenty-pl_4442-2adc0f5d.jpg',
    'https://www.prezenty.pl/poduszka-dla-samotnych-meskie-ramie.html',
    10,
    new Poll(
      132,
      222
    )
  );
  public product2 = new Product(
    'Poduszka dla samotnych 2',
    20,
    'https://cdn1.prezenty.pl/media/catalog/product/cache/8/small_image/480x/9df78eab3' +
    '3525d08d6e5fb8d27136e95/p/o/poduszka-dla-samotnych-meskie-ramie-prezenty-pl_4442-2adc0f5d.jpg',
    'https://www.prezenty.pl/poduszka-dla-samotnych-meskie-ramie.html',
    10,
    null
  );

  constructor(
    public appState: AppState
  ) {
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
