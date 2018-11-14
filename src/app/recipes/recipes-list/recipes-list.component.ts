import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  Recipes: recipe[] = [
    new recipe('test','test recipe','http://spicyworld.in/recipeimages/tandoori-fish-tikka-add-top.jpg')
   , new recipe('test','test recipe','http://spicyworld.in/recipeimages/tandoori-fish-tikka-add-top.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
