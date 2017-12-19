var btnArray = ['AC','CE','&#247','X','7','8','9','-','4','5','6','+','1','2','3','=','0','.'];
var resultScreen = '0';
var shadowScreen = '0';
$(document).ready(function(){
  for (var i in btnArray) {
    $('#button-space').append(
    '<button class="btn-margins calc-text btn-size" id="btn' +
    i + '">' + btnArray[i] + '</button>');
    if (btnArray[i] == 'AC' || btnArray[i] == 'CE') {
      $('button').addClass('btn-red');
    } else if (btnArray[i] == '=') {
      $('#btn15').addClass('btn-size-equals');
    } else if (btnArray[i] == '0') {
      $('#btn16').addClass('btn-size-zero');
    }else {
      $('button').addClass('btn-black');
    }
  }
} );

$( function clicked() {
  $('button').click( function() {
    var btnID = this.id.replace(/\D/g,'');
    console.log(btnID);
    switch (true) {
      case (btnID >= 2 && btnID <=14):  
      case (btnID == 16):    // '0'
        if (!resultScreen == 0) {
          resultScreen = this.textContent;
          shadowScreen += this.textContent;
        }
        break;
      case (btnID == 17):    // '.'
        if (!resultScreen.includes('.')) {
          resultScreen += this.textContent;
          shadowScreen += this.textContent;
        }
        break;
      case (btnID == 0):    // 'AC'
        resultScreen = '0';
        shadowScreen = '0';
        break;
      default:
        break;
    }

    
    $('#result').html(resultScreen);
    $('#result-shadow').html(shadowScreen);
  } );
} );