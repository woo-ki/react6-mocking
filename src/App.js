// import './App.css';

// import TestMocking from "./components/TestMocking";
// import Counter from "./features/counter/Counter";
// import Counter2 from "./components/Counter2";
// import MobxExample from "./components/MobxExample";
// import TodoList from "./components/TodoList";
// import {observableTodoStore} from "./app/ObservableTodoStore";

// import {RecoilRoot} from "recoil";
// import FontButton from "./components/RecoilExample/FontButton";
// import Text from "./components/RecoilExample/Text";
// import CharacterCounter from "./components/RecoilExample/CharacterCounter";
// import TodoList from "./components/RecoilExample/Todo/TodoList";
// import CurrentUserInfo from "./components/RecoilExample/CurrentUserInfo";

import Text from "./components/ZustandExample/Text";
import CharacterCounter from "./components/ZustandExample/CharacterCounter";

function App() {
    return (
        <div className="App">
            {/*<TestMocking/>*/}
            {/*<Counter/>*/}
            {/*<br/>*/}
            {/*<Counter2/>*/}
            {/*<MobxExample/>*/}
            {/*<TodoList store={observableTodoStore}/>*/}
            {/*<RecoilRoot>*/}
            {/*    <CurrentUserInfo/>*/}
            {/*    <br/>*/}
            {/*    <TodoList/>*/}
            {/*    <br/>*/}
            {/*    <CharacterCounter/>*/}
            {/*    <FontButton/>*/}
            {/*    <Text/>*/}
            {/*</RecoilRoot>*/}
            <Text/>
            <CharacterCounter/>
        </div>
    );
}

export default App;
