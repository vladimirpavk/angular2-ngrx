import { Item } from "../../models/item.model";
import * as ItemListAction from '../actions/item-list.action';

export interface ItemListState{
    data:Item[]    
};

export const initialState:ItemListState = {
    data:[]
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
    }
    return state;
}