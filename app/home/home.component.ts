import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../services/json-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cat_names : String[] = ['Oliver', 'Kitty', 'Lucy', 'Molly'];
  data : any;
  constructor(private dataService : JsonDataService) {

   }

  ngOnInit() {
    this.dataService.getData().subscribe( data => {
      this.data =  data;
      console.log(data); //debug
    })
  }

}
