import { createStore, combineReducers } from "redux";
import TaskEvent from "../components/task/taskEvent";

const appReducer = combineReducers({
    taskReducer: TaskEvent,
})

const store = createStore(
    appReducer,
    undefined,
    undefined
)

export default store
