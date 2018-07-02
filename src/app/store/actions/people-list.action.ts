import { Action } from '@ngrx/store';

import { People } from '../../models/people.model';

export const LOAD_PEOPLE:string = 'LOAD_PEOPLE';
export const LOAD_PEOPLE_SUCCESS:string = 'LOAD_PEOPLE_SUCCESS';
export const LOAD_PEOPLE_FAIL:string = 'LOAD_PEOPLE_FAIL';
export const ADD_PEOPLE:string = 'ADD_ITEM';

export class LoadPeople implements Action{
    public readonly type:string = 'LOAD_PEOPLE';
}

export class LoadPeopleSuccess implements Action{
    public readonly type:string = 'LOAD_PEOPLE_SUCCESS';
    constructor(public payload:People[]){}
}

export class LoadPeopleFail implements Action{
    public readonly type:string = 'LOAD_PEOPLE_FAIL';
    constructor(public payload:any){}
}

export class AddPeople implements Action{
    public readonly type:string = 'ADD_PEOPLE';
    constructor(public payload:People){}
}

export type PeopleActions = LoadPeople | LoadPeopleFail | LoadPeopleSuccess | AddPeople;

