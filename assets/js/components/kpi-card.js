(function(global){
  'use strict';

  // Lightweight KPI Card component for the Portal framework
  // Registers as 'kpi-card' and updates card contents from Portal.data.kpis
  // Usage: any element with data-portal-component="kpi-card" and data-kpi-key="<key>"

  function kpiCardRenderer(el){
    var key = el.getAttribute('data-kpi-key');
    if(!key) return;

    var titleEl = el.querySelector('.kpi__title');
    var valueEl = el.querySelector('.kpi__value');
    var metaEl = el.querySelector('.kpi__meta');

    var k = (global.Portal && global.Portal.data && global.Portal.data.kpis) ? global.Portal.data.kpis[key] : null;

    if(k){
      if(titleEl && k.title) titleEl.textContent = k.title;
      if(valueEl && k.value) valueEl.textContent = k.value;
      if(metaEl && k.meta) metaEl.textContent = k.meta;

      // Visual RAG indicator (adds class for styling)
      if(k.rag){
        el.classList.remove('kpi-rag-green','kpi-rag-amber','kpi-rag-red');
        if(k.rag.toLowerCase() === 'green') el.classList.add('kpi-rag-green');
        if(k.rag.toLowerCase() === 'amber') el.classList.add('kpi-rag-amber');
        if(k.rag.toLowerCase() === 'red') el.classList.add('kpi-rag-red');
      }
    }
  }

  // Register with Portal (overrides any existing renderer of same name)
  if(global.Portal && typeof global.Portal.registerComponent === 'function'){
    global.Portal.registerComponent('kpi-card', kpiCardRenderer);
  } else {
    // If Portal isn't ready yet, try again shortly
    var t = setInterval(function(){
      if(global.Portal && typeof global.Portal.registerComponent === 'function'){
        clearInterval(t);
        global.Portal.registerComponent('kpi-card', kpiCardRenderer);
      }
    }, 150);
  }

})(window);
