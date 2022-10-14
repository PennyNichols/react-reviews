import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import reviews from '../../helpers/data'

const ReviewCard = () => {
	const [index, setIndex] = useState(0);
	let { name, job, img, text } = reviews[index];
    const randomHandler = () => {
        let random = Math.floor(Math.random() * reviews.length);
        while (random === index) {
            random = Math.floor(Math.random() * reviews.length);
        }
        setIndex(random);
    };
    
	function prevHandler() {
		setIndex(index <= 0 ? reviews.length - 1 : index - 1);
	};
	function nextHandler() {
		setIndex(index >= reviews.length - 1 ? 0 : index + 1);
	};
	
	return (
		<div className='pt-4'>
			<Card className='border-0 card-wrapper position-relative shadow m-auto mt-5' style={{ width: "45rem" }}>
				<FontAwesomeIcon icon={faQuoteRight} className="quote-float position-absolute">"</FontAwesomeIcon>
				<Card.Img className="review-img mt-4" variant="top" src={img} alt={name} />
				<Card.Body>
					<Card.Title className='name text-capitalize fw-bold'>{name}</Card.Title>
					<Card.Subtitle className='job text-uppercase fw-light'>{job}</Card.Subtitle>
					<Card.Text className='text mt-3 lh-lg'>{text}</Card.Text>
				</Card.Body>
				<Card.Body>
					<button className='arrow mx-3' onClick={prevHandler}>
						<FontAwesomeIcon className="control" icon={faArrowLeft} />
					</button>
					<button className='arrow mx-3' onClick={nextHandler}>
						<FontAwesomeIcon className="control" icon={faArrowRight} />
					</button>
				</Card.Body>
				<Card.Body>
					<button className='button rounded' onClick={randomHandler}>Surprise Me!</button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ReviewCard;
