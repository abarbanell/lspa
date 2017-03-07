import { Component, OnInit, ViewChild } from '@angular/core';
import { MigService } from './mig.service';

@Component({
  selector: "mig-form",
  templateUrl: './mig-form.component.html'
})
export class MigFormComponent implements OnInit {

  constructor(private _migService: MigService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
  }
}