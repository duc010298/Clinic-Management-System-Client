import { LoaderService } from './../../core/service/loader.service';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.css']
})
export class SpinnerLoaderComponent implements OnInit, OnDestroy {
  isShow = false;
  private element: any;

  constructor(
    private loaderService: LoaderService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    document.body.appendChild(this.element);
    this.loaderService.add(this);
  }

  ngOnDestroy(): void {
    this.loaderService.remove();
    this.element.remove();
  }

  show() {
    this.isShow = true;
  }

  hide() {
    this.isShow = false;
  }
}
