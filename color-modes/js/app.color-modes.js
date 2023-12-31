const colorfunk=()=>{
    var colorpi=document.getElementById('inputColor').value;
    document.body.style.backgroundColor=colorpi;
    document.getElementById('inputText').value=colorpi;
    const a=document.getElementById('demo');
    a.innerHTML='Ishlatildi'
}

const copy=()=>{
    const hexColor=document.getElementById('inputText');
    const b=document.getElementById('demo');
    navigator.clipboard.writeText(hexColor.value);
    b.innerHTML="Nusxalandi"
}

if("serviceWorker" in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker.register("/serviceWorker.js")
    })
}