import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class DemoInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    console.log("INTERCEPTOR - ANTES DEL CONTROLADOR");

    return next.handle()
      .pipe(
        // FLUJO - OK
        map((val) => {
          console.log('INTERCEPTOR - DESPUES - OK');
          return `${val}`.toUpperCase();
        }),

        // FLUJO - EXCEPTION
        catchError((err) => {
          console.log('INTERCEPTOR - DESPUES - ERROR');
          throw err;
        }),
      );
  }

}
