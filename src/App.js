
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
   <List  
   // Here i pass array having some element 
    items={[
      {text:"Hello This is Prince Kumar"},
      {text:"Hello This is Adarsh Shukla"},
      {text:"Hello This is Akash Mishra"},
      {text:"Hello This is Anshul Singh"},
      {text:"Hello This is Rishabh Kumar"},
      {text:"Hello This is Soumya Ranjan"},
      {text:"Hello This is Pramod Kumar Gupta"}
    ]}

   />
    </div>
  );
}

export default App;
