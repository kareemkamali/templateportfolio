import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,

  Routes
} from 'react-router-dom';
import HomePages from './Pages/HomePages';
import AdminPage from './Pages/AdminPage';

// const HomePage = React.lazy(() =>  import('./Pages/HomePages.js'));
// const SecondPage = React.lazy(() => import('./Pages/SecondPage.js'));

function App() {

  useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
  console.log(latitude+' '+ longitude);
})

console.log('ggg');

  },[])
  return (
    <> 
 <Router>  
   
  
   <Routes>

{/* 
   <Route path="/" exact>
     <Redirect to='/homePage'  />
     </Route> */}
    <Route path='/' element={<HomePages></HomePages>} > 

    </Route>
   
    <Route path='/admin' element={
      <AdminPage></AdminPage>
    }> 

    </Route>

   </Routes>
  
 </Router>
 </>
  );
}


export default App;
