import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent implements OnInit {
  dog_names : String[] = ['Roxy', 'Jack', 'Coco', 'Lola', 'Daisy'];
  
  constructor() { }

  ngOnInit() {
  }

}
