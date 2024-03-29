Module.register('MMM-QR-Remote-Link', {
    defaults: { },

    start() {
      Log.info('Starting module: ' + this.name + ' with identifier: ' + this.identifier);

      this.sendSocketNotification('QRCODE_INIT', { id: this.identifier, endpoint: this.config.endpoint });
    },

    getStyles() {
      return [];
    },

    getScripts: function() {
        return [];
    },

    getDom() {
      const wrapper = document.createElement('div');

      let markup = `
          <div style="text-align: center">
            <div><img id="qrcode_${this.identifier}" /></div>
            <div id="qrtext_${this.identifier}" style="font-size: .8rem; color: #eee;"></div>
          </div>
      `;

      wrapper.innerHTML = markup;
      return wrapper;
    },

    notificationReceived(notification, payload, sender) {
      if (sender) {
        Log.log(this.name + ' received a module notification: ' + notification + ' from sender: ' + sender.name);
      }
      else {
        Log.log(this.name + ' received a system notification: ' + notification);
      }
    },

    socketNotificationReceived(notification, payload) {
        if (notification === 'QRCODE_READY' && payload.id === this.identifier) {
            document.querySelector('#qrcode_' + this.identifier).src = payload.url;
            document.querySelector('#qrcode_' + this.identifier).style.width = this.config.size + 'px';
            document.querySelector('#qrcode_' + this.identifier).style.height = this.config.size + 'px';
            document.querySelector('#qrtext_' + this.identifier).innerHTML = `<i>${this.config.text}</i>`;
        }
    },

  })
