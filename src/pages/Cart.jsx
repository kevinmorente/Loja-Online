import React from 'react'
import { useState } from 'react';
import { getItem, setItem } from '../services/LocalStorage'
import { BsCartDashFill } from "react-icons/bs";
import './allPages.css';
import { Header } from '../components/Header';


export const Cart = () => {
    const [data, setData] = useState(getItem('carST') || []);

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carST', arrFilter)
    }

  return (
    <div className='divMain'>
        <Header/>
        <div className='blockStore'>{
                data.map((e) => (
                    <div className='blockStoreUnit' key={e.id}>
                        <p1>{e.title}</p1>
                        <img src={e.thumbnail} alt="" />
                        <h4>R${e.price}</h4>
                        <button onClick={() => removeItem(e)}>
                            <BsCartDashFill />
                        </button>
                    </div>
                ))
            }
        </div>
        <main className='hero'></main>
    </div>
  )
}

