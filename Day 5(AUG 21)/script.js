let val = 0;
let statusMode = "normal";
const comment = document.getElementById("comment");
const username = document.getElementById("username");
const regNo = document.getElementById("regNo");
const grade = document.getElementById("grade");
const submit = document.getElementById("submit");
const reset_btn = document.getElementById("reset_btn");
const tableBody = document.getElementById("tableBody");
const table = document.getElementById("tableData");
const header = document.getElementById("tableHeader");
const clearButton=document.getElementById('clearButton');
const mydiv=document.getElementById('mydiv')
const searchdiv=document.getElementById('searchdiv')

let tableData = [];
let savedData = [];
let i = 0;

function submitAction() {
  if (validate()) {
    let data = {
      keyValue: i,
      name: username.value,
      regNo: regNo.value,
      grade: grade.value,
    };
    i++;
    tableData.push(data);
    clearForm();
    sortTable(1);
    displayTable(tableData);
    table.style.display = "table";
    header.style.display = "block";
    clearButton.style.display="block"
    searchdiv.removeAttribute("class")
    searchdiv.setAttribute("class","d-flex mx-4")
  }
}

function displayTable(obj) {
  tableBody.innerHTML = "";
  let sl = 1;
  obj.forEach((element) => {
    x = document.createElement("TR");
    x.setAttribute("id", `row${element.keyValue}`);
    x.innerHTML = `<tr><td>${sl}</td><td>${element.name}</td><td>${element.regNo}</td><td>${element.grade}</td><td colspan="2"><div class="row g-2 ">
<div id="update${element.keyValue}"  class="d-none col-6"><button class="btn w-100 px-2 btn-secondary" onclick="updateData(${element.keyValue})">Update</button></div>
<div id="edit${element.keyValue}" class="d-inline col-6"><button class="btn w-100 btn-primary"  onclick="editData(${element.keyValue})">Edit</button></div>
<div id="cancel${element.keyValue}" class="d-none col-12"><button class="btn w-100 btn-danger"  onclick="cancelEdit(${element.keyValue})">Cancel</button></div>
<div id="delete${element.keyValue}" class="d-inline col-6"><button class="btn w-100 btn-danger onclick="deleteData(${element.keyValue})" " >Delete</button></div> </div></td></tr>`;
    tableBody.appendChild(x);
    sl++;
  });
}

function deleteData(keyValue) {
  if (!statusMode.localeCompare("normal")) {
    tableData.splice(
      tableData.findIndex((object) => {
        return object.keyValue === keyValue;
      }),
      1
    );
    displayTable(tableData);
  }
}

function validate() {
  if (username.value === "" || grade.value === "" || regNo.value === "") {
    if (grade.value === "") {
      document.getElementById("gradeWarning").innerText =
        "The Marks field cannot be blank";
      document.getElementById("grade").focus();
    }
    if (regNo.value === "") {
      document.getElementById("regNoWarning").innerText =
        "The USN field cannot be blank";
      document.getElementById("regNo").focus();
    }
    if (username.value === "") {
      document.getElementById("userNameWarning").innerText =
        "The Name field cannot be blank";
      document.getElementById("username").focus();
    }
    return false;
  } else return true;
}

function disableWarning_userName() {
  if(!document.getElementById("username").blur())
  document.getElementById("userNameWarning").innerText =
        "";
        document.getElementById("username").focus()
}

function disableWarning_regNo() {
  regNoWarning.innerHTML = "";
}

function disableWarning_grade() {
  
  gradeWarning.innerHTML = "";
  
}

document.getElementById("grade").onkeydown = function() {
  var input = parseInt(this.value);
  if (input < 0 || input > 100)
    console.log("Value should be between 0 - 100");
  return;
}

function editData(keyValue) {
  if (!statusMode.localeCompare("normal")) {
    statusMode = "editing";
    document
      .getElementById(`edit${keyValue}`)
      .setAttribute("class", "d-none col-6 justify-content-center");
    document
      .getElementById(`delete${keyValue}`)
      .setAttribute("class", "d-none col-6 justify-content-center");
    document
      .getElementById(`cancel${keyValue}`)
      .setAttribute("class", "d-block col-12 justify-content-center");
    let row = document.getElementById(`row${keyValue}`);
    for (i = 1; i < row.cells.length - 1; i++) {
      savedData[i] = row.cells[i].innerHTML;
      x = document.createElement("input");
      x.setAttribute("type", "text");
      x.setAttribute("id", `input${i}`);
      x.setAttribute("class", "w-100");
      x.setAttribute("oninput", `onInputChange(${keyValue})`);
      x.setAttribute("value", row.cells[i].innerHTML);
      row.cells[i].innerHTML = "";
      row.cells[i].appendChild(x);
    }
  }
}

function onInputChange(keyValue) {
  if (!statusMode.localeCompare("editing")) {
    statusMode = "updating";
    document
      .getElementById(`update${keyValue}`)
      .setAttribute("class", "d-block col-6 justify-content-center");
    document
      .getElementById(`cancel${keyValue}`)
      .setAttribute("class", "d-block col-6 justify-content-center");
  }
}

function cancelEdit(keyValue) {
  statusMode = "normal";
  let row = document.getElementById(`row${keyValue}`);
  dataIndex = tableData.findIndex((object) => {
    return object.keyValue === keyValue;
  });
  for (i = 1; i < row.cells.length - 1; i++) {
    row.cells[i].innerHTML = savedData[i];
  }
  document
    .getElementById(`update${keyValue}`)
    .setAttribute("class", "d-none col-6 justify-content-center");
  document
    .getElementById(`cancel${keyValue}`)
    .setAttribute("class", "d-none col-6 justify-content-center");
  document
    .getElementById(`edit${keyValue}`)
    .setAttribute("class", "d-block col-6 justify-content-center");
  document
    .getElementById(`delete${keyValue}`)
    .setAttribute("class", "d-block col-6 justify-content-center");
}

function updateData(keyValue) {
  statusMode = "normal";
  let row = document.getElementById(`row${keyValue}`);

  for (i = 1; i < row.cells.length - 1; i++) {
    inputvalue = document.getElementById(`input${i}`).value;
    row.cells[i].innerHTML = inputvalue;
  }
  document
    .getElementById(`update${keyValue}`)
    .setAttribute("class", "d-none col-6 justify-content-center");
  document
    .getElementById(`cancel${keyValue}`)
    .setAttribute("class", "d-none col-6 justify-content-center");
  document
    .getElementById(`edit${keyValue}`)
    .setAttribute("class", "d-block col-6 justify-content-center");
  document
    .getElementById(`delete${keyValue}`)
    .setAttribute("class", "d-block col-6 justify-content-center");
}

// action on search
function searchData(){
    searchValue = document.getElementById('search').value.toString().trim()
    if (!searchValue.localeCompare("")){
        displayTable(tableData)
        document.getElementById('para').innerHTML=""
    }
    else {
        let result = filterBySearch(tableData, searchValue)
        if (result.length > 0){
            displayTable(result)
            document.getElementById('para').innerHTML=""
        }
        else {
           x=document.getElementById('para')
           if(!x){
            x = document.createElement('p')
            x.setAttribute("class","text text-danger")
            x.setAttribute("id","para")
            x.innerHTML = "No result found "
            tableBody.innerHTML = ""
            mydiv.appendChild(x)
           }
           else{
            x.innerHTML = "No result found "
            tableBody.innerHTML = ""
            mydiv.appendChild(x)
           }
        }
      }
}

// filters the table-data object by search-value
function filterBySearch(arr, searchKey){
    return arr.filter((obj) => {
        return Object.keys(obj).some((keyValue) => {
            return obj[keyValue].toString().includes(searchKey);
        })
    });
}

function sortTable(n) {
  let table;
  val++;
  table = document.getElementById("tableData");
  var rows,
    i,
    x,
    y,
    count = 0;
  var switching = true;
  if (val % 2 == 0) {
    var direction = "asc";
  } else {
    var direction = "desc";
  }
  while (switching) {
    switching = false;
    var rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          Switch = true;
          break;
        }
      } else if (direction == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
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
  var rows = table.rows;
  for (i = 1; i < rows.length; i++) {
    x = rows[i].getElementsByTagName("td")[0];
    x.innerHTML = i;
  }
}
function Warning_userName() {
  userNameWarning.innerHTML = "Enter the Valid Name(Hint Alphabets Only)";
}

function Warning_grade() {
  gardeWarning.innerHTML = "Enter Numbers from 0 to 100";
}

function inputChange() {
  var updateButton = document.getElementById("updateButton");
  updateButton.style.display = "inline-block";
}

function clearForm() {
  document.getElementById("myForm").reset();
}

function clearTheTable(){
  location.reload()
}