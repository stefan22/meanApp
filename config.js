// exports makes this data available in another file if 
// I were to require from that other file
// Note: do not add any numbers to your secretKey or 
// you'll get an error later on, while trying to load your 
// index.html page via localhost like this:
// "need to authorize this machine using `npm adduser`"

module.exports = {

	"database": "",							//empty for now
	"port": process.env.PORT || 3000,
	"secretKey":"meanapp"					
};
