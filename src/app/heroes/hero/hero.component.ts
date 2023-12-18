import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 30;

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  public changeHero(): void {
    this.name = 'Loki';
    console.log('si');
  }
  changeAge(): void {
    this.age = 36;
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age = 30;
  }
}
