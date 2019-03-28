# WhatsApp Web for Debian/Ubuntu x64

## Installation

Install [Node JS](https://nodejs.org/)

```
$ git clone https://github.com/nclozza/WhatsApp-Web.git
$ cd WhatsApp-Web
$ npm install
$ npm run build // Generates the source code
$ npm run deb64 // Generates the .deb file
$ sudo apt install ./dist/installers/whatsapp-web_1.0.0_amd64.deb
```

Enjoy!