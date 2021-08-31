import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormComponent } from './feedback-form.component';
import { GridModule, ButtonModule } from 'carbon-components-angular';
import { DropdownModule, RadioModule} from 'carbon-components-angular';
import { ModalModule } from 'carbon-components-angular';



describe('FeedbackFormComponent', () => {
	let component: FeedbackFormComponent;
	let fixture: ComponentFixture<FeedbackFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ FeedbackFormComponent ],
			imports: [ GridModule, ButtonModule, DropdownModule, RadioModule, ModalModule ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FeedbackFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
