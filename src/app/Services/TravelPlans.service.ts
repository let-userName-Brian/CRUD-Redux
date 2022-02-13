export class TravelPlans {
  travelPlansTop: Object = {
    "name": "",
    "email": "",
    "location": "",
    "budget": "",
    "date": "",
    "duration": ""
  };

  constructor() { }

  getTravelPlans() {
    console.log('called')
    return this.travelPlansTop;
  }

  addTravelPlans(travelPlans: Object) {
    this.travelPlansTop = travelPlans;
    console.log(this.travelPlansTop);
  }
}