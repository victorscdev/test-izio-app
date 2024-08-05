import { Injectable, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Injectable()
export class RouterUtils {
    constructor() {}

    static createRouterPage(pathName: string, customPage: any): ModuleWithProviders<RouterModule> {
        const _routes: Routes = [{ path: pathName, component: customPage }];
        return RouterModule.forChild(_routes)
    }
}