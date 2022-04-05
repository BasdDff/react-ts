export interface TodoState {
    todos: any[]
    loading: boolean
    error: null | string
    page: number
    limit: number
    total: number
}

export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TOTAL_COUNT_TODOS = "SET_TOTAL_COUNT_TODOS",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodosSuccess {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}

interface FetchTodosError {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}

interface SetTotalCountTodos {
    type: TodoActionTypes.SET_TOTAL_COUNT_TODOS
    payload: number
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE
    payload: number
}

export type TodoActions = FetchTodosAction | FetchTodosSuccess | FetchTodosError | SetTotalCountTodos | SetTodoPage