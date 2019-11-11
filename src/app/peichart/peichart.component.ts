import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peichart',
  templateUrl: './peichart.component.html',
  styleUrls: ['./peichart.component.scss']
})
export class PeichartComponent implements OnInit {

  constructor() { }

  @Input()
  title: string;
  @Input()
  newData: NewData[] = [
    { name: 'data-1', value: 20 },
    { name: 'data-2', value: 40 },
    { name: 'data-3', value: 10 },
    { name: 'data-4', value: 8 },
    { name: 'data-5', value: 22 },
  ];
  @Input()
  startAngle: number;
  @Input()
  endAngle: number;
  @Input()
  radious = 100;
  @Input()
  donut = false;

  pieChart: any = null;
  ctx: any = null;
  perArr: number[] = [];
  colorArray: string[] = [];
  sortedData: NewData[];

  ngOnInit() {
    this.initFun();
  }

  initFun() {
    const pieChart = document.getElementById('pie_chart');
    this.pieChart = pieChart;
    this.pieChart.height = 300;
    this.pieChart.width = 300;
    this.pieChart.style.borderRadius = '50%';
    const ctx = pieChart['getContext']('2d');
    this.ctx = ctx;
    this.drawPieChart();
    this.ctx.beginPath();
    this.ctx.arc(150, 150, 100, 0, Math.PI * 2, false);
    if (this.donut) {
      this.ctx.fillStyle = '#eee';
      this.ctx.fill();
    }
  }


  drawPieChart() {
    this.sortedData = this.newData.sort((a, b) => b.value - a.value);
    let startAngle = 0;
    let endAngle = 0;
    let sAngle = 0;
    let eAngle = 0;
    for (let i = 0; i < this.newData.length; i++) {
      startAngle = endAngle;
      endAngle = endAngle + ((this.newData[i].value * 0.02) * Math.PI);
      const col = this.randColor();
      this.colorArray[i] = col;
      this.drawSlice(this.radious, startAngle, endAngle, col);


      sAngle = eAngle;
      eAngle = eAngle + ((this.sortedData[i].value * 0.02) * Math.PI);
      // this.drawSliceText(startAngle, endAngle, col, this.newData[i].value);
    }
  }

  drawSlice(r, startAngle, endAngle, color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();

    this.ctx.moveTo(150, 150);
    this.ctx.arc(150, 150, r, startAngle, endAngle);
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawSliceText(startAngle, endAngle, color,  percent) {
    //  x = radious * cos(AC)
    //  y = radious * sin(AC)
    const textX = 150 + Math.cos((startAngle + endAngle) / 2) * this.radious;
    const textY = 150 + Math.sin((startAngle + endAngle) / 2) * this.radious;

    this.ctx.fillStyle = '#000';
    this.ctx.font = '24px Calibri';
    this.ctx.fillText(percent, textX, textY);
  }

  randColor() {
    const char = '1234567890abcdef';
    const opa = '456789';
    let result = '#';
    for (let i = 0; i < 6; i++) {
      result += char.charAt(Math.random() * char.length);
    }
    return result;
  }

}


interface NewData {
  name: string;
  value: number;
}
