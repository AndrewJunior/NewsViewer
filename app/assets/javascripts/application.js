// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets
/*function prov_name(obj) {
    var name=obj.mail.value;
    var name_pattern=/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    var prov=name_pattern.test(name);
    if (prov==true) {
          alert("Вы оставили комментарий!",event.target.value);
    }
    else {
          alert("Введенные данные некорректны!",event.target.value);
    }
  }*/

  document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('comment_commenter');
    element.addEventListener('change', function(event) {
        var value = event.target.value;
        var name_pattern=/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        var prov=name_pattern.test(value);
        if (!prov) {
            document.getElementById('error').style.display='block';
      }

        }) 
    }) 

  //element.addEventListener('сhange', prov_name);
   