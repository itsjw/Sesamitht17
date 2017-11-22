//Navbar code
document.addEventListener('DOMContentLoaded', function () {
    
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
    
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
            var navbarStart = document.getElementById("navbar-start");
            
    
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
            navbarStart.classList.toggle("is-active");
    
          });
        });
      }
    
    }); //end navbar code

    //jquery 
    $(document).ready(function() {
      $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if(scroll > 100) {
          document.getElementById("navbar-custom").style.padding = "0px 0px 0px 0px";
        }
        else if(scroll < 100 && width > 768) {
          document.getElementById("navbar-custom").style.padding = "25px 0px 25px 0px";
        }
        });
      $(function () {
          /* expandable navbar-dropdown items */
          function mobile_expandable_menu() {
              if ($(window).width() < 768) {
                  $('.navbar-link').next('.navbar-dropdown').hide();
                  $('.navbar-link').on('click', function () {
                      $(this).next('.navbar-dropdown').slideToggle();
                  });
              } else {
                  $('.navbar-link').next('.navbar-dropdown').css('display', '');
                  $('.navbar-link').unbind('click');
              }
          }
          var screen_resize_timout;
          $(window).on("resize", function (e) {
              clearTimeout(screen_resize_timout);
              screen_resize_timout = setTimeout(mobile_expandable_menu, 500);
          });
          mobile_expandable_menu();
      });
      $('#hide-job-button').on('click', function (event) {
          $('#job-notification').toggle('show');
      });
      $('#btn-bryggan-meny').click(function () {
          $('html, body').animate({
              scrollTop:$("#bryggan-meny").offset().top
          },2000);
      });
  }); //end document ready

  //Utskott "slideshow"
  function visaUtskott(evt, utskott) {
    // Declare all variables
    var i, tabcontent, tablinks, listcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(utskott).style.display = "block";
    listcontent = document.getElementsByClassName("tab-li");
    for(i = 0; i < listcontent.length; i++) {
      var liName = 'li-' + listcontent[i].id;
      if(listcontent[i].id == 'li-' + utskott) {
        listcontent[i].className = 'tab-li is-active';
      }
      else {
        listcontent[i].className = 'tab-li';
      }
    }
    evt.currentTarget.className += " active";
    }




