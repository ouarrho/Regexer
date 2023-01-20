// SELECT "abc" AT BEGINENING
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function newQuery(){
	readline.question('tap your query: ', query => {
		if( query === 'exit' ){ 
			readline.close(); 
			return; 
		}

		const queryReplace = query.replace(/(\r\n|\n|\r)/gm, ' ');
		const querySplit   = queryReplace.split(/ (?=(?:(?:[^"]*"){2})*[^"]*$)/);
		const queryFilter  = querySplit.filter(i => { return i.trim() != '' });
		
		queryFilter.forEach( v => { console.log( v.trim() ); });

		newQuery();
	});
}

newQuery();