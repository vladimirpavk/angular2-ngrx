import { People } from "../../models/people.model";
import * as PeopleListAction from '../actions/people-list.action';

export interface PeopleListState{
    data:People[]    
};

export const initialState:PeopleListState = {
    data:[]
};

export function reducer(state=initialState, action:PeopleListAction.PeopleActions):PeopleListState{
    switch(action.type){
        case PeopleListAction.LOAD_PEOPLE:{
            return {
                ...state
            }
        }
        case PeopleListAction.ADD_PEOPLE:{
            return{                
                data:[...state.data, (<PeopleListAction.AddPeople>action).payload]
            }
        }
    }
    return state;
}