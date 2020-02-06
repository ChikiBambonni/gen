import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  static getItem<T>(key: string): T {
    return this.fromJson(sessionStorage.getItem(key)) || this.fromJson(localStorage.getItem(key));
  }

  static setItem<T>(key: string, valueObj: T, remember: boolean = true) {
    if (remember) {
      localStorage.setItem(key, this.toJson<T>(valueObj));
    } else {
      sessionStorage.setItem(key, this.toJson<T>(valueObj));
    }
  }

  static removeItem(key: string) {
    sessionStorage.removeItem(key);
    localStorage .removeItem(key);
  }

  static fromJson<T>(value: string): T {
    return JSON.parse(value);
  }

  static toJson<T>(value: T): string {
    return JSON.stringify(value);
  }
}
