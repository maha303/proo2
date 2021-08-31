import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { ItemsComponent } from '../components/items/items.component';
import { PaypageComponent} from  '../components/paypage/paypage.component';



const appRoutes : Routes = [
  {path: 'home', component:HomeComponent },
  {path: 'items', component:ItemsComponent },
  {path: 'paypage', component:PaypageComponent }



];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
