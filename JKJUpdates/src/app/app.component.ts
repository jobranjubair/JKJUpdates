import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'JKJUpdates'
	testField = 'JKJUpdates test field'
	changeField() {
		this.testField = 'It has changed by Angular'
	}
}
