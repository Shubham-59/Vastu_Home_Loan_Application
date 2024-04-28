import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { EmiCalculationComponent } from './templates/emi-calculation/emi-calculation.component';
import { EnquiryComponent } from './templates/enquiry/enquiry.component';
import { LocationComponent } from './templates/location/location.component';
import { LogComponent } from './includes/log/log.component';
import { UserLayoutComponent } from './includes/user-layout/user-layout.component';
import { HomeHeaderComponent } from './templates/home-header/home-header.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  
    {path:'home',component:HomeComponent,         
  children:[
    {path:'',redirectTo:'about',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'emi',component:EmiCalculationComponent},
    {path:'enq',component:EnquiryComponent},
    {path:'loc',component:LocationComponent},
    {path:'log',component:LogComponent},
  ]

},

  

  { path:'vastu_housing', component: UserLayoutComponent,children:
  [
    {path:'ADMIN',loadChildren :()=>import('./admin/admin.module').then(file=>file.AdminModule)
  
  },{path:'RE',loadChildren :()=>import('./re/re.module').then(file=>file.ReModule)
  
}
,{path:'OE',loadChildren:()=>import('./oe/oe.module').then(file=>file.OeModule)}

, { path: 'loan', loadChildren: () => import('./loan/loan.module').then(file => file.LoanModule) },

{path:'CM', loadChildren:() =>import('./cm/cm.module').then(file=> file.CmModule)}




  ] },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
