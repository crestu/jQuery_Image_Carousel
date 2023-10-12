//dfine an array of image URLS
//set up an index to keep track of the currently displayed image
//attach click event handlers to the next and previous buttons
//use jquery animations to transition between images
    //fadeIn fadeOut
//use attr()

// style inmage container and buttons
    // using css to be center of page
//minimum of 5 images max 10
    // save them in project path
    //use the corret photonames when defingin your 
    //image array
//resize images before adding to github

$(document).ready(function(){

    var images = [
        "https://i0.wp.com/www.communitycatspodcast.com/wp-content/uploads/2023/03/Cat6.jpg?w=1200&ssl=1",
        "https://www.scotsman.com/webimg/b25lY21zOjJiN2Q1NjhlLWI5ZDMtNGM2ZS1iOTFjLTNkYjcwOTE3OGI0NzplNWFkZDUxYy0yZjNiLTRiM2QtOTRjMC04YjllN2VhY2U3Mzg=.jpg?crop=3:2,smart&width=990&quality=65&enable=upscale",
        "https://tenlives.com.au/wp-content/uploads/2020/09/Found-Kitten-0-8-Weeks-Busy-scaled.jpg",
        "https://media.cnn.com/api/v1/images/stellar/prod/230426135537-sand-cat-1.jpg?c=original",
        "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    ];

    var index = 0;

    // function showImg() {
    //  
    //     });
    // }


        $("#imageContainer").each(function(){
            $(this).attr("src", images[index])
        })

        $("#nextButton").on("click", function(){

            index++;
        })


        $("#prevButton").on("click", function(){
            index--;
        })
  
      
  

})
