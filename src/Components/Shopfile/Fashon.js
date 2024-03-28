import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop1 from './Shop1';
import Fashon from './Fashon';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Shop1} />
        <Route path="/Fashon" component={Fashon} />
      </Switch>
    </Router>
  );
}

export default App;
