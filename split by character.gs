/**
* Example of spliting two values from one string that contains a character
*/


character = ";";
column = 1; // using a value of example

for (let f = 0; f < values.length-2; f++) 
{ 
  var array = values[f][column].valueOf().split(character) 
  
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
