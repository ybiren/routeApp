import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NativePromiseComponent } from '../../app/native-promise/native-promise.component';
import { AjaxReqComponent } from '../../app/ajax-req/ajax-req.component';
import { SingltonExampleComponent } from '../../app/singlton-example/singlton-example.component';
import { PromiseImplementComponent } from '../../app/promise-implement/promise-implement.component';
import { RouteParamComponent } from '../../app/route-param/route-param.component';
import { BootstrapExampleComponent } from '../../app/bootstrap-example/bootstrap-example.component';
import { YoutubeSearchComponent } from '../youtube-search/youtube-search.component';
import { VirtualScrollComponent } from '../virtual-scroll/virtual-scroll.component';
import { InvadeGameComponent } from '../invade-game/invade-game.component';



    const routes: Routes = [
      {
        path: 'ajax/req',
        component: AjaxReqComponent,
      },
      {
        path: 'native/promise',
        component: NativePromiseComponent,
      },
      {
        path: 'singleton/example',
        component: SingltonExampleComponent,
      },
      {
        path: 'promise/implement',
        component: PromiseImplementComponent,
      },
      {
        path: 'route/:prm',
        component: RouteParamComponent,
      },

      {
        path: 'bootstrap/example',
        component: BootstrapExampleComponent,
      },

      {
        path: 'youtube/search',
        component: YoutubeSearchComponent,
      },

      {
        path: 'virtual/scroll',
        component: VirtualScrollComponent,
      },

      {
        path: 'invade/game',
        component: InvadeGameComponent,
      },

      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full' ,
      },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
