/**
* Example of spliting one string that contains a character into more strings separated by that character
* @param {Array} array the argument to iterate 
* @param {string} character character that we use for separating strings
* @param {number} column column that we want to analize of the array (0 indexing)
*/

function splitString(array, character)
{
  for (var f = 0; f < array.length; f++) 
  { 
    var array = array[f][column].valueOf().split(character) 

    // if there is only one value, that means that there isn't a character in the string
    if (array.length < 2)
    { 
      sheet_pegar.getRange(i,1).setValue(valores[f].slice(columnas_importadas_inicial_valores - 1, columnas_importadas + 1)[0]); // project
      i = i + 1; 
    }

    else
    { 
      for (let v = 0 ; v < array_proyectos_asociados.length ; v++)
      {
        sheet_pegar.getRange(i,1).setValue(valores[f].slice(columnas_importadas_inicial_valores - 1, columnas_importadas + 1)[0]); // project
        i = i + 1; 
      }
    } 
  }
}
