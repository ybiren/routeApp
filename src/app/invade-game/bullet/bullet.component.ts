import { Component, OnInit, Input } from '@angular/core';
import { InvadeSvcService } from '../invade-svc.service';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  @Input() ind: number;
  @Input() leftPosition: number;

  private topPosition = 90;

  constructor(private svc: InvadeSvcService) { }

  ngOnInit() {

    this.setTopPosition();

  }

  setTopPosition() {

    if (this.topPosition > 0) {
      this.topPosition -= 2;
      this.svc.topPositionSubject.next(this.topPosition);
      setTimeout(() => {
        this.setTopPosition();
      } , 20);
    }
  }


  getStyle() {

    return {
      'left': `${this.leftPosition}vw`,
      'top':  `${this.topPosition}vh`
    };

  }

}
