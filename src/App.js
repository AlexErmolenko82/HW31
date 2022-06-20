import { Provider } from "react-redux";

import store from "./store";

import InvestmentCard from "./components/InvestmentCard";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div>Hello Redux!</div>

      <InvestmentCard />

      {/* <TodoList /> */}
    </Provider>
  );
}

export default App;
