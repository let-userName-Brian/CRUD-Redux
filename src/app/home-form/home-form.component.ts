import { Component, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TravelPlansInterface, TravelPlans } from '../TravelPlans.service';


@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent {
  @Output() travelPlans: TravelPlansInterface = {
    name: '',
    email: '',
    location: '',
    budget: '',
    date: '',
    duration: '',
  }
  @ViewChild('f', { static: false }) form!: NgForm;
  // travelPlans: TravelPlansInterface = {
  //   name: '',
  //   email: '',
  //   location: '',
  //   budget: '',
  //   date: '',
  //   duration: '',
  // }
  submitted = false;
  
  //constructor(private travelService: TravelPlans) {}


  onSubmit() {
    this.submitted = true;
    this.travelPlans = {
      name: this.form.value.travelPlans.name,
      email: this.form.value.travelPlans.email,
      location: this.form.value.travelPlans.location,
      budget: this.form.value.travelPlans.budget,
      date: this.form.value.travelPlans.date,
      duration: this.form.value.travelPlans.duration,
    }
    //this.travelService.addTravelPlans(this.travelPlans);
    this.form.reset();
    console.log('plans Obj', this.travelPlans);
  }

  
}
