import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import * as auth from "../services/authentication.service";

export class AuthInterceptor implements HttpInterceptor {


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");

    if (token) {
      const cloned = req.clone({
          headers: req.headers.set("Authorization",
              "Bearer " + token)
      });
      //console.log('Clonado: ',cloned);
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
