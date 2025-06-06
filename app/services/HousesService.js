import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {

  createHouse(houseData) {
    const house = new House(houseData)
    console.log('🏚️', House)

    console.log('added house', AppState.houses)
  }


}

export const housesService = new HousesService()