function onOpen() {
  var s = SpreadsheetApp.getActiveSheet();
  var email = Session.getActiveUser().getEmail();
  
  var time = new Date();
  time = Utilities.formatDate(time, "GMT+09:00", "M월 d일 HH:mm");
  
  s.getRange('J1').setValue('');
  
  if(email == s.getRange('K2').getValue()){
    s.getRange('K6').setValue(time);
  };
  
  if(email == s.getRange('K4').getValue()){
    s.getRange('L6').setValue(time);    
  };   
}

