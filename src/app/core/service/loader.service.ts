import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader: any;

  add(loader: any) {
    if (this.loader) {
      console.warn("Duplicate loader");
    }
    this.loader = loader;
  }

  remove() {
    this.loader = undefined;
  }

  show() {
    if (!this.loader) {
      console.error("Can't find loader");
    }
    this.loader.show();
  }

  hide() {
    if (!this.loader) {
      console.error("Can't find loader");
    }
    this.loader.hide();
  }
}
