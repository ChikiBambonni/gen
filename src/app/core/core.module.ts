import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MockDataInterceptor } from './mock-backend/mock-data.interceptor';
import { MockBackendService } from './mock-backend/mock-backend.service';
import { MockBackendConfig } from './mock-backend/mock-backend-config.constant';
import { AppInfoRepository } from './services/app-info-repository.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
  ],
  providers: [
    AppInfoRepository,
    MockBackendService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockDataInterceptor,
      multi: true
    },
  ]
})
export class CoreModule {
  constructor(private mockBackendService: MockBackendService) {
    MockBackendService.initConfig(MockBackendConfig);
    this.mockBackendService.initGlobalMethods();
  }
}
