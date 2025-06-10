import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { loadState, saveState } from "../utils/Store.js"

class HousesService {

  createHouse(houseData) {
    // console.log('house services is loaded')
    console.log(houseData)
    const newHouse = new House(houseData)
    const houses = AppState.houses


    console.log('🏚️', new House)
    AppState.houses.unshift(newHouse)

    console.log('added house', AppState.houses)
    this.saveHouses()

  }
  saveHouses() {
    saveState('houses', AppState.houses)
  }

  houseDeleted(houseId) {
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    console.log('index to remove house at is', + houseIndex)
    houses.splice(houseIndex, 1)
    this.saveHouses()
  }

  loadHouses() {
    const housesFromLocalStorage = loadState('houses', [House])
    if (housesFromLocalStorage.length == 0) {
      AppState.houses = AppState.houses
    }
    else {
      AppState.houses = housesFromLocalStorage()
    }
  }
}

export const housesService = new HousesService()