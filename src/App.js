import {StrictMode} from 'react'
import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import Hooks from './componnts/hooks';
import Booking from './componnts/Booking';
import 'bootstrap/dist/css/bootstrap.css'
import Total from './componnts/total';
import Propsdemo from './componnts/propsdemo';
import Success from './componnts/successfullticket';
import Validform from './componnts/validfom';
import New from './componnts/new';
import Summa from './componnts/summa';
import Formsubmission from './componnts/formsubmiaaion';
function App() {
  return (
    <Router>
      <ul class="nav">
  <li class="nav-item">
    <Link to="/total" class="nav-link active">Movies</Link>
  </li>
  <li class="nav-item">
    <Link to="/Booking" class="nav-link">Tickets</Link>
  </li>
  {/* <li class="nav-item">
  <Link to="/validform" class="nav-link" >Signin</Link>
  </li> */}
  <li class="nav-item">
  <Link to="/propsdemo" class="nav-link" >AboutUs</Link>
  </li>
  <li class="nav-item">
  <Link to="/summa" class="nav-link" >ContactUs</Link>
  </li>
</ul>
<Routes>
  <Route path="/total" element={<Total/>}/>
  <Route path="/Booking" element={<Booking/>}/>
  <Route path="/Success" element={<Success/>}/>
  <Route path="/propsdemo" element={<Propsdemo/>}/>
  <Route path="/validform" element={<Validform/>}/>
  <Route path="/summa" element={<Summa/>}/>
</Routes>
    </Router>
  );  
}

export default App;
