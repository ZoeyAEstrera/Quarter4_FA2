function generateTable() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
  
    if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
      alert("Please enter numbers between 2 and 10.");
      return;
    }
  
    let output = `<h2>Multiplication Table from ${start} to ${end}</h2>`;
    output += "<table><tr><th>x</th>";
  
    for (let i = start; i <= end; i++) {
      output += `<th>${i}</th>`;
    }
    output += "</tr>";
  
    for (let i = start; i <= end; i++) {
      output += `<tr><th>${i}</th>`;
      for (let j = start; j <= end; j++) {
        output += `<td>${i * j}</td>`;
      }
      output += "</tr>";
    }
  
    output += "</table>";
    document.getElementById("output").innerHTML = output;
  }
  