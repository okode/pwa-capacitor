import Foundation
import Capacitor
import FirebaseAnalytics

@objc(TrackingPlugin)
public class TrackingPlugin: CAPPlugin {
    
    @objc func trackScreen(_ call: CAPPluginCall) {
        guard let screen = call.options["screen"] as? String else {
            call.reject("Must provide screen to track")
            return
        }
        Analytics.logEvent(AnalyticsEventScreenView, parameters: [AnalyticsParameterScreenName: screen])
        call.resolve()
    }
    
}
