#### Testing frameworks:
* Black box (.apk testing)
    * `Monkey` - generates streams of user events such as clicks, touches, or gestures
        * Launch virtual device
        * Execute `adb shell monkey -p com.somesoft.gdoc -v 500`
    * `Monkeyrunner` - API to control monkey
    * `Appium`
* White box (source code testing)
    * ?UI Automator?
    * ?Espresso?
* Outdated
    * `Calabash`
    * `Robotium` - black box UI testing (+ .apk)
        * `Robotium Recorder` - records user activity in app (no need to write tests manually)
    * `App Crawler` - automatically test your app (without writing code)