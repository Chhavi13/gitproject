var selectedRow=null;
function onFormSubmit(){
    event.preventDefault();
  var formData= readFormData();
   if(selectedRow==null){
  //console.log(formData);
  insertNewRecord(formData);
   }else{
       updateRecord(formData);
   }
   resetForm();
}
function validateForm(){
    
}



function readFormData(){
    var formData={};
    formData["fullname"]=document.getElementById("fullname").value;
    formData["address"]=document.getElementById("address").value;
    // formData["gender"]=document.getElementsByName("gender").value;
    if (document.getElementById('male').checked) {
        formData["gender"] = document.getElementById('male').value;
      }
      else if(document.getElementById('female').checked){
          formData["gender"]=document.getElementById('female').value;
      }
      else{
          alert("please check the input field gender");
      }
    formData["email1"]=document.getElementById("email1").value;
    formData["course"]=document.getElementById("course").value;
    formData["phone"]=document.getElementById("phone").value;
    return formData;

}
function insertNewRecord(data){
    var table=document.getElementById("info").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.address;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.gender;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.email1;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.course;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.phone;
    cell7=newRow.insertCell(6); 
     cell7.innerHTML= `<button onclick='onEdit(this)'>Edit</button>
                                <button onclick='onDelete(this)'>Delete</button>`;
                       

}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("address").value=selectedRow.cells[1].innerHTML;
    document.getElementById("gender").value=selectedRow.cells[2].innerHTML;
    document.getElementById("email1").value=selectedRow.cells[3].innerHTML;
    document.getElementById("course").value=selectedRow.cells[4].innerHTML;
    document.getElementById("phone").value=selectedRow.cells[5].innerHTML;



}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullname;
    selectedRow.cells[1].innerHTML=formData.address;
    selectedRow.cells[2].innerHTML=formData.gender;
    selectedRow.cells[3].innerHTML=formData.email1;
    selectedRow.cells[4].innerHTML=formData.course;
    selectedRow.cells[5].innerHTML=formData.phone;
    

}

function onDelete(td){
    if(confirm('do you want to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById('info').deleteRow(row.rowIndex);
    }else{
        resetForm();
    }

}
function resetForm(){
    document.getElementById("fullname").value="";
    document.getElementById('address').value="";
    document.getElementById('gender').value="";
    document.getElementById('email1').value="";
    document.getElementById('course').value="";
    document.getElementById('phone').value="";
    selectedRow=null;
    
}


