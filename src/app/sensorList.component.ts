import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { SensorService, ISensor } from './sensor.service';

@Component({
    templateUrl: './sensorlist.component.html'
})
export class SensorListComponent implements OnInit {
    @ViewChild('form') form: NgForm;
    sensors: ISensor[];
    errorMsg: string;
    isLoading = true;
    isDeleting = "";
    showForm = false;
    showMigrationForm = false;
    formMsg = {
      error: false,
      success: false,
      msg: "please enter and save"
    }
    private _sensor = {
      name: "",
      host: "",
      type: { 
        name:  ""
      }
    }
    
    constructor(private _sensorService: SensorService) {
    }

  ngOnInit() {
    this.load();
  }

  load() {
    this.sensors = [];
    this.isLoading = true
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

  show(s:boolean) {
    this.showForm = s;
  }

  showMigration(s:boolean) {
    this.showMigrationForm = s;
  }

  changeSensorName(s: FormControl) { 
    this._sensor.name = s.value;
  }

  changeHost(s: FormControl) { 
    this._sensor.host = s.value;
  }

  changeType(s: FormControl) { 
    this._sensor.type.name = s.value;
  }

  save() {
    console.log('TODO: validate and save (update or insert): ', this._sensor);
    this.formMsg = { error: false, success: false, msg: "saving..." };
    this._sensorService.saveSensor(this._sensor).subscribe(s => {
      console.log('TODO: validate-  save (insert) returned result: ', s);
      if (s.rc == "OK") { 
        this.formMsg = { error: false, success: true, msg: "inserted ID: " + s._id }
        this.load(); // refresh list
        this.form.reset()// reset form to be untouched, clear fields
      } 
    }, e => {
      console.log('TODO: validate-  save (insert) returned error: ', e);
    });
  }

  delete(id: string) {
    console.log('delete hook called for id: ', id);
    this.isDeleting = id;
    this._sensorService.deleteSensor(id).subscribe(s => {
      this.isDeleting = "";
      this.load();
    }, e => {
      console.log('delete error: ', e);
      this.isDeleting = "";
    });
  }
}