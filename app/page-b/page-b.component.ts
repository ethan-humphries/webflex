import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {
  cat_names : String[] = ['Bella', 'Tiger', 'Chloe', 'Shadow', 'Luna', 'Oreo']

  constructor() { }

  ngOnInit() {
  }

}
