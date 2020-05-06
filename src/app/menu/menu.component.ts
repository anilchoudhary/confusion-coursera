import { Dish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  errMess: string;

  constructor(
    private dishService: DishService,
    @Inject("baseURL") private baseURL
  ) {}

  ngOnInit() {
    this.dishService.getDishes().subscribe(
      (dishes) => (this.dishes = dishes),
      (errmess) => (this.errMess = <any>errmess)
    );
  }
}
