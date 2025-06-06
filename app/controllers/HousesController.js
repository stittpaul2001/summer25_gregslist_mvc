import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"


export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    console.log('House Controller is ready!')

    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let houseListingData = ''
    houses.forEach(house => houseListingData += house.houseListingCard)
    const houseListingDataElem = document.getElementById('houselisting')
    houseListingDataElem.innerHTML = houseListingData
  }


  createHouse() {
    event.preventDefault() // prevent the form from refreshing the page
    const form = event.target // grab the form from the submission event
    console.log(form)
    // pull the data out of the form and and into an object
    //..

  }
  // log to verify data from form is intact
  //..
}
