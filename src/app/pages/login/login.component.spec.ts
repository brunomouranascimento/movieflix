import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/components/utils/material.module';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { AppRoutingModule } from './../../app-routing.module';
import { MovieflixComponent } from './../movieflix/movieflix.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { CardComponent } from './../../components/card/card.component';
import { LottieAnimationViewModule } from 'ng-lottie';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        OrderModule,
        BrowserAnimationsModule,
        LottieAnimationViewModule.forRoot() ],
      declarations: [ LoginComponent, MovieflixComponent, NavbarComponent, CardComponent
      ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
