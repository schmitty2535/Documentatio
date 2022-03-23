---
description: This page is a reference for common Linux commands
---

# Reference

<details>

<summary>Create Users</summary>

To create a new user account, invoke the `useradd` command followed by the name of the user.

For example to create a new user named `username` you would run:

```
sudo useradd username
```



To be able to log in as the newly created user, you need to set the user password. To do that run the [`passwd`](https://linuxize.com/post/how-to-change-user-password-in-linux/) command followed by the username:

```
sudo passwd username
```



On most Linux distributions, when creating a new user account with `useradd`, the user’s home directory is not created.

Use the `-m` (`--create-home`) option to create the user home directory as `/home/username`:

```
sudo useradd -m username
```

</details>

<details>

<summary>Samba Service Commands</summary>

```
sudo service smbd status
sudo service smbd start
sudo service smbd stop
sudo service smbd restart
```

</details>

<details>

<summary>Change File or Directory Permissions</summary>

#### Owner

Change the owner of a file by using the chown command.

```
sudo chown new-owner  filename
```

* new-owner: Specifies the user name or UID of the new owner of the file or directory.&#x20;
* filename: Specifies the file or directory. &#x20;



Verify that the owner of the file has changed.

```
ls -l filename
```

#### Group

Change the group owner of a file by using the chgrp command.

```
 chgrp group filename
```

* group: Specifies the group name or GID of the new group of the file or directory.&#x20;
* filename: Specifies the file or directory.

Verify that the owner of the file has changed.

```
ls -l filename
```



</details>

<details>

<summary>UFW Firewall Rules</summary>

Probably the most obvious example of this is when you try to list all the rules. UFW has no dedicated command to list rules but uses its primary command ufw status to give you an overview of the firewall along with the list of rules. Moreover, you can’t list the rules when the firewall is inactive. The status shows the rules being enforced as of that moment. This makes it all the more difficult to edit the rules first and then enable the firewall, safely.

However, if the firewall is active and is running a few rules, you will get an output like this:

$ ufw status\
Status: active\
&#x20;\
To                         Action      From\
\--                         ------      ----\
22/tcp                     ALLOW       Anywhere\
80/tcp                     ALLOW       Anywhere\
443/tcp                    ALLOW       Anywhere\
22/tcp (v6)                ALLOW       Anywhere (v6)\
80/tcp (v6)                ALLOW       Anywhere (v6)\
443/tcp (v6)               ALLOW       Anywhere (v6)

Of course, this list is not exhaustive. There are default rules too, which are applied to packets that don’t fall under any of the specified rules in the list above. This default behaviour can be listed by adding a verbose subcommand.

$ ufw status verbose\
Status: active\
Logging: on (low)\
Default: deny (incoming), allow (outgoing), deny (routed)\
New profiles: skip\
&#x20;\
To                         Action      From\
\--                         ------      ----\
22/tcp                     ALLOW IN    Anywhere\
80/tcp                     ALLOW IN    Anywhere\
443/tcp                    ALLOW IN    Anywhere\
22/tcp (v6)                ALLOW IN    Anywhere (v6)\
80/tcp (v6)                ALLOW IN    Anywhere (v6)\
443/tcp (v6)               ALLOW IN    Anywhere (v6)

You can see the default in this case is to deny any incoming traffic (ingress), like listening for http traffic on port 8000. On the other hand, it allows outgoing traffic (egress) required, for example, to query the software repositories and update the packages as well as installing new packages.

Also the listed rules themselves are now much more explicit. Stating whether rule is for ingress (ALLOW IN or DENY IN) or egress (ALLOW OUT or DENY OUT).

## Editing the Rules

If you wish to delete the rules, you can do so by referring to rule’s corresponding number. The rules can be listed with their numbers, as shown below

$  ufw status numbered\
Status: active\
&#x20;\
To                         Action      From\
\--                         ------      ----\
\[ 1] 22/tcp                     ALLOW IN    Anywhere\
\[ 2] 80/tcp                     ALLOW IN    Anywhere\
\[ 3] 443/tcp                    ALLOW IN    Anywhere\
\[ 4] 25/tcp                     DENY IN     Anywhere\
\[ 5] 25/tcp                     DENY OUT    Anywhere\
\[ 6] 22/tcp (v6)                ALLOW IN    Anywhere (v6)\
\[ 7] 80/tcp (v6)                ALLOW IN    Anywhere (v6)\
\[ 8] 443/tcp (v6)               ALLOW IN    Anywhere (v6)\
\[ 9] 25/tcp (v6)                DENY IN     Anywhere (v6)\
\[10] 25/tcp (v6)                DENY OUT    Anywhere (v6)

You can then delete rules using the command:

$ ufw delete NUM

Where NUM is the rule numbered. For example, ufw delete 5,would remove the fifth rule blocking port 25 outgoing connections. Now the default behaviour would kick in for port 25, allowing outgoing connections on port 25. Deleting rule number 4 would do nothing since default behaviour of the firewall would still block incoming connections on port 25.

</details>

{% content-ref url="ufw-essentials-common-firewall-rules-and-commands.md" %}
[ufw-essentials-common-firewall-rules-and-commands.md](ufw-essentials-common-firewall-rules-and-commands.md)
{% endcontent-ref %}

{% embed url="https://www.linuxtechi.com/assign-static-ip-address-ubuntu-20-04-lts" %}
