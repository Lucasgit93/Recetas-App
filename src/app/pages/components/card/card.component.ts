import { AfterViewInit, Component, Input } from '@angular/core';
import { Recipe } from '../../interface/recipe.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit  {


  
  
  
  @Input() recipes: Recipe[] = [];
  
  
  p: number = 1;

  count: number = 5;
  maxSize: number = 5

  constructor() { }

  ngAfterViewInit(): void {

  
  }



}
