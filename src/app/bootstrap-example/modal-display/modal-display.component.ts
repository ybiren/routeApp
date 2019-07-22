import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../interfaces';
import { NgbActiveModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-display',
  templateUrl: './modal-display.component.html',
  styleUrls: ['./modal-display.component.css']
})
export class ModalDisplayComponent implements OnInit {

  @Input() public user: IUser;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
