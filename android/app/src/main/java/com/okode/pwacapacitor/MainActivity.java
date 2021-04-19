package com.okode.pwacapacitor;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import java.util.Arrays;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugins(Arrays.asList(
      AlertPlugin.class,
      TrackingPlugin.class
    ));
  }

}
