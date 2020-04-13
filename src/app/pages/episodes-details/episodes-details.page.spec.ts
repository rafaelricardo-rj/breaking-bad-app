import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpisodesDetailsPage } from './episodes-details.page';

describe('EpisodesDetailsPage', () => {
  let component: EpisodesDetailsPage;
  let fixture: ComponentFixture<EpisodesDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
