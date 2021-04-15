import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moment from 'moment';
import "../scss/truckdetails";

const TruckDetails: React.FC<ITruckDetails> = (props) => {
    const TOKEN = window.localStorage.getItem('token');
    const { truckdetailsid } = useParams<{ truckdetailsid: string }>();
    const [truckdetails, setTruckDetails] = useState(null);
    const [truckreviews, setTruckReviews] = useState(null);
    const [hours, setHours] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [turnOff, setTurnOff] = useState('');



    let open = truckdetails?.hours?.[0].open[0];
    let openStart = open?.start;
    let openEnd = open?.end;
    let timeStart = openStart?.slice(0, 2) + ":" + openStart?.slice(2, 4);
    let timeEnd = openEnd?.slice(0, 2) + ":" + openEnd?.slice(2, 4);

    let address = truckdetails?.location.display_address;
    let slicedAddress = address?.slice(0, 1) + ", " + address?.slice(1, 2)

    const FAV = JSON.parse(window.localStorage.getItem("fuck me seriously lol i am going to taco bell after this"));


    const saveHandler = () => {
        if (TOKEN) {
            const FAV = JSON.parse(window.localStorage.getItem("fuck me seriously lol i am going to taco bell after this"))
            if (FAV) {
                window.localStorage.setItem("fuck me seriously lol i am going to taco bell after this", JSON.stringify([...FAV, truckdetails?.id]));
            } else {
                window.localStorage.setItem("fuck me seriously lol i am going to taco bell after this", JSON.stringify([truckdetails?.id]));
            }
        } else {

        }
       setTurnOff('turnOff');
    }




    const HoursDivUndefined = () => (
        <div id="hours-container">
            <h4 id="hours-text">BUSINESS HOURS</h4>
            <h5 id="time-start">Open: Hours not posted</h5>
            <h5 id="time-end">Close: Hours not posted</h5>
        </div>)
    const HoursDiv = () => (
        <div id="hours-container">
            <h4 id="hours-text">BUSINESS HOURS</h4>
            <h5 id="time-start">Open: {moment(timeStart, 'H:mm').format('h:mm a')}</h5>
            <h5 id="time-end">Close: {moment(timeEnd, 'H:mm').format('h:mm a')}</h5>
        </div>)

    const Contact = () => (
        <>
            <div>
                <h4 id="contact-text">CONTACT INFORMATION</h4>
            </div>
            <div>
                <h4 id="truck-phone">{truckdetails?.display_phone}</h4>
            </div>
        </>
    )
    const NoContact = () => (
        <>
            <div>
                <h4 id="contact-text">CONTACT INFORMATION</h4>
            </div>
            <div>
                <h4 id="truck-phone">Contact Information Unavailable</h4>
            </div>
        </>
    )

    //Fetch Request to to get food truck by ID
    useEffect(() => {
        (async () => {
            try {
                const response: Response = await fetch(`/yelp/${truckdetailsid}`)
                const getTruckDetails = await response.json();
                setTruckDetails(getTruckDetails)
            } catch (error) {
                console.log(error)
            }
            window.scrollTo(0, 0)
        })();
    }, []);


    useEffect(() => {
        let open = truckdetails?.hours?.[0].open[0];
        let openStart = open?.start;
        let openEnd = open?.end;
        setHours({ opening: openStart, closing: openEnd })
    }, [truckdetails]);






    //Fetch Request to get truck reviews by ID
    useEffect(() => {
        (async () => {
            try {
                const response: Response = await fetch(`/yelp/businesses/${truckdetailsid}/reviews`);
                const getTruckReviews = await response.json();
                setTruckReviews(getTruckReviews);
            } catch (error) {
                console.log(`Error getting truck reviews!`);
            }
        })();
    }, []);

    const checkHours = () => {
        if (hours?.opening == undefined || hours?.closing == undefined) {
            return (
                <>
                    <HoursDivUndefined />
                </>
            )
        } else {
            return (
                <>
                    <HoursDiv />
                </>
            )
        }

    }

    const checkContact = () => {
        if (truckdetails?.display_phone == '') {
            return (
                <>
                    <NoContact />
                </>
            )
        } else {
            return (
                <>

                    <Contact />

                </>
            )

        }
    }


    const handleLoad = () => {
        setLoaded(true);
    };

    useEffect(() => {
        setTimeout(() => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 1000);
    }, [loaded]);

    
    if (loaded) {
        return (
            <>
                <main id="truck-details-container" className="container">
                    <section className="row">
                        <div className="col-12">
                            <div key={`truck-details-card-${truckdetails?.id}`}>
                                <h1 id='truck-name'>{truckdetails?.name}</h1>
                                <div className="truck-img-wrapper">
                                    <img className='truck-img' src={`${truckdetails?.image_url}`}></img>
                                </div>
                                {TOKEN && !FAV?.includes(truckdetails?.id) ? (<button id="save-btn" className={`btn btn-warning btn-lg ${turnOff}`} onClick={saveHandler}>FAVORITE</button>)
                                    : (<div id="save-btn"></div>
                                    )}
                                <div>
                                    <div className="rating-container">
                                        <h5 id="truck-rating">{truckdetails?.rating}</h5>
                                    </div>
                                    <div id="categories-container">
                                        {truckdetails?.categories.map((category: any) => (
                                            <h6 className="badge badge-pill badge-dark" id="category-title">{category?.title}</h6>
                                        ))}
                                    </div>
                                </div>
                                {checkContact()}
                                <div id="locations-container">
                                    <h4 id="locations-text">LOCATION</h4>
                                    <h1 id="truck-display-location">{slicedAddress}</h1>
                                </div>
                                {checkHours()}
                            </div>
                            <div>
                            </div>

                            {truckreviews?.reviews.map((review: any) => (
                                <div id="user-reviews-container">
                                    <div key={`truck-review-${review?.id}`}>
                                        <div className="review-img-wrapper d-flex justify-content-center align-items-center">
                                            <img className="user-img" src={`${review?.user.image_url}`}
                                                onError={(e: any) => e.target.setAttribute("src", '../assests/thisone.png')}></img>
                                        </div>
                                        <div className="star"></div>
                                        <div id="review-rating">{review?.rating}</div>
                                        <h1 id="review-content">"{review?.text}"</h1>
                                        <h1 id="review-user-name">{review?.user.name}</h1>
                                        <a id="read-more-btn" className="btn btn-warning" href={`${review?.url}`} target="_blank">Read More</a>
                                        <h1 id="review-time-created">{moment(review?.time_created).format('MMMM Do YYYY, h:mm a')}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </>
        );

    } else {
        return (
            <>
                <div className="loader">
                    Loading...
                </div>
            </>
        )
    }

}

interface ITruckDetails { }

export default TruckDetails;
