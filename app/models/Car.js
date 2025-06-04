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
        <img
          src="https://images.unsplash.com/photo-1725199583250-9f59567ba965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYXRhfGVufDB8fDB8fHwy"
          alt="1996 Mazda Miata" class="car-img">
        <span class="car-price bg-dark text-success fs-2 px-2 d-inline-block">
          $2,000
        </span>
        <div class="p-3">
          <div class="d-flex justify-content-between">
            <h3>1996 Mazda Miata</h3>
            <span class="mdi mdi-engine-off fs-3" title="Salvaged Title"></span>
          </div>
          <p>2000 miles</p>
          <p>4-cylinder gas manual transmission</p>
          <p class="text-end mb-1">
            Listed on 12/12/2020
          </p>
        </div>
      </div>
    </div>
    `
  }
}