import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import {BrowserRouter,Link, Route} from "react-router-dom";
import{Button}from "reactstrap";
import ContactList from "./components/ContactList";
import AddModal from "./components/AddModal";

function App() {
  return (
    <BrowserRouter>
     <NavBar />
<div className="App">
  <Link to="/list"> <Button color="info" > contact List </Button> </Link>
  <Link to="/form"> <Button > add contact  </Button> </Link>
</div>
<Route exact path="/" render={()=> <h1 style ={{textAlign:"center", color:"white"}}>you can add a new contact or check the contact list   </h1>} />
<Route exact path="/list" render={()=> <ContactList /> } />
<Route exact path="/form" render={()=> <AddModal /> } />

    </BrowserRouter>
  );
}

export default App;
