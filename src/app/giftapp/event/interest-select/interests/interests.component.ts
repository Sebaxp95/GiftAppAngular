import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  show: boolean = false;

  @Input() public privateInterests: string[];
  @Input() public publicInterests: string[];

  @Output() onPrivateAdd = new EventEmitter();
  @Output() onPrivateRemove = new EventEmitter();
  @Output() onPublicAdd = new EventEmitter();
  @Output() onPublicRemove = new EventEmitter();

  public ngOnInit(): void {
  }

  handlePrivateAdd() {
    this.onPrivateAdd.emit()
  }

  handlePrivateRemove(name: string) {
    this.onPrivateRemove.emit(name)
  }

  handlePublicAdd() {
    this.onPublicAdd.emit()
  }

  handlePublicRemove(name: string) {
    this.onPublicRemove.emit(name)
  }

  handleToggleVisibility() {
    this.show = !this.show;
  }
}
