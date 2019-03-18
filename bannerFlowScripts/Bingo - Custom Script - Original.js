(function() {

    var isFooter = window.location.href.indexOf('-footer-') > -1;
    
    /*var deviceGroup = (function () {
                    if (navigator.userAgent.match(/iPad/i)) {
                        return 'tablet';
                    } else if(navigator.userAgent.match(/mobile/i)) {
                        return 'mobilephone';
                    } else if (navigator.userAgent.match(/Android|Touch/i)) {
                        return 'tablet';
                    } else {
                        return 'desktop';
                    }
                })();
                
                var cms = {};
                cms.device = {
                    clientId : "bf_landingpage",
                    group: deviceGroup
                };
    
    // OLD DTM
    var script = document.createElement('script');
    script.src = "//assets.adobedtm.com/2ba9756ce24e85b6613a5e44df81f3a5de8f7320/satelliteLib-9d98dc7c8a65a091f7cbff6e110db971b550c1e1.js";
    document.head.appendChild(script);*/
    
    
    var script = document.createElement('script');
    script.src = "//assets.adobedtm.com/2ba9756ce24e85b6613a5e44df81f3a5de8f7320/satelliteLib-81fa49b12f4903c5e2b79397db5965ace0d8bfac.js";
    document.head.appendChild(script);
    
    // Facebook tracking
      if(!isFooter) {
    
    !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '430881080438970');
      fbq('track', 'PageView');
    
      }
    
    })();