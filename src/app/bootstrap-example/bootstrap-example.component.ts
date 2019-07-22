import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { IUser } from './interfaces';
import { ModalDisplayComponent } from './modal-display/modal-display.component';

@Component({
  selector: 'app-bootstrap-example',
  styleUrls: ['./bootstrap-example.component.css'],
  templateUrl: './bootstrap-example.component.html',
})
export class BootstrapExampleComponent implements OnInit {

  public users: IUser[] = [];
  public txt = 'AAAAAAABBBBB';
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent, {centered: true , backdrop: 'static'} );
    modalRef.result.then((insertedUser: IUser) => {
      this.users.push(insertedUser);
    });
  }

  openDisplayModal(user: IUser) {
    const modalRef = this.modalService.open(ModalDisplayComponent, {centered: true});
    modalRef.componentInstance.user = user;
  }

}
