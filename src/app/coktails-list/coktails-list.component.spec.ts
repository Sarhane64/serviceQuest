import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoktailsListComponent } from './coktails-list.component';

describe('CoktailsListComponent', () => {
  let component: CoktailsListComponent;
  let fixture: ComponentFixture<CoktailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoktailsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoktailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
