import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.sass']
})
export class AlertModalComponent implements OnInit {
  index = 0;
  messages = [
    'You successfully read this important alert message.',
    'Now this text is different from what it was before. Go ahead and click the button one more time',
    'Well done! Click reset button and you\'ll see the first message'
  ];
 
  changeText() {
    if (this.messages.length - 1 !== this.index) {
      this.index++;
    }
  }
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
