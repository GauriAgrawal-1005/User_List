var user_array = [""];
function myFunction() {
    var userName = document.getElementById('name');
    var userJob = document.getElementById('job');
    
    user_array.push(userName.value + ", " + userJob.value);
    
    var userList = "";
    for(let i=0;i<user_array.length;i++){
        userList =userList+user_array[i]+"<br/>";
    }
    document.getElementById('list').innerHTML=userList;
   
}