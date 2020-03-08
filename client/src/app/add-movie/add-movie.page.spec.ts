import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMoviePage } from './add-movie.page';

describe('AddMoviePage', () => {
  let component: AddMoviePage;
  let fixture: ComponentFixture<AddMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
