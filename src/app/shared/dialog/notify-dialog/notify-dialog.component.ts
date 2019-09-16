import { dialogIdConstant } from '../dialogIdContant';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/core/service/modal.service';

declare var $: any;

@Component({
  selector: 'app-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.css']
})
export class NotifyDialogComponent implements OnInit, OnDestroy {
  content = "";
  isAlert = false;
  id = dialogIdConstant.NOTIFY;
  idOpen = this.randomString(5);
  private element: any;

  constructor(
    private modalService: ModalService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(content: string, alert?: boolean): void {
    this.isAlert = alert ? true : false;
    this.content = content;
    $("#" + this.idOpen).modal({backdrop: "static"});
  }

  private randomString(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
