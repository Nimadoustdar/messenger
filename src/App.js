import { Route, Switch } from "react-router-dom";
import Chats from "./components/Chats";
import Login from "./components/Login";
import  AuthContextProvider  from "./context/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path='/chats' component={Chats} />
          <Route path='/' component={Login} />
        </Switch>
      </AuthContextProvider>

    </div>
  );
}

export default App;
