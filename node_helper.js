const NodeHelper = require('node_helper')
const os = require('os')
const QRCode = require('qrcode')

module.exports = NodeHelper.create({
    start: function() {},

    getIP: function() {
        let nic = os.networkInterfaces()
        return nic.wlan0[0].address.toString()
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'QRCODE_INIT') {
            // send QR code of remote URL
            QRCode.toDataURL(`http://${this.getIP()}:${config.port}${payload.endpoint}`)
                .then(url => { this.sendSocketNotification('QRCODE_READY', { id: payload.id, url: url }) })
                .catch(err => { console.error(err) })
        }
    }
});
