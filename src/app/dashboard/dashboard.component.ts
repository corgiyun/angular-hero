import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {of, interval, fromEvent, timer} from 'rxjs'
import {take, tap, debounceTime, map} from 'rxjs/operators'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
    const oneClickEvent = fromEvent(document, 'click').pipe(
      take(1),
      tap((v: any)=> {
        console.log(v);
        // @ts-ignore
        
        
        document.getElementById('locationDisplay').innerHTML = `U first click was on location ${v.screenX}:${v.screenY}`
      })
    )
    const subscribe = oneClickEvent.subscribe()
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes: any) => (this.heroes = heroes.slice(1, 5)));
  }

 
}
