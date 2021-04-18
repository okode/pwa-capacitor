#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(TrackingPlugin, "TrackingPlugin",
           CAP_PLUGIN_METHOD(trackScreen, CAPPluginReturnPromise);
           )

CAP_PLUGIN(AlertPlugin, "AlertPlugin",
           CAP_PLUGIN_METHOD(show, CAPPluginReturnPromise);
           )
