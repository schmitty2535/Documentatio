# PM2

Use PM2 To Start and Manage Your Node Apps

![](../../.gitbook/assets/1%20%281%29.png)

## Intro

You may be familiar with starting your Node applications by using the default script npm start , which will generally run your server directly against Node. This may appear adequate initially, but in the very real case where your app encounters an error \(e.g. requesting a file that doesn’t exist\), your app will crash not only for the user who

Get started [Open in app](https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fmedium.com%2Fp%2F1a2e43feb2d6&~feature=LoOpenInAppButton&~channel=ShowPostUnderUser&~stage=mobileNavBar&source=post_page-----1a2e43feb2d6--------------------------------)

encountered the error, but for everyone…that’s bad. This is where PM2 comes in.

PM2 is a free and open source, production-level process manager with a built-in load balancer. Some of the main selling points of PM2 is that it will daemonize your processes \(run them in the background\), restart your app in the case of a crash, log any unhandled exceptions, as well as automatically start up your application between server reboots. Installing PM2

If you are using npm as your package manager, you can install PM2 by entering: `sudo npm install -g pm2`

The -g flag will ensure that we are installing pm2 globally, so that is available systemwide rather than just within your project directory.

Likewise, if you’re using yarn as your package manager: sudo yarn global add pm2

## Starting and Configuring PM2

Before we do anything, we’ll want to use PM2 to start our application. To do this, we’ll need to run the following command while replacing example.js with the file containing our entry point \(most likely whichever file contains your server implementation\): sudo pm2 start example.js

You should then see something similar to the following:

\[PM2\] Spawning PM2 daemon

\[PM2\] PM2 Successfully daemonized

\[PM2\] Starting example.js in fork\_mode \(1 instance\)

\[PM2\] Done.

Get started┌─────────[┬──┬────┬](https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fmedium.com%2Fp%2F1a2e43feb2d6&~feature=LoOpenInAppButton&~channel=ShowPostUnderUser&~stage=mobileNavBar&source=post_page-----1a2e43feb2d6--------------------------------)[Open in app](https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fmedium.com%2Fp%2F1a2e43feb2d6&~feature=LoOpenInAppButton&~channel=ShowPostUnderUser&~stage=mobileNavBar&source=post_page-----1a2e43feb2d6--------------------------------) ────┬──────┬───────┬──────┬─────────┬──────────┐

│ App name│id│mode│pid │status│restart│uptime│memory │ watching │

├─────────┼──┼────┼────┼──────┼───────┼──────┼─────────┼──────────┤ │ **example** │0 │fork│3221│online│0 │5s │15.276 MB│ disabled │ └─────────┴──┴────┴────┴──────┴───────┴──────┴─────────┴──────────┘ Use \`pm2 show &lt;id\|name&gt;\` to get more details about an app

As seen above, PM2 will automatically assign an app name based on the file given to

PM2’s start subcommand. This can be customized after starting an app by using the restart subcommand with the name flag followed by whatever we would like the app to

be named: `sudo pm2 restart old-app-name --name new-app-name`

As mentioned previously, PM2 will automatically restart applications running under it, but we will need to take an additional step if we want our PM2 to launch our app on system startup. In order to do that, we’ll use PM2’s startup subcommand. This will generate a script that your server will use to initiate PM2 and specific app processes on system boot.

You will need to specify which init system you are using, which in our case is systemd: `sudo pm2 startup systemd`

If successful, you should see something like this:

```bash
[PM2] Generating system init script in  
/etc/systemd/system/pm2.service 
[PM2] Making script booting at startup... 
[PM2] -systemd- Using the command: 
      su root -c "pm2 dump && pm2 kill" && su root -c "systemctl daemon-reload && systemctl enable pm2 && systemctl start pm2" [PM2] Dumping processes 
[PM2] Stopping PM2... 
[PM2] All processes have been stopped and deleted 
[PM2] PM2 stopped 

```

Next we will want to tell PM2 which apps to start on boot. We can do this by saving the current process list, which in our case would only be our “example” app. To save the current process list, run:

`sudo pm2 save`

The list has been saved if you see output similar to the following:

\[PM2\] Saving current process list...

\[PM2\] Successfully saved in /home/deployer/.pm2/dump.pm2

That’s it! Now PM2 will automatically launch the apps specified the saved process list between system reboots without any additional intervention on your part.

## Additional Subcommands

PM2 comes packed with additional subcommands that provide you with a variety of ways to manage and view info about your applications.

List all of your node applications:

`sudo pm2 list`

Restart a process by referencing it by id or name or restart all processes:

`sudo pm2 restart <id|name|all>`

Stop a process from running, while still keeping it in the tracked process list by referencing it by id or name or stop all processes:

Get started sudo pm2 s[top &lt;id\|n](https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fmedium.com%2Fp%2F1a2e43feb2d6&~feature=LoOpenInAppButton&~channel=ShowPostUnderUser&~stage=mobileNavBar&source=post_page-----1a2e43feb2d6--------------------------------)[Open in app](https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fmedium.com%2Fp%2F1a2e43feb2d6&~feature=LoOpenInAppButton&~channel=ShowPostUnderUser&~stage=mobileNavBar&source=post_page-----1a2e43feb2d6--------------------------------) ame\|all&gt;

Remove a process from PM2’s tracked process list by referencing it by id or name or delete all processes:

sudo pm2 delete &lt;id\|name\|all&gt;

Display logs, custom metrics, and other information about your processes: sudo pm2 monit

View details of a singular process using the process’ unique id: sudo pm2 show &lt;id&gt;

Display a web-based dashboard with process diagnostics \(requires pm.io account and initially includes a 14-day free trial\):

sudo pm2 plus

## Conclusion

This is only a small snippet of what you can do with PM2, so get out there and take it for a test drive yourself!

To take a deeper dive into what PM2 can offer, such as load balancing or setting up more complex configurations with an ecosystem file, you can visit the official documentation [here](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/).

Thanks for reading! Leave a comment or message me if you have any questions.

