import { Component, OnInit } from '@angular/core';
@Component({
  selector: "ngx-base",
  template: "",
})
export class BaseComponent implements OnInit {
  errors: string[] = [];
  messages: string[] = [];
  public debugdata = {};
  constructor() { }

  ngOnInit(): void {
  }
  resetErrors() {
    this.errors = [];
  }
  handleError(err) {
    this.resetErrors();
    this.debugdata = err.response;
    //    this.errors.push(err.message);
    if (err.response) {
      const responseJSON = JSON.parse(err.response);
      this.debugdata = responseJSON.errors;
      if (responseJSON.errors) {
        for (const key of Object.keys(responseJSON.errors)) {
          this.errors.push(responseJSON.errors[key]);
        }
      } else {
        this.errors.push(err.response);
      }
    }
    /*
          this.toastrService.danger(this.errors.join('\n'),
          err.message,
          {
            destroyByClick: true,
            duration: 10000,
          });
    */
  }
}
