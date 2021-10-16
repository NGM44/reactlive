import { Route, Switch } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/NewMeetUp';
import Layout from './component.js/layout/layout';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/newmeet" exact>
          <NewMeetUp />
        </Route>

        <Route path="/fav">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
