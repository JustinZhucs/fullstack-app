import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './HomePage'
import Login from './AppLogin'
import { useEffect, useState } from 'react';
import apiService from './AppService';

function App() {

  const [productName, setProductName] = useState("Apple")
  const [quantity, setQuantity] = useState(1)
  const [result, setResult] = useState("");

  const [loggedIn, setLoggedIn] = useState(false)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  // const [loginError, setLoginError] = useState('')


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

  let postLogin = (firstName, lastName) => {
    setLoggedIn(true);
    setCurrentUser({firstName: result.firstName, lastName: result.lastName});
  }
  // let login = () => {
  //   // setLoggedIn(true);
  //   apiService.login(email, password)
  //   .then(result => {
  //     if (result.status) {
  //       console.log("login succeeded", result);
  //       setLoggedIn(true);
  //       setCurrentUser({firstName: result.firstName, lastName: result.lastName});
  //       setLoginError('');
  //     } else {
  //       console.log("login failed", result);
  //       setLoginError("Invalid Email or Password");
  //     }
  //   })
  //   .catch(err => {
  //     console.log("error occured")
  //     setLoginError("error occured");
  //   })
  // }

  return (
    <div>
      <div className="App">
        <div className='Subject'>Please enter the product name and quantity that you like to order:</div>
        Product Name: <input value={productName} onChange={changeProductName} /><br />
        Quantity: <input value={quantity} onChange={e => setQuantity(e.target.value)} /><br />
        <button onClick={submit}>Submit</button>
      </div>
      <div>
        <div className='Result'>{result}</div>
      </div>
      <div className="App">
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter> */}
      {loggedIn && <div>Hello {currentUser.firstName} {currentUser.lastName}, Welcome to the app</div>}
      {!loggedIn && <Login productName={productName} updateLoginResult={postLogin}/>}
      </div>

    </div>
  );
}

export default App;
