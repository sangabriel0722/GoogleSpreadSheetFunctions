
n SendEmail() {
  
  // These all code is operated under the current activated sheet.
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
    var leadername = sheet.getRange('J1').getValue();
    
    // Set titles and contents.
    var subject1 = "목사님, " + leadername + " 소그룹 보고서 업데이트 완료했습니다.";
    var subject2 = sheet.getRange('C5').getValue() +" 엘더님 " + leadername + " 소그룹 보고서 업데이트 완료했습니다.";
    
    var message1 = "첨부된 링크를 누르시면, 지금 바로 확인하실 수 있습니당!\n"+ sheeturl;
    var message2 = "첨부된 링크를 누르시면, 지금 바로 확인하실 수 있습니당!\n"+ sheeturl;

    //목사님께
    MailApp.sendEmail('sangabriel0722@gmail.com', subject1, message1);
    //엘더님께
    //MailApp.sendEmail('sangabriel0722@gmail.com', subject2, message2);
    
    // After sending mails, show this message to the manager.
    sheet.getRange('N4').setValue(Utilities.formatDate(time, "GMT+09:00", "M.d, hh:mm"+"  확인메일전송"));
    ui.alert('고생하셨습니다 '+sheet.getRange('J1').getValue()+'님 :)', '형제여\n 성도들의 마음이\n \
너로 말미암아 평안함을 얻었으니\n 내가 너의 사랑으로\n 많은 기쁨과 위로를 받았노라\n\n 빌레몬서1:7', ui.ButtonSet.OK);
  } else {
    // User clicked "No" or X in the title bar.
  };
};
