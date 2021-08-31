import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { BreadcrumbModule } from 'carbon-components-angular';
import { UIShellModule } from 'carbon-components-angular';
import {
	CarbonModule,
	FadeModule
} from '@carbon/icons-angular';
import { GridModule, ButtonModule } from 'carbon-components-angular';

describe('LandingPageComponent', () => {
	let component: LandingPageComponent;
	let fixture: ComponentFixture<LandingPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ LandingPageComponent ],
			imports: [BreadcrumbModule, UIShellModule, CarbonModule, FadeModule, GridModule, ButtonModule]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LandingPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
