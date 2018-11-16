module.exports = () => (req, res, next) => {
    // Don't parse rawText if body has already been parsed
    if (req.body && Object.keys(req.body).length) next();
    req.setEncoding("utf8");
    req.rawText = "";
    req.on("data", function(chunk) {
        req.rawText += chunk;
    });
    req.on("end", function() {
        next();
    });
}
