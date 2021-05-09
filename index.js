const read = () => {
	const fs = require('fs');
	const path = require('path');
	const csv = require('csvtojson');
	try {
		const directoryPath = path.join(__dirname, '/assets');
		fs.readdir(directoryPath, async (err, files) => {
			if (err) {
				return console.log('Unable to scan directory: ' + err);
			}
			const path = './assets/';
			for (const file of files) {
				const fullFilePath = path + file;
				const allPrisons = await csv().fromFile(fullFilePath);
			}
		});
	} catch (e) {
		console.log(e);
	}
};
