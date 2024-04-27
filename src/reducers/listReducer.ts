import { Item } from "@/types/Item";

// A type to Add
type AddItemAction = {
    type: 'addItem';
    payload: {
        text: string
    };
}

type EditItemAction = {
    type: 'editItem';
    payload: {
        id: number,
        text: string
    };
}

type ToggleItemAction = {
    type: 'toggleItem';
    payload: {
        id: number
    };
}

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