import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubscriptionDataService } from './data-services/subscriptions.data-service';
import { UserSelectorComponent } from './modules/user-selector/user-selector.component';
import { SubscriptionListComponent } from './modules/subscription-list/subscription-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UserSelectorComponent, SubscriptionListComponent],
  bootstrap: [AppComponent],
  providers: [SubscriptionDataService]
})
export class AppModule {}
