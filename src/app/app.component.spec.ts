import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CoktailsListComponent } from './coktails-list/coktails-list.component.js';
import { CoktailsService } from './coktails.service.js';
import { HttpClientModule } from '@angular/common/http';

describe('CocktailListComponent', () => {
  let component: CoktailsListComponent;
  let fixture: ComponentFixture<CoktailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CoktailsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoktailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should be created', () => {
    const service: CoktailsService = TestBed.inject(CoktailsService);
    expect(service).toBeTruthy();
  });

  it('service should have a "getCocktails" method which returns at least one object', () => {
    const service: CoktailsService = TestBed.inject(CoktailsService);
    const coktails = service.getCocktails();
    expect(coktails.length).toBeGreaterThan(0);
  });

  it('should create a CocktailListComponent instance', waitForAsync(() => {
    const fixture = TestBed.createComponent(CoktailsListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('component should have a public property named "cocktails"', waitForAsync(() => {
    const fixture = TestBed.createComponent(CoktailsListComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.cocktails).toBeTruthy();
  }));
});
