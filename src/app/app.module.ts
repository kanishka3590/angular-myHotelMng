import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderAlertComponent } from './header/header-alert/header-alert.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { UpperFooterComponent } from './footer/upper-footer/upper-footer.component';
import { LowerFooterComponent } from './footer/lower-footer/lower-footer.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { TopRatedHotelComponent } from './homepage/top-rated-hotel/top-rated-hotel.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { HotelsEventsComponent } from './hotels/hotels-events/hotels-events.component';
import { HotelsSpecialComponent } from './hotels/hotels-special/hotels-special.component';
import { BookHotelComponent } from './hotels/book-hotel/book-hotel.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { UsersComponent } from './users/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HotelsService } from './services/hotels.service';
import { RoutingGuardGuard } from './routing-guard/routing-guard.guard';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { InputFormatDirective } from './directives/input-format.directive';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    //here all the components will come
    AppComponent,
    HeaderAlertComponent,
    HeaderNavComponent,
    UpperFooterComponent,
    LowerFooterComponent,
    CarouselComponent,
    TopRatedHotelComponent,
    HotelsComponent,
    HotelsDetailsComponent,
    HotelsEventsComponent,
    HotelsSpecialComponent,
    BookHotelComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    NotFoundComponent,
    InputFormatDirective,
    DemoComponent
  ],
  imports: [
    //all the modules will come here.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule



  ],
  //providers will contain serives which we want one object create
  providers: [HotelsService,RoutingGuardGuard,AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
