import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restauranteService: RestaurantService) { }

  ngOnInit() {
    this.restauranteService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
