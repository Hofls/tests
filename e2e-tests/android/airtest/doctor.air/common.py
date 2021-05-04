from airtest.core.api import *

def launch_app():
    PKG = "ru.somesoft.gdoc"
    stop_app(PKG)
    wake()
    start_app(PKG)

def login(poco):
    poco("android:id/text1").click()
    poco("android:id/text1").click()
    poco(text="1").click()
    poco(text="2").click()
    poco(text="3").click()
    poco(text="4").click()
    poco(text="5").click()
    poco(text="6").click()
    poco(text="John Wilder").click()


