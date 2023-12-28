// import logo from './logo.svg';
import "./index.css"
import "./App.css"
import products from "./assets/products.json"
import Product from "./Product";

export default function App() {
  return (
    <div className={"container"}>
   {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
      <main className={"main"}>
        <h3>
          Welcome to  Karka E-Kart
        </h3>

        <div className={"grid"}>
          {
            products.map((product, i) => <Product {...product} key={i} />)
          }
        </div>
      </main>
      <div
        id="snipcart"
        data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3" hidden
      >
      </div>
           
    </div>
  );
}