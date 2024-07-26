import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {TrainingComponent} from './training/training.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {PageComponent} from './page/page.component';
import { withFetch, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ShopComponent} from './shop/shop.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {TablePaginationExample} from "./table/table-pagination-example";
import {LessonsComponent} from './lessons/lessons.component';
import {MainService} from "./services/main.service";
import {EditDialogComponent} from './lessons/edit-dialog/edit-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {TabsComponent} from "./tabs/tabs.component";
import {MatCardModule} from '@angular/material/card';
import {HollyDayDialogComponent} from './lessons/hollyday-dialog/hollyday-dialog.component';
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {MatTabsModule} from "@angular/material/tabs";
import { ScheduleFormComponent } from './admin-panel/schedule-form/schedule-form.component';

const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'page', component: PageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'table-pagination-example', component: TablePaginationExample},
  {path: 'lessons', component: LessonsComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
]

@NgModule({ bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AboutComponent,
        TrainingComponent,
        PageComponent,
        LoginComponent,
        SignupComponent,
        ShopComponent,
        LessonsComponent,
        EditDialogComponent,
        TablePaginationExample,
        HollyDayDialogComponent,
        AdminPanelComponent,
        ScheduleFormComponent
    ], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTabsModule], providers: [
        provideClientHydration(),
        MainService,
        provideAnimationsAsync(),
        provideHttpClient(withFetch()),
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {
}
