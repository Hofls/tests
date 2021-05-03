#### Testing frameworks:
* Lists
    * https://github.com/hotchemi/awesome-android-testing
* Black box (.apk testing)
    * `Firebase test lab` - cloud-based app testing infrastructure
        * `Robo tests`
            * Android Studio -> Tools -> Firebase -> Test lab -> Record Robo Script
            * Android Studio -> Help -> Find action -> Generate signed APK
    * `Monkey` - generates streams of user events such as clicks, touches, or gestures
        * Launch a virtual device, it should appear in the list - `adb devices`
        * Execute `adb shell monkey -p com.somesoft.gdoc -v 500`
    * `Poco` - 
    * `Appium`
            * Appium recorder - https://github.com/appium/appium-desktop#the-recorder
    * `Xamarin.UITest`
    * `Monkeyrunner` - API to control monkey
* White box (source code testing)
    * `UI Automator`
    * `Espresso`
        * Espresso test recorder - https://developer.android.com/studio/test/espresso-test-recorder
* Outdated
    * `Calabash`
    * `Robotium` - black box UI testing (+ .apk)
        * `Robotium Recorder` - records user activity in app (no need to write tests manually)
    * `App Crawler` - automatically test your app (without writing code)
    * `Selendroid`
