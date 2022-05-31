var FCM = require('fcm-push');

var serverkey = '772164322332'; //your server key'; 
var fcm = new FCM(serverkey);

var message = {
    to: '3A:38:87:7C:ED:D7:30:CA:AF:4C:6F:E1:6E:7E:B3:60:26:DE:55:37', // your android device id collapse_key : 'collapse -key',
    data: {
        hallo: 'allemaal',
        wereld: 'is rond'
    },
    notification: {
        title: 'Title of the notification', body: 'Body of the notification'
    }
};

fcm.send(message, function (err, response) {
    if (err) {
        console.log("Something has gone wrong !", err);
    } else {
        console.log("Successfully sent with response :", response);
    }
});