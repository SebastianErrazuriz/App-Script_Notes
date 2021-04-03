/**
* Create a menu on the UI of the spreadsheet.
*
* Triggers are usefull to run some srcipts depending on an event or a specific condition. 
* it's important to say that simple triggers like onOpen() cannot run for longer than 30sec and there cannot be more than 20 triggers per user / script
* For more information regardinng App-script basic knowledge, visit Fundamentals of Apps Script with Google Sheets
*/

function onOpen() {
    // we aquire the object representing the user interfaceof the active spreadsheets
    var ui = SpreadsheetApp.getUi();
  
    // crate and add a menu with names of our choosing
    ui.createMenu('Example menu')
        // create a connection between the menu item label and the function that we want to run 
        .addItem('name of the menu', 'myFunction_01')
        .addItem('name of the menu', 'myFunction_02')
        .addItem('name of the menu', 'myFunction_03')
        // create a separator
        .addSeparator()
        // create a submenu
        .addSubMenu(ui.createMenu('Example submenu')
                    .addItem('name of the submenu', 'myFunction_04')
                    .addItem('name of the submenu', 'myFunction_05')
                   )
        .addToUi();
}
