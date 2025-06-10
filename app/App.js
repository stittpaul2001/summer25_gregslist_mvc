import { CarsController } from "./controllers/CarsController.js"
import { HousesController } from "./controllers/HousesController.js"

class App {
  carsController = new CarsController()

  HousesController = new HousesController()
}

window['app'] = new App()


