import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JHCL-sub-components';

  fruits = ["apple", "orange", "banana", "grapes"];

  selectedValue: any;
  onSelect(event:any){
    console.log(event);
    this.selectedValue = event
  }

}
