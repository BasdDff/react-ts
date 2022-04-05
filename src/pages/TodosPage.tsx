import React, {FC, useEffect} from 'react';
import {ITodo} from "../types/types";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Paginator} from "../utils/Paginator";

const TodosPage: FC = () => {
    // const [todos, setTodos] = useState<ITodo[]>([])
    //
    // useEffect(() => {
    //     getTodos()
    // }, [])
    //
    // async function getTodos() {
    //     try  {
    //         const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
    //         setTodos(response.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const {todos, error, loading, page, limit, total} = useTypedSelector(state => state.todo)

    const {fetchTodos, setTodosPage} = useActions()

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
            <Paginator totalCount={total} pageSize={limit} currentPage={page} pageChanged={setTodosPage}/>
        </>

    );
};

export default TodosPage;