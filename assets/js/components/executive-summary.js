/* Executive Summary component scaffold for S2-008
   - Minimal, non-invasive scaffold file that exports a global register function.
   - Integration: call Portal.registerComponent('executive-summary', ExecutiveSummary) when ready.
*/
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
    var container = createNodeFromHTML('<section class="executive-summary"><h2>'+title+'</h2><p class="muted">Top-level summary goes here.</p></section>');
    // Clear and append
    this.el.innerHTML = '';
    this.el.appendChild(container);
  };

  ExecutiveSummary.prototype.update = function(newProps){
    this.props = Object.assign({}, this.props, newProps);
    this.render();
  };

  // Expose a registration helper for Portal.init code to call.
  global.ExecutiveSummary = ExecutiveSummary;
})(window);
