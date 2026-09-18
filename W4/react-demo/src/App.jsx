import  Welcome from './w4l1/Welcome'
import DateNow from './w4l1/DateNow'
import ProductCard from './w4l2/ProductCard'
import Counter from './w4l3/Counter'
import ControlledInput from './w4l3/ControlledInput'

function App() { // react komponentti, palauttaa jsx

    return(
      <div>
        <Counter/>
        <ControlledInput/>
      </div>
    )
  /* const nimi = "Mona";
  const products = [
    {
      name: "Carrot",
      price: 2,
      inStock: true,
      amount: 20
    },
    {
      name: "Potato",
      price: 0.9,
      inStock: false,
      amount: 0
    },
    {
      name: "Apple",
      price: 3,
      inStock: false,
      amount: 0
    },
    {
      name: "Banana",
      price: 1.2,
      inStock: true,
      amount: 50
    }
  ];

  return (
    <div>
      <ProductCard name="Carrot" price = {2} inStock = {true}/>
      <ProductCard name="Potato 1kg" price = {0.9} inStock = {false}/>
      <ProductCard name="Apple" price = {3} inStock = {true}/>

      <h1>Map example:</h1>
      {
        products.map(pInfo => 
          <ProductCard 
            name = {pInfo.name} 
            price = {pInfo.price} 
            inStock = {pInfo.inStock}
            amount = {pInfo.amount}
          />)
      }

      <h1>In stock:</h1>
      {
        products.map(forSale =>
          <ProductCard
            name = {forSale.name}
            price = {forSale.price}
            inStock = {forSale.inStock}
            amount = {forSale.amount}
          />
        )
      }

      {<div>Hello world!</div> 
      <div>Hello {nimi}!</div>
      <Welcome/>
      <DateNow/>}
    </div>
  )*/
}

export default App
