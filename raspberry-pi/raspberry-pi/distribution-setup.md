# Distribution Setup

Setup

```text
sudo raspi-config
```

Select option 4 ‘localisation option’ Choose geographic region Select time zone Select ‘keyboard layout’ Change to generic 101-key PC, or another keyboard configuration Select defaults for following selection menus Select ‘Wi-Fi country’ Choose specific country Select option 5 ‘interfacing options’ Enable the following

```text
Camera
SSH
VNC
SPI
I2C
Serial
```

Select option 8 ‘update’ Exit the raspi-config menu

```text
sudo nano /boot/cmdline.txt   **remove first two statements with console at the beginning**
sudo nano /boot/config.txt
```

Uncomment the line

```text
"hdmi_force_hotplug=1"
```

Add to the end of the file:

```text
  dtoverlay=pi3-disable-bt
```

Then run

```text
  sudo systemctl disable hciuart
```

### Installing Node.js full

```text
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash

sudo apt install -y nodejs

node -v   **to check version**
```

Install pm2

```text
sudo npm install -g pm2
```

