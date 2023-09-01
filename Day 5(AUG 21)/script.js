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

/**
 * The submitAction function validates user input, adds the data to a table, clears the form, sorts the
 * table, and displays it.
 */
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
/**
 * The function "clearSearchData" clears the search input field and displays the original table data.
 */
function clearSearchData()
{
  const search=document.getElementById('search').value="";
    displayTable(tableData)
  search.innerHTML="";
  document.getElementById('para').innerHTML=""
  
}

/**
 * The function `displayTable` creates and appends table rows to a table body element based on the data
 * provided in the `obj` parameter.
 * @param obj - The `obj` parameter is an array of objects. Each object represents a row of data in a
 * table. The objects have the following properties:
 */
function displayTable(obj) {
  tableBody.innerHTML = ""
  let sl = 1
  obj.forEach(element => {
      x = document.createElement('TR')
      x.setAttribute('id', `row${element.keyValue}`)
      x.innerHTML = `<tr>
      <td>${sl}</td>
      <td>${element.name}</td>
      <td>${element.reg}</td>
      <td>${element.grade}</td>
      <td colspan="2">
          <div class="row g-2 ">
              <div id="update${element.keyValue}" class="d-none col-md-6 ">
                  <button class="btn w-100  btn-success"  onclick="updateData(${element.keyValue})">Update</button>
              </div>
              <div id="edit${element.keyValue}" class="d-block col-md-6 ">
                  <button class="btn w-100  btn-info"  onclick="editData(${element.keyValue})">Edit</button>
              </div>
              <div id="cancel${element.keyValue}" class="d-none col-12 ">
                  <button class="btn w-100 btn-danger"  onclick="cancelEdit(${element.keyValue})">Cancel</button>
              </div>
              <div id="delete${element.keyValue}" class="d-block col-md-6">
                  <button onclick="deleteData(${element.keyValue})" class="btn  w-100 btn-danger" >Delete</button>
              </div>
          </div>
      </td></tr>`
      tableBody.appendChild(x)
      sl++
  });  
}

/**
 * The `deleteData` function removes an object from the `tableData` array based on a matching
 * `keyValue` property and then updates the displayed table.
 * @param keyValue - The `keyValue` parameter is the value that is used to identify the object in the
 * `tableData` array that needs to be deleted.
 */
function deleteData(keyValue) {
  if (!statusMode.localeCompare("normal")) {
    tableData.splice(tableData.findIndex(object => {
        return object.keyValue === keyValue
    }), 1)
    displayTable(tableData)
}
if (!tableData.length > 0) {
    clearTableBtn.style.display = "none"
}
}

/**
 * The function "validate" checks if the username, grade, and registration number fields are empty and
 * displays appropriate warning messages if they are.
 * @returns a boolean value. If all the fields (username, grade, and regNo) have values, it will return
 * true. Otherwise, if any of the fields are blank, it will return false.
 */
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

/**
 * The function disables the warning message for the username field and sets focus on the username
 * input.
 */
function disableWarning_userName() {
  if(!document.getElementById("username").blur())
  document.getElementById("userNameWarning").innerText =
        "";
        document.getElementById("username").focus()
}

/**
 * The function disables the warning message for a USN.
 */
function disableWarning_regNo() {
  regNoWarning.innerHTML = "";
}

/**
 * The function disables the warning message for a MARKS.
 */
function disableWarning_grade() {
  
  gradeWarning.innerHTML = "";
  
}

/**
 * The `editData` function is used to switch the status mode to "editing" and replace table cells with
 * input fields for editing data.
 * @param keyValue - The `keyValue` parameter is a value that identifies the specific data row that
 * needs to be edited. It is used to target the HTML elements associated with that row and modify their
 * attributes and content.
 */
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

/**
 * The function `onInputChange` updates the status mode to "updating" and displays the update and
 * cancel buttons based on the input key value.
 * @param keyValue - The `keyValue` parameter is a value that is used to identify a specific element in
 * the HTML document. It is typically used as an identifier or key to perform specific actions or
 * updates on that element.
 */
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

/**
 * The `cancelEdit` function cancels the editing mode for a specific row in a table and restores the
 * original data.
 * @param keyValue - The `keyValue` parameter is a unique identifier for the row that needs to be
 * canceled. It is used to locate the specific row in the table and revert the changes made during the
 * editing process.
 */
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

/**
 * The function `updateData` updates the data in a table row based on the input value and updates the
 * corresponding HTML elements.
 * @param keyValue - The `keyValue` parameter is a unique identifier for the data row that needs to be
 * updated. It is used to locate the specific row in the table and update its values.
 */
function updateData(keyValue) {
  statusMode = "normal";
  let row = document.getElementById(`row${keyValue}`);
  dataIndex = tableData.findIndex(object => {
              return object.keyValue === keyValue
          })

  for (i = 1; i < row.cells.length - 1; i++) {
    inputvalue = document.getElementById(`row${keyValue}`).cells[i].childNodes[0].value
    tableData[dataIndex][Object.keys(tableData[dataIndex])[i]] = inputvalue;
    row.cells[i].innerHTML = inputvalue
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

/**
 * The function `searchData` takes a search value from an input field, filters a table data based on
 * the search value, and displays the filtered data in a table. If no results are found, it displays a
 * message indicating that no results were found.
 */
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

/**
 * The function filters an array of objects based on a search key.
 * @param arr - The `arr` parameter is an array of objects that you want to filter based on a search
 * key. Each object in the array represents a data entry.
 * @param searchKey - The searchKey parameter is a string that represents the value you want to search
 * for in the objects of the array.
 */
function filterBySearch(arr, searchKey){
  return arr.filter((obj) => {
    return Object.keys(obj).some((keyValue) => {
        return obj[keyValue].toString().includes(searchKey);
    })
  });
}

/**
 * The function `sortTable` is used to sort a table based on a specific column when called.
 * @param n - The parameter `n` in the `sortTable` function represents the index of the column that you
 * want to sort the table by. The sorting will be based on the values in that column.
 */
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
/**
 * The function "Warning_grade" displays a warning message asking the user to enter numbers from 0 to
 * 100.
 */
function Warning_grade() {
  gardeWarning.innerHTML = "Enter Numbers from 0 to 100";
}

/**
 * The function "inputChange" displays the update button.
 */
function inputChange() {
  var updateButton = document.getElementById("updateButton");
  updateButton.style.display = "inline-block";
}

/**
 * The clearForm function resets the values of all input fields in a form with the id "myForm".
 */
function clearForm() {
  document.getElementById("myForm").reset();
}

/**
 * The function clearTheTable reloads the current page, effectively clearing the table.
 */
function clearTheTable(){
  displayTable(tableData)
    if (confirm("Alert! This action will clear all data!")) {
        clearForm()
        clearSearchData()
        tableData = []
        displayTable(tableData)
        clearButton.style.display = "none"
    }
}