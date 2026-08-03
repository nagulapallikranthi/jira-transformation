/* Status Components (S2-010)
   - Provides simple RAG indicator, Trend indicator, and Badge components.
   - API: RAG(el, { state: 'green'|'amber'|'red' }), Trend(el, { delta: number }), Badge(el, { text })
   - Exposes mountStatusComponents for demo mounting.
*/
(function(global){
  function createNodeFromHTML(html){
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }

  function RAG(el, opts){
    this.el = el;
    this.state = (opts && opts.state) || 'green';
  }
  RAG.prototype.render = function(){
    var color = this.state === 'green' ? '#10b981' : (this.state === 'amber' ? '#f59e0b' : '#ef4444');
    var node = createNodeFromHTML('<span class="rag" aria-hidden="true" style="display:inline-block;width:12px;height:12px;border-radius:50%;background:'+color+'"></span>');
    this.el.innerHTML = '';
    this.el.appendChild(node);
  };

  function Trend(el, opts){
    this.el = el;
    this.delta = (opts && opts.delta) || 0;
  }
  Trend.prototype.render = function(){
    var sign = this.delta > 0 ? '▲' : (this.delta < 0 ? '▼' : '▢');
    var color = this.delta > 0 ? '#10b981' : (this.delta < 0 ? '#ef4444' : '#6b7280');
    var node = createNodeFromHTML('<span class="trend" style="color:'+color+'">'+sign+' '+Math.abs(this.delta)+'%</span>');
    this.el.innerHTML = '';
    this.el.appendChild(node);
  };

  function Badge(el, opts){
    this.el = el;
    this.text = (opts && opts.text) || '';
  }
  Badge.prototype.render = function(){
    var node = createNodeFromHTML('<span class="badge" style="display:inline-block;padding:4px 8px;border-radius:999px;background:#eef2ff;color:#3730a3;font-size:12px">'+this.text+'</span>');
    this.el.innerHTML = '';
    this.el.appendChild(node);
  };

  global.RAG = RAG;
  global.Trend = Trend;
  global.Badge = Badge;

  global.mountStatusComponents = function(selector, cfg){
    var root = (typeof selector === 'string') ? document.querySelector(selector) : selector;
    if (!root) return null;
    // cfg expected: { rag: {state}, trend: {delta}, badge: {text} }
    if (cfg.rag){ new RAG(root.querySelector('.rag-placeholder') || root, cfg.rag).render(); }
    if (cfg.trend){ new Trend(root.querySelector('.trend-placeholder') || root, cfg.trend).render(); }
    if (cfg.badge){ new Badge(root.querySelector('.badge-placeholder') || root, cfg.badge).render(); }
    return true;
  };

})();
