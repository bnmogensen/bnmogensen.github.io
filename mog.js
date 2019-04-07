Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('app-nav', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  // props: ['todo'],
  data: function () {
    return {
    menuitems: [ 
      { id:1, text:'Hello' }, 
      { id:2, text:'World' },
    ],
  }},
  template: `
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Mog</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item v-for="item in menuitems" :key="item.id">{{item.text}}</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    `
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    menuitems: [ 'Hello', 'World' ],
  }
})
