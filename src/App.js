import './App.css';
import LoginPage from './Pages/Login-page';
import ProductPage from './Pages/Products-page' 
import StatusPrompt  from './Components/Status-prompt';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import CheckOutPage from './Pages/Checkout-page';
import { connect } from 'react-redux';
// for routing
import { Route, Redirect  } from 'react-router-dom';

function App(props) {
  return (  
    <div className="App">
    {
      props.currentUser?
      <>
      <StatusPrompt />
    {
      props.currentUser.user?
      <Navbar/>:""
    }
    <Route exact path="/" render={()=>props.currentUser.user?(<Redirect to="/products" />):(<LoginPage />)} />
    <Route exact path="/products" component={ProductPage}/>
    <Route exact path="/check_out" component={CheckOutPage}/>
    <Route exact path="/cart" component={Cart}/>
      </>
      :
    <Route exact path="/" render={()=>props.currentUser.user?(<Redirect to="/products" />):(<LoginPage />)} />
    }
    
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser:state.user
})

export default connect(mapStateToProps)(App);
