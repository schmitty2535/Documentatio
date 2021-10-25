# Sleep Prevention

### Prevent the Raspberry-Pi From Sleeping

1\. In Raspberry Pi terminal paste the following command

```
 sudo nano /etc/lightdm/lightdm.conf
```

2\. Insert the following at the bottom of the lightdm.conf file

{% code title="lightdm.conf" %}
```
 xserver-command=X -s 0 dpms
```
{% endcode %}

3\. Save, exit, and reboot
