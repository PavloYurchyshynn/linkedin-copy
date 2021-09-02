import { Route } from 'react-router-dom';
import './App.css';
import DialogsPage from './components/Header/DialogPage/DialogPage';
import Header from './components/Header/Header';
import HomePage from './components/Header/HomePage/HomePage';
import JobsPage from './components/Header/JobsPage/JobsPage';
import MyNetworkPage from './components/Header/MyNetworkPage/MyNetworkPage';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className='AppWrapper'>
        <Route path='/home' render={() => <HomePage/>} />
      </div>
      <div>
        <Route path='/mynetwork' render={() => <MyNetworkPage state={props.state}/>} />
      </div>
      <div>
        <Route path='/jobs' render={() => <JobsPage state={props.state}/>} />
      </div>
      <div>
        <Route path='/dialogs' render={() => <DialogsPage state={props.state}/>} />
      </div>
    </div>
  );
}

export default App;
