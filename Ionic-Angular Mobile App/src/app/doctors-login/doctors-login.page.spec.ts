import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorsLoginPage } from './doctors-login.page';

describe('DoctorsLoginPage', () => {
  let component: DoctorsLoginPage;
  let fixture: ComponentFixture<DoctorsLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorsLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
