import React , {useState,useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/font/Footer/Footer';
import data from './components/back/Data/Data';
import Header from './components/font/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/font/Routes/Routes';
import axios from "axios";
import './App.css';

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

function App() {
  //const {productItems} = data;
  

  const[productItems,setData] = useState([])

  const loadData = async () => {
      const responce = await axios.get('http://localhost:5000/api/get');
      setData(responce.data);
      console.log(data)
  }
  
  useEffect(() =>{
      loadData();
  },[]);

  const [cartItems, setcartItems] = useState([]);


const handlerAddProduct = (product) =>{
    const existingProduct = cartItems.find((item) =>item.id === product.id);
    if(existingProduct){
      setcartItems(cartItems.map((item)=> item.id === product.id ? 
      {...existingProduct, quantity : existingProduct.quantity + 1 }: item)
      );
    } else {
      setcartItems([...cartItems,{...product , quantity:1}]);
    }

 }

const  handlerRemoveProduct = (product) =>{

  const productExit = cartItems.find((item) => item.id === product.id);
  if(productExit.quantity === 1){
    setcartItems(cartItems.filter((item)=> item.id !== product.id));
  }else{
    setcartItems(cartItems.map((item) => item.id === product.id ? {...productExit, quantity:productExit.quantity - 1}: item));
  }
}


const handlerClerAllItems = () =>{
  setcartItems([]);
}
  return (
    <div>
      <BrowserRouter> 
            <Header cartItems={cartItems} />
            <Routes  productItems={productItems}  cartItems={cartItems} handlerAddProduct={handlerAddProduct} handlerRemoveProduct={handlerRemoveProduct} handlerClerAllItems={handlerClerAllItems} />
            <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
