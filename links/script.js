// $(document).ready(
//     function () {
//         $(".user").click(
//             function () {
//                 $(".form").slideDown({ display: "block" })
//                 // $(".block_div1").css({ display: "block" })
//                 // $(".wraper").css({ position: "fixed"})
//             }
//         )
//     }
// )

// $(document).ready(
//     function () {
//         $(".close").click(
//             function () {
//                 $(".form").css({ display: "none" })
//                 // $(".block_div1").css({ display: "none" })
//                 // $(".wraper").css({ position: "relative"})
//             }
//         )
//     }
// )

$(document).ready(
    function () {
        $(".login").click(
            function () {
                $(".register").css({ backgroundColor: "white", color: "rgb(68, 68, 234)" })
                $(".login").css({ backgroundColor: "rgb(68, 68, 234)", color: "white" })
                $(".name").css("display", "none")
                $(".confirm_password").css("display", "none")
                $(".signin").css("display", "block")
                $(".create_account").css("display", "none")
            }
        )
    }
)

$(document).ready(
    function () {
        $(".register").click(
            function () {
                $(".login").css({ backgroundColor: "white", color: "rgb(68, 68, 234)" })
                $(".register").css({ backgroundColor: "rgb(68, 68, 234)", color: "white" })
                $(".name").css({ display: "block" })
                $(".confirm_password").css("display", "block")
                $(".signin").css("display", "none")
                $(".create_account").css("display", "block")
            }
        )
    }
)

$(document).ready(
    function () {
        $(".search").click(
            function () {
                $(".block_div2").css({ display: "block" })
                $(".search_close").css({ display: "block" })
                $(".search_bar").css({ display: "block" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".search_close").click(
            function () {
                $(".block_div2").css({ display: "none" })
                $(".search_close").css({ display: "none" })
                $(".search_bar").css({ display: "none" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".bag").click(
            function () {
                $(".shopping_cart").css({ display: "block" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".shopping_cart_close").click(
            function () {
                $(".shopping_cart").css({ display: "none" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".vegetable").click(
            function () {
                $(".vegetable").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".meats").css({color: "black", backgroundColor:"white"})
                $(".bakery").css({color: "black", backgroundColor:"white"})
                $(".beverages").css({color: "black", backgroundColor:"white"})
                $(".vegetable_content").css({ display: "block"})
                $(".meat_content").css({ display: "none" })
                $(".bakery_content").css({ display: "none" })
                $(".beverages_content").css({ display: "none" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".meats").click(
            function () {
                $(".meats").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".vegetable").css({ color: "black", backgroundColor: "white" })
                $(".bakery").css({ color: "black", backgroundColor: "white" })
                $(".beverages").css({ color: "black", backgroundColor: "white" })
                $(".vegetable_content").css({ display: "none" })
                $(".meat_content").css({ display: "block" })
                $(".bakery_content").css({ display: "none" })
                $(".beverages_content").css({ display: "none" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".bakery").click(
            function () {
                $(".bakery").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".meats").css({ color: "black", backgroundColor: "white" })
                $(".vegetable").css({ color: "black", backgroundColor: "white" })
                $(".beverages").css({ color: "black", backgroundColor: "white" })
                $(".vegetable_content").css({ display: "none" })
                $(".meat_content").css({ display: "none" })
                $(".bakery_content").css({ display: "block" })
                $(".beverages_content").css({ display: "none" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".beverages").click(
            function () {
                $(".beverages").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".meats").css({ color: "black", backgroundColor: "white" })
                $(".bakery").css({ color: "black", backgroundColor: "white" })
                $(".vegetable").css({ color: "black", backgroundColor: "white" })
                $(".vegetable_content").css({ display: "none" })
                $(".meat_content").css({ display: "none" })
                $(".bakery_content").css({ display: "none" })
                $(".beverages_content").css({ display: "block" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".moon").click(function () {
            $("body").toggleClass("body_color_night")
            $(".product_background").toggleClass("product_background_night")
            $(".night_mode").toggleClass("night_mode_for_night")
            $(".user").toggleClass("user_night")
            $(".bag").toggleClass("bag_night")
            $(".add_to_cart").toggleClass("add_to_cart_night")
            $(".icon_bg").toggleClass("icon_bg_night")
            $(".location").toggleClass("location_night")
            $(".social_clr").toggleClass("social_clr_night_mode")
            $(".social_clr").toggleClass("social_clr_night")
            $(".packet_img").toggleClass("packet_img_night")
            $(".moon").toggleClass("fas fa-sun")
            $(".carousel_night").toggleClass("carousel_slider_night")
            $(".contact_icon").toggleClass("contact_icon_night")
            $(".playbutton").css({ color: "blue" })
            $(".line2").css("display", "block")
            $(".line1").css("display", "none")
            $(".text_color").toggleClass("text_color_night")
            $(".contact_icon").toggleClass("contact_icon_night_mode")
            $(".add_to_cart").toggleClass("add_to_cart_night_mode")
            $(".nav1").toggleClass("nav1_night")
            $(".heading").toggleClass("heading_night")
        }
        )
    }
)

$(document).ready(
    function () {
        $(".text_color_night").on({
            mouseover: function () { $(this).css({ color: "rgb(68, 68, 234)", transition: "1.2s" }) },
            mouseout: function () { $(this).css({ color: "white" }) }
        })
    }
)

$(document).ready(
    function () {
        $(".contact_icon_night_mode").on({
            mouseover: function () { $(this).css({ color: "red" })},
            mouseout: function () { $(this).css({ color: "white" })}
        })
    }
)

$(document).ready(
    function () {
        $(".social_clr_night_mode").on({
            mouseover: function () { $(this).css({ backgroundColor: "rgb(68, 68, 234)" }) },
            mouseout: function () { $(this).css({ backgroundColor: "rgb(2, 2, 42)" }) }
        })
    }
)

$(document).ready(
    function () {
        $(".add_to_cart_night_mode").on({
            mouseover: function () { $(this).css({ backgroundColor: "rgb(68, 68, 234)" }) },
            mouseout: function () { $(this).css({ backgroundColor: "rgb(2, 2, 42)" }) }
        })
    }
)

$(document).ready(
    function () {
        $(".image_bg").hover(
            function () {
                $(this).find(".eye").show();
            },
            function () {
                $(this).find(".eye").hide();
            }
        )
    }
)

// $(document).ready(
//     function () {
//         $(".eye").click(
//             function () {
//                 // $(".block_div1").css({ display: "block" })
//                 // $(".wraper").css({ position: "fixed" })
//                 $(".packet_content_prod").css({ display: "block" })
//             }
//         )
//     }
// )

// $(document).ready(
//     function(){
//         $('.eye').click(
//             function(){
//                 $(this).find('.packet_content');
//             }
//         )
//     }
// )


// $(document).ready(
//     function () {
//         $(".close1").click(
//             function () {
//                 // $(".block_div1").css({ display: "none" })
//                 // $(".wraper").css({ position: "relative"})
//                 $(".packet1_content").css({ display: "none" })
//             }
//         )
//     }
// )

$(document).ready(
    function () {
        $(".send_message").on({
            mouseover: function () { $(".send_message").css({ backgroundColor: "rgb(68, 68, 234)", transition: "1.1s", border: "1px solid rgb(68, 68, 234)", color: "white" }) },
            mouseout: function () { $(".send_message").css({ backgroundColor: "rgb(241, 49, 87)", border: "1px solid rgb(241, 49, 87)", transition: "2.5s" }) }
        })
    }
)


const header = document.querySelector(".nav1");
const sticky1 = header.offsetTop;
const moon = document.querySelector(".moon");
const mooncolor = moon.offsetTop;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky1) {
        header.classList.remove("nav1");
        header.classList.add("sticky_morning");
        moon.classList.remove("moon")
        moon.classList.add("sticky_morning_moon")
    }
    else {
        header.classList.remove("sticky_morning");
        header.classList.add("nav1");
        moon.classList.add("moon")
        moon.classList.remove("sticky_morning_moon")
    }
});

var items = document.querySelectorAll('.carousel .carousel-item');
        items.forEach((e)=>{
            const slide = 4;
            let next = e.nextElementSibling;
            for(var i=0; i<slide; i++){
                if (!next){
                    next = items[0]
                }
                let clonechild = next.cloneNode(true)
                e.appendChild(clonechild.children[0])
                next = next.nextElementSibling
            }
        })

// setTimeout(function(){
//     $('.form').modal('show');
// }, 3000)
