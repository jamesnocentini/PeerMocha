var User        =       db.collection('user');
var Question    =       db.collection('question');

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
};

exports.addQuestion = function(req, res) {
    var question = req.body;
    Question.insert(question, function(err, doc) {
        Question.find({group: question.group}).toArray(function(err, docs) {
            res.status(200).send(docs);
        })
    })
};

exports.getQuestions = function(req, res) {
    Question.find({group: req.param('group')}).toArray(function(err, docs) {
        res.status(200).send(docs);
    })
};