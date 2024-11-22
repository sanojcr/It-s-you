import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', component: MainNavComponent,
        children: [
            {
                path: '', redirectTo: '/home', pathMatch: 'full'
            },
            {
                path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
            },
            {
                path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule),
            },
            {
                path: 'passion', loadChildren: () => import('./features/passion/passion.module').then(m => m.PassionModule),
            },
        ]
    },
    {
        path: '**', pathMatch: 'full',
        component: NotFoundComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
