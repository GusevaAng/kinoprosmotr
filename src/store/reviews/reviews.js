import { action, makeObservable, observable } from 'mobx'
import { isUseMock } from '../../App'
import { mockDataReviews } from '../../data/mockDataReviews'
import ApiData from '../../api/api'


class ReviewsStore {
    reviews

    constructor() {
        makeObservable(
            this,
            {
                reviews: observable,
                setReviews: action
            }
        )
    }

    setReviews = (reviews) => {
        this.reviews = reviews
    }

    getAllReviews = (id) => {
        const apiData = isUseMock ? this.setReviews(mockDataReviews) : new ApiData()

        if (!isUseMock) {
            id && apiData.getDataReviews(id)
            .then((response) => {
                this.setReviews({...response.data?.docs})
            })
        }
    }
}

export default ReviewsStore