import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-button-component',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
  })

export class ButtonComponent {
    @Input() name = "";
    @Input() type = "";
}