let slno=1;
function addTableRow() {
   // var i=0;
    const userName = document.getElementById('userName').value;
    const regNo = document.getElementById('regNo').value;
    const grade = document.getElementById('grade').value;
    if (userName && regNo&&grade) {
    const tableElement = document.getElementById('tableData');
    const trElement = document.createElement('tr');
    const tbodyElement = document.createElement('tbody');
    const nameEle = document.createElement('td');
    const regEle = document.createElement('td');
    const gradeEle = document.createElement('td');
     nameEle.innerHTML = userName;
     regEle.innerHTML = regNo;
     gradeEle.innerHTML = grade;
     const slnEle = document.createElement('td');
     slnEle.innerHTML = slno++;
     trElement.appendChild(slnEle);
     trElement.appendChild(nameEle);
     trElement.appendChild(regEle);
     trElement.appendChild(gradeEle);
     tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
    tableElement.style.display = "table";
 document.getElementById('clearButton').style.display = 'inline-block';
    i=i+1;
    sortTable(0);
}  
if(userName===""&&regNo===""&&grade===""){
    document.getElementById("userNameWarning").textContent ="The Name field cannot be blank.";
    document.getElementById("regNoWarning").textContent = "The USN field cannot be blank.";
    document.getElementById("gradeWarning").textContent = "The marks field cannot be blank.";
    userName.focus();
    regNo.focus();
    grade.focus();
   // errorMessage.style.display = "block";
    return;
}
     if(userName===""){
                        gradeWarning.innerHTML='';
                        regNoWarning.innerHTML='';
                        const userNameWarning = document.getElementById('userNameWarning');
                        userNameWarning.innerHTML='The Name field cannot be blank';
                        document.getElementById('userName').focus();
            
                    }      
       else if(regNo===""){
                    userNameWarning.innerHTML='';
                    gradeWarning.innerHTML='';
                    const regNoWarning = document.getElementById('regNoWarning');
                    regNoWarning.innerHTML='The USN field cannot be blank';
                    document.getElementById('regNo').focus();
                } 
       else if(grade===""){
                    userNameWarning.innerHTML='';
                    regNoWarning.innerHTML='';
                    const gradeWarning = document.getElementById('gradeWarning');
                    gradeWarning.innerHTML='The Marks field cannot be blank';
                    document.getElementById('grade').focus();
                }   
         }
   
         function sortTable(n) {
            let table;
            table = document.getElementById("tableData");
            var rows, i, x, y, count = 0;
            var switching = true;
            var direction = "asc";
            while (switching) {
                switching = false;
                var rows = table.rows;
                for (i = 1; i < (rows.length); i++) {
                    var Switch = false;
                    x = rows[i].getElementsByTagName("td")[n];
                    y = rows[i + 1].getElementsByTagName("td")[n];
                    if (direction == "asc") {
                        if (x.innerHTML.toLowerCase() >
                        y.innerHTML.toLowerCase()) {
                            Switch = true;
                            break;
                        }
                    } else if (direction == "desc") {
                        if (x.innerHTML.toLowerCase() <
                        y.innerHTML.toLowerCase()) {
                            Switch = true;
                            break;
                        }
                    }
                }
                if (Switch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                    count++;
                } else {
                    if (count == 0 && direction == "asc") {
                        direction = "desc";
                        switching = true;
                    }
                }
            }
        }