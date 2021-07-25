import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Recipe } from '../../pages/interface/recipe.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() history: string[] = [];
  @Input() recipes: Recipe[] = [];


  @Output() onListSearch: EventEmitter<string> = new EventEmitter();
  
  
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ListSearch(i: number) {

    this.onListSearch.emit(this.el.nativeElement.firstChild.firstChild.lastChild.children[i].innerText);
  }
}
