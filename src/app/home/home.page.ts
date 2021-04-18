import { Component } from '@angular/core';
import { ActionSheet, ActionSheetButton, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { registerPlugin } from '@capacitor/core';
import { Dialog } from '@capacitor/dialog';

interface TrackingPlugin {
  trackScreen(options: { screen: string }): Promise<void>;
}

const trackingPlugin = registerPlugin<TrackingPlugin>('TrackingPlugin');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ionViewDidEnter() {
    trackingPlugin.trackScreen({ screen: 'home' });
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
