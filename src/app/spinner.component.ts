import {Component, Input} from "@angular/core";


@Component({
  selector: "spinner",
  template: `
    <i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x darkred"></i>
  `
})
export class SpinnerComponent {
  @Input() visible: boolean = false;

}