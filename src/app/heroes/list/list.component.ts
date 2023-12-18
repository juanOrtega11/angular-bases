import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk'];
  deletedHero?: string = '';
  removeLastHero(): void {
    const deletedHero = this.heroNames.pop();
    // return deletedHero;
  }
}
