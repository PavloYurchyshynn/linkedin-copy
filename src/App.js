import { Route, Redirect } from 'react-router-dom';
import './App.css';
import DialogPageContainer from './components/Header/DialogPage/DialogPageContainer';
import Header from './components/Header/Header';
import HomePageContainer from './components/Header/HomePage/HomePageContainer';
import JobsPageContainer from './components/Header/JobsPage/JobsPageContainer';
import MyNetworkPageContainer from './components/Header/MyNetworkPage/MyNetworkPageContainer';
import NotificationsPageContainer from './components/Header/NotificationsPage/NotificationsPageContainer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className='AppWrapper'>
        <div>
          <Route path='/home' render={() => <HomePageContainer />} />
        </div>
        <div>
          <Route path='/mynetwork' render={() => <MyNetworkPageContainer />} />
        </div>
        <div>
          <Route path='/jobs' render={() => <JobsPageContainer />} />
        </div>
        <div>
          <Route path='/dialogs' render={() => <DialogPageContainer />} />
        </div>
        <div>
          <Route path='/notifications' render={() => <NotificationsPageContainer />} />
        </div>
        <Redirect from='/' to='/home'/>
      </div>
    </div>
  );
}

export default App;
