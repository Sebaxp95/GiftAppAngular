import { Product } from '../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gift-tile-component',
  templateUrl: './gift.tile.component.html',
  styleUrls: ['./gift.tile.component.css']
})
export class GiftTileComponent implements OnInit {
  @Input() public product: Product;
  @Input() public onVoteBad: (name: string) => void;
  @Input() public onVoteGood: (name: string) => void;
  @Input() public onAddToPollClick: (name: string) => void;

  public ngOnInit(): void {
  }
}
