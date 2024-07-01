run=()=>{
    //input
    var html=document.getElementById('html');
    var css=document.getElementById('css');
    var img=document.getElementById('imageURL');
      //output
    var h=document.querySelector('#output');
    var d=document.querySelector('#design');
     
    // value assign
    h.innerHTML=html.value;
    d.innerHTML=css.value;
    if(css.value=="Akash"||css.value=="akash" ||java.value=="akash" || html.value=="akash" ||html.value=="Akash"||java.value=="Akash"){
      alert("Hello he is the owner of this website if you want to talk him kindly contact on this gmail-av218378@gmail.com or our youtube channel Av gamer or our another website https://skytup.blogspot.com");
      h.style.background="url(https://drive.google.com/uc?export=download&id=1Bj1fcUIDVnwEfZd_h0cQdtKnYtx9ohUV)";
      h.style.backgroundSize="100% 100%";
    }
      else{
      h.style.background="url("+img.value+")";
        h.style.backgroundSize="100% 100%";}
    }
    /*code for Hybrid run*/
    hybridRun=()=>{
    document.write('<style>'+css.value+'</style>'+html.value);
    }

