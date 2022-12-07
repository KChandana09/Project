import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2=true;

  constructor() { }
  newTag(){
    this.isCollapsed2=false;
  }

  ngOnInit(): void {
  }
  alert1(){
    alert("Thank you for your feedback")
  }

}
