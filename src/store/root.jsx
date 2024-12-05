import React from 'react'
import PropTypes from 'prop-types'
import MoviesStore from './movies/movies'
import ReviewsStore from './reviews/reviews'
import AwardsStore from './awards/awards'
import FavoritesStore from './favorites/favorites'

export const StoreContext = React.createContext(null)

const AppContextProvider = ({children}) => {
  
  const store = {
    moviesStore: new MoviesStore(),
    reviewsStore: new ReviewsStore(),
    awardsStore: new AwardsStore(),
    favoritesStore: new FavoritesStore()
  }

  return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
    
}

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppContextProvider