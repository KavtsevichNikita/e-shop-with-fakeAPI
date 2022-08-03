import { useState } from "react";
import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { useProduct } from "./hooks/products";
import { IProduct } from "./models";

function App() {


  const [modal, setModal] = useState(false)
  const {loading, error, products,addProduct} = useProduct()

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader/>}
      { error && <ErrorMessage error={error}/>}
      {products.map(product => <Product product={product} key={product.id}/>)}

      {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}


      <button onClick={() => setModal(true)}>+</button>
    </div>

  );
}

export default App;
