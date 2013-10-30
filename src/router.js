var UM          =           require('./controllers/user-manager');


module.exports = function (app) {

    app.post('/1.0/attendee', UM.attend);
    app.get('/1.0/attendees/:group', UM.getAttendees);

}