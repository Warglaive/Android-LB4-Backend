var FCM = require('fcm-push');

// copy your server key
var serverkey = '772164322332';

var fcm = new FCM(serverkey);
var message = {
    // copy your device id
    to : '3A:38:87:7C:ED:D7:30:CA:AF:4C:6F:E1:6E:7E:B3:60:26:DE:55:37',

    collapse_key : 'collapse-key',
    data : {
        hallo : 'allemaal',
        wereld : 'is rond'
    },
    notification : {
        title : 'Hello TIK class',
        body : 'It works'
    }
};

module.exports = function() {
  return function pusher(req, res, next) {
    console.log('Request pusher trigggered on %s.', req.url);

    fcm.send(message, function(err,response){  
        if(err) {
            console.log("Something has gone wrong !", err);
        } else {
            console.log("Successfully sent with response :",response);
        }
    });
    
    next();
  };
};
  