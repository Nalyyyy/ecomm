import React from 'react'
import '../style/home.css'
import Card from '../components/Card'
import Slider from '../components/Slider'
import MetaData from '../components/MetaData'

export default function Home() {
  return (
    <div className='Home'>
        <Slider/>
        <section className='populaires'>
            <MetaData title={'Home'}/>
            <h1>Les populaires</h1>
            <p>Découvrez les articles les plus populaires</p>
            <div className='cards'>
                <Card title={'Longines Evidenza'} price={'1400'}/>
                <Card title={'Seiko 5'} price={'200'}/>
                <Card title={'Cartier Esperanza'} price={'15600'}/>
                <Card title={'Casio G-Shock'} price={'150'}/>
            </div>
            <button>SHOP ALL</button>
        </section>
    </div>
  )
}

