import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectUserProfile} from './redux/user-reducer/user-selector';

import Header from './components/header/header';
import SubHeader from './components/subheader/subheader';

import './App.css';
import UserCard from './components/card/card';


const App = ({users}) => (
    <div>
      <Header />
      <SubHeader />
      <UserCard users={users}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
  users: selectUserProfile
})

export default connect(mapStateToProps)(App);
