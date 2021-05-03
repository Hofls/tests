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
* 
* 
