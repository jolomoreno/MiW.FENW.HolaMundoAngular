import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    $(document).ready(function () {
      console.log('Entra a Home component');
    });
  }

}
