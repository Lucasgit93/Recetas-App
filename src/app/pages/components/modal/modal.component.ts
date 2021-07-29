import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {


@Output() onCancel: EventEmitter<boolean> = new EventEmitter;
@Output() onDelete: EventEmitter<boolean> = new EventEmitter;


isCancel: boolean = false;

isDelete: boolean = false;


  constructor() {}

  ngOnInit(): void {}

  cancel() {
    this.isCancel = true;
    this.onCancel.emit(this.isCancel);
  }

  delete() {
    this.isDelete = true;
    this.onDelete.emit(this.isDelete);
  }
}
