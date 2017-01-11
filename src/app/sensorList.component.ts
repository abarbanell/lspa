import { Component, OnInit } from '@angular/core';
import { SensorService, ISensor } from './sensor.service';

@Component({
    templateUrl: './sensorlist.component.html'
})
export class SensorListComponent implements OnInit {
    sensors: ISensor[];
    errorMsg: string;
    isLoading = true;
    
    constructor(private _sensorService: SensorService) {
    }

  ngOnInit() {
    this._sensorService.getSensorList()
      .subscribe(
        list => { 
          this.sensors = list; 
          this.isLoading = false;
        },
        error => { 
          this.errorMsg = <any>error;
          this.isLoading = false; 
        });
  }
}