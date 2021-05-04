import logging
from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
from common import login, launch_app

def call_card_therapist(poco):
    try:
        launch_app()
        login(poco)

        poco(text="Sonny Born").click()
        poco("ru.somesoft.gdoc:id/takeIt").click()

        poco("ru.somesoft.gdoc:id/viewName").click()
        poco("ru.somesoft.gdoc:id/startExecution").click()
        poco("android:id/button1").click()
    except Exception as e:
        logging.exception(e)
