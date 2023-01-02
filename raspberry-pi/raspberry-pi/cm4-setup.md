# CM4 Setup

{% embed url="https://www.raspberrypi.org/documentation/hardware/computemodule/cm-emmc-flashing.md" %}



Put the following in /boot/config.txt

`dtoverlay=dwc2,dr_mode=host`

`dtoverlay=dwc2,dr_mode=host #enable usb on cm4`

{% embed url="https://www.jeffgeerling.com/blog/2020/usb-20-ports-not-working-on-compute-module-4-check-your-overlays" %}

