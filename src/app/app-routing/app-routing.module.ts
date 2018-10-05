import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from '../hotels/hotels/hotels.component';
import { LoginComponent } from '../users/login/login.component';
import { RegistrationComponent } from '../users/registration/registration.component';
import { UsersComponent } from '../users/users/users.component';
import { CarouselComponent } from '../homepage/carousel/carousel.component';
import { HotelsEventsComponent } from '../hotels/hotels-events/hotels-events.component';
import { HotelsSpecialComponent } from '../hotels/hotels-special/hotels-special.component';
import { HotelsDetailsComponent } from '../hotels/hotels-details/hotels-details.component';
import { RoutingGuardGuard } from '../routing-guard/routing-guard.guard';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DemoComponent } from '../demo/demo.component';

const routes: Routes = [
  {path: 'hotels',component:HotelsComponent,canActivate:[RoutingGuardGuard]},//guard route
  {path : 'login',component:LoginComponent},
  {path : 'register',  component:RegistrationComponent},
  {path : 'users',component:UsersComponent},
  {path : "", component:CarouselComponent},
  {path :'events',component:HotelsEventsComponent},
  {path :'spec-events',component:HotelsSpecialComponent},
  {path : 'hotels/:hotelId',component:HotelsDetailsComponent},
  {path : "not",component:NotFoundComponent},
  {path : "demo",component:DemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
