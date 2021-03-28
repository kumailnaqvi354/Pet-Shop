import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initWeb3, loadAdopters } from './store/adoptSlice';
import PetList  from './components/PetList'
import Adopters from './components/Adopters';

function App() {
  const dispatch = useDispatch();

  
  const web3 = useSelector((state)=>{
    // console.log("state in app= ",state);
    return state.adoptReducer.web3
  })
 
  useEffect(()=>{
    dispatch(initWeb3());
    setTimeout(function (){
      dispatch(loadAdopters())
    },1000 )
  },[web3,Adopters])

 



  return (
    <div>
      Hello Dapp web 3
      <PetList />
    </div>
  );
}

export default App;