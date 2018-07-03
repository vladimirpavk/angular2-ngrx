import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { Store } from '@ngrx/store';
import { ItemListState } from '../../store/reducers/item-list.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

//  private itemList:Item[] = [];
  private itemList:Observable<ItemListState>;

  private itemName:string;
  private itemSize:number;
  
  constructor(public store:Store<ItemListState>) { }

  ngOnInit() {
    /*this.itemList=[
      new Item("Peskir", 20),
      new Item("Papuče", 5),
      new Item("Igračke", 25)
    ]*/
    this.itemList=this.store.select('itemList');

    this.itemList.subscribe((data:ItemListState)=>{
      console.log(data);
    })
  }

  public insert():void{
    //console.log(this.itemName+" - "+this.itemSize);
    //this.itemList=[...this.itemList, new Item(this.itemName, this.itemSize)];
  }

}
