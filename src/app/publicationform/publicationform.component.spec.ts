import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationformComponent } from './publicationform.component';

describe('PublicationformComponent', () => {
  let component: PublicationformComponent;
  let fixture: ComponentFixture<PublicationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationformComponent]
    });
    fixture = TestBed.createComponent(PublicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
