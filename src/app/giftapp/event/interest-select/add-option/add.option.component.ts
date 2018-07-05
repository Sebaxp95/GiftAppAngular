import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-option',
  templateUrl: './add.option.component.html',
  styleUrls: ['./add.option.component.css']
})
export class AddOptionComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  public ngOnInit(): void {
  }

  handleAdd() {
    this.onAdd.emit();
  }
}
