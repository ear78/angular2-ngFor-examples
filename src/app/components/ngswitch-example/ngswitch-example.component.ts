import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-example',
  templateUrl: './ngswitch-example.component.html',
  styleUrls: ['./ngswitch-example.component.css']
})
export class NgswitchExampleComponent implements OnInit {
  people: any[] = [
      {
        "name": "Douglas Pace",
        "age": 35,
        "country": "UK"
      },
      {
        "name": "Johnny Rotten",
        "age": 28,
        "country": "Mars"
      },
      {
        "name": "Mike Moore",
        "age": 15,
        "country": "US"
      },
      {
        "name": "Keith Tomato",
        "age": 37,
        "country": "Canada"
      },
      {
        "name": "Star Solo",
        "age": 25,
        "country": "US"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
