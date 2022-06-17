---
description: >-
  This tutorial is to create two mqtt broker ports, standard port 1883 is for
  unauthenticated localhost communications while port 8883 is used for
  authenticated remote connections
---

# MQTT Local And Remote Setup for App Services System

### &#x20;mosquitto.conf

1.  Run the following command to edit the mosquitto.conf file

    `sudo nano /etc/mosquitto/mosquitto.conf`
2.  Once within the nano editor, add the following lines to the bottom of the file

    ```
    per_listener_settings true

    listener 1883 localhost
    allow_anonymous true
        
    listener 8883
    allow_anonymous false
    password_file ./mqtt_passwd
    ```
3.  Run the following command to create a new registered user&#x20;

    `sudo mosquitto_`_`passwd -c /etc/mosquitto/mqtt_`_`passwd username`&#x20;
4. ``





