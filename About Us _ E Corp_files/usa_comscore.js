var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function() {
  // check to make sure beacon.js is not already loaded
  if (typeof COMSCORE == 'undefined') {
    let a=document.createElement("script"),
        b=document.getElementsByTagName("script")[0],
        c=document.createElement('noscript');
    a.async=!0;
    a.src=("https:"==document.location.protocol?"https://web.archive.org/web/20200927091337/https://sb":"http://b")+".scorecardresearch.com/beacon.js";
    b.parentNode.insertBefore(a,b);

    c.innerHTML = '<img src="https://web.archive.org/web/20200927091337/https://sb.scorecardresearch.com/p?c1=2&amp;c2=6035083&amp;cv=2.0&amp;cj=1">';
    b.parentNode.insertBefore(c,b);
  }
})();

let USA_COMSCORE = {
  clientID: null,
  basePath: './',
  init: function(options) {
    if (options.hasOwnProperty('clientID')) this.setClientID(options.clientID);
    if (options.hasOwnProperty('basePath')) this.setBasePath(options.basePath);
  },
  setClientID: function(id) {
    if (typeof id !== 'undefined') {
      this.clientID = id;
    }
    else {
      this.clientID = null;
    }
  },
  setBasePath: function(path) {
    if (typeof path == 'string') {
      this.basePath = path;
    }
  },
  setPageTitle: function(arr) {
    let title = (typeof arr == 'object') ? arr.join(' | ').replace(/^[\s|]*/g, '') : arr;
    document.getElementsByTagName('title')[0].innerText = title;
  },
  pageView: function() {
    if (USA_COMSCORE.ready()) {
      COMSCORE.beacon({c1: '2', c2: USA_COMSCORE.clientID});

      let xhttp = new XMLHttpRequest();
      xhttp.open('GET', USA_COMSCORE.basePath + 'pageview_candidate.html?t=' + Math.random(), true);
      xhttp.send();
    }
    else {
      setTimeout(USA_COMSCORE.pageView, 100);
    }
  },
  ready: function() {
    return (typeof COMSCORE !== 'undefined' &&
            typeof USA_COMSCORE.clientID !== 'undefined' && USA_COMSCORE.clientID !== null) ? true : false;
  },
}

if (typeof noComScoreTagOnPageLoad == 'undefined') {
  self.COMSCORE;
  USA_COMSCORE.pageView();
}


}
/*
     FILE ARCHIVED ON 09:13:37 Sep 27, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:13:09 Feb 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.868
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.015
  esindex: 0.015
  cdx.remote: 7.778
  LoadShardBlock: 289.68 (3)
  PetaboxLoader3.datanode: 147.895 (5)
  PetaboxLoader3.resolve: 379.73 (3)
  load_resource: 278.338 (2)
*/