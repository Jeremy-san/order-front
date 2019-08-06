import { Component, OnInit } from '@angular/core';
import {CanvasJS} from 'canvasjs';


@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.scss']
})
export class GraphiqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  graphic() {
    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light1', // "light2", "dark1", "dark2"
      animationEnabled: false, // change to true
      title: {
        text: 'Basic Column Chart'
      },
      data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: 'column',
        dataPoints: [
          { label: 'apple',  y: 10  },
          { label: 'orange', y: 15  },
          { label: 'banana', y: 25  },
          { label: 'mango',  y: 30  },
          { label: 'grape',  y: 28  }
        ]
      }
      ]
    });
    chart.render();
  }
}
