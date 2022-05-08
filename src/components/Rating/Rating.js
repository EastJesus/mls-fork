import React from 'react';
import ReactStars from "react-rating-stars-component";

const Rating = () => (
    <ReactStars
        count={5}
        size={20}
        value={4.94}
        isHalf={true}
        edit={false}
    />
)

export default Rating;