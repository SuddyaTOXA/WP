jQuery(document).ready(function($) {
    function prevent(){
        $('.prevent, a[href="/broken"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

	// for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 50 // Integer. How far to offset the scrolling anchor location in pixels
    });

    //for FAQ
    // for FAQ list
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