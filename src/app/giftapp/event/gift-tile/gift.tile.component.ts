import { Product } from '../../model/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gift-tile-component',
  templateUrl: './gift.tile.component.html',
  styleUrls: ['./gift.tile.component.css']
})
export class GiftTileComponent implements OnInit {
  @Input() product: Product;
  @Output() onVoteBad = new EventEmitter();
  @Output() onVoteGood = new EventEmitter();
  @Output() onAddToPollClick = new EventEmitter();

  public ngOnInit(): void {
  }

  handleVoteBad() {
    this.onVoteBad.emit(this.product);
  }

  handleVoteGood() {
    this.onVoteGood.emit(this.product);
  }

  handleAddToPollClick() {
    this.onAddToPollClick.emit(this.product);
  }

}
