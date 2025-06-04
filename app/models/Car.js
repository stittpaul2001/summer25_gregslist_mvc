export class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    // TODO do something cool with this
    this.color = data.color
    this.mileage = data.mileage
    this.imgUrl = data.imgUrl
    this.isManualTransmission = data.isManualTransmission
    this.cylinders = data.cylinders
    this.fuelType = data.fuelType
    this.listedAt = data.listedAt
  }
}