/* Reusable Table component (S2-009)
   - Minimal table component that renders given columns and rows.
   - API: ReusableTable(el, { columns: [...], rows: [...] })
   - Exposes mountReusableTable(selector, config) for demo mounting.
*/
(function(global){
  function createNodeFromHTML(html){
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }

  function ReusableTable(element, config){
    this.el = element;
    this.config = config || { columns: [], rows: [] };
  }

  ReusableTable.prototype.render = function(){
    var cols = this.config.columns || [];
    var rows = this.config.rows || [];
    var table = document.createElement('table');
    table.setAttribute('role','table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    var thead = document.createElement('thead');
    var headRow = document.createElement('tr');
    cols.forEach(function(c){
      var th = document.createElement('th');
      th.textContent = c.label || c.key;
      th.style.textAlign = 'left';
      th.style.padding = '8px';
      th.style.borderBottom = '1px solid #e5e7eb';
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    rows.forEach(function(r){
      var tr = document.createElement('tr');
      cols.forEach(function(c){
        var td = document.createElement('td');
        td.textContent = r[c.key] !== undefined ? r[c.key] : '';
        td.style.padding = '8px';
        td.style.borderBottom = '1px solid #f3f4f6';
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    this.el.innerHTML = '';
    this.el.appendChild(table);
  };

  ReusableTable.prototype.update = function(config){
    this.config = Object.assign({}, this.config, config);
    this.render();
  };

  global.ReusableTable = ReusableTable;
  global.mountReusableTable = function(selector, config){
    var el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
    if (!el) return null;
    var comp = new ReusableTable(el, config);
    comp.render();
    return comp;
  };
})(window);
