import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'interest-option',
  templateUrl: './interest.option.component.html',
  styleUrls: ['./interest.option.component.css']
})
export class InterestOptionComponent implements OnInit {
  @Input() name: string;
  @Output() onRemove = new EventEmitter();

  public ngOnInit(): void {
  }

  handleRemove() {
    this.onRemove.emit(this.name);
  }
}
