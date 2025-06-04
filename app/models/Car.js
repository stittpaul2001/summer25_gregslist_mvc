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
    this.titleStatus = data.titleStatus
  }

  get listingHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="position-relative shadow car-border">
        <img src="${this.imgUrl}" alt="${this.year} ${this.make} ${this.model}" class="car-img">
        <span class="car-price bg-dark text-success fs-2 px-2 d-inline-block">
          $${this.price}
        </span>
        <div class="p-3">
          <div class="d-flex justify-content-between">
            <h3>${this.year} ${this.make} ${this.model}</h3>
            <span class="mdi mdi-engine-off fs-3" title="Salvaged Title"></span>
          </div>
          <p>${this.mileage} miles</p>
          <p>
            ${this.cylinders}-cylinder
            ${this.fuelType}
            ${this.isManualTransmission ? 'manual transmission' : 'automatic transmission'}
          </p>
          <p class="text-end mb-1">
            Listed on 12/12/2020
          </p>
        </div>
      </div>
    </div>
    `
  }
}