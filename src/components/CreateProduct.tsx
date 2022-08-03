import React, { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios' ;
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
        title: '',
        rating: {
            rate: 42,
            count: 10
        }
    }

    interface CreateProductProps {
        onCreate: (product: IProduct) => void
    }

const CreateProduct = ({onCreate} : CreateProductProps) => {

    

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        if(value.trim().length === 0 ) {
            setError('Please enter valid title');
            return
        }

        productData.title = value;

        const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData)

        onCreate(response.data);


    }

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
            type='text'
            className='bordder py-2 px-4 mb-2 w-full outline-0'
            placeholder='Enter product title...'
            value={value}
            onChange={changeHandler}
            />

            {error && <ErrorMessage error={error}/>}

            <button type='submit' className='py-2 px-4 border bg-yellow-400'>Create</button>
        </form>
    );
};

export default CreateProduct;