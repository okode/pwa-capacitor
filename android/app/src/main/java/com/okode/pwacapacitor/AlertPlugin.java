package com.okode.pwacapacitor;

import android.os.Handler;
import android.os.Looper;

import androidx.appcompat.app.AlertDialog;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AlertPlugin")
public class AlertPlugin extends Plugin {

  @PluginMethod
  public void show(PluginCall call) {
    String title = call.getString("title");
    String message = call.getString("message");

    new Handler(Looper.getMainLooper()).post(() -> {
      AlertDialog.Builder builder = new AlertDialog.Builder(this.getActivity());
      builder
        .setTitle(title)
        .setMessage(message)
        .setPositiveButton("OK", (dialog, buttonIndex) -> {
          dialog.dismiss();
          call.resolve();
        });
      AlertDialog dialog = builder.create();
      dialog.show();
    });

  }

}
