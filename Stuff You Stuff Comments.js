// ==UserScript==
// @name         Stuff You Stuff Comments
// @version      0.1
// @description  A userscript for hiding stuff.co.nz comments
// @author       You
// @namespace  http://www.stuff.co.nz
// @include http://www.stuff.co.nz/*
// ==/UserScript==
function random_num_from_interval(min,max)
                {
                return Math.floor(Math.random() * (max - min) + min);
                }

var new_comments = ["I'm an idiot","I have a stupid opinion","Hurp durp","Probably just a troll","I was raised poorly","Ignorance is bliss"];

window.onload = function(){

    var old_comments = document.getElementsByClassName("gig-comments-comment-body");
                

    for (i=0;i<old_comments.length;i++){
                var comment = (new_comments[random_num_from_interval(0,new_comments.length)]);               
                old_comments[i].innerHTML = comment;
        console.log(old_comments[i];
                }
}