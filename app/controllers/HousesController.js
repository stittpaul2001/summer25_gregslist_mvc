import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"


export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    console.log('House Controller is here!')
    housesService.loadHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let houseListingData = ''
    houses.forEach(house => houseListingData += house.houseListingCard)
    const houseListingDataElem = document.getElementById('houselisting')
    houseListingDataElem.innerHTML = houseListingData
    console.log('houseData where are you?')
  }


  createHouse() {
    event.preventDefault()
    const formElem = event.target
    const houseData = getFormData(formElem)

    console.log('submitting house!', houseData)
    housesService.createHouse(houseData)


    //@ts-ignore
    form.reset()
  }


  houseDeleted(houseid) {
    const confirmed = window.confirm('Are you positively, absolutely, sure that you want to delete this house?')
    if (confirmed == false) { return }

    console.log('im a terrible person who deleted this house with this ID attached to it', + houseid)
    housesService.houseDeleted(houseid)

  }

  toggleHousesSection() {
    document.getElementById('houses-section').classList.toggle('d-none')
  }

}


