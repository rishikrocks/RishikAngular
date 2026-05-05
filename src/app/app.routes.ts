import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserDetails } from './components/user-details/user-details';
import { UserList } from './components/user-list/user-list';
import { Productdetails } from './components/productdetails/productdetails';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideos } from './components/upload-videos/upload-videos';
import { trainerGaurd } from './gaurds/trainer-gaurd';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'aboutus',component:Aboutus},
    {
        path: 'careers',
        component: Careers,
        children: [
            {path: 'permanent', component: PermanentJobs},
            {path: 'contract', component: ContractJobs},
        ]
    },
    {path:'contactus',component:Contactus},
    {path:'users',component:UserList},
    {path:'userdetails/:id',component:UserDetails},
    { 
        path: 'products',
        loadComponent: () => import('./components/product-list/product-list').then((x) => x.ProductsList),
    },
    {path:'productdetails',component:Productdetails},
    {
        path: 'uploadVideos',
        component: UploadVideos,
        canActivate: [trainerGaurd],
    },
    {path:'**',component:Notfound},
];
