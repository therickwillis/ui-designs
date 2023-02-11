import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-row',
  templateUrl: './result-row.component.html',
  styleUrls: ['./result-row.component.scss']
})
export class ResultRowComponent {
  @Input() result: any;
}
