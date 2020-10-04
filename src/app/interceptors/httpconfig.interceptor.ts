import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { ErrorDialogService } from './../error-dialog/error-dialog.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(public errorDialogService: ErrorDialogService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }), catchError((error: HttpErrorResponse) => {
        debugger;
        if (error.error instanceof Blob) {
          this.handleJsonError(error);
        } else {
          let data = {};
          data = {
            message: error?.message,
            reason: error && error.error && error.error.reason ? error.error.reason : '',
            status: error.status,
            //errors: error.errors,
          };
          this.errorDialogService.openDialog(data);
        }
        return throwError(error);
      }));
  }
  handleJsonError(error) {
    error.error.text().then(
      (errtxt) => {
        const jsonError = JSON.parse(errtxt);
        let data = {};
        data = {
          message: error?.message,
          reason: error && error.error && error.error.reason ? error.error.reason : '',
          status: error.status,
          errors: this.parseErrorMessages(jsonError),
        };
        this.errorDialogService.openDialog(data);
      },
    );
  }
  parseErrorMessages(responseJSON) {
    const errorMessages = [];
    errorMessages.push(responseJSON.title);
      if (responseJSON.errors) {
        for (const key of Object.keys(responseJSON.errors)) {
          errorMessages.push(responseJSON.errors[key]);
        }
      } else {
        errorMessages.push(responseJSON);
      }
    return errorMessages;
  }
}
