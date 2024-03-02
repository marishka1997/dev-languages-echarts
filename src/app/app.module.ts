import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { darkTheme } from './switching-theme/dark-theme';
import { lightTheme } from './switching-theme/light-theme';
import { ThemeModule } from './switching-theme/theme.module';

@NgModule({
  declarations: [AppComponent, StatisticsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark',
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
