import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTvsComponent } from './search-tvs.component';

describe('SearchTvsComponent', () => {
  let component: SearchTvsComponent;
  let fixture: ComponentFixture<SearchTvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTvsComponent]
    });
    fixture = TestBed.createComponent(SearchTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
