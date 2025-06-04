import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";

export class CarsController {
  constructor() {
    AppState.on('cars', this.drawCars)

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

    // NOTE how to manually pull values out of a form
    // const carMake = formElem.make.value
    // const carModel = formElem.model.value
    // console.log(`car make is ${carMake} and model is ${carModel}`);

    const carData = getFormData(formElem)
    // if (carData.isManualTransmission == 'on') {
    //   carData.isManualTransmission = true
    // }
    // else {
    //   carData.isManualTransmission = false
    // }

    carData.isManualTransmission = carData.isManualTransmission == 'on'

    // NOTE if you data from the form does not look correct, fix it!
    console.log('submitting car!', carData);

    carsService.createCar(carData)
  }
}