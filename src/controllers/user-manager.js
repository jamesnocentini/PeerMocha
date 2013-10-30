var User = db.collection('user');

exports.attend = function(req, res) {
    var attendee = req.body;
    User.insert(attendee, function(err, doc) {
        User.find({group: attendee.group}).toArray(function(err, docs) {
            res.status(200).send(docs);
        })

    })
};

exports.getAttendees = function(req, res) {
    User.find({group: req.param('group')}).toArray(function(err, docs) {
        res.status(200).send(docs);
    })
}