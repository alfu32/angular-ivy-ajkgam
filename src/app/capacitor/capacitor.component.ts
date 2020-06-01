import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: `[proto-elec='capacitor']`,
  templateUrl: './capacitor.component.svg',
  styleUrls: ['./capacitor.component.scss']
})
export class CapacitorComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}