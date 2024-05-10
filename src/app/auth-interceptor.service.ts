import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log('Soon, this will do some authentication stuff');
    const modifiedRequest = req
      .clone({headers: req.headers.append('Auth', 'xyz')})
    return next.handle(modifiedRequest);
                // we've changed the request, so we forward the new request
  }
}
