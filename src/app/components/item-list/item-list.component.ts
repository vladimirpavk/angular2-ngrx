import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  private itemList:Item[] = [];

  private itemName:string;
  private itemSize:number;

  constructor() { }

  ngOnInit() {
    this.itemList=[
      new Item("Peskir", 20),
      new Item("Papuče", 5),
      new Item("Igračke", 25)
    ]
  }

  public insert():void{
    //console.log(this.itemName+" - "+this.itemSize);
    this.itemList=[...this.itemList, new Item(this.itemName, this.itemSize)];
  }

}
