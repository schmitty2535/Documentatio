How to setup a RPI in Kiosk mode
Link to Information: 
https://www.wikihow.com/Execute-a-Script-at-Startup-on-the-Raspberry-Pi
https://pimylifeup.com/raspberry-pi-kiosk/
1. Enable VNC in raspi-config 

2. Install xdotool and unclutter, 
xdotool: This tool will allow our bash script to execute key presses without anyone being on the device.
Unclutter: This will enable us to hide the mouse from the display.
sudo apt-get install xdotool unclutter sed

3. Go to raspi-config and in boot options, click B1 "Desktop / CLI", then select option B4 "Desktop Autologin"

4. Create your kiosk bash script by running the following

       nano /home/pi/kiosk.sh

5. Copy and Paste the following lines into the script, and change "https://google.com" to the web address of the page you wish to open. Pay attention to http and https
   
       #!/bin/bash
       xset s noblank
       xset s off
       xset -dpms

       unclutter -idle 0.5 -root &

       sed -i 's/"exited_cleanly":false/"exited_cleanly":true/'
       /home/pi/.config/chromium/Default/Preferences
       sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

       /usr/bin/chromium-browser --noerrdialogs --disable-infobars --kiosk https://google.com

6. When done press CTRL+X and they Y and finall ENTER

7. Run the following and remember the value

       echo $DISPLAY

8. Create a service file to tell the operating system what file you want to be executed as well as that we want the GUI to be available before starting up the software

       sudo nano /lib/systemd/system/kiosk.service

9. Copy the following Code and if necessary, modify the "Environment=DISPLAY=0" to whatever value you recieved from step 7

       [Unit]
       Description=Chromium Kiosk
       Wants=graphical.target
       After=graphical.target

       [Service]
       Environment=DISPLAY=:0.0
       Environment=XAUTHORITY=/home/pi/.Xauthority
       Type=simple
       ExecStart=/bin/bash /home/pi/kiosk.sh
       Restart=on-abort
       User=pi
       Group=pi

       [Install]
       WantedBy=graphical.target

10. When done press CTRL+X and they Y and finall ENTER

11. Enable the kiosk service by running the following 

       sudo systemctl enable kiosk.service

12. With the Kiosk service now enabled you can either choose to restart the Raspberry Pi or start the service now by running the following command.
       
       sudo systemctl start kiosk.service

13. To check the status run the following

       sudo systemctl status kiosk.service

Additional commands include 

       sudo systemctl stop kiosk.service
and

       sudo systemctl disable kiosk.service

IMPORTANT REMINDER- After editing the code it may be necessary to disable the kiosk.service, then enable and start it again.
IMPORTAT: To get out of kiosk mode, click CTRL+F4
	
