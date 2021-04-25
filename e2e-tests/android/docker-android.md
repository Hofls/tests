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

#### Docker-android
* [Docker-android](https://github.com/budtmo/docker-android)
* `docker run --privileged -d -p 6080:6080 -p 5554:5554 -p 5555:5555 -e DEVICE="Samsung Galaxy S6" --name android-container budtmo/docker-android-x86-8.1`
* Open in browser `http://YOUR_SITE_IP:6080/`

#### TODO
* https://github.com/thyrlian/AndroidSDK

