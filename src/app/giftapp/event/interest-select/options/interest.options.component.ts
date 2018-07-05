import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'interest-options',
  templateUrl: './interest.options.component.html',
  styleUrls: ['./interest.options.component.css']
})
export class InterestOptionsComponent implements OnInit {
  @Input() options: string[];
  @Input() title: string;
  @Output() onRemove = new EventEmitter();
  @Output() onAdd = new EventEmitter();

  public ngOnInit(): void {
  }

  handleRemove(name: string) {
    this.onRemove.emit(name);
  }

  handleAdd() {
    this.onAdd.emit();
  }
}
