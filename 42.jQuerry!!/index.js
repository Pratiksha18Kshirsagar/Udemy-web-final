// $("h1").css("color" , "red");

$("h1").addClass("text margin");
$("h1").removeClass("text ");
console.log($("h1").hasClass("margin"));
$("h1").text("Pratiksha");


$("h1").text("<em>Pratiksha</em>");
$("h1").html("<em>Pratiksha</em>");
$("a").attr("href" , "https://www.gmail.com");
console.log($("button").attr("class"));

//add event listener
$("button").click(function(){
    $("h1").css("color" , "purple");
})

$(document).keydown(function (event) {
console.log(event.key);
$("h2").text(event.key);
    
})
// $("h1").on("mouseover" ,function(){
//     $("h1").css("color" , "yellow");
    
// } )

// $("h1").after("<button>new</button>");
// $("h1").before("<button>new</button>");
// $("h1").prepend("<button>new</button>");
// $("h1").append("<button>new</button>");
// $("h1").hide("<button>new</button>");
// $("h1").show("<button>new</button>");


// $("button").on("click" , function(){
//     $("h1").toggle("<button>new</button>");
// })

// $("h1").fadeIn("<button>new</button>");
// $("h1").fadeOut("<button>new</button>");


// $("button").on("click" , function(){
//     $("h1").slideToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
// })

$("button").on("click" , function(){
    $("h1").slideUp().slideDown().animation({opacity:0.5});
})



