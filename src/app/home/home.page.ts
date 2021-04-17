import { Component } from '@angular/core';
import { ActionSheet, ActionSheetButton, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Dialog } from '@capacitor/dialog';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private actionSheetController: ActionSheetController) {}

  async actionSheetHybrid() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  async showActionSheet() {
    const options: ActionSheetButton[] = [
      { title: 'Upload' },
      { title: 'Share' },
      { title: 'Remove', style: ActionSheetButtonStyle.Destructive }
    ];
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options
    });

    Dialog.alert({
      title: 'Photo option selected',
      message: options[result.index].title
    });
  }

}
