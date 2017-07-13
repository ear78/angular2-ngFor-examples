import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-example',
  templateUrl: './group-example.component.html',
  styleUrls: ['./group-example.component.css']
})
export class GroupExampleComponent implements OnInit {

  peopleByCountry: any[] = [
    {
      "country": "UK",
      "people": [
        {
          "name": "Douglas Pace"
        },
        {
          "name": "Johnny Rotten"
        }
      ]
    },
    {
      "country": "US",
      "people": [
        {
          "name": "Mike Moore"
        },
        {
          "name": "Keith Tomato"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
