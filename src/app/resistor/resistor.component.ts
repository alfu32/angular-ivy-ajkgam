import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: `[proto-elec='resistor']`,
  templateUrl: './resistor.component.svg',
  styleUrls: ['./resistor.component.scss']
})
export class ResistorComponent implements OnInit {
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
  }

}