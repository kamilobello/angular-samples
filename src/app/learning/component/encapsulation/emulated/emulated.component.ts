import {Component, ViewEncapsulation} from '@angular/core';
import {NoneComponent} from "../none/none.component";

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-emulated',
  standalone: true,
  imports: [
    NoneComponent
  ],
  templateUrl: './emulated.component.html',
  styles: ['h2, .emulated-message { color: green; }'],
})
export class EmulatedComponent {

}
