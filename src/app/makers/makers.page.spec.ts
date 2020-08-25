import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakersPage } from './makers.page';

describe('MakersPage', () => {
  let component: MakersPage;
  let fixture: ComponentFixture<MakersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
