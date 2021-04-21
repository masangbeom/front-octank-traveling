import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor() { }
}
