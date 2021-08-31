import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UIShellModule } from 'carbon-components-angular';
import { NotificationModule } from '@carbon/icons-angular';
import { UserAvatarModule } from '@carbon/icons-angular';
import { AppSwitcherModule } from '@carbon/icons-angular';
import { APP_BASE_HREF } from '@angular/common';
import { BreadcrumbModule } from 'carbon-components-angular';
import {
	CarbonModule,
	FadeModule
} from '@carbon/icons-angular';
import { GridModule, ButtonModule } from 'carbon-components-angular';
import { FooterComponent } from './footer/footer.component';
import { DropdownModule, RadioModule } from 'carbon-components-angular';
import { ModalModule } from 'carbon-components-angular';

import { PlaceholderModule } from 'carbon-components-angular';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableDataComponent } from './table-data/table-data.component';
import {
    Table,
    TableModule,
    TableModel,
    TableItem,
    TableHeaderItem
} from 'carbon-components-angular';
import { DatePipe } from '@angular/common';
import {
	SettingsModule,
	DeleteModule,
	FilterModule,
	SaveModule,
	DownloadModule,
	AddModule
} from "@carbon/icons-angular";
import { PaginationModule } from 'carbon-components-angular';
import { DialogModule } from 'carbon-components-angular';
import { DatePickerModule } from 'carbon-components-angular';
import { ModalOnWowRatingComponent } from './modal-on-wow-rating/modal-on-wow-rating.component';
import { TabsModule } from 'carbon-components-angular';
import { ContentSwitcherModule } from 'carbon-components-angular';
import { FeedbackServiceService } from './services/feedback-service.service';
import { CountryTableComponent } from './country-table/country-table.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { ModalOnAddCountryComponent } from './modal-on-add-country/modal-on-add-country.component';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { AdminComponent } from './admin/admin.component';
import { InputModule } from 'carbon-components-angular';
import { SearchModule } from 'carbon-components-angular';
import { ComboBoxModule } from "carbon-components-angular";
import { ImportFunctionalityComponent } from './import-functionality/import-functionality.component';



 



@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LoginComponent,
		TableDataComponent,
		ModalOnWowRatingComponent,
		CountryTableComponent,
		ContactUsComponent,
		HelpComponent,
		ModalOnAddCountryComponent,
		ModalMessageComponent,
		AdminComponent,
		ImportFunctionalityComponent
		
	
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UIShellModule,
		NotificationModule,
		UserAvatarModule,
		AppSwitcherModule,
		BreadcrumbModule,
		CarbonModule,
		FadeModule,
		GridModule,
		ButtonModule,
		DropdownModule,
		RadioModule,
		ModalModule,
		PlaceholderModule,
		FormsModule,
		HttpClientModule,
		TableModule,
		SettingsModule,
		DeleteModule,
		FilterModule,
		SaveModule,
		DownloadModule,
		AddModule,
		PaginationModule,
		DialogModule,
		DatePickerModule,
		TabsModule,
		ContentSwitcherModule,
		InputModule,
		SearchModule,
		ComboBoxModule
		
		
		    	
    	
		
		
    	

	],
	providers: [{provide: APP_BASE_HREF, useValue: '/'},
				DatePipe,
				
				],
	bootstrap: [AppComponent]
})
export class AppModule { }
