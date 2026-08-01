/* portal.js — Enterprise UI Core (minimal stub)
   Purpose: small runtime helpers for the Enterprise Analytics Portal
   Author: automation (ChatGPT) — 01-Aug-2026
*/

document.addEventListener('DOMContentLoaded', function(){
  console.log('Portal core loaded — 01-Aug-2026');

  // Simple mobile navigation toggle if present
  var navToggle = document.querySelector('[data-ea-nav-toggle]');
  var sidebar = document.querySelector('.ea-sidebar');
  if(navToggle && sidebar){
    navToggle.addEventListener('click', function(){
      sidebar.style.display = (sidebar.style.display === 'none' || getComputedStyle(sidebar).display === 'none') ? 'block' : 'none';
    });
  }

});
