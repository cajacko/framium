* Use electron v1.7.9. 1.8 didn't work on pi. Download and extract from https://github.com/electron/electron/releases. Make sure it's the arm.zip version.
* https://electronjs.org/docs/tutorial/application-distribution
* `.config/lxsession/LXDE-pi/autostart` is in home/pi
* Commented `# @xscreensaver -no-splash` from `.config/lxsession/LXDE-pi/autostart`
* `/hom/pi/Documents/framium-build/electron` to bottom of `.config/lxsession/LXDE-pi/autostart`
* In order to hide the cursor and disable the screensaver, people were recommending installing the following utils: `sudo apt-get install x11-xserver-utils unclutter`

https://medium.com/stories-from-upstatement/how-to-build-a-web-kiosk-with-a-raspberry-pi-some-cables-and-a-tv-3dc2724acaa1

Add to .config/lxsession/LXDE-pi/autostart

```
@xset s noblank
@xset s off
@xset -dpms
@unclutter -idle 0.1 -root
```
