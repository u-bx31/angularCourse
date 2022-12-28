import { InjectionToken } from "@angular/core";

export const LocalStorageToken = new InjectionToken<any>('local Storage',{
    providedIn : 'root',
    factory() {
        return localStorage;
    },
})