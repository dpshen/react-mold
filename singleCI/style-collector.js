var stuff = [];

exports.collect = function() {
	return stuff.join("\n");
}

exports.add = function(css) {
    console.log(css)
	stuff.push(css);
}