import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe!: Recipe;

  isLoading: boolean = true;
  isModal: boolean = false;
  isLoggedIn: boolean = false;
  isVanished: boolean = false;
  isDeleting: boolean = false;


  _id!: string;
  routeId!: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeService
        .getRecipe(params.id)
        .subscribe(({ bakery, chocolatier, pastry }) => {
          if (bakery || chocolatier || pastry !== null) {
            this.isLoading = false;
            this.recipe = bakery || chocolatier || pastry;
          } else {
            this.isLoading = true;
          }
        });
    });
    this.loggedIn();
    this.routeId = this.route.snapshot.params.id;
  }

  recipeDelete(id: string) {
    this.isModal = true;
    this._id = id;
  }

  cancel(input: boolean) {
    this.isModal = false;
  }

 async delete(input: boolean) {
   this.isDeleting = true;
    const recipeMenu = this.recipe.menu;
    this.isModal = false;
    (await this.recipeService.imgDelete( this._id ).subscribe())
    this.recipeService.deleteRecipe(this._id).subscribe();
    setTimeout(() => {
      this.isVanished = true;
      setTimeout(() => {
        this.recipeService.routeNavigation(recipeMenu);
      }, 500);
    }, 500);
  }



  loggedIn(){
    if(localStorage.getItem('token')){
      return this.isLoggedIn = true;
    }else{
      return this.isLoggedIn = false;
    }
  }
}
