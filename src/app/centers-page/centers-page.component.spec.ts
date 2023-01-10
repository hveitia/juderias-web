import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersPageComponent } from './centers-page.component';

describe('CentersPageComponent', () => {
  let component: CentersPageComponent;
  let fixture: ComponentFixture<CentersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
