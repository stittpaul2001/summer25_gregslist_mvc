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
    this.listedAt = new Date(data.listedAt)
    // this.titleStatus = data.titleStatus == undefined ? 'clean' : data.titleStatus
    // NOTE ?? nullish coalescing operator
    // checks to see if the left hand side is undefined or null, and will return the right hand side if that is true
    this.titleStatus = data.titleStatus ?? 'clean'
  }

  get listingHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="position-relative shadow car-border" style="border-color: ${this.color};">
        <img src="${this.imgUrl}" alt="${this.year} ${this.make} ${this.model}" class="car-img">
        <span class="car-price bg-dark text-success fs-2 px-2 d-inline-block">
          $${this.priceWithCommas}
        </span>
        <div class="p-3">
          <div class="d-flex justify-content-between">
            <h3>${this.year} ${this.make} ${this.model}</h3>
            <div class="fs-4">
              ${this.titleIcon}
              <span>${this.titleStatus} title</span>
            </div>
          </div>
          <p>${this.mileageWithCommas} miles</p>
          <p>
            ${this.cylinders}-cylinder
            ${this.fuelType}
            ${this.isManualTransmission ? 'manual transmission' : 'automatic transmission'}
          </p>
          <p class="text-end mb-1">
            Listed on ${this.listedAtDateString}
          </p>
        </div>
      </div>
    </div>
    `
  }

  get listedAtDateString() {
    return this.listedAt.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric', })
  }

  get priceWithCommas() {
    return this.price.toLocaleString()
  }

  get mileageWithCommas() {
    return this.mileage.toLocaleString()
  }

  get titleIcon() {

    switch (this.titleStatus) {
      case 'clean':
        return '<span class="mdi mdi-car"></span>'
      case 'rebuilt':
        return '<span class="mdi mdi-car-wrench"></span>'
      default:
        return '<span class="mdi mdi-car-off"></span>'
    }
  }
}