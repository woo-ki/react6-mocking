// import './App.css';

// import TestMocking from "./components/TestMocking";
// import Counter from "./features/counter/Counter";
// import Counter2 from "./components/Counter2";
// import MobxExample from "./components/MobxExample";
import TodoList from "./components/TodoList";
import {observableTodoStore} from "./app/ObservableTodoStore";

function App() {
    return (
        <div className="App">
            {/*<TestMocking/>*/}
            {/*<Counter/>*/}
            {/*<br/>*/}
            {/*<Counter2/>*/}
            {/*<MobxExample/>*/}
            <TodoList store={observableTodoStore}/>
        </div>
    );
}

export default App;
