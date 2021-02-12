import Header from './components/header/header';
import SubHeader from './components/subheader/subheader';
import ServicesPage from './pages/services/services';
import './App.css';

const App = ({users}) => (
    <div>
      <Header />
      <SubHeader />
      <ServicesPage users={users} />
    </div>
);

export default App;
