## Airtest (.apk automation)
#### Locally (Record + Run)
* Run emulator (AVG manager)
* Run Airtest IDE
* Airtest IDE -> Devices -> Use Javacp -> Connect
* Airtest IDE -> Poco Assistant -> Android
* Devices -> Right click -> Poco Mode -> Auto recording
* Insert at the top of test file:
    ```
    from poco.drivers.android.uiautomation import AndroidUiautomationPoco
    poco = AndroidUiautomationPoco()
    ```
* Run script (F5)

#### On server (Run) 
* Install
    * Run [emulator on server](../docker-android.md)
    * `apt install python-pip`
    * `pip install -U airtest`
    * `pip install pocoui`
* Run example
    * `cd opt; mkdir air; chmod 777 air`
    * Copy `reveal.air` project to the server
    * `airtest run "/opt/air/reveal.air" --device Android:///`

#### Problems
* If Poco unable to correctly identify UI elements - restart it (`Stop` -> `Android`)
* If you don't know package name - [click here](../adb.md)
