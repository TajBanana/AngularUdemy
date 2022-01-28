import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayOn = true;
  countArray = [];
  count = 0;

  onDisplayDetails() {
    if (this.displayOn) {
      this.displayOn = false;
    } else {
      this.displayOn = true;
    }
    this.count += 1;
    this.countArray.push(this.count);
    console.log('onDisplayDetails clicked.' + ' displayOn= ' + this.displayOn)
  }

}
