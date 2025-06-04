import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { loadState, saveState } from "../utils/Store.js";

class CarsService {
  deleteCar(carId) {
    const cars = AppState.cars
    // const carIndex = cars.findIndex(car => car.make == carId) --> 0
    // const carIndex = cars.findIndex(car => carId == carId) --> -1
    const carIndex = cars.findIndex(car => car.id == carId)
    console.log('index to remove at is ' + carIndex);
    // NOTE always try to delete something in the middle of the array when testing!
    cars.splice(carIndex, 1) //💂!!!

    this.saveCars()
  }
  createCar(carData) {
    console.log(carData);
    const newCar = new Car(carData)
    const cars = AppState.cars
    cars.push(newCar) //💂!!!

    console.log('added car!', AppState.cars);

    this.saveCars()
  }

  // NOTE save local storage for last
  saveCars() {
    saveState('cars', AppState.cars)
  }

  loadCars() {
    const carsFromLocalStorage = loadState('cars', [Car])
    if (carsFromLocalStorage.length == 0) {
      AppState.cars = AppState.cars
    }
    else {
      AppState.cars = carsFromLocalStorage
    }
  }
}

export const carsService = new CarsService()