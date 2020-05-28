import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: `[proto-elec='terminal']`,
  templateUrl: './terminal.component.svg',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}