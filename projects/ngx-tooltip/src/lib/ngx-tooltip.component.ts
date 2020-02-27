import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'lib-ngx-tooltip',
  templateUrl: './ngx-tooltip.component.html',
  styleUrls: ['./ngx-tooltip.component.css']
})
export class NgxTooltipComponent implements OnInit {

  @Input()
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
