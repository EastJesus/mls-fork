import { ratings } from "./config"

export const prepareReviewsAmount = (reviewsAmount) => {
    if (reviewsAmount / 1000 < 1) {
        return reviewsAmount
    }

    const stringified = String(reviewsAmount);
    return `${stringified[0]}.${stringified.slice(1)}`
}