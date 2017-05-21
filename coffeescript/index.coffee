$(window).on 'load', ->
  $('#jsonSearch').keyup ->
    count = undefined
    myExp = undefined
    output = undefined
    searchField = undefined
    searchField = $('#jsonSearch').val()
    myExp = new RegExp(searchField, 'i')
    output = '<div class="row">'
    count = 1
    $.getJSON 'json/search.json', (data) ->
      $.each data, (key, val) ->
        if `val.title.search(myExp) != -1` or `val.url.search(myExp) != -1`
          output += '<div class="col s12 result card-panel"><div class="col s12"><li class="searchLi light-blue-text"><i class="fa fa-search"></i><a href="' + val.url + '">' + val.title + '</a><span class="searchLiRight">' + val.url + '</span></li></div></div>'
          if `count % 2 == 0`
            output += '</div><div class="row">'
          count++
        return
      output += '</div>'
      $('#jsonSearchresults').html output
      return
    return
  return