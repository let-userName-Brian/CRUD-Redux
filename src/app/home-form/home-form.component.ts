import { Component, OnInit } from '@angular/core';
import { TravelPlans } from '../Services/TravelPlans.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css'],
  providers: [TravelPlans]
})
export class HomeFormComponent implements OnInit {
  travelForm!: FormGroup;

  constructor(private travelService: TravelPlans) { }

  ngOnInit() {
    this.travelForm = new FormGroup({
      'travelFormInfo': new FormGroup({
        "name": new FormControl(null),
        "email": new FormControl(null),
        "location": new FormControl(null),
        "budget": new FormControl(null),
        "date": new FormControl(null),
        "duration": new FormControl(null),
      })
    });
    this.travelForm.statusChanges.subscribe(
      (status) => console.log(status)
      );
  }


  onSubmit() {
    this.travelService.addTravelPlans(this.travelForm.value);
    this.travelForm.reset()
  }


}
