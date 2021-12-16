import { Component, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs'
import {filter, map, delay, throttleTime, debounceTime, take, takeUntil, pluck, pairwise, distinct, distinctUntilChanged} from 'rxjs/operators'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    var input = fromEvent(document.querySelector('input') as HTMLInputElement, 'input')
    var stopStream = fromEvent(document.querySelector('button') as HTMLButtonElement, 'click')
    input.pipe(
      pluck('data'),
      distinctUntilChanged()
      // map((e:any)=> e.target.value),
    ).subscribe(val=> console.log(`val`, val))
    
    
  }

}
