console.log('hello')

/**
	*	Lexing
	*	
	* INSERT
	* SELECT
	* UPDATE
	* DELETE
	*
	* AS
	* 
	* FROM
	*
	* WHERE
	* 
	* THIS
	* NOT
	* AND
	* OR
	* XOR
	* IN
	* AT
	* OF
	* LIKE
	* 
	* 
	* BEGINNING
	* END
	* FOLLOWED
	* BETWEEN
	* ALL
	* GROUP
	* BY
	* ORDER
	* LIMIT
	* LINE
	* WORD
	* 
*/

/**
	* RegEx: /abc/
	* Regexer: SELECT 'abc'
	* RegEx: /^abc/
	* Regexer: SELECT 'abc' AT BEGINNING
	* RegEx: /abc$/
	* Regexer: SELECT 'abc' AT END
	* RegEx: /ab(?= c)/;
	* Regexer: SELECT 'ab' FOLLOWED BY 'c'
	* RegEx: /(?<=")(abc)(?=")/
	* Regexer: SELECT 'abc' BETWEEN '"'
	* RegEx: /abc/g
	* Regexer: SELECT ALL 'abc'
*/