import axios from "axios"

class ApiData {
   getData () {
    return axios.get(' https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&selectFields=id&selectFields=externalId&selectFields=name&selectFields=enName&selectFields=alternativeName&selectFields=names&selectFields=description&selectFields=shortDescription&selectFields=slogan&selectFields=type&selectFields=typeNumber&selectFields=isSeries&selectFields=status&selectFields=year&selectFields=releaseYears&selectFields=rating&selectFields=ratingMpaa&selectFields=ageRating&selectFields=votes&selectFields=seasonsInfo&selectFields=budget&selectFields=audience&selectFields=movieLength&selectFields=seriesLength&selectFields=totalSeriesLength&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=backdrop&selectFields=logo&selectFields=ticketsOnSale&selectFields=videos&selectFields=networks&selectFields=persons&selectFields=facts&selectFields=fees&selectFields=premiere&selectFields=similarMovies&selectFields=sequelsAndPrequels&selectFields=watchability&selectFields=lists&selectFields=top10&selectFields=top250&selectFields=updatedAt&selectFields=createdAt&id=404900&id=685246&id=342&id=77044&id=986788&id=301&id=518192&id=994468&id=924910&id=195523&id=251568&id=401522&id=893361&id=462682&id=1108577&id=458&id=306084&id=645118&id=893150&id=519&id=775273&id=260162&id=571892&id=1143242&id=8229&id=273209&id=809&id=426053&id=918087&id=1209527&id=623807&id=4887347&id=1073122&id=4967684&id=1394131&id=5452839&id=1322324&id=1008444&id=5102255&id=4414587&id=5364334&id=1405843&id=4540126&id=1140676&id=762750 ', {headers: {'X-API-KEY': '977CBK5-7B54727-Q255724-SP7M5HP'}})
   }

   getDataById (id) {
      if (id) {
      return axios.get(`https://api.kinopoisk.dev/v1.4/movie/${id}` , {headers: {'X-API-KEY': '977CBK5-7B54727-Q255724-SP7M5HP'}})
      }
   }

   getDataReviews (id) {
      if (id) {
         return axios.get(`https://api.kinopoisk.dev/v1.4/review?page=1&limit=10&selectFields=movieId&selectFields=title&selectFields=type&selectFields=review&selectFields=date&selectFields=author&selectFields=authorId&selectFields=updatedAt&selectFields=createdAt&notNullFields=movieId&notNullFields=title&notNullFields=type&notNullFields=review&notNullFields=date&notNullFields=author&notNullFields=authorId&notNullFields=updatedAt&notNullFields=createdAt&sortField=&sortType=1&movieId=${id}&type=%D0%9D%D0%B5%D0%B3%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9&type=%D0%9D%D0%B5%D0%B9%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9&type=%D0%9F%D0%BE%D0%B7%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9 ` , {headers: {'X-API-KEY': '977CBK5-7B54727-Q255724-SP7M5HP'}})
      }
   } 

   getDataAwards() {
      return axios.get(`https://api.kinopoisk.dev/v1.4/person/awards?page=1&limit=40&selectFields=personId&selectFields=winning&selectFields=nomination&selectFields=movies&notNullFields=`, {headers: {'X-API-KEY': '977CBK5-7B54727-Q255724-SP7M5HP'}})
   }
}

export default ApiData