import { Component } from '@angular/core';

@Component({
  selector: 'block-temp',
  styles: [`
    :host {
      text-align: center;
      color: #1976D2;
    }
  `],
  template: `
    <div class="block-ui-template">
    <img src="./../../assets/images/Load.gif" alt="">
    </div>
  `
})
export class BlockTemplateComponent {
  message: any;
}
