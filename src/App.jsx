import React, { Suspense } from 'react';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Foods from './Components/Foods';

const App = () => {
  const foodDataFetch = fetch('https://food-server-psi-three.vercel.app/foods')
  .then(res=>res.json())
  return (
    <div>
      

        <NavBar></NavBar>
        <Banner></Banner>

        <Suspense fallback={<div className='flex flex-col items-center'>
        <span className="loading loading-dots loading-xl"></span>
      </div>}>
        <Foods foodDataFetch={foodDataFetch}></Foods>
      </Suspense>

    </div>
  );
};

export default App;