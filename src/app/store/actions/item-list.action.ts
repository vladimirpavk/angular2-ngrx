import { Action } from '@ngrx/store';

import { Item } from '../../models/item.model';

export const LOAD_ITEMS:string = 'LOAD_ITEM';
export const LOAD_ITEMS_SUCCESS:string = 'LOAD_ITEM_SUCCESS';
export const LOAD_ITEMS_FAIL:string = 'LOAD_ITEM_FAIL';
export const ADD_ITEM:string = 'ADD_ITEM';

export class LoadItems implements Action{
    public readonly type:string = 'LOAD_ITEMS';
}

export class LoadItemsSuccess implements Action{
    public readonly type:string = 'LOAD_ITEMS_SUCCESS';
    constructor(public payload:Item[]){}
}

export class LoadItemsFail implements Action{
    public readonly type:string = 'LOAD_ITEMS_FAIL';
    constructor(public payload:any){}
}

export class AddItem implements Action{
    public readonly type:string = 'ADD_ITEM';
    constructor(public payload:Item){}
}

export type ItemsActions = LoadItems | LoadItemsFail | LoadItemsSuccess | AddItem;

