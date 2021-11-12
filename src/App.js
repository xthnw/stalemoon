
import './App.css';
import Signin from './Signin';
import Profile from './Profile';

function App() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Signin />
  }
  return (
    <div className="wrapper">
          <Profile />
    </div>
  );
}

export default App;
