import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export class BaseService {

  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error.error);
  }

}