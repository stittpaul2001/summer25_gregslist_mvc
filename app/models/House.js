import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseListingCard() {
    return /*html*/`
    <div class="col-6 mb-3">
      <div class="card border border-danger p-1">
          <img src="${this.imgUrl}" alt="" class="house-card-image img-fluid border border-black">
        <div class="card-body">
          <div class="d-flex justify-content-between fs-4 fw-bold">
            <span class="text-start">Created: ${this.year}</span>
            <p class="text-end">${this.sqft} Sqft.</p>
          </div>
        <div class="d-flex justify-content-between fs-4 fw-bold">
          <div class="text-start fw-bold fs-4">Description:</div>
          <span class="text-center fw-normal">${this.description}</span> 
        </div>
        <div class="d-flex justify-content-between fs-4 fw-bold">
            <p class="text-end">Total Bedrooms: ${this.bedrooms}</p>
            <span class="text-start">Total Bathrooms: ${this.bathrooms}</span>
        </div>
        <div class="d-flex justify-content-between fs-4 fw-bold">
              <div class="text-center">$${this.price}</div>
              <div class="text-end">
                <button onclick="app.HousesController.houseDeleted('${this.id}')" class="btn btn-danger btn-outline-dark fs-4 fw-bold" type="button">Delete</button>
              </div>
          </div>
        </div>
      </div>
    </div>`
  }


}