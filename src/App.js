import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserProfile } from './redux/user-reducer/user-selector';

import Header from './components/header/header';
import SubHeader from './components/subheader/subheader';

import './App.css';
import UserCard from './components/card/card';
import Acheive from './components/achieve/achieve';
import ServicesNav from './components/nav-in-services/nav-in-services';
import About from './components/about/about';
import PortfolioComp from './components/portfolio/portfolio';
import ServicesCom from './components/services-com/services-com';
import ReviewsCom from './components/reviews/reviews';

const App = ({users}) => (
    <div>
      <Header />
      <SubHeader />
      <UserCard users={users}/>
      <Acheive users={users} />
      <ServicesNav />
      <About users={users}/>
      <PortfolioComp users={users} />
      <ServicesCom users={users} />
      <ReviewsCom users={users} />
    </div>
);

const mapStateToProps = createStructuredSelector({
  users: selectUserProfile
})

export default connect(mapStateToProps)(App);
