import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { GridModule, ButtonModule } from 'carbon-components-angular';
import { DropdownModule, RadioModule } from 'carbon-components-angular';
import { ModalModule } from 'carbon-components-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderModule } from 'carbon-components-angular';




@NgModule({
	declarations: [FeedbackFormComponent],
	imports: [
		CommonModule,
		FeedbackRoutingModule,
		GridModule,
		ButtonModule,
		DropdownModule,
		RadioModule,
		ModalModule,
		FormsModule,
		HttpClientModule,
		PlaceholderModule
		

	]
})
export class FeedbackModule { }
