import { Component } from '@angular/core';
import { ActionSheet, ActionSheetButton, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { registerPlugin } from '@capacitor/core';
import { Dialog } from '@capacitor/dialog';

interface TrackingPlugin {
  trackScreen(options: { screen: string }): Promise<void>;
}

interface AlertPlugin {
  show(options: { title: string; message: string }): Promise<void>;
}

const trackingPlugin = registerPlugin<TrackingPlugin>('TrackingPlugin');
const alertPlugin = registerPlugin<AlertPlugin>('AlertPlugin');

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

    await Dialog.alert({
      title: 'Photo option selected',
      message: options[result.index].title
    });

    alertPlugin.show({ title: 'Title from JS', message: 'Message from JS' });
  }

}
