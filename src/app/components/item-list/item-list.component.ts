import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  private itemList:ItemModel[] = [];

  private itemName:string;
  private itemSize:number;

  constructor() { }

  ngOnInit() {
    this.itemList=[
      new ItemModel("Peskir", 20),
      new ItemModel("Papuče", 5),
      new ItemModel("Igračke", 25)
    ]
  }

  public insert():void{
    //console.log(this.itemName+" - "+this.itemSize);
    this.itemList=[...this.itemList, new ItemModel(this.itemName, this.itemSize)];
  }

}
