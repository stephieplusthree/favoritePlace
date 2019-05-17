import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HomePage } from './home/home';
import { AddPlacePage } from './add-place/add-place';
import { PlacePage } from './place/place';
import { SetLocationPage } from './set-location/set-location';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AddPlacePage,
    PlacePage,  
    SetLocationPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyAv7kQufJA9dbLetNX143OVs24oKNDEC5E'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
