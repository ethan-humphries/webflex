import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgLocalization } from '@angular/common';
import { Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

//import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  path : String;

  constructor(private route : ActivatedRoute, private location : Location) {
    const comp = route.snapshot.outlet.toString();
    this.path = comp.toString();
   }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('parent');
    // this.current = id.toString();
  }

  back() {
    this.location.back();
  }



}
