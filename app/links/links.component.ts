import { Component, OnInit } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  back() {
    window.history.back();
  }

}
