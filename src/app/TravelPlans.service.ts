
export interface TravelPlansInterface {
  name: string;
  email: string;
  location: string;
  budget: string,
  date: string,
  duration: string,
}

export class TravelPlans {
travelPlansTop: TravelPlansInterface[] = [];

constructor() { }


addTravelPlans(travelPlans: TravelPlansInterface) {
  console.log('travelPlans', travelPlans);
}
}