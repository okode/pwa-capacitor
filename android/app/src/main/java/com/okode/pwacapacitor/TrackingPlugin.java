package com.okode.pwacapacitor;

import android.os.Handler;
import android.os.Looper;

import androidx.appcompat.app.AlertDialog;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "TrackingPlugin")
public class TrackingPlugin extends Plugin {

  @PluginMethod
  public void trackScreen(PluginCall call) {
    String screen = call.getString("screen");
    call.resolve();
  }

}
