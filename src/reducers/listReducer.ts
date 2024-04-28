import { Item } from "@/types/Item";

// A type to Add an Item
type AddItemAction = {
    type: 'addItem';
    payload: {
        text: string
    };
}
// A type to Edit an Item
type EditItemAction = {
    type: 'editItem';
    payload: {
        id: number,
        text: string
    };
}
// A type to toggle the state of an Item
type ToggleItemAction = {
    type: 'toggleItem';
    payload: {
        id: number
    };
}
// A type remove an Item from the list
type RemoveItemAction = {
    type: 'removeItem';
    payload: {
        id: number
    };
}

// A type for all Actions
type listActions = AddItemAction | EditItemAction | ToggleItemAction | RemoveItemAction;

let id_num = 0;

export function listReducer(list: Item[], action: listActions) {
    switch (action.type) {
        case 'addItem':
            return [
                ...list,
                {
                    id: id_num++,
                    text: action.payload.text,
                    done: false
                }
            ];
        case 'editItem':
            return list.map(item => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.text;
                }
                return item;
            });
        case 'toggleItem':
            return list.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        done: !item.done
                    };
                }
                return item;
            });
        case 'removeItem':
            return list.filter(item => {
                if (item.id !== action.payload.id) {
                    return item;
                }
            });
        default:
            return list;
    }
}