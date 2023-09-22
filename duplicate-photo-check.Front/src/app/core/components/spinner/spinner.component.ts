import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-spinner-component',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
  })

export class SpinnerComponent {
    @Input() show:boolean = true;
}