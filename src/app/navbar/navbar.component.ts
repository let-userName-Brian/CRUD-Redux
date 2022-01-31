import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showFiller: boolean = false;
  name: string = '';
  constructor(private route: ActivatedRoute,) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    }); 
  }

}
