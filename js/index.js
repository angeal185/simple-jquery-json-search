(function() {
  $(window).on('load', function() {
    $('#jsonSearch').keyup(function() {
      var count, myExp, output, searchField;
      count = void 0;
      myExp = void 0;
      output = void 0;
      searchField = void 0;
      searchField = $('#jsonSearch').val();
      myExp = new RegExp(searchField, 'i');
      output = '<div class="row">';
      count = 1;
      $.getJSON('json/search.json', function(data) {
        $.each(data, function(key, val) {
          if (val.title.search(myExp) != -1 || val.url.search(myExp) != -1) {
            output += '<div class="col s12 result card-panel"><div class="col s12"><li class="searchLi light-blue-text"><i class="fa fa-search"></i><a href="' + val.url + '">' + val.title + '</a><span class="searchLiRight">' + val.url + '</span></li></div></div>';
            if (count % 2 == 0) {
              output += '</div><div class="row">';
            }
            count++;
          }
        });
        output += '</div>';
        $('#jsonSearchresults').html(output);
      });
    });
  });

}).call(this);