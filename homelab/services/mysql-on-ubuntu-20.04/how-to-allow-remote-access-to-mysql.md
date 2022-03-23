# How To Allow Remote Access to MySQL

Many websites and applications start off with their web server and database backend hosted on the same machine. With time, though, a setup like this can become cumbersome and difficult to scale. A common solution is to separate these functions by setting up a remote database, allowing the server and database to grow at their own pace on their own machines.

One of the more common problems that users run into when trying to set up a remote MySQL database is that their MySQL instance is only configured to listen for local connections. This is MySQL’s default setting, but it won’t work for a remote database setup since MySQL must be able to listen for an _external_ IP address where the server can be reached. To enable this, open up your `mysqld.cnf` file:

```
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

Navigate to the line that begins with the `bind-address` directive. It will look like this:

/etc/mysql/mysql.conf.d/mysqld.cnf

```
. . .
lc-messages-dir = /usr/share/mysql
skip-external-locking
#
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
bind-address            = 127.0.0.1
. . .
```

By default, this value is set to `127.0.0.1`, meaning that the server will only look for local connections. You will need to change this directive to reference an external IP address. For the purposes of troubleshooting, you could set this directive to a wildcard IP address, either `*`, `::`, or `0.0.0.0`:

/etc/mysql/mysql.conf.d/mysqld.cnf

```
. . .
lc-messages-dir = /usr/share/mysql
skip-external-locking
#
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
bind-address            = 0.0.0.0
. . .
```

**Note:** In certain versions of MySQL the `bind-address` directive may not be in the `mysqld.cnf` file by default. In this case, add the following highlighted line to the bottom of the file:

/etc/mysql/mysql.conf.d/mysqld.cnf

```
. . .
[mysqld]
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
datadir         = /var/lib/mysql
log-error       = /var/log/mysql/error.log
bind-address            = 0.0.0.0
```

After changing this line, save and close the file (`CTRL + X`, `Y`, then `ENTER` if you edited it with `nano`).

Then restart the MySQL service to put the changes you made to `mysqld.cnf` into effect:

```
sudo systemctl restart mysql
```

If you have an existing MySQL user account which you plan to use to connect to the database from your remote host, you’ll need to reconfigure that account to connect from the remote server instead of **localhost**. To do so, open up the MySQL client as your **root** MySQL user or with another privileged user account:

```
sudo mysql
```

If you’ve enabled password authentication for **root**, you will need to use the following command to access the MySQL shell instead:

```
mysql -u root -p
```

To change a user’s host, you can use MySQL’s `RENAME USER` command. Run the following command, making sure to change `sammy` to the name of your MySQL user account and `remote_server_ip` to your remote server’s IP address:

```
RENAME USER 'sammy'@'localhost' TO 'sammy'@'remote_server_ip';
```

Alternatively, you can create a new user account that will only connect from the remote host with the following command:

```
CREATE USER 'sammy'@'remote_server_ip' IDENTIFIED BY 'password';
```

**Note**: This command will create a user that authenticates with MySQL’s default authentication plugin, `caching_sha2_password`. However, there is a known issue with some versions of PHP that can cause problems with this plugin.

If you plan to use this database with a PHP application — phpMyAdmin, for example — you may want to create a remote user that will authenticate with the older, though still secure, `mysql_native_password` plugin instead:

```
CREATE USER 'sammy'@'remote_server_ip' IDENTIFIED WITH mysql_native_password BY 'password';
```

If you aren’t sure, you can always create a user that authenticates with `caching_sha2_plugin` and then `ALTER` it later on with this command:

```
ALTER USER 'sammy'@'remote_server_ip' IDENTIFIED WITH mysql_native_password BY 'password';
```

Then grant the new user the appropriate privileges for your particular needs. The following example grants a user global privileges to `CREATE`, `ALTER`, and `DROP` databases, tables, and users, as well as the power to `INSERT`, `UPDATE`, and `DELETE` data from any table on the server. It also grants the user the ability to query data with `SELECT`, create foreign keys with the `REFERENCES` keyword, and perform `FLUSH` operations with the `RELOAD` privilege. However, you should only grant users the permissions they need, so feel free to adjust your own user’s privileges as necessary.

```
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'sammy'@'remote_server_ip' WITH GRANT OPTION;
```

Following this, it’s good practice to run the `FLUSH PRIVILEGES` command. This will free up any memory that the server cached as a result of the preceding `CREATE USER` and `GRANT` statements:

```
FLUSH PRIVILEGES;
```

Then you can exit the MySQL client:

```
exit
```

Lastly, assuming you’ve configured a firewall on your database server, you will also need to open port `3306` — MySQL’s default port — to allow traffic to MySQL.

If you only plan to access the database server from one specific machine, you can grant that machine exclusive permission to connect to the database remotely with the following command. Make sure to replace `remote_IP_address` with the actual IP address of the machine you plan to connect with:

```
sudo ufw allow from remote_IP_address to any port 3306
```

If you need to access the database from other machines in the future, you can grant them access on an ad hoc basis with this command. Just remember to include their respective IP addresses.

Alternatively, you can allow connections to your MySQL database from _any_ IP address with the following command:

**Warning**: This command will enable anyone to access your MySQL database. **Do not** run it if your database holds any sensitive data.

```
sudo ufw allow 3306
```

Following this, try accessing your database remotely from another machine:

**Note**: If you added a firewall rule to only allow connections from a specific IP address, you must try to access the database with the machine associated with that address.

```
mysql -u user -h database_server_ip -p
```

If you’re able to access your database, it confirms that the `bind-address` directive in your configuration file was the issue. Please note, though, that setting `bind-address` to `0.0.0.0` is insecure as it allows connections to your server from any IP address. On the other hand, if you’re still unable to access the database remotely, then something else may be causing the issue. In either case, you may find it helpful to follow our guide on [How To Set Up a Remote Database to Optimize Site Performance with MySQL on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-remote-database-to-optimize-site-performance-with-mysql-on-ubuntu-18-04) to set up a more secure remote database configuration.
