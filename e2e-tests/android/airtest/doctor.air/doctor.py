# -*- encoding=utf8 -*-
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
from call_card_therapist import *

poco = AndroidUiautomationPoco(screenshot_each_action=False)
auto_setup(__file__)

call_card_therapist(poco)
# call_card_doc(poco)
# call_card_admin(poco)
# etc..
