import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import apiService from './AppService';

// function submit(e) {
//   console.log("submitted", e)
// }

function add(a, b) {
  return a + b;
}

function App() {

  const [productName, setProductName] = useState("Apple")
  const [quantity, setQuantity] = useState(1)
  const [result, setResult] = useState("");



  let submit = (e) => {
    // console.log("submitted", e)
    // let studentNameElement = document.getElementById("stuName");
    // studentName = studentNameElement.value;
    // result = `Hello, ${studentName}.`
    // setResult(`Hello, you have ordered ${quantity} ${productName}(s).`)
    apiService.submitOrder(productName, quantity)
    .then(product => setResult(`Hello, you have ordered ${product.quantity} ${product.name}(s) so far.`))
    .catch(err => setResult("Error in communicating to the backend services."))

  }

  let changeProductName = (e) => {
    console.log("newName", e.target.value);
    setProductName(e.target.value);
  }



  return (
    <div>
      <div className="App">
        <div className='Subject'>Please enter the product name and quantity that you like to order:</div>
        Product Name: <input value={productName} onChange={changeProductName}/><br/>
        Quantity: <input value={quantity} onChange={e => setQuantity(e.target.value)}/><br/>
        <button onClick={submit}>Submit</button>
      </div>
      <div>
        <div className='Result'>{result}</div>
      </div>
    </div>
  );
}

export default App;
