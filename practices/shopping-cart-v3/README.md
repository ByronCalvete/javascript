# Shopping Cart v3

## We implement the cart with arrays and templates for list and footer

### Template list
```html
<li class="list-group-item bg-secondary text-white">
  <span class="badge bg-primary rounded-pill align-middle">12</span>
  <span class="lead align-middle">Strawberry</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
  <div>
    <p class="lead mb-0">Total: $<span>300</span></p>
  </div>
  <div>
    <button class="bnt btn-sm btn-danger">Substract</button>
    <button class="bnt btn-sm btn-success">Add</button>
  </div>
</li>
```

### Template footer
```html
<template id="templateFooter">
  <div class="card">
    <div class="card-body d-flex justify-content-between align-items-center">
      <p class="lead mb-0">Total $<span>1500</span></p>
      <button class="btn btn-outline-info">Finalizar compra</button>
    </div>
  </div>
</template>
```
