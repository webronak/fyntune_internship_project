import './App.css';
import LoginPage from './Pages/Login-page';
import ProductPage from './Pages/Products-page' 
import StatusPrompt  from './Components/Status-prompt';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
    <StatusPrompt />
    {/* {
      props.currentUser.user?
      <ProductPage/>
      :
      <LoginPage />
    } */}
    <ProductPage/>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser:state.user
})

export default connect(mapStateToProps)(App);
