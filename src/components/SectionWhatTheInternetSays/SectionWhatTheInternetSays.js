import React from 'react';
import classnames from 'classnames';
import StarsRating from '../StarsRating/StarsRating';
import { prepareReviewsAmount } from '../../helpers';
import { ratings } from '../../config';

import './SectionWhatTheInternetSays.scss';

import { cards } from './Cards';

const SectionWhatTheInternetSays = () => {
    if (!cards.length) return null;

    return (
        <div className="section-what-the-internet-says">
            <div className="section-what-the-internet-says__header">
                <h2 className="section-what-the-internet-says__title">What the internet says</h2>
                <div className="section-what-the-internet-says__ratings">
                    {ratings.length > 0 && ratings.map(({ source, rating, reviewsAmount }) => (
                        <div className="ratings__rating">
                            <StarsRating size={24} source={source} rating={rating} />
                            <span className="ratings__reviews">{prepareReviewsAmount(reviewsAmount)} reviews</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-what-the-internet-says__cards">
                {cards && cards.length > 0 && cards.map((card) => (
                    <div className={classnames("cards__card", { highlighted: card.highlighted })}>
                        <p className="card__text">{card.text}</p>
                        {card.author && card.source && (
                            <div className="card__subtext">
                                <span className="card__author">{card.author}</span>
                                <span className="card__pretext">{' '}on{' '}</span>
                                <span className="card__source">{card.source}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionWhatTheInternetSays;