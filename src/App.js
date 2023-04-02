import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Link,Route,useNavigate,Switch } from 'react-router-dom'
import Show from './components/Show';
import Form from './components/Movieform';

function App() {
  
 const[items,setItems] = useState([]);
 const navigate =useNavigate()
const fetchProducts =async()=>{
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
  const data =await res.json();
    console.log(data[1].show.image)
     setItems(data)
   
 
}
  <Router>
<Route path="/Show" element={<Show />}/>

  </Router>
 


{/* <Switch>
 
  <Route path="/newpage">
  <Show />
  </Route>
</Switch>
   */}
 


useEffect(()=>{
 fetchProducts()

},[])

  return (
  //  <div className='movie_list'>
  //     { items.map((i, index) => (
  //         <>
        
  //         <div className='movie_card' key={i.id}>
          
  //         <Link to="/Show">
  //         <button >Click</button>
  //           </Link>
      
  //         <h2>{i.score}</h2>
  //         <h3>{i.show.name}</h3>
  //         <img src={i.show.image} />
  //         </div>
          
        
  //         </> 
  //         ))}
  //   </div>
  <>

  <button onClick={navigate('/show')}>Open New Page</button>

<Show/>
  </>
  
  
  
  );
}

export default App;
