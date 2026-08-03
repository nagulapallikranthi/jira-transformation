/* Home Page Integration (S2-011)
   - Provides a small integration scaffold that mounts existing components into the home page layout.
   - Responsibilities: find placeholders with data-portal-component attributes and mount registered components.
   - Non-invasive: will not modify external global state beyond Portal.registerComponent usage.
*/
(function(global){
  function mountPlaceholder(selector){
    var el = document.querySelector(selector);
    if (!el) return null;
    var name = el.getAttribute('data-portal-component');
    if (!name) return null;
    if (global.Portal && typeof global.Portal.mount === 'function'){
      return global.Portal.mount(name, selector, {});
    }
    // Fallback: try global mount helpers
    var mountFnName = 'mount' + name.replace(/(^|-)\w/g, function(s){ return s.replace(/-/,'').toUpperCase(); });
    if (typeof global[mountFnName] === 'function'){
      return global[mountFnName](selector, {});
    }
    return null;
  }

  function HomePage(){ }

  HomePage.prototype.bootstrap = function(rootSelector){
    var root = rootSelector ? document.querySelector(rootSelector) : document.body;
    if (!root) return;
    var placeholders = root.querySelectorAll('[data-portal-component]');
    placeholders.forEach(function(p){
      try { mountPlaceholder('#' + p.id || p); } catch(e){ console.warn('mount failed', e); }
    });
  };

  // Register with Portal runtime if present
  try {
    if (global.Portal && typeof global.Portal.registerComponent === 'function'){
      global.Portal.registerComponent('home-page', function(el, props){
        // simple mount behavior: bootstrap placeholders inside the element
        var hp = new HomePage();
        hp.bootstrap();
        return hp;
      });
    }
  } catch(e){ console.warn('home-page registration deferred', e); }

  global.HomePage = HomePage;
  global.bootstrapHomePage = function(rootSelector){ var hp = new HomePage(); hp.bootstrap(rootSelector); return hp; };

})(window);
