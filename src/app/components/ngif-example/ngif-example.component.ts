import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-example',
  templateUrl: './ngif-example.component.html',
  styleUrls: ['./ngif-example.component.css']
})
export class NgifExampleComponent implements OnInit {

  peopleByCountry: any[] = [
    {
      "country": "UK",
      "people": [
        {
          "name": "Douglas Pace",
          "age": 35
        },
        {
          "name": "Johnny Rotten",
          "age": 28
        }
      ]
    },
    {
      "country": "US",
      "people": [
        {
          "name": "Mike Moore",
          "age": 15
        },
        {
          "name": "Keith Tomato",
          "age": 37
        },
        {
          "name": "Star Solo",
          "age": 25
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
