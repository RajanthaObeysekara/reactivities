import { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/homePage';
import { Route,Routes,useLocation } from 'react-router-dom';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <NavBar></NavBar>
      <Container style={{ marginTop: '7em' }}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/activities' element={<ActivityDashboard/>} />
          <Route path='/activities/:id' element={<ActivityDetails/>} />
          <Route key={location.key} path='/createActivity' element={<ActivityForm/>} />
          <Route key={location.key} path='/manage/:id' element={<ActivityForm/>} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default observer(App);
