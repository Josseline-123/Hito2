import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Register from "./components/Register"
import Login from "./components/Login"


function App() {
 
  return (
    <>

    <Navbar />

    <Register/>

    <Login/>
    
  <main >
    
      <h1> ¡Pizzeria Mamma Mia!</h1>
      <img src="./img/Header.jpg" className="img"/>
      </main> 
     
   <main className="container">
  <section className= "row">
    <Card img="./img/cupon-5.jpg" nombre="Napolitana" ingredientes="mozzarella, tomates, jamón, orégan"   oferta="$5950"/>
    <Card img="./img/cupon-2.jpg" nombre="Española" ingredientes="mozzarella, gorgonzola, parmesano, provolone"   oferta="$6950"/>
    <Card img="./img/cupon-4.jpg" nombre="Pepperoni" ingredientes="mozzarella, pepperoni, orégano" oferta="$6950"/> 
    </section>  
  </main>
      
 <Footer/>

</>

)
}

export default App

