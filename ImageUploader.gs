//This function takes image files of group member from the folder where they are stored by the manager
//Then, under very strictly calculated and depending on absolute position of cells,
//The images files from the folder can be loaded where we expect and hope that the images set in.

function ImageUploader(folderName) {
  
  var ui = SpreadsheetApp.getUi();
  
  //Give a message to manager for warning about correspondence of the names to the names 
  var result = ui.alert(
    '네트워크 환경에 따라 시간이 조금 걸릴 수 있습니다.'
     ,ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (result == ui.Button.YES) {
    // User clicked "Yes".
    
    // These all code is operated under the current activated sheet.
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Set a process percentage to zero.
    sheet.getRange('I1').setValue(0);
    sheet.getRange('I1').setNumberFormat("00.00%");
    
    //Change the folder ID below to reflect your folder's ID (look in the URL when you're in your folder)
    var folder = DriveApp.getFolderById("0B_sZAR8u-wJRZkZ1Ti1oVEYzR1U");
    //The above code MUST BE DONE!! REMEMBER!!!! THIS MUST BE DONE//
    
    //Get a list of the image files
    var contents = folder.getFiles();
    
    //In this sort of sheet, the possibility that the manager uses rows exceeding 300 rows
    //So it was fixed as 300
    var lastRow = 300;
    
    //Then calculate a number of group members
    var values = sheet.getRange('A' + "1:" + 'A' + lastRow).getValues();
    for (; values[lastRow - 1] == "" && lastRow > 0; lastRow--) {}
    var numofmem = values[lastRow - 10];
    
    //So far, it takes 0.3% of the whole process.
    sheet.getRange('I1').setValue(0.002);
    sheet.getRange('I1').setNumberFormat("00.00%");
    
    var file;
    var lengthofimage = 0;
    while(contents.hasNext()){
      lengthofimage++;
      file = contents.next();
    };

    //So far, it takes 0.5% of the whole process. 
    sheet.getRange('I1').setValue(0.005);
    sheet.getRange('I1').setNumberFormat("00.00%");
    
    //Take the list again.
    var contents = folder.getFiles();
    var k = 0  
    
    //Matching Process is operated from now
    while (contents.hasNext()) {
    
      //take a image file consecutively.
      var file = contents.next();
      
      //compare the name of the file and the cell name one by one.
      for(var i = 1; i<=numofmem; ++i){
        k++;
        
        //Updates the process percentage.
        sheet.getRange('I1').setValue((k/(numofmem*lengthofimage)));
        sheet.getRange('I1').setNumberFormat("00.00%");
        
        //If there is a matching, upload the image file to the sheet.
        if(file.getName().substring(0,2) == sheet.getRange('A'+(12*i+6)).getValue().substring(0,2)){
          data = ["=image(\"https://docs.google.com/uc?download=view&id=" + file.getId() +"\", 2)"];
          sheet.getRange('B'+(12*i-2)).setValue(data);
        };
      };
    };
    
    //After the whole process, show this message to the manager.
    ui.alert('기다려주셔서 감사합니다 '+sheet.getRange('F1').getValue()+'님 :)','만일 우리가\n \
보지 못하는 것을 바라면\n 참음으로 기다릴지니라\n\n 로마서 8:25',ui.ButtonSet.OK);
    
  } else {
    // User clicked "No" or X in the title bar.
  }
  
  SpreadsheetApp.flush();
}
