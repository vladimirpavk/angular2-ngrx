import { Item } from "../../models/item.model";
import * as ItemListAction from '../actions/item-list.action';

export interface ItemListState{
    data:Item[]    
};

const initialState:ItemListState = {
    data:[ 
        new Item("Vladimir", 5),
        new Item("Nataša", 4),
        new Item("Pavle", 5)
    ]
};

export function reducer(state=initialState, action:ItemListAction.ItemsActions):ItemListState{
    switch(action.type){
        case ItemListAction.LOAD_ITEMS:{
            return {
                ...state
            }
        }
        case ItemListAction.ADD_ITEM:{
            return{                
                data:[...state.data, (<ItemListAction.AddItem>action).payload]
            }
        }
        case ItemListAction.REMOVE_ITEM:{
            return{
                data: state.data.splice((<ItemListAction.RemoveItem>action).payload, 1)
            } 
        }
    }
    return state;
}