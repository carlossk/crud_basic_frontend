import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFirebaseComponent } from './crud-firebase.component';

describe('CrudFirebaseComponent', () => {
  let component: CrudFirebaseComponent;
  let fixture: ComponentFixture<CrudFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
