import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { MaterialModule } from '../utils/material.module';
import { AppRoutingModule } from './../../app-routing.module';
import { AuthenticationService } from './../../authentication/authentication.service';
import { MovieflixComponent } from './../../pages/movieflix/movieflix.component';
import { LoginComponent } from './../../pages/login/login.component';
import { OrderModule } from 'ngx-order-pipe';
import { CardComponent } from './../card/card.component';
import { LottieAnimationViewModule } from 'ng-lottie';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, ReactiveFormsModule, AppRoutingModule, OrderModule, LottieAnimationViewModule.forRoot() ],
      declarations: [ NavbarComponent, MovieflixComponent, LoginComponent, CardComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
