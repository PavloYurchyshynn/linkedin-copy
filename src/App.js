import { Route, Redirect } from 'react-router-dom';
import './App.css';
import DialogPageContainer from './components/DialogPage/DialogPageContainer';
import Header from './components/Header/Header';
import HomePageContainer from './components/HomePage/HomePageContainer';
import Profile from './components/HomePage/Profile/Profile';
import JobsPageContainer from './components/JobsPage/JobsPageContainer';
import ConnectionsContainer from './components/MyNetworkPage/Connections/ConnectionsContainer';
import MyNetworkPageContainer from './components/MyNetworkPage/MyNetworkPageContainer';
import NotificationsPageContainer from './components/NotificationsPage/NotificationsPageContainer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className='AppWrapper'>
        <Route exact path='/home' render={() => <HomePageContainer />} />
        <Route path='/home/user' render={() => <Profile />} />
        <Route exact path='/mynetwork' render={() => <MyNetworkPageContainer />} />
        <Route path='/mynetwork/connections' render={() => <ConnectionsContainer />} />
        <Route path='/jobs' render={() => <JobsPageContainer />} />
        <Route path='/dialogs' render={() => <DialogPageContainer />} />
        <Route path='/notifications' render={() => <NotificationsPageContainer />} />
        <Redirect from='/' to='/home' />
      </div>
    </div>
  );
}

export default App;
