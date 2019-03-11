import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLaravelComponent } from './crud-laravel.component';

describe('CrudLaravelComponent', () => {
  let component: CrudLaravelComponent;
  let fixture: ComponentFixture<CrudLaravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudLaravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLaravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
