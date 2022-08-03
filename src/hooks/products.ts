import { products } from './../data/products';
import axios, {AxiosError} from 'axios'
import  {useState, useEffect} from 'react'
import { IProduct } from '../models'


export function useProduct () {
    
    const [products, SetProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  function addProduct(product: IProduct) {
    SetProducts(prev=> [...prev, product] )
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
          const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
          SetProducts(response.data)
          setLoading(false)
    } catch(e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }
  useEffect(() =>{
    fetchProducts()  
  }, [])

  return {products,loading, error, addProduct}
}