/**
* from an one row array, we slpit the objective string that contains a character into more strings separated by that character. For
* each separated string we create another row that also contains the sames values from the others columns as the originial string.
*
* @param ss_sheet reference of the sheet from a spreadsheet that we want to analyse
* @param {Array} array the 1 row array
* @param {string} character character that we use for separating strings
* @param {number} column column that we want to analize of the array (0 indexing)
* @return {Array} result returns an array that has one string for each row and the sames other values from before the spliting
*/

function splitString(array, character, column)
{
  // we define the array that we want to return and the array that we use for spliting strings
  var splited_array = [];
  var result = [];
  
  splited_array = array[0][column].valueOf().split(character); // one row array
  
  for (var f = 0 ; f < splited_array.length ; f++)
  {
    result[f] = [array[0][0, column-1] , splited_array[f] , array[0][column + 1]]
  }
}
