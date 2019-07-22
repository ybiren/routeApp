import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  public user: IUser = {name: '', age: 0};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  passBack() {
    this.activeModal.close(this.user);
  }

}
