import {Dispatch} from "redux";
import {TodoActions, TodoActionTypes} from "../types/todo";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: TodoActionTypes.SET_TOTAL_COUNT_TODOS, payload: parseInt(response.headers["x-total-count"])})
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (err) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "Error"})
        }
    }
}

export function setTodosPage(page: number): TodoActions {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}