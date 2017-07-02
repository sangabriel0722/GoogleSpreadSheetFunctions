/*
##################################
###THE TRUTH WILL MAKE YOU FREE###
##################################
##The Author : Taesan Um Gabriel##
##The Date   : 09/04/2017#########
##################################
*/
function onEdit() {
  var s = SpreadsheetApp.getActiveSheet();
  var r = s.getActiveCell();
  if( r.getColumn() != 2 ) { //checks the column
    var row = r.getRow();
    var time = new Date();
    time = Utilities.formatDate(time, "GMT+09:00", "M월 d일 HH:mm");
    SpreadsheetApp.getActiveSheet().getRange('J6').setValue(time);
  };
}
