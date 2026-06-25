function showPage2(){

    document.getElementById("page1").classList.add("hidden");
    
    document.getElementById("page2").classList.remove("hidden");
    
    }
    
    function showGallery(){
    
    document.getElementById("page2").classList.add("hidden");
    
    document.getElementById("page3").classList.remove("hidden");
    
    const imgs=[
    "img1",
    "img2",
    "img3",
    "img4",
    "img5"
    ];
    
    imgs.forEach((id,index)=>{
    
    setTimeout(()=>{
    document.getElementById(id).classList.add("show");
    },index*2000);
    
    });
    
    }