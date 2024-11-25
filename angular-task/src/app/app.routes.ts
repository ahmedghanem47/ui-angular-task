import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/layout.component';

export const routes: Routes = [
    // Auth layout with lazy-loaded Login module
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./modules/login/login.module').then((m) => m.LoginModule),
            },
        ],
    },
    // Main layout with lazy-loaded Home module
    {
        path: 'home',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./modules/home/home.module').then((m) => m.HomeModule),
            },
        ],
    },
];
