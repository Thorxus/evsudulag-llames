import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./modules/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    }
];
