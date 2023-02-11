import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-row-rule',
  templateUrl: './result-row-rule.component.html',
  styleUrls: ['./result-row-rule.component.scss']
})
export class ResultRowRuleComponent {
  @Input() rule: any;  
}
