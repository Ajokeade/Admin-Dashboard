//get the form
var form=document.getElementById('addUserForm');
//add user event to the form
form.addEventListener('submit',addUser);
// get user table



//Adduser
function addUser(e){
    e.preventDefault();
   // console.log(e)
   // console.log(1);
  
debugger
    if(confirm('Add user details ?'))
    {
     // get the values from form on the add user modal
     var firstname=document.getElementById('firstName').value;
     var lastname=document.getElementById('lastName').value;
     var name= firstname + " " + lastname;
     var email=document.getElementById('email').value;
     var dateJoined=document.getElementById('dateJoined').value;
 
     // get the table
     var table=document.getElementById('userTable');
     
     // create new tr and asign it to table
     var row= table.insertRow(1);
 
     // create new td and asign to tr
     var cell1=row.insertCell(0);
     var cell2=row.insertCell(1);
     var cell3=row.insertCell(2);
     var cell4=row.insertCell(3);
 
     // asign the values to the td
     cell1.innerHTML=name;
     cell2.innerHTML=email;
     cell3.innerHTML=dateJoined;
     cell4.innerHTML="<button class='btn btn-default'data-toggle='modal'data-target='#editUser'>Edit</button> <span><button class='btn btn-danger delete' >Delete</button></span>"
    // reset form
    document.getElementById('addUserForm').reset();
     //close the add user modal
    $('#adduser').modal('hide');   
    
    }
      
   
    
}

// this function get user details from the table and asign to input on the edit user modal
function selectUser(){
    // debugger
    // e.preventDefault()
    // console.log(1);
     var   table=document.getElementById('userTable'),rIndex;
    for(var i=1; i<table.rows.length; i++){
        table.rows[i].onclick=function(){
            rIndex=this.rowIndex;
             console.log(rIndex);
             
             var name=this.cells[0].innerHTML;
             document.getElementById('editEmail').value=this.cells[1].innerHTML;
             document.getElementById('editDateJoined').value=this.cells[2].innerHTML;
             // split the name
            var str2= name.split(' ');
             // asign the split name to fname and lname input of the edit modal
             document.getElementById('editFirstName').value=str2[0];
             document.getElementById('editLastName').value=str2[1];
        };
    }
}
selectUser();



// This function save changes to the edit user
function editUser(){
    // debugger
   var fname= document.getElementById('editFirstName').value;
   var lname=  document.getElementById('editLastName').value;
   var email=  document.getElementById('editEmail').value;
   var dateJoined=document.getElementById('editDateJoined').value;
    
   table.rows[rIndex].cells[0].innerHTML=fname + " "+ lname;
   
    table.rows[rIndex].cells[1].innerHTML=email;
    // table.rows[rIndex].cells[2].innerHTML=dateJoined;
    console.log(table.rows[rIndex].cells[0].innerHTML=fname + " "+ lname);
    console.log(table.rows[rIndex].cells[1].innerHTML=email);
    console.log(table.rows[rIndex].cells[2].innerHTML=dateJoined);
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(dateJoined);


}
var   table=document.getElementById('userTable');
table.addEventListener('click',deleteUser)
// delete user
function deleteUser(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete!')){
            var tr=e.target.parentElement.parentElement
            tr.parentElement.removeChild(tr)
        }   
    }   
}