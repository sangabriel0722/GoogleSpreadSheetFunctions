//This function send mails to administrators for check updates the activated sheets.

function SendEmail(){
  
  // All code is operated under the current activated sheet.
  var sheet = SpreadsheetApp.getActiveSheet();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheeturl = ss.getUrl();
  
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var result = ui.alert(
    '목사님과 엘더님께 확인메일을 보내겠습니까?'
     ,ui.ButtonSet.YES_NO);
  
  if (result == ui.Button.YES) {
    // User clicked "Yes".
    var EMAIL_SENT = "확인메일전송\n";
    var time = new Date();
    
    // Get the name of editor who manages this sheet.
    var leadername = sheet.getRange('F1').getValue();
    
    // Set titles and contents.
    var subject1 = "목사님, " + leadername + " 소그룹보고서 업데이트 완료했습니다.";
    var subject2 = "엘더님 " + leadername + " 리더보고서 확인바랍니다.";
    
    var message1 = "첨부된 링크를 누르시면, 지금 바로 확인하실 수 있습니다.\n"+ sheeturl;
    var message2 = "첨부된 링크를 누르시면, 지금 바로 확인하실 수 있습니다.\n"+ sheeturl;
    
    //목사님께
    MailApp.sendEmail(sheet.getRange('K4').getValue(), subject1, message1);
    //엘더님께
    MailApp.sendEmail(sheet.getRange('K2').getValue(), subject2, message2);
    
    // After sending mails, show this message to the manager.
    sheet.getRange('J1').setValue(Utilities.formatDate(time, "GMT+09:00","확인메일전송"));
    ui.alert('고생하셨습니다 '+sheet.getRange('F1').getValue()+'리더님 :)', '하나님은 불의하지 아니하사\n 너희 행위와 그의 이름을 위하여 나타낸 사랑으로\n \
이미 성도를 섬긴 것과, 이제도 섬기고 있는 것을\n 잊어버리지 아니하시느니라\n\n 히브리서6:10', ui.ButtonSet.OK);
  } else {
    // User clicked "No" or X in the title bar.
  }
  SpreadsheetApp.flush();
}
