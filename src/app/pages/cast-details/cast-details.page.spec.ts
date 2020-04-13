import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CastDetailsPage } from './cast-details.page';

describe('CastDetailsPage', () => {
  let component: CastDetailsPage;
  let fixture: ComponentFixture<CastDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CastDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
