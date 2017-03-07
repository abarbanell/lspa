import { Component, OnInit, ViewChild } from '@angular/core';
import { MigService } from './mig.service';

@Component({
  selector: "mig-form",
  templateUrl: './mig-form.component.html'
})
export class MigFormComponent implements OnInit {
  data: String[] = [];
  dataStr = "";

  isLoading = false;
  errorMsg: String = null;

  constructor(private _migService: MigService) {
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
}