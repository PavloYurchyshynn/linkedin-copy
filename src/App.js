import { Route } from 'react-router-dom';
import './App.css';
import DialogsPage from './components/Header/DialogPage/DialogPage';
import Header from './components/Header/Header';
import HomePage from './components/Header/HomePage/HomePage';
import JobsPage from './components/Header/JobsPage/JobsPage';
import MyNetworkPage from './components/Header/MyNetworkPage/MyNetworkPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Route path='/home' render={() => <HomePage />} />
      </div>
      <div>
        <Route path='/mynetwork' render={() => <MyNetworkPage />} />
      </div>
      <div>
        <Route path='/jobs' render={() => <JobsPage />} />
      </div>
      <div>
        <Route path='/dialogs' render={() => <DialogsPage />} />
      </div>
    </div>
  );
}

export default App;
