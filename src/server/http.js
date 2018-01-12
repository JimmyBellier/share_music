class ServerInstance {
    constructor() {

    }
    init() {
        //server init here
        let express = require("express");
        let app = express();
        let bodyParser = require('body-parser');
        let http = require('http');
        let server = http.createServer(app);

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static('./src/public'));
        let port = process.env.PORT || 8088;
        server.listen(port, function () {
            console.log("Express server is listening on port", port);
        });
    }
}
module.exports = ServerInstance;
