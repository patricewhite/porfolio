'use strict';
// $(function () {
//   $('.next-page').click(() => {
//     $('.about').toggle('current');
//     $('.Front-page').toggleClass('current');
//   });
// });

let app;
$(function() {
  app = {
    currentPage: 1,
    init: function (){
      app.goNext();
      app.goPrevious();
    },
    goNext: function() {
      $(document).on('click', '#next', function() {
        app.currentPage = app.currentPage + 1;
        return app.showPage(app.currentPage - 1, app.currentPage);
      });
    },
    goPrevious: function() {
      $(document).on('click', '#previous', function() {
        app.currentPage = app.currentPage - 1;
        return app.showPage(app.currentPage + 1, app.currentPage);
      });
    },
    showPage: function(prevP, newP) {
      let prevPage = document.getElementById(`page${prevP}`);
      let newPage = document.getElementById(`page${newP}`);
      $(prevPage).addClass('inactive');
      $(newPage).removeClass('inactive');
    }
  };
});

$(document).ready(function() {
  app.init();
});
