import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-example',
  templateUrl: './ngclass-example.component.html',
  styleUrls: ['./ngclass-example.component.css']
})
export class NgclassExampleComponent implements OnInit {

  public isToggle: boolean;

  constructor(){
    this.isToggle = false;
  }

  ngOnInit() {
  }

  onChangePara(){
    this.isToggle = !this.isToggle;
  }

}
