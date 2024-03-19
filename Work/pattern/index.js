// *
// **
// ***
// ****
// *****

function pattern(a) {
  for (let index = 1; index <= a; index++) {
    for (let j = 1; j <= index; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
}
 pattern(5);
document.write("//////////////////////////////////////////","<br>")
//   *
//  * *
// * * *
function pattern2(a) {
    for (let i = 1; i <= a; i++) {
      for (let j = 1; j <= a - i; j++) {
        document.write("&nbsp;&nbsp;");
      }
      for (let k = 1; k <= i; k++) {
        document.write("*&nbsp;");
      }
      document.write("<br>");
    }
  }
  pattern2(3);
  document.write("//////////////////////////////////////////","<br>")

//   *
//  **
// ***  
function pattern3(a) {
    for (let i = 1; i <= a; i++) {
      for (let j = 1; j <= a - i; j++) {
        document.write("&nbsp;&nbsp;");
      }
      for (let k = 1; k <= i; k++) {
        document.write("*&nbsp;");
      }
      document.write("<br>");
    }
  }
  pattern3(3);
  document.write("//////////////////////////////////////////","<br>")


// *****
//  *** 
//   *

function printPattern(a) {
    let pattern = '';
    for (let i = a; i >= 1; i--) {
      for (let j = a; j > i; j--) {
        pattern += '&nbsp;';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += '*';
      }
      pattern += '<br>';
    }
    document.write(pattern);
  }
  
  printPattern(5);
  document.write("//////////////////////////////////////////","<br>")
  
  
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 

  function pattern5(n) {
    let string = '';

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                string += '  ';
            } else {
                string += '* ';
            }
        }
        string += '<br>';
    }    
  
    document.write(string);
  }

  pattern5(5);

  document.write("//////////////////////////////////////////","<br>")

  function pattern6(n) {
    let string = '';

    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            row += '*';
        }
        string += row + '<br>';
    }

    document.write(string);
    
  }
  pattern6(5)

  document.write("//////////////////////////////////////////","<br>")


  function pattern7(a) {
    for (let i = 1; i <= a; i++) {
      let row = '';

      for (let j = 1; j <= i; j++) {

      document.write(i)
      }
      
      document.write('<br>')
  }
  }

  pattern7(3);


  document.write("//////////////////////////////////////////","<br>")
