import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the portfolio', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should present Charles as a backend-first full-stack developer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const content = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(content).toContain('Charles Paiva');
    expect(content).toContain('Backend first');
    expect(content).toContain('Java');
    expect(content).toContain('Angular');
  });

  it('should link to the featured customer service project', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const link = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>(
      'a[href="https://github.com/cafpaiva/customer-service"]',
    );

    expect(link).toBeTruthy();
  });
});
