'use strict';
$(function () {
  $('.next-page').click(() => {
    $('.about').toggle('current');
    $('.Front-page').toggleClass('current');
  });
});
