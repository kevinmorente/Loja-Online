import React, { useEffect, useState } from 'react'
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import {getItem, setItem} from '../services/LocalStorage';
import './storeAndCartStyle.css';
import { Header } from '../components/Header';
import {ScrollToTopButton} from '../components/scrollbtn';

export const Store = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carST') ||[]);

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
            const response = await fetch(url)
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchApi()
    }, [])

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('carST', arrFilter)
        } else {
            setCart([...cart,obj])
            setItem('carST', [...cart,obj])
        }
        
    }

  return (
    <div className='divMain'>
        <Header/>
        <div className='blockStore'>
            {data.map((e) => (
                <div className='blockStoreUnit' key={e.id}>
                    <p1>{e.title}</p1>
                    <img src={e.thumbnail} alt="" />
                    <h4>R${e.price}</h4>
                    <button onClick={() => handleClick(e)}>
                        {
                            cart.some((itemCart) => itemCart.id === e.id) ? (
                                <BsFillCartCheckFill/>
                            ): (
                                <BsFillCartPlusFill/>
                            )
                        }
                    </button>
                </div>
            ))}
        </div>
        <ScrollToTopButton />
        <main className='hero'></main>
    </div>
  )
}
