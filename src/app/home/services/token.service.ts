import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  decodeToken(token: string): any {
    const _decodeToken = (tokenPart: string) => {
      try {
        return JSON.parse(atob(tokenPart));
      } catch {
        return null;
      }
    };

    const decodedParts = token.split('.').map(tokenPart => _decodeToken(tokenPart));

    return decodedParts.reduce((acc, curr) => {
      if (curr !== null) {
        acc = { ...acc, ...curr };
      }
      return acc;
    }, {});
  }
}
