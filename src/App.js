import MainPage from './pages/mainPage/MainPage'
import UsersPage from './pages/usersPage/UsersPage'
import {useState} from "react";
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {!user ? (
          <UsersPage onUserSubmit={setUser} />
      ) : (
          <MainPage user={user} />
      )}
    </div>
  );
}

export default App;
