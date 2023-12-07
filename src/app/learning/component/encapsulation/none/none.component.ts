import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-none',
  standalone: true,
  imports: [],
  templateUrl: './none.component.html',
  styles: ['h2, .none-message { color: red; }'],
})
export class NoneComponent {

}
