import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Baklava','Turkish dessert','https://upload.wikimedia.org/wikipedia/commons/8/8f/Baklava_-_Turkish_special%2C_80-ply.JPEG')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
