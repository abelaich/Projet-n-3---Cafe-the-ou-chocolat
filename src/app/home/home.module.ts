import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DrinkRepository } from './repository/drink-repository';
import { DrinkRepositoryDummyImplService } from './repository/drink-repository-dummy-impl.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],

  providers: [{
    provide : DrinkRepository, 
    useClass : DrinkRepositoryDummyImplService,
  }],
})
export class HomePageModule {}
