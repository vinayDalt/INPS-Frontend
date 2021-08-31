import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BreadcrumbModule } from 'carbon-components-angular';
import { UIShellModule } from 'carbon-components-angular';
import {
	CarbonModule,
	FadeModule
} from '@carbon/icons-angular';
import { GridModule, ButtonModule } from 'carbon-components-angular';
import { PlaceholderModule } from 'carbon-components-angular';


@NgModule({
	declarations: [LandingPageComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		BreadcrumbModule,
		UIShellModule,
		CarbonModule,
		FadeModule,
		GridModule,
		ButtonModule,
		PlaceholderModule
	]
})
export class HomeModule { }
