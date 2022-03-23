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

{% embed url="https://linuxhint.com/what-does-ls-l-command-do-in-linux#:~:text=The%20ls%20command%20takes%20the,ownership%2C%20file%20size%2C%20etc." %}

{% embed url="https://linuxhint.com/ufw_list_rules#:~:text=UFW%20has%20no%20dedicated%20command,enforced%20as%20of%20that%20moment." %}

{% embed url="https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands" %}
