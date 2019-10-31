|specs|input|output|
|-|-|-|
|Make letter lowercase|DDF|ddf|
|Spaces and punctuation are removed|this is.|thisis|
|Square root the length value of the inputed string|thisisasentence|3.87|
|For row length: if the square root is not whole integer, round up|3.87|4|
|For column length: if the square root is not a whole integer, round down| 3.87 | 3 |
|

for loop to go through sentence and limit to row length
i; i(of the sentence) <= row.length +1; i++{
  pushes letters to row
} i ; i of sentence > row.length && <=row2.length; i++
