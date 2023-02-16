import { React, useState } from 'react'
import Navbar from './Navbar';
import Cards from './Cards';
import SubClasses from './SubClasses';
import { data } from '../data.js'
const Home = () => {

    const displayCards = data ?
            data?.map((d, key)=>(
                <Cards item={d}  key={key}/>
            ))
        :
        <div>...loading</div>
    return (
        <>
            <header>
                <Navbar />
                <SubClasses />
            </header>
            <body>
                <div className='container-fluid'>
                    <div className='row'>
                        {displayCards}
                        {/* <Cards data={""} />
                        <Cards data={""} />
                        <Cards data={""} />
                        <Cards data={""} />
                        <Cards data={""} />
                        <Cards data={""} />
                        <Cards data={""} />
                        <Cards data={""} /> */}
                    </div>
                </div>
            </body>
        </>
    )
}

export default Home;