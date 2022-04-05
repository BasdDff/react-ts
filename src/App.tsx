import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UsersPage from "./pages/UsersPage";
import TodosPage from "./pages/TodosPage";
import Test from "./pages/Test";
import UserItemPage from "./pages/UserItemPage";
import Layout from "./components/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/users/:userId" element={<UserItemPage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="*" element={<div>Page not found </div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App