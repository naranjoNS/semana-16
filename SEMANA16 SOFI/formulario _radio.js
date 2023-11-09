function ingreasar{
    let nombre,edad,estado,institucion;
    nombre=document.getElementById("nom").value;
    edad=document.getElementById("ed").value;
    institucion=document.getElementById("ins").value;
    //
    if(document.getElementById("radio1").checked){
        estado="sin nivel de estudio";
    }
    else if(document.getElementById("radio2").checked){
        estado="primaria";
    }else if(document.getElementById("radio3").checked){
        estado="secundaria";
    }else if(document.getElementById("radio4").checked){
        estado="tecnico";
    }else if(document.getElementById("radio5").checked){
        estado="universitario";
    }else if(document.getElementById("radio6").checked){
        estado="otro tipo de estudio";
        }
        alert("el estudiante..."+nombre+" "+" con edad de:.."+edad+"años"+" "+ "\n"+"nivel de estudio...
        "+estado+"\n"+"graduado en la institucion: "+institucion);
    }
