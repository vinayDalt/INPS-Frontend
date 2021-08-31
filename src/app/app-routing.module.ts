import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { HelpComponent } from './help/help.component';
import { ImportFunctionalityComponent } from './import-functionality/import-functionality.component';
import { LoginComponent } from './login/login.component';
import { TableDataComponent } from './table-data/table-data.component';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'feedback',
		loadChildren: () =>
		  import('./feedback/feedback.module').then(
			(m) => m.FeedbackModule
		  ),
	  },
	  {
		path: 'login',
		component : LoginComponent
	},
	
	{
		path : 'table-data',
		component : TableDataComponent
	},

	{
		path : 'country-table',
		component : CountryTableComponent
	},

	{
		path : 'contact-us',
		component : ContactUsComponent
	},

	{
		path : 'help',
		component : HelpComponent
	},
	{
		path : 'admin',
		component : AdminComponent
	},
	{
		path : 'import',
		component : ImportFunctionalityComponent
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
