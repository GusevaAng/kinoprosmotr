import { action, makeObservable, observable } from 'mobx'
import { isUseMock } from '../../App'
import { mockData } from '../../data/mockData'
import ApiData from '../../api/api'

class MoviesStore {
    movies

    constructor() {
        makeObservable(this, {
            movies: observable,
            setMovies: action
        })
    }

    setMovies = (movies) => {
        this.movies = movies
    }

    getAllMovies = () => {
        const apiData = isUseMock ? this.setMovies(mockData) : new ApiData()
        
        if (!isUseMock) {
            apiData.getData()
            .then((response) => {
                this.setMovies({...response.data})
            })
        }
    }
}

export default MoviesStore