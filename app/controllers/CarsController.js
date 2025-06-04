import { AppState } from "../AppState.js";

export class CarsController {
  constructor() {
    console.log('Cars controller is ready 🚓🚗🚙🏎️');
    this.drawCars()
  }

  drawCars() {
    const cars = AppState.cars
    let carListingsContent = ''
    cars.forEach(car => carListingsContent += car.listingHTMLTemplate)
    const carListingsElem = document.getElementById('car-listings')
    // console.log('drawing cars', carListingsElem);
    carListingsElem.innerHTML = carListingsContent
  }
}