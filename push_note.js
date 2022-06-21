var FCM = require('fcm-push');

var serverkey = 'AAAAs8iUhBw:APA91bEMSHh6PCV0i27jd4q0LxRaWauVqqnBOCzZlEFyIUSwOXmt4FcAt2Un3zFsxSNUCChlipcDbcv_ZY2hXFQO0wSUHWe2VzzK552-GwNF2LZH16qHW3-qgzuGjrndsmkD_7d0xeWr'; //your server key'; 
var fcm = new FCM(serverkey);

var message = {
    to: 'drpMSR-ER1-P-lWaVULUva:APA91bHEwM8G5ksjsXqrHoyZJ6nS7izdhle5M91wYcHXBX1rULcTe8FUcbpwgWxDopr8nLIGVlA5GQGhjVHRJ--hOadj3uBzWwN7Fr-Kibk0TcUGeVesnvE6Hh9IoDwWuBulVXhsq3mZ', // your android device id collapse_key : 'collapse -key',
    data: {
        hallo: 'allemaal',
        wereld: 'is rond'
    },
    notification: {
        title: 'Group 3 - The best group', body: 'Hey everyone'
    }
};

fcm.send(message, function (err, response) {
    if (err) {
        console.log("Something has gone wrong !", err);
    } else {
        console.log("Successfully sent with response :", response);
    }
});