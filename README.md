# MMM-QR-Remote-Link
A Magic Mirror module that will display a QR code with a link to a local module. 

## Why?
You can display a QR code to the MagicMirror remote. I'm using it for that and to display a QR code with a link to another module. 

It uses the <a href="https://www.npmjs.com/package/qrcode?activeTab=readme">node-qrcode</a> NPM package.

## Screenshot
<img src="https://github.com/JasonVonKrueger/MMM-QR-Remote-Link/blob/c34c010508c3c06a26c4358d1f2ae8aa8ea29980/Sreenshot1.png" width="350px">

## Installation
```
cd ~/MagicMirror/modules
git clone https://github.com/JasonVonKrueger/MMM-QR-Remote-Link.git
cd MMM-QR-Remote-Link
npm install
```

## Configuration
```
{
    module: 'MMM-QR-Remote-Link',
    position: 'bottom_left',
    config: {
        size: 80, // in pixels...height and width are set to this
        text: 'MagicMirror Remote',
        endpoint: '/remote.html' // must start with a "/"
    }
},
{
    module: 'MMM-QR-Remote-Link',
    position: 'bottom_left',
    config: {
        size: 80, // in pixels...height and width are set to this
        text: 'Renumber Remote',
        endpoint: '/MMM-ReNumber/remote.html' // must start with a "/"
    }
},
```
