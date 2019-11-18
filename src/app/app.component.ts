import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'finddev';
  isCollapted : boolean = true;

  constructor(){}
  
  toggleCollapted(){
    this.isCollapted = !this.isCollapted;
  }
}