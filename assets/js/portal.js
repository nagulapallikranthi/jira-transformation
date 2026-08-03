/* portal.js — Enterprise UI Core (integration stub)
   Purpose: runtime helpers and simple integration API for the Enterprise Analytics Portal
   Sprint: S2-005 Portal JavaScript Integration
   Author: automation (ChatGPT) — 03-Aug-2026
*/
(function(global){
  'use strict';

  // Ensure a Portal namespace
  global.Portal = global.Portal || {};

  const components = {};

  function registerComponent(name, renderFn){
    components[name] = renderFn;
  }

  function renderComponents(root=document){
    Object.keys(components).forEach(name=>{
      const els = root.querySelectorAll(`[data-portal-component="${name}"]`);
      els.forEach(el=>{
        try{
          components[name](el);
        }catch(e){
          console.error('Portal component render error', name, e);
        }
      });
    });
  }

  async function loadData(url){
    try{
      const res = await fetch(url, {cache: 'no-store'});
      if(!res.ok) throw new Error('Network response not ok: ' + res.status);
      const json = await res.json();
      // expose for debug and components
      global.Portal.data = json;
      // attempt to render components that rely on data
      renderComponents(document);
      return json;
    }catch(err){
      console.error('Portal.loadData error', err);
      throw err;
    }
  }

  function init(options){
    options = options || {};
    // if autoLoadData is provided, fetch it
    if(options.autoLoadData){
      loadData(options.autoLoadData).catch(()=>{});
    }
    // render any already-registered components
    renderComponents(document);
  }

  // Small example component registration helper for KPI cards
  function defaultKpiRenderer(el){
    const key = el.getAttribute('data-kpi-key');
    const label = el.querySelector('.kpi__title');
    const value = el.querySelector('.kpi__value');
    if(Portal.data && Portal.data.kpis && Portal.data.kpis[key]){
      const k = Portal.data.kpis[key];
      if(label) label.textContent = k.title || label.textContent;
      if(value) value.textContent = k.value || value.textContent;
    }
  }

  // expose API
  global.Portal.registerComponent = registerComponent;
  global.Portal.renderComponents = renderComponents;
  global.Portal.loadData = loadData;
  global.Portal.init = init;

  // register default 'kpi-card' renderer
  registerComponent('kpi-card', defaultKpiRenderer);

  // auto-init when DOM ready; allow external callers to override by calling Portal.init explicitly
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      // initialize without autoLoadData by default
      init();
    });
  } else {
    init();
  }

})(window);
