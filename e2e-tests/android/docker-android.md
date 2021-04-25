#### Getting started
* Make sure virtualization enabled:
    * Ubuntu:
        * `apt install cpu-checker`
        * `kvm-ok`
    * Other:
        * `cat /proc/cpuinfo | egrep 'vmx|svm'`
    * [Azure, AWS, Google cloud](https://github.com/budtmo/docker-android/blob/master/README_CLOUD.md)
* `apt update`
* `apt install docker.io`

#### Docker-android (not really working)
* [Docker-android](https://github.com/budtmo/docker-android)
* `docker run --privileged -d -p 6080:6080 -p 5554:5554 -p 5555:5555 -p 4723:4723 --name android-container-appium budtmo/docker-android-real-device`
* Open in browser `http://YOUR_SITE_IP:6080/`
    * Right click on noVNC window -> `Terminal emulator`
    * Check devices list: 
        * `adb -H localhost devices`
        * `emulator -list-avds`
    * Run emulator: `emulator`
