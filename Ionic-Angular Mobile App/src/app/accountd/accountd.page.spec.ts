import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountdPage } from './accountd.page';

describe('AccountdPage', () => {
  let component: AccountdPage;
  let fixture: ComponentFixture<AccountdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
