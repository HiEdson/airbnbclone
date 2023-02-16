import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Cards.css'
import { Outlet, Link } from "react-router-dom";


const Cards = (props) => {
    const item = props.item; 
    const mappingImg = props.item ?
        props?.item.images.map((i, k) => (
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded slideImg" key={k}
                    src={i}
                    alt="slide images"
                />
            </Carousel.Item>
        ))
        :
        <Carousel.Item>
            <img
                className="d-block w-100 rounded slideImg"
                src="https://images.unsplash.com/photo-1674574124792-3be232f1957f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="First slide"
            />
        </Carousel.Item>


    return (
        <div className='col-md-4 col-lg-3 col-xl-3 col-12'>
            <div class="card border-0 p-2">
                <Link to={`/rooms/${props.item.id}`} 
                state={{info:item}}
                // to={{
                //     pathname: `/rooms/${props.item.id}`,
                //     state: {info:item}
                // }}
                    style={{ textDecoration: "none", color: "black" }}>
                    {/* style={{ width: "18rem" }} */}
                    <Carousel>
                        {mappingImg}
                    </Carousel>
                    <div class="card-body text-start">
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold m-0'>{props.item.city + ", " + props.item.country}</p>
                            <i class="bi bi-star">4.78</i>
                        </div>
                        <p className='m-0 text-secondary'>300 kilometers away</p>
                        <p className='m-0 text-secondary'>{props.item.startDate + " - " + props.item.endDate}</p>
                        <p className='m-0'><span className='fw-semibold'>{Math.round(Math.random() * (100 - 75) + 75)} $</span> night</p>
                        {/* <h5 class="card-title">Card title</h5> */}
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Cards;