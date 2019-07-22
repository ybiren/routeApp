import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Ibullet } from './interfaces';
import { InvadeSvcService } from './invade-svc.service';

@Component({
  selector: 'app-invade-game',
  templateUrl: './invade-game.component.html',
  styleUrls: ['./invade-game.component.scss']
})


  export class InvadeGameComponent implements OnInit {

  private leftPosition = 0;
  private maxBulletInd = -1;
  private bulletArr: Ibullet[] = [];

  @ViewChild('elRef') elRef: ElementRef;

  @HostListener('window.keydown',  ['$event']) hhh(event: any) {
    alert("dd");
  }

    constructor(private svc: InvadeSvcService) { }


  ngOnInit() {

    window.addEventListener('keydown' , (e) =>  {
      if (e.keyCode === 39) {
        this.movePlayer(1);
      }
      if (e.keyCode === 37) {
        this.movePlayer(-1);
      }
      if (e.keyCode === 32) {
        this.addBullet();
      }
    });

    this.svc.topPositionSubject.subscribe((num) => {
      console.log(num);
    });
  }

  getPlayerPos() {
    return {
      'left': `${this.leftPosition}vw`
    };
  }

  movePlayer(direction: number) {
    this.leftPosition += direction * 10;
  }

  addBullet() {
    this.bulletArr.push({
      'ind': ++this.maxBulletInd , 'leftPosition': this.leftPosition
    });
  }

}
