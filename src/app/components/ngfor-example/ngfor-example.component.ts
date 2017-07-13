import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent implements OnInit {

  people: any[]=[
    {
      "name": "Douglas Pace"
    },
    {
      "name": "Mike Moore"
    },
    {
      "name": "Johnny Rotten"
    },
    {
      "name": "Day Meyers"
    },
    {
      "name": "Cook Tyson"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
