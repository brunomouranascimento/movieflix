import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';


import { MovieflixComponent } from './movieflix.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { CardComponent } from './../../components/card/card.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from 'src/app/components/utils/material.module';
import { AppRoutingModule } from './../../app-routing.module';
import { LoginComponent } from './../login/login.component';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

describe('MovieflixComponent', () => {
  let component: MovieflixComponent;
  let fixture: ComponentFixture<MovieflixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OrderModule,
        LottieAnimationViewModule.forRoot(),
        MatMenuModule,
        MaterialModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
      ],
      declarations: [ MovieflixComponent, NavbarComponent, CardComponent, LoginComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
