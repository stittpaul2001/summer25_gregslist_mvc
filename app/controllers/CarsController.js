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

  submitCar() {
    // NOTE do not refresh the page during a form submission event!
    event.preventDefault()
    const formElem = event.target
    console.log('submitting car!', formElem);
    const carMake = formElem.make.value
    const carModel = formElem.model.value
    console.log(`car make is ${carMake} and model is ${carModel}`);

  }
}