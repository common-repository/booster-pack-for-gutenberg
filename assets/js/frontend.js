( function( $ ) {

    $(document).ready(function(){
        var div_progressbar = $(document).find('.bpg-progress-bar');
        var prec_val ='';
        var data = $.each(div_progressbar, function(index, value){
            prec_val = $(value).data('percentage');
            $(value).css('width', prec_val);
        });
    });

} )( jQuery );
