import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
export interface TerminalClick{
  component: any;
  terminal: any;
}
@Component({
  selector: `[proto-elec='opamp']`,
  templateUrl: './opamp.component.svg',
  styleUrls: ['./opamp.component.scss']
})
export class OpampComponent implements OnInit {
  @Input() name: string;
  @Input() positiveIn: number;
  @Input() negativeIn: number;
  @Input() vcc: number;
  @Input() vdd: number;
  @Output() terminalClick: EventEmitter<TerminalClick> = new EventEmitter<TerminalClick>();
  public fill = "rgb(255, 0, 0)";

  public emitClicked() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    this.fill = `rgb(${r}, ${g}, ${b})`;
  }
  constructor() { }

  ngOnInit() {
  }

}