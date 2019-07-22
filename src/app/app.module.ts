import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AjaxReqComponent } from './ajax-req/ajax-req.component';
import { HttpModule } from '@angular/http';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NativePromiseComponent } from './native-promise/native-promise.component';
import { SingltonExampleComponent } from './singlton-example/singlton-example.component';
import { PromiseImplementComponent } from './promise-implement/promise-implement.component';
import { RouteParamComponent } from './route-param/route-param.component';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { ModalContentComponent } from './bootstrap-example/modal-content/modal-content.component';
import { NgbModalModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { ModalDisplayComponent } from './bootstrap-example/modal-display/modal-display.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { GenericBaseComponent } from './generic-base/generic-base.component';
import { InvadeGameComponent } from './invade-game/invade-game.component';
import { BulletComponent } from './invade-game/bullet/bullet.component';
import { EncapsuleComponent } from './ajax-req/encapsule/encapsule.component';

@NgModule({
  declarations: [
    AppComponent,
    AjaxReqComponent,
    ProfileDetailsComponent,
    NativePromiseComponent,
    SingltonExampleComponent,
    PromiseImplementComponent,
    RouteParamComponent,
    BootstrapExampleComponent,
    ModalContentComponent,
    YoutubeSearchComponent,
    ModalDisplayComponent,
    VirtualScrollComponent,
    GenericBaseComponent,
    InvadeGameComponent,
    BulletComponent,
    EncapsuleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalContentComponent,
    ModalDisplayComponent
  ]
})
export class AppModule { }
