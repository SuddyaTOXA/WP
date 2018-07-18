jQuery(document).ready(function($) {
    function prevent(){
        $('.prevent, a[href="/broken"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

    //for FAQ
    $('.faq-list > li').each(function() {
        var $this = $(this),
            h2    = $this.children('h2');

        // create unique id for a11y relationship
        var id = 'collapsible-' + $this.index();

        // wrap the content and make it focusable
        $this.find('.accordion-box-content').wrapAll('<div id="'+ id +'" aria-hidden="true">');
        var panel = h2.next();

        // Add the button inside the <h2> so both the heading and button semanics are read
        h2.wrapInner('<a href="/broken" class="prevent" aria-expanded="false" aria-controls="'+ id +'">');

        // Toggle the state properties
        h2.on('click', function(e) {
            e.preventDefault();
            var a     = $(this).find('a'),
                state = ( a.attr('aria-expanded') === 'false' ) ? true : false;
            a.attr('aria-expanded', state);
            panel.attr('aria-hidden', !state);
            if (state) {
                $(this).addClass('open');
            } else {
                $(this).removeClass('open');
            }
        });
    });
});