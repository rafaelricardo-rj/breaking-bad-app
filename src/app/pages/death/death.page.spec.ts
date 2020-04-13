import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeathPage } from './death.page';

describe('DeathPage', () => {
  let component: DeathPage;
  let fixture: ComponentFixture<DeathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
