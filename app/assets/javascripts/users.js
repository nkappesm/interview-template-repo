var usersDatatable;

$(document).on('turbolinks:before-cache', function(){
  if (usersDatatable) {
    usersDatatable.destroy();
  }
});

$(document).on('turbolinks:load', function() {
  adminZonesDatatable = $('.users-datatable').DataTable({
    sPaginationType: 'full_numbers',
    bSort: false,
    Processing: true,
    bServerSide: true,
    bDestroy: true,
    sAjaxSource: $('.users-datatable').data('source'),
    fnServerData: function (sSource, aoData, fnCallback){
       $.getJSON(sSource, aoData, function(json){
        fnCallback(json);
       });
    },
    aoColumnDefs: [
      {
        bSortable: false,
        aTargets: [3]
      }
    ]
  });
});


