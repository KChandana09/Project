import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trackjourney',
  templateUrl: './trackjourney.component.html',
  styleUrls: ['./trackjourney.component.css']
})
export class TrackjourneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value)
  }

}
