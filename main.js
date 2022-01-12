student_names=[];
function display_name() {
    name1=document.getElementById("student_name_1").value;
    name2=document.getElementById("student_name_2").value;
    name3=document.getElementById("student_name_3").value;
    name4=document.getElementById("student_name_4").value;
    student_names.push(name1);
    student_names.push(name2);
    student_names.push(name3);
    student_names.push(name4);
    console.log(student_names);
    document.getElementById("output").innerHTML=student_names;
    document.getElementById("btn_1").style.display="none";
    document.getElementById("btn_2").style.display="inline-block";
}
function Sort_names() {
    student_names.sort();
    document.getElementById("output").innerHTML=student_names;
}