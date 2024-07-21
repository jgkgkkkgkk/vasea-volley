import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { TrainingComponent } from "./training/training.component";
import { AboutComponent } from "./about/about.component";




const routes: Routes = [{
  path: 'about', component: AboutComponent
}, {
  path: 'training', component: TrainingComponent
},
];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  
}
