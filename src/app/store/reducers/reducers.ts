import * as ItemListReducer from './item-list.reducer';
import * as PeopleListReducer from './people-list.reducer';

export interface AppState{
    items : ItemListReducer.ItemListState,
    people : PeopleListReducer.PeopleListState
}

