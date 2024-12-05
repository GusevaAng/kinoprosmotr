import { action, makeObservable, observable } from "mobx"
import { isUseMock } from "../../App"
import { mockDataAwards } from "../../data/mockDataAwards"
import ApiData from "../../api/api"


class AwardsStore {
    awards

    constructor() {
        makeObservable(
            this,
            {
                awards: observable,
                setAwards: action
            }
        )
    }

    setAwards = (awards) => {
        this.awards = awards
    }

    getAllAwards = () => {
        const apiData = isUseMock ? this.setAwards(mockDataAwards) : ApiData()

        if(!isUseMock) {
            apiData.getDataAwards()
            .then((response) => {
                this.setAwards({...response.data})
            })
        }
    }
}

export default AwardsStore