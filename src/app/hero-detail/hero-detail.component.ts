import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    console.log('------------->>>>>>>>>  ngOnInit ');
  }
  // ngOnChanges(): void {
  //   console.log('------------->>>>>>>>>  ngOnChanges ');
  // }
  // ngDoCheck(): void {
  //   console.log('------------->>>>>>>>>  ngDoCheck ');
  // }
  // ngAfterContentInit(): void {
  //   console.log('------------->>>>>>>>>  ngAfterContentInit ');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('------------->>>>>>>>>  ngAfterContentChecked ');
  // }
  // ngAfterViewInit(): void {
  //   console.log('------------->>>>>>>>>  ngAfterViewInit ');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('------------->>>>>>>>>  ngAfterViewChecked ');
  // }
  // ngOnDestroy(): void {
  //   console.log('------------->>>>>>>>>  ngOnDestroy ');
  // }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero: any) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
