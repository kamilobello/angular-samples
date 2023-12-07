import {Component, ViewEncapsulation} from '@angular/core';
import {EmulatedComponent} from "../emulated/emulated.component";
import {NoneComponent} from "../none/none.component";

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-shadow-doom',
  standalone: true,
  imports: [
    NoneComponent,
    EmulatedComponent
  ],
  templateUrl: './shadow-doom.component.html',
  styles: ['h2, .shadow-message { color: blue; }'],
})
export class ShadowDoomComponent {

}
