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

@objc(AlertPlugin)
public class AlertPlugin: CAPPlugin {
    
    @objc func show(_ call: CAPPluginCall) {
        guard let title = call.options["title"] as? String else {
            call.reject("Must provide title")
            return
        }
        guard let message = call.options["message"] as? String else {
            call.reject("Must provide message")
            return
        }
        DispatchQueue.main.async {
            let dialog = UIAlertController(title: title, message: message, preferredStyle: .alert)
            let ok = UIAlertAction(title: "OK", style: .default, handler: nil)
            dialog.addAction(ok)
            self.bridge?.viewController?.present(dialog, animated: true, completion: {
                call.resolve()
            })
        }
    }
    
}
