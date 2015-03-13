app.ApplicationController = Ember.Controller.extend({
  actions: {
    clearHighlight: function() {
      $(".top-level-menu-item").removeClass("active");
    },
    highlightProgramsDropdown: function() {
      $(".top-level-menu-item").removeClass("active");
      $("#programs-dropdown").addClass("active");
    },
    highlightCountriesDropdown: function() {
      $(".top-level-menu-item").removeClass("active");
      $("#countries-dropdown").addClass("active");
    }
  }
});
