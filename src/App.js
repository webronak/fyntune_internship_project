import './App.css';
import LoginPage from './Pages/Login-page';
import ProductPage from './Pages/Products-page' 
import StatusPrompt  from './Components/Status-prompt';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import { connect } from 'react-redux';
// for routing
import { Route, Redirect  } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
    <StatusPrompt />
    {/* {
      props.currentUser.user?
      <Navbar/>:""
    } */}
    {/* <Route exact path="/" render={()=>props.currentUser.user?(<Redirect to="/products" />):(<LoginPage />)} /> */}
    <Route exact path="/products" component={ProductPage}/>
    <Navbar/>
    <Route exact path="/cart" component={Cart}/>
    
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser:state.user
})

export default connect(mapStateToProps)(App);
