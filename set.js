$(document).ready(function(){
    $("#get").click(function(){
        $.ajax({
            type:"GET",
            url:"dada.json",
            success:function(data){

var output="<table class='table'><thead><tr><th>NAME</th><th>DOB</th><th>COLLEGE</th><th>MOB</th></tr></thead>" 
for(var i in data){
    output+="<tr><td>"+data[i].name+"</td>"
    output+="<td>"+data[i].dob+"</td>"
    output+="<td>"+data[i].college+"</td>"
     output+="<td>"+data[i].mob+"</td></tr>"
}
output+="</table>";
$(".result").html(output);
            }
        })
    })
})