import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";

class CarsService {
  createCar(carData) {
    console.log(carData);
    const newCar = new Car(carData)
    const cars = AppState.cars
    cars.push(newCar)

    console.log('added car!', AppState.cars);

  }
}

export const carsService = new CarsService()