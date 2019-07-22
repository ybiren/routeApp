import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvadeSvcService {

  constructor() { }

  topPositionSubject: Subject<number> = new Subject<number>();
}
