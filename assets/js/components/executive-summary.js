(function(global){
  function createNodeFromHTML(html){
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }

  function ExecutiveSummary(element, props){
    this.el = element;
    this.props = props || {};
  }

  ExecutiveSummary.prototype.render = function(){
    var title = this.props.title || 'Executive Summary';
    var container = createNodeFromHTML('\n      <section class="executive-summary" role="region" aria-label="Executive Summary">\n        <h2>\n          '+title+'\n        </h2>\n        <p class="muted">Top-level summary goes here.</p>\n      </section>\n    ');

    // Clear and append
    this.el.innerHTML = '';
    this.el.appendChild(container);
  };

  ExecutiveSummary.prototype.update = function(newProps){
    this.props = Object.assign({}, this.props, newProps);
    this.render();
  };

  // Expose the constructor globally for manual instantiation
  global.ExecutiveSummary = ExecutiveSummary;

  // Register with Portal if available. This keeps integration non-invasive.
  function tryRegister(){
    try {
      if (global.Portal && typeof global.Portal.registerComponent === 'function'){
        global.Portal.registerComponent('executive-summary', function(el, props){
          var comp = new ExecutiveSummary(el, props);
          comp.render();
          return comp;
        });
      }
    } catch(e){
      // swallow errors to avoid breaking host app
      console.warn('ExecutiveSummary: registration deferred', e);
    }
  }

  // Attempt to register now; if Portal registers later, consumers can call Portal.registerComponent again.
  tryRegister();

  // Provide a small helper for demos to mount into an element programmatically
  global.mountExecutiveSummary = function(selector, props){
    var el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
    if (!el) return null;
    var comp = new ExecutiveSummary(el, props);
    comp.render();
    return comp;
  };

})(window);
