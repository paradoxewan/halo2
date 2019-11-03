Meteor.startup = function () {
MyCollection.mqttConnect("mqtt://test.mosquitto.org", ["presence"], {}, {});
};