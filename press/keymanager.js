const robot = require("kbm-robot");


robot.startJar();

robot.press("i")
.sleep(100)
.release("ctrl")
.release("shift")
.release("i")
.sleep(100)
.typeString("node BotCode.js")
.go()
.then(robot.stopJar);
