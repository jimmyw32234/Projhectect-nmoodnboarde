var angryPics= ["https://images.fatherly.com/wp-content/uploads/2018/08/angry-men.jpg?q=65&enable=upscale&w=600", 
                "http://www.stickpng.com/assets/images/5862951a3796e30ac4468737.png",
              "https://www.thoughtco.com/thmb/vLtpPUSGJLRKlIz9aYiFflaQBDo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/angrerWestend61-5c6db4d7c9e77c00016930a5.jpg"  ];

var blissPics= ["https://cdn.tinybuddha.com/wp-content/uploads/2010/02/Jumping-for-Joy.jpg",
            "https://media.mnn.com/assets/images/2016/10/joy.jpg.653x0_q80_crop-smart.jpg",
            "https://sitejerk.com/images/smiley-face-transparent-7.png"];

var thinkPics= ["https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060",
"http://www.brainfacts.org/-/media/Brainfacts2/Core-Concepts/Topic-Folder-Images/Thinking-and-Awareness.png",
"https://cms.algoafm.co.za/img/or_201862881849.jpeg"];

var nervousPics= ["https://cdn.shopify.com/s/files/1/0185/5092/products/persons-0027_1024x.png?v=1369543514",
"https://amp.businessinsider.com/images/57729c308b987d6434049652-750-563.jpg",
"http://images.donjuaninc.com/12-01-24-Nervous-Guy.jpg"];


$('button').click(function(){
    var input= $('input').val();
    $(".images").html("");
    if (input==="angry"){
        anger();
    } else if(input==="blissful"){
        bliss();
    } else if(input==="thoughtful"){
            thought();
    } else if(input==="nervous"){
        nerve();
     }else{
     alert("Please enter angry, blissful, thoughtful, or nervous!"); 
    }
});
    function anger(){
        changeBackground("https://backgroundcheckall.com/wp-content/uploads/2017/12/angry-background-1.jpg");
        changeTextColor("yellow");
        displayImages(angryPics);
    }
    function bliss(){
        changeBackground("https://i.ytimg.com/vi/PM1UuYIGpJQ/maxresdefault.jpg");
        changeTextColor("green");
        displayImages(blissPics);
    }
    function thought(){
        changeBackground("https://i.ytimg.com/vi/-K2Z1u_ItUs/hqdefault.jpg");
        changeTextColor("teal");
        displayImages(thinkPics);
    }
    function nerve(){
        changeBackground("http://the-piano-studio.com/wp-content/uploads/2015/08/nervous.jpg");
        changeTextColor("blue");
        displayImages(nervousPics);
    }
    function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImages(images){
    images.forEach(function(image){
    $('.images').append('<img src ='+ image + '>');
});
}