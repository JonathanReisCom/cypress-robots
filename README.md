# cypress-robots

https://github.com/cypress-io/cypress
https://github.com/cypress-io/cypress-docker-images
https://github.com/cypress-io/cypress-example-docker-compose

### Requirements for WSL2

Reference:

- https://shouv.medium.com/how-to-run-cypress-on-wsl2-989b83795fb6
- https://wilcovanes.ch/articles/setting-up-the-cypress-gui-in-wsl2-ubuntu-for-windows-10/
- https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress

#### Install VcXsrv in Windows:

Download: https://sourceforge.net/projects/vcxsrv/

You can set the settings to your preference (Multiple windows and Start no client is recommended), but on the page that lets you enable extra settings, disable access control. This is required as WSL2 has its own IP address, which changes often.

#### Open a WSL2 shell and install the prerequisite packages:

```
$ apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

In your .bashrc (or equivalent such as .zshrc) set the DISPLAY environment variable by adding the following command.

```
Add to .zshrc:

# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0

# Automatically start D-Bus to allow communication with Cypress GUI app
sudo /etc/init.d/dbus start &> /dev/null

Commands in terminal:

# Allow linux user to be granted access to dbus without a password:
$ sudo visudo -f /etc/sudoers.d/dbus

In the editor that launches, add the following line with your username.
<your_username> ALL = (root) NOPASSWD: /etc/init.d/dbus

# Apply:
$ source ~/.zshrc

# Check:
$ echo $DISPLAY
```
