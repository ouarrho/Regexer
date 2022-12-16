# Regexer
A New Way To Write Your Regular Expression.

Writing regular expression is a big headache, but with Regexer you can write your regex easily.

With Regexer you can write your Regular Expression like SQL statement.

## Examples:

###### RegEx: /abc/
###### Regexer: SELECT 'abc'

###### RegEx: /^abc/
###### Regexer: SELECT 'abc' AT BEGINNING

###### RegEx: /abc$/
###### Regexer: SELECT 'abc' AT END

###### RegEx: /ab(?= c)/;
###### Regexer: SELECT 'ab' FOLLOWED BY 'c'

###### RegEx: /(?<=")(abc)(?=")/
###### Regexer: SELECT 'abc' BETWEEN '"'

###### RegEx: /abc/g
###### Regexer: SELECT ALL 'abc'
