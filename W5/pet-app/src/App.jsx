import { useState } from 'react'
import './App.css'
import Pets from './petshop/Pets'
import ProductsRodent from './petshop/ProductsRodent'
import ProductsReptiles from './petshop/ProductsReptiles'
import ProductsFish from './petshop/ProductsFish'

function App() {

  //tilamuuttuja
  const [activeItemName, setActiveItemName] = useState('');
  //output
  let output;
  //switch case
  switch(activeItemName){
    case "Rodent":
      output=<ProductsRodent/>
      break;

    case "Reptile":
      output=<ProductsReptiles/>
      break;

     case "Fish":
      output=<ProductsFish/>
      break; 
  }



  return (
      <div>
        <h1>Eläinkauppa</h1>
        <Pets 
          activeItemName={activeItemName}
          updateActiveItem={(newActiveItem) => setActiveItemName(newActiveItem)}
        />
        {output}
      </div>
  )
}

export default App
