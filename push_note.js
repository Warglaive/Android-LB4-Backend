var FCM = require('fcm-push');

var serverkey = 'AAAAs8iUhBw:APA91bEMSHh6PCV0i27jd4q0LxRaWauVqqnBOCzZlEFyIUSwOXmt4FcAt2Un3zFsxSNUCChlipcDbcv_ZY2hXFQO0wSUHWe2VzzK552-GwNF2LZH16qHW3-qgzuGjrndsmkD_7d0xeWr'; //your server key'; 
var fcm = new FCM(serverkey);

var message = {
    to: 'dApiJwf1S22OXMBqlzgEtt:APA91bFMmMgWBjlK0uv6rD2_duhrpQYDfn6h0MUrRDLeI_WZHixkjNmfnGl-_CpHSnUhLL_DYd-xpXgfhwHYL8UJC8utm5d1MkMQxIouegzPBJ2dMy4D7zo63Sne5F-uui-PfZOFBVjb', // your android device id collapse_key : 'collapse -key',
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