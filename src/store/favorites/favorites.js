import { action, makeObservable, observable } from 'mobx'


class FavoritesStore {
    favorites
    triggerForUpdate = false

    constructor() {
        makeObservable(this, {
            favorites: observable,
            setFavorites: action,
            // @TODO сделать с помощью computed
            triggerForUpdate: observable,
            setTriggerForUpdate: action
        })
    }

    setFavorites = (favorites) => {
        this.favorites = favorites
    }

    setTriggerForUpdate = (trigger) => {
        this.triggerForUpdate = trigger
    }

    getAllFavorites = () => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []

        this.setFavorites(savedFavorites)
    }

    getFavoritesById = (id) => {
       return this.favorites?.find((fav) => fav.id === id)
    }

    addOrDeleteToFavorites = (filmName, id) => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []

        if (!this.getFavoritesById(id)) {
            favorites.push(filmName)
            localStorage.setItem('favorites', JSON.stringify(favorites))

        } else {
            const newFavorites = favorites.filter((item) => item.id !== id)
            localStorage.setItem('favorites', JSON.stringify(newFavorites))

        }

        this.setTriggerForUpdate(true)
    }
}

export default FavoritesStore