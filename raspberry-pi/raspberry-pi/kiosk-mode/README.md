# Kiosk Mode

### What is Kiosk Mode?

Generally, kiosk mode is usually meant to refer to a particular “mode” that most browsers offer.  “Kiosk Mode” is offered by browser applications (Internet Explorer, Chrome, Firefox etc) to run the application full screen without any browser user interface such as toolbars and menus.  The intent of most people setting up “kiosk mode” is to prevent the user from running anything other than the browser based content in the full screen browser window.&#x20;

Kiosks tend to be deployed in a self-service environment which means the user of the kiosk is not formally associated with the kiosk.  In short, the user doesn't own the kiosk and isn't responsible for the proper functioning of the kiosk.  The user just wants the kiosk to provide a defined service. ([https://m.kioware.com/learn/what-is-kiosk-mode](https://m.kioware.com/learn/what-is-kiosk-mode))



[https://pimylifeup.com/raspberry-pi-kiosk/](https://pimylifeup.com/raspberry-pi-kiosk/)

{% content-ref url="kiosk-mode-instructions.md" %}
[kiosk-mode-instructions.md](kiosk-mode-instructions.md)
{% endcontent-ref %}

{% content-ref url="command-list.md" %}
[command-list.md](command-list.md)
{% endcontent-ref %}

Need to research [https://www.raspberrypi.org/forums/viewtopic.php?t=239087](https://www.raspberrypi.org/forums/viewtopic.php?t=239087)



New fix install things on here [https://blog.r0b.io/post/minimal-rpi-kiosk/](https://blog.r0b.io/post/minimal-rpi-kiosk/)

```bash
sudo apt-get install --no-install-recommends xserver-xorg-video-all xserver-xorg-input-all xserver-xorg-core xinit x11-xserver-utils chromium-browser unclutter
```
