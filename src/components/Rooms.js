import {React, useState}  from 'react'
import Navbar from './Navbar';
import './Rooms.css'
import parse from 'html-react-parser';
import {useLocation } from "react-router-dom";

const { Configuration, OpenAIApi } = require("openai");


const Rooms = (props) => {
    const [tableVal, setTableVal] = useState(null)
    const [tableProcessing, setTableProcessing] = useState(false);
    const location = useLocation()
    const placeInfo = location.state.info
    // console.log(location.state.info)

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    //function here
    const GenerateTravelPlan = async (targetPlace)=>{
        setTableProcessing(true);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Please generate an HTML table with a class named "myTable" that showcases a three-day schedule for visiting ${targetPlace}. Each day should contain two activities, their start times and a short description.`,
            temperature: 0.9,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.2,
            presence_penalty: 0.0,
        });
        setTableVal(response.data.choices[0].text)
        console.log(response)
        console.log(response.data.choices[0].text)
        setTableProcessing(false)
    }

    const imagesGallery = placeInfo?.images.slice(1,placeInfo?.images.lenght).map((i, k)=>(
        <div className='col-12 col-md-6 px-1 my-1' key={k}>
            <img src={i}
                className='rounded smallImg'/>
        </div>
    ))
            //bad example Create a HTML table with a class name myTable with plan to visit  during 3 days and for each day give 2 activities with starting time and a very short comment about the activity.
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <div className='container mt-4'>
                    <div>
                        <h2>Central 1bedroom apt by the sea</h2>
                        <span><i class="bi bi-star-fill"></i>4.34 · 202 reviews | Superhost · {placeInfo?.city + ", " + placeInfo?.country}</span>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-12 col-lg-7 col-xl-7 '>
                            <img src={placeInfo.images[0]}
                                className='rounded-start mainImg' alt='' />
                        </div>
                        <div className='col-12 col-md-12 col-lg-5 col-xl-5'>
                            <div className='row'>
                                {imagesGallery}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container my-5'>
                    <div className='text-center'>
                        <button className='btn btn-lg btn-primary w-50 text-center' onClick={() => { GenerateTravelPlan(placeInfo.city) }}>
                            Criar plano de viagem para {placeInfo.city} <i class="bi bi-magic"></i>
                        </button><br/>
                        <small className='fst-italic'> powered by <b>OpenAI GPT-3</b></small>
                    </div>

                    <div className='mt-4 pb-5'>
                        {/* <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div> */}
                        {
                            tableProcessing && !tableVal ? 
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                : !tableProcessing && tableVal ? parse(tableVal): ""
                        }
                        {/* Create an html table with a class name myTable for a schedule to visit Turkey for 4 days where each day has four activities, start time for each activity and a commentary on breathing each one of them. */}
                        {/* Create html table with a class name of myTable for a schedule for visiting turkey during 4 days
                         where each day has four activities, starting time for each activity and a breath comment about
                          each of them  */}
                          
                        {/* <table class="myTable fw-bold">
                            <tr>
                                <th>Day</th>
                                <th>Activity</th>
                                <th>Start Time</th>
                                <th>Brief Comment</th>
                            </tr>
                            <tr>
                                <td rowspan="4">Day 1</td>
                                <td>Visit the Blue Mosque</td>
                                <td>9:00 AM</td>
                                <td>Discover the stunning architecture of this iconic mosque.</td>
                            </tr>
                            <tr>
                                <td>Explore the Grand Bazaar</td>
                                <td>11:00 AM</td>
                                <td>Shop for unique souvenirs and indulge in the vibrant atmosphere of this historic market.</td>
                            </tr>
                            <tr>
                                <td>Lunch at a local restaurant</td>
                                <td>1:00 PM</td>
                                <td>Taste delicious Turkish cuisine in a traditional setting.</td>
                            </tr>
                            <tr>
                                <td>Visit the Topkapi Palace</td>
                                <td>3:00 PM</td>
                                <td>Step back in time and learn about the rich history of the Ottoman Empire at this former royal residence.</td>
                            </tr>
                            <tr>
                                <td rowspan="4">Day 2</td>
                                <td>Take a boat tour of the Bosphorus Strait</td>
                                <td>9:00 AM</td>
                                <td>Admire the stunning views of Istanbul from the water.</td>
                            </tr>
                            <tr>
                                <td>Visit the Hagia Sophia</td>
                                <td>11:00 AM</td>
                                <td>See the stunning mosaics and impressive architecture of this former cathedral and mosque.</td>
                            </tr>
                            <tr>
                                <td>Lunch at a local restaurant</td>
                                <td>1:00 PM</td>
                                <td>Enjoy delicious Turkish cuisine with new friends.</td>
                            </tr>
                            <tr>
                                <td>Visit the Galata Tower</td>
                                <td>3:00 PM</td>
                                <td>Take in panoramic views of Istanbul from the top of this historic tower.</td>
                            </tr>
                            <tr>
                                <td rowspan="4">Day 3</td>
                                <td>Visit the Hippodrome</td>
                                <td>9:00 AM</td>
                                <td>Discover the site of ancient chariot races and political gatherings.</td>
                            </tr>
                            <tr>
                                <td>Take a food tour of Istanbul</td>
                                <td>11:00 AM</td>
                                <td>Taste a variety of Turkish delicacies and learn about the local food culture.</td>
                            </tr>
                            <tr>
                                <td>Lunch at a local restaurant</td>
                                <td>1:00 PM</td>
                                <td>Indulge in a delicious Turkish meal and rest before the next activity.</td>
                            </tr>
                            <tr>
                                <td>Visit the Dolmabahce Palace</td>
                            </tr>
                        </table> */}
                    </div>

                </div>

            </body>
        </>
    )
}

export default Rooms;