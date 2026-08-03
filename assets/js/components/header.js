(function(global){
  'use strict';

  // Header component for the Portal framework
  // Registers as 'header' and mounts into elements with data-portal-component="header" or #header-placeholder
  // Responsibilities:
  // - Render the app header / top nav
  // - Expose a mobile nav toggle using data-ea-nav-toggle to integrate with portal.js

  function createHeaderNode(){
    var header = document.createElement('header');
    header.className = 'ea-header ea-card ea-card--flat';

    var wrapper = document.createElement('div');
    wrapper.className = 'ea-container flex justify-between items-center';

    // Left: brand / title
    var left = document.createElement('div');
    left.className = 'flex items-center';

    var brand = document.createElement('div');
    brand.className = 'ea-brand';
    brand.innerHTML = '<strong>Enterprise Analytics</strong>';

    var title = document.createElement('div');
    title.className = 'ml-2';
    title.innerHTML = '<div class="h3">Engineering Command Center</div>';

    left.appendChild(brand);
    left.appendChild(title);

    // Right: mobile nav toggle and lightweight metadata
    var right = document.createElement('div');
    right.className = 'flex items-center';

    var navToggle = document.createElement('button');
    navToggle.setAttribute('aria-label','Toggle navigation');
    navToggle.setAttribute('data-ea-nav-toggle','');
    navToggle.className = 'ea-btn ea-btn--icon';
    navToggle.innerHTML = '\u2630'; // simple hamburger

    var meta = document.createElement('div');
    meta.className = 'ml-3 small';
    meta.innerHTML = 'Branch: <span data-meta-branch>feature/portal-core</span>';

    right.appendChild(navToggle);
    right.appendChild(meta);

    wrapper.appendChild(left);
    wrapper.appendChild(right);
    header.appendChild(wrapper);

    return header;
  }

  function headerRenderer(el){
    try{
      // If the element is empty, populate with header node
      if(el && el.children.length === 0){
        var node = createHeaderNode();
        el.appendChild(node);
      }
    }catch(e){
      console.error('Header render error', e);
    }
  }

  function register(){
    if(global.Portal && typeof global.Portal.registerComponent === 'function'){
      global.Portal.registerComponent('header', headerRenderer);
    } else {
      var t = setInterval(function(){
        if(global.Portal && typeof global.Portal.registerComponent === 'function'){
          clearInterval(t);
          global.Portal.registerComponent('header', headerRenderer);
        }
      }, 150);
    }

    // Auto-mount into #header-placeholder if present and empty
    try{
      var hp = document.getElementById('header-placeholder');
      if(hp && hp.getAttribute('data-portal-component') === 'header'){
        // Defer until DOM ready
        if(document.readyState === 'loading'){
          document.addEventListener('DOMContentLoaded', function(){ headerRenderer(hp); });
        } else {
          headerRenderer(hp);
        }
      }
    }catch(e){ /* ignore */ }
  }

  register();

})(window);
