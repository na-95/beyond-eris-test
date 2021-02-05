import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header';
import './custom-css/custom.css';
import ConferenceOverview from './page-components/ConferenceOverview';
import Registration from './page-components/Registration';
import TravelInformation from './page-components/TravelInformation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Route path='/' component={Header}/>
      <Route path='/ConferenceOverview' component={ConferenceOverview}/>
      <Route path='/Registration' component={Registration}/>
      <Route path='/TravelInformation' component={TravelInformation}/>
      <Route path='/' component={Footer}/>
    </Router>
  );
}

export default App;
