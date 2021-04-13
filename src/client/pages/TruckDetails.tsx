import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moment from 'moment';
import "../scss/truckdetails";

const TruckDetails: React.FC<ITruckDetails> = (props) => {

    const { truckdetailsid } = useParams<{ truckdetailsid: string }>();
    const [truckdetails, setTruckDetails] = useState(null);
    const [truckreviews, setTruckReviews] = useState(null);
    const [hours, setHours] = useState(null);

    const HoursDivUndefined = () => (
        <div id="hours-container">
            <h4 id="hours-text">BUSINESS HOURS</h4>
            <h5 id="time-start">Open: Hours not posted</h5>
            <h5 id="time-end">Close: Hours not posted</h5>
        </div>)
    const HoursDiv = () => (
        <div id="hours-container">
            <h4 id="hours-text">BUSINESS HOURS</h4>
            <h5 id="time-start">Open: {timeStart}</h5>
            <h5 id="time-end">Close: {timeEnd}</h5>
        </div>)



    let open = truckdetails?.hours?.[0].open[0];
    let openStart = open?.start;
    let openEnd = open?.end;
    let timeStart = openStart?.slice(0, 2) + ":" + openStart?.slice(2, 4);
    let timeEnd = openEnd?.slice(0, 2) + ":" + openEnd?.slice(2, 4);

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
        })();
    }, []);



    //UseEffect for truckdetails
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

    //Check if hours is undefined, if not display hours
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


    return (
        <>
            <main id="truck-details-container" className="container">
                <section className="row">
                    <div className="col-12">
                        <div key={`truck-details-card-${truckdetails?.id}`}>
                            <h1 id='truck-name'>{truckdetails?.name}</h1>
                            <div>
                                <img id='truck-img' src={`${truckdetails?.image_url}`}></img>
                            </div>

                            <div>
                                <h5 id="truck-rating">{truckdetails?.rating}</h5>
                                <div id="categories-container">
                                    {truckdetails?.categories.map((category: any) => (
                                        <h6 className="badge badge-pill badge-dark" id="category-title">{category?.title}</h6>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 id="contact-text">CONTACT INFORMATION</h4>
                            </div>
                            <h4 id="truck-phone">{truckdetails?.display_phone}</h4>
                            <div id="locations-container">
                                <h4 id="locations-text">LOCATION</h4>
                                <h1 id="truck-display-location">{truckdetails?.location.display_address}</h1>
                            </div>
                            {checkHours()}
                        </div>
                        <div>
                        </div>

                        {truckreviews?.reviews.map((review: any) => (
                            <div id="user-reviews-container">
                                <div key={`truck-review-${review?.id}`}>
                                    <img id="user-img" src={`${review?.user.image_url}`}></img>
                                    <h1 id="review-user-name">{`Here's what ${review?.user.name} had to say...`}</h1>

                                    {/* <h1 id="user-rating-text">{`${review.user.name} rated:`}</h1> */}

                                    <div id="review-rating">{review?.rating}</div>
                                    <h1 id="review-text">{review?.text}</h1>
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

}

interface ITruckDetails { }

export default TruckDetails;






//    const { truckreviewsid } = useParams<{ truckreviewsid: string }>();

    // get food truck by id


    //get food truck reviews by id


    //post reviews 


    //reviews delete