import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chartwrapper',
  templateUrl: './chartwrapper.component.html',
  styleUrls: ['./chartwrapper.component.scss']
})
export class ChartwrapperComponent implements OnInit {

  title = 'bullshit shit';
  newData: NewData[] = [
    { name: 'data-1', value: 20 },
    { name: 'data-2', value: 40 },
    { name: 'data-3', value: 10 },
    { name: 'data-4', value: 8 },
    { name: 'data-5', value: 22 },
  ];
  radious = 150;
  donut = true;
  constructor() { }

  ngOnInit() {
  }

  donutToggle() {
    this.donut = !this.donut;
  }

}

interface NewData {
  name: string;
  value: number;
}
