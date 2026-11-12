function calcular() {
    let numero1=Number(document.getElementById("numero1").value);
    let numero2=Number(document.getElementById("numero2").value);
    let suma=numero1+numero2;
    let resta=numero1-numero2;
    let multiplicacion=numero1*numero2;
    let divicion=numero1/numero2;
    document.getElementById("suma").innerHTML="la suma es:"+suma;
    document.getElementById("resta").innerHTML="la resta es:"+resta;
    document.getElementById("multiplicacion").innerHTML="la multiplicacion es:"+multiplicacion;
    document.getElementById("divicion").innerHTML="la divicion es:"+divicion;
} 