import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ModalController, NavController } from 'ionic-angular'

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Birthday } from '../../models/birthday'

import { DetailsPage } from '../details/details'

import * as fromBirthdays from '../../store/birthday/birthday.reducer'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  public birthdays: Observable<Birthday[]>

  constructor(
    private navCtrl: NavController,
    private store: Store<fromBirthdays.State>,
    private modalCtrl: ModalController
  ) {
    this.birthdays = this.store.select(state => state.birthdays)
  }

  showDetail(birthday) {
    let modal = this.modalCtrl.create(DetailsPage, { birthday: birthday })
    modal.present()
  }

}
