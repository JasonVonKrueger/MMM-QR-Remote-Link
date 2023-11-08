const NodeHelper = require("node_helper");
const os = require("os");
const QRCode = require('qrcode');

module.exports = NodeHelper.create({
    start: function () {},

    createRoutes: function () {
        var self = this;
    },

    getIP: function () {
        let nic = os.networkInterfaces();
        return nic.wlan0[0].address.toString();
    },

    socketNotificationReceived: function(notification, payload) {
        var self = this;

        if (notification === 'QRCODE_INIT') {
            // send QR code of remote's URL
            QRCode.toDataURL(`http://${this.getIP()}:${config.port}${payload}`)
                .then(url => {
                    self.sendSocketNotification("QRCODE_READY", url);
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
});
