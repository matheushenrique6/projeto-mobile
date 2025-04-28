import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonIcon,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { time } from 'ionicons/icons';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  imports: [IonIcon],
})
export class TimeComponent implements OnInit {
  public value: string = '00:00';
  constructor() {
    addIcons({
      time,
    });
  }
  @Input() valueDefinition: string = this.value;
  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  ngOnInit() {}
}
