var Offcanvas = {
    init:function(container) {
        this._offCanvasType = $('body').data('offcanvasType');
        this._offCanvasDirection = $('body').data('offcanvasDirection');
        $('.offcanvas__sidebar').css(this._offCanvasDirection, $('.offcanvas__sidebar').width() * -1 + 'px');
        
        var self = this;

        var offcanvasNav = $('.offcanvas__nav');
        if(offcanvasNav) {
            offcanvasNav.on('click', function(ev) {
                self.changeStateOffcanvas(true);
            });
        }

        var toggleOpen = $('.offcanvas__toggle--open');
        if(toggleOpen) {
            toggleOpen.on('click', function(ev) {
                ev.preventDefault();
                self.changeStateOffcanvas($('body').hasClass('js__offcanvas-is-open'));
                return false;
            });
        }

        var toggleClose = $('.offcanvas__toggle--close');
        if(toggleClose) {
            toggleClose.on('click', function(ev) {
                ev.preventDefault();
                self.changeStateOffcanvas(true);
                return false;
            });
        }

        var toggleOverlay = $('.offcanvas__content-overlay');
        if(toggleOverlay) {
            toggleOverlay.on('click', function(ev) {
                ev.preventDefault();
                self.changeStateOffcanvas(true);
                return false;
            });
        }
    },
    changeStateOffcanvas: function(isOpen) {
        var cssMarginDirection = 'margin-left';
        var offCanvasMargin = (isOpen)?0:$('.offcanvas__sidebar').width();
        
        switch(this._offCanvasDirection) {
            case 'left':default:
                cssMarginDirection = 'margin-left';break;
            case 'right':
                cssMarginDirection = 'margin-right';break;
        }
        
        switch(this._offCanvasType) {
            case 'push':
                $('.offcanvas__content').css(cssMarginDirection, offCanvasMargin);break;
            default:break;
        }
        
        if(isOpen) {
            $('body').removeClass('js__offcanvas-is-open');
            $('.offcanvas__sidebar').css(this._offCanvasDirection, $('.offcanvas__sidebar').width() * -1 + 'px');
        } else {
            $('body').addClass('js__offcanvas-is-open');
            $('.offcanvas__sidebar').css(this._offCanvasDirection, 0);
        }
    }
};