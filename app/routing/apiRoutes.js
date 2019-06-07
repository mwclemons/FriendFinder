var friendData = require("../data/friends");


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        
        var indexOfLowestDifference =0;
        var lowestDifference = 0;

       
        for (x=0;x<10;x++) {
            lowestDifference = lowestDifference + Math.abs(newFriend.responses[x] - friendData[0].responses[x])
        }

        console.log(lowestDifference);
        
        
        for (y = 1; y < friendData.length; y++) {
            var difference = 0;
            for (x=0;x<10;x++) {
                difference = difference + Math.abs(newFriend.responses[x] - friendData[y].responses[x])
            }

            if (difference < lowestDifference) {
                lowestDifference = difference;
                indexOfLowestDifference = y;
            }
        }
        
        friendData.push(req.body);


        res.json(friendData[indexOfLowestDifference]);
    });
  
};