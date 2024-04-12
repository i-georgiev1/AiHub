document.write('\
\<style>\
body, html { \
    margin: 0; \
    padding: 0; \
} \
\
.container-fluid { \
    display: flex; \
    justify-content: space-between; \
    align-items: center; \
    background-color: rgb(27, 30, 44); \
    padding: 10px 20px;  \
    position: fixed; \
    top: 0; \
    width: 98%; \
    z-index: 1000; \
} \
\
\
.navbar-logo { \
    height: 55px; /* Adjust as needed */ \
    margin-right: 20px; /* Space between logo and nav items */ \
    margin-left: 10px; \
    transition: transform 0.25s ease-in-out; \
} \
\
.navbar-logo:hover {\
    transform: scale(1.2); \
}\
.container-fluid ul { \
    /*list-style: none; \
    margin: 0; \
    padding: 0; \
    display: flex;*/ \
    align-items: center; /* This line ensures vertical alignment */ \
    display: flex; \
} \
\
.container-fluid ul li { \
    display: flex; \
    align-items: center; \
    margin-right: 20px; \
    position: relative; \
} \
\
.container-fluid ul li:last-child { \
    margin-right: 0; \
} \
\
.container-fluid ul li strong { \
    font-size: 20px; \
    color: white; \
} \
\
.container-fluid ul li a { \
    text-decoration: none; \
    color: white; \
    font-size: 16px; \
    transition: color 0.3s ease; \
} \
\
.container-fluid ul li a:hover, \
.container-fluid ul li a:focus { \
    color: #007bff; \
} \
\
.container-fluid ul li a[role="button"] { \
    background-color: #007bff; \
    color: white; \
    padding: 8px 15px; \
    border-radius: 5px; \
    transition: background-color 0.3s ease; \
} \
\
.container-fluid ul li a[role="button"]:hover, \
.container-fluid ul li a[role="button"]:focus { \
    background-color: #0056b3; \
} \
\
\
/* Dropdown Menu */ \
.container-fluid ul li .dropdown-content { \
    display: none; \
    position: absolute; \
    background-color: #f9f9f9; \
    min-width: 160px; \
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); \
    z-index: 1; \
    left: 0; /* Align to the left edge of the li */ \
    top: 100%; /* Position below the li */ \
} \
\
.container-fluid ul li .dropdown-content a { \
    color: black; \
    padding: 12px 16px; \
    text-decoration: none; \
    display: block; \
} \
\
.container-fluid ul li .dropdown-content a:hover { \
    background-color: #f1f1f1; \
} \
\
/* Mobile nav toggle button styles */ \
.mobile-nav-toggle { \
    display: none; /* Hidden by default */ \
    font-size: 24px; \
    cursor: pointer; \
} \
\
/* Media query for mobile devices */ \
@media screen and (max-width: 950px) { \
    .mobile-nav-toggle {\
        display: block; /* Show toggle button on mobile */\
        position: absolute; /* Position it independently */\
        right: 50px; /* Distance from the right edge */\
        top: 20px; /* Distance from the top */\
    }\
    \
    .navbar-logo { \
        margin-left: -5px; \
    } \
\
    .nav-links {\
        width: 100%; \
        position: absolute; \
        top: 61px; \
        left: 0;\
        background-color: rgb(27, 30, 44); \
    }\
\
    .nav-links ul {\
        display: block; /* Initially hidden */\
        flex-direction: column;\
        width: 100%; /* Full width */\
        padding: 0;\
        max-height: 0; \
        overflow: hidden; \
        transition: max-height 0.5s ease-in-out; \
    }\
\
    .nav-links ul li {\
        display: block;\
        text-align: center;\
        right: 20px;\
    }\
    \
    .dropdown-content{\
        margin-left: 55%;\
        position: absolute;\
    }\
\
    .nav-links ul li a {\
        padding: 10px; \
        text-align: right;\
        display: block; \
    }\
    \
\
} \
\
/* Search bar styles */ \
/* Search bar container */ \
.nav-links .search-bar { \
    position: relative; \
    display: flex; \
    align-items: center; \
    margin-left;\
}\
\
/* Search input styling */\
.nav-links .search-bar .search-input {\
    padding: 8px 15px;\
    border: 1px solid #ccc;\
    border-radius: 20px;\
    outline: none;\
    transition: border-color 0.3s ease-in-out;\
}\
\
.nav-links .search-bar .search-input:focus {\
    border-color: #007bff;\
}\
\
/* Search button styling */\
.nav-links .search-bar .search-btn {\
    padding: 8px 15px;\
    margin-left: 10px;\
    background-color: #007bff;\
    border: none;\
    border-radius: 20px;\
    color: white;\
    cursor: pointer;\
    outline: none;\
}\
\
.nav-links .search-bar .search-btn:hover {\
    background-color: #0056b3;\
}\
\
@media (max-width: 950px) {\
    .nav-links .search-bar {\
        margin-top: 10px; \
        margin-left: 5%;\
        width: 85%;\
    }\
\
    .nav-links .search-bar .search-input {\
        width: calc(100% - 50px); /* Adjust width for mobile view */\
    }\
\
    .nav-links .search-bar .search-btn {\
        width: 50px; /* Fixed width for the button on mobile */\
    }\
}\
\
\
::-webkit-scrollbar {\
    width: 10px;\
}\
  \
::-webkit-scrollbar-track {\
    background: #f1f1f1; \
}\
   \
::-webkit-scrollbar-thumb {\
    background: #888; \
}\
  \
::-webkit-scrollbar-thumb:hover {\
    background: #555; \
}\
\</style>\
\
    <nav class="container-fluid">\
        <a href="index.html"><img src="../images/final-logo.png" alt="Logo" class="navbar-logo"></a>\
        <button class="mobile-nav-toggle">&#9776;</button>\
        <div class="nav-links">\
            <ul>\
                <li><a href="intro-goals.html"><b>Цели</b></a></li>\
                <li><a href="history copy.html"><b>История</b></a></li>\
                <li><a href="future.html"><b>Бъдеще</b></a></li>\
                <li><a href="applications.html"><b>Приложения</b></a></li>\
                <li><a href="new_contact.html" ><b>Контакти</b></a></li>\
                <form id="searchForm" class="nav-item search-bar" action="search-results.html" method="GET">\
                    <input type="search" placeholder="Търси..." id="nav-search" class="search-input" aria-label="Search" name="query">\
                    <button type="submit" class="search-btn">&#128269;</button>\
                </form>\
            </ul>\
        </div>\
    </nav>\
')


var introLi = document.querySelector('.container-fluid ul li');
var dropdownMenu = document.querySelector('.container-fluid ul li');

dropdownMenu.addEventListener('mouseover', function() {
    isMouseOverDropdown = true;
});

dropdownMenu.addEventListener('mouseleave', function() {
    isMouseOverDropdown = false;
    setTimeout(function() {
        if (!isMouseOverLink) {
            dropdownMenu.style.display = 'none';
        }
    }, 50); // Adjust delay as needed
});

// Mobile nav toggle
document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links ul');
    if (navLinks.style.maxHeight) {
        navLinks.style.maxHeight = null;
    } else {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    }
});

// Dropdown Toggle for Mobile
document.querySelectorAll('.container-fluid ul li').forEach(function(li) {
    li.addEventListener('click', function(event) {
        if (window.innerWidth <= 950) {
            var dropdownMenu = this.querySelector('.dropdown-content');
            if (dropdownMenu) {
                var displayStatus = dropdownMenu.style.display;
                dropdownMenu.style.display = displayStatus === 'block' ? 'none' : 'block';
                event.stopPropagation(); // Prevents unintentional closing
            }
        }
    });
});






