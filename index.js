function calculate() { 
    var subject1 = parseFloat(document.querySelector("#subject1").value); 
    var subject2 = parseFloat(document.querySelector("#subject2").value); 
    var subject3 = parseFloat(document.querySelector("#subject3").value); 
    var subject4 = parseFloat(document.querySelector("#subject4").value); 
    var subject5 = parseFloat(document.querySelector("#subject5").value); 
    
    var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5; 
    var percentage = (totalMarks / 500) * 100; 
    
    document.querySelector("#output").innerHTML = "Percentage: " + percentage + "%"; 
  } 
  