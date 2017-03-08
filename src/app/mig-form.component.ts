import { Component, OnInit, ViewChild } from '@angular/core';
import { MigService } from './mig.service';
import { SensorService } from './sensor.service';

@Component({
  selector: "mig-form",
  templateUrl: './mig-form.component.html'
})
export class MigFormComponent implements OnInit {
  data: String[] = [];
  dataStr = "";

  isLoading = false;
  errorMsg: String = null;

  constructor(private _migService: MigService, private _sensorService: SensorService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.data = [];
    this.isLoading = true
    this._migService.getData()
      .subscribe(
        list => { 
          this.data = list; 
          this.dataStr = JSON.stringify(list);
          this.isLoading = false;
        },
        error => { 
          this.errorMsg = <any>error;
          this.isLoading = false; 
        });
  }

  mapped(host: string, sensor: string) {
    // should delegate to the service which in turn should have retrieved this data already un the load() 
    // function.
    return this._sensorService.getSensorID(host, sensor) != null
  }
}