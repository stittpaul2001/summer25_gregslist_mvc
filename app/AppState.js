import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car(
      {
        make: 'mazda',
        model: 'miata',
        year: 1996,
        color: 'red',
        mileage: 200000,
        imgUrl: 'https://images.unsplash.com/photo-1725199583250-9f59567ba965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYXRhfGVufDB8fDB8fHwy',
        isManualTransmission: true,
        cylinders: 4,
        price: 2000,
        fuelType: 'gas',
        listedAt: '12/12/2020',
        titleStatus: 'clean'
      }
    ),
    new Car(
      {
        make: 'vw',
        model: 'beetle',
        year: 1960,
        color: 'blue',
        mileage: 300000,
        imgUrl: 'https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnclMjBiZWV0bGV8ZW58MHx8MHx8fDI%3D',
        isManualTransmission: true,
        cylinders: 4,
        price: 40000,
        fuelType: 'gas',
        listedAt: '12/12/2010',
        titleStatus: 'rebuilt'
      }
    ),
    new Car(
      {
        make: 'bat',
        model: 'mobile',
        year: 1968,
        color: 'black',
        mileage: 2000,
        imgUrl: 'https://images.unsplash.com/photo-1671877077293-ae670e67f2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bW9iaWxlfGVufDB8fDB8fHwy',
        isManualTransmission: false,
        cylinders: 10,
        price: 4200000,
        fuelType: 'batfuel',
        listedAt: '6/8/2024'
      }
    ),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())