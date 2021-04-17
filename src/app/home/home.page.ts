import { Component } from '@angular/core';
import { ActionSheet, ActionSheetButton, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
