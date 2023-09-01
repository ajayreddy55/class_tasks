import ClickCounter from './components/clickcounter';
import Speedometer from './components/speedometer';
import FruitsCounter from './components/fruits-counter';
import WelcomeApp from './components/welcome-app';
import ShowHideApp from './components/show-hide-app';
import EvenOdd from './components/even-odd-app';
import LoginUser from './components/login-app';
import './App.css';

const App = () => {
  return (
    <>
      <ClickCounter />
      <Speedometer />
      <FruitsCounter />
      <WelcomeApp />
      <ShowHideApp />
      <EvenOdd />
      <LoginUser />
    </>
  );
}

export default App;
