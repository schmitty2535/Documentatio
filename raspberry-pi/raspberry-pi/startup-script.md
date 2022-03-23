# Startup Script

### How to Execute a Script at Startup on the Raspberry Pi

**1.** Enable Desktop Autologin: to begin, enter the Raspberry Pi configuration menu using the following command:`sudo raspi-config`

Select menu option 3 "Boot options" and click enter once the "Desktop / CLI" option is highlighted and finally select the "Desktop Autologin" choice

**2.** Edit the autostart file **** run the following in the terminal:`sudo nano /etc/xdg/lxsession/LXDE-pi/autostart`

Navigate to the end of the 2nd line and press enter. Next you will add a command to launch your script by listing the full path and file name

```
Ex. /home/pi/myscript.sh
```

**3.** Finally save and exit the script and test it by running `sudo reboot now`

****

**For more information click the following links:**

\-[https://www.wikihow.com/Execute-a-Script-at-Startup-on-the-Raspberry-Pi](https://www.wikihow.com/Execute-a-Script-at-Startup-on-the-Raspberry-Pi)
