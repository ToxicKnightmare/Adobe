jQuery('.field--type-telephone').hide();
jQuery('.call-us').hide();
var cookieDomain = window.location.hostname;
if (cookieDomain.indexOf('acquia-sites') > -1) {
    cookieDomain = "acquia-sites.com";
} else {
    cookieDomain = ".optimum.com";
}

var bspID = _satellite.getVar('bsp: query string parameter');
var site = window.location.href;
var landingPage = "default";
var phoneIcon = '<svg class="icon-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g><g><path d="M2.94.947c.15-.001.295.058.401.165l2.55 2.548a.57.57 0 0 1 0 .807L4.816 5.538a1.415 1.415 0 0 0-.255 1.666 12.299 12.299 0 0 0 5.228 5.224c.552.291 1.229.188 1.668-.255l1.072-1.076a.572.572 0 0 1 .808 0l2.55 2.549a.57.57 0 0 1-.052.85l-.69.551a4.646 4.646 0 0 1-5.516.17 31.844 31.844 0 0 1-7.86-7.852 4.636 4.636 0 0 1 .17-5.512l.553-.69c.1-.13.252-.21.416-.216zm12.79 14.87l.695-.548c.336-.27.543-.67.571-1.1a1.51 1.51 0 0 0-.444-1.18l-2.546-2.55a1.526 1.526 0 0 0-2.149 0l-1.072 1.071a.472.472 0 0 1-.557.085A11.283 11.283 0 0 1 5.4 6.77a.472.472 0 0 1 .085-.557L6.558 5.14c.59-.595.59-1.554 0-2.149L4.008.446a1.512 1.512 0 0 0-2.259.128l-.547.694a5.59 5.59 0 0 0-.208 6.644 32.752 32.752 0 0 0 8.095 8.099 5.574 5.574 0 0 0 3.184.991 5.546 5.546 0 0 0 3.457-1.185z"></path></g></g></svg>';

function checkCookie() {
  var user = _satellite.cookie.get('phoneUpdate'); //accessCookie(name);
  if (user !== '') {  /// there is a cookie
      if (document.referrer == "") {
        landingPage = 'default';
        _satellite.cookie.set('phoneUpdate', landingPage, { domain: cookieDomain });
        user = _satellite.cookie.get('phoneUpdate');
      }
  }
  if (site.indexOf('speed') > -1) {
    landingPage = 'speed';
    _satellite.cookie.set('phoneUpdate', landingPage, { domain: cookieDomain });
    user = _satellite.cookie.get('phoneUpdate');
  }
  if (site.indexOf('essential') > -1) {
    landingPage = 'essential';
    _satellite.cookie.set('phoneUpdate', landingPage, { domain: cookieDomain });
    user = _satellite.cookie.get('phoneUpdate');
  }
  if (bspID != "") {
    if (landingPage != '') {
        _satellite.cookie.set('phoneUpdate', landingPage +'-' + bspID, { domain: cookieDomain });
        user = _satellite.cookie.get('phoneUpdate');
        setDynamicNumbers(user);
    } else {
        _satellite.cookie.set('phoneUpdate', bspID, { domain: cookieDomain });
        user = _satellite.cookie.get('phoneUpdate');
        setDynamicNumbers(user);
    }
  } else if (user != '' || !!user) {
    setDynamicNumbers(user);
  }
}
function setDynamicNumbers(BSP) {
  var sitePhone = "";
  switch (BSP) {
    case "default":
      sitePhone = '1.866.200.7273'
      break;
    case "default-optgmOCTsearchBrand914":
      sitePhone = '1.866.218.1815'
      break;
    case "default-gmnb":
      sitePhone = '1.877.851.5450'
      break;
    case "default-optgmOCTsearchComp914":
      sitePhone = '1.866.580.1483'
      break;
    case "speed":
      sitePhone = '1.866.885.4383'
      break;
    case "speed-optgmOCTsearchBrand914":
      sitePhone = '1.866.213.3354'
      break;
    case "speed-gmnb":
      sitePhone = '1.866.213.6513'
      break;
    case "speed-optgmOCTsearchComp914":
      sitePhone = '1.866.218.0836'
      break;
    case "essential":
      sitePhone = '1.866.944.4688'
      break;
    case "essential-optgmOCTsearchBrand914":
      sitePhone = '1.866.249.4087'
      break;
    case "essential-gmnb":
      sitePhone = '1.866.254.6174'
      break;
    case "essential-optgmOCTsearchComp914":
      sitePhone = '1.866.266.0821'
      break;
  }   
  if (sitePhone != "") {
      // Header & Footer
      //jQuery('.field--type-telephone a').attr('href', 'tel:' + sitePhone);
      
      
      jQuery('.field--type-telephone a').attr('href', 'tel:' + sitePhone);
      jQuery('.field--type-telephone:not(.blue):nth-child(1) a').html(phoneIcon + sitePhone);
      jQuery('.field--type-telephone:not(.blue):nth-child(2) a').html(sitePhone); 
      var footerphone = setInterval(function() {
          if (jQuery('.field--type-telephone:not(.blue):nth-child(2) a').html() === '844-790-7475') {
              jQuery('.field--type-telephone:not(.blue):nth-child(2) a').html(sitePhone); 
          }
      });
      jQuery('.field--type-telephone').fadeIn( "slow"); 
      
      
      
      
      
      // Speed, Essential
      if (jQuery('.call-us a:not(.open-popup)').length) {
        if (jQuery('.call-us a:not(.open-popup)').html().indexOf('866') > -1 || jQuery('.call-us a:not(.open-popup)').html().indexOf('877') > -1) {
          jQuery('.call-us a:not(.open-popup)').attr('href', 'tel:' + sitePhone);
          jQuery('.call-us a:not(.open-popup)').html(sitePhone);
        }
      }
      
      // Essential
      if (jQuery('.field--type-telephone.blue a').length) {
          if (jQuery('.field--type-telephone.blue a').html().indexOf('866') > -1 || jQuery('.field--type-telephone.blue a').html().indexOf('877') > -1) {
            jQuery('.field--type-telephone.blue a').html(sitePhone);
          }
      }
      
      /// Essential
      if (jQuery('.field--type-telephone:not(blue):nth-child(2) a').length) {
        if (jQuery('.field--type-telephone:not(blue):nth-child(2) a').html().indexOf('866') > -1 || jQuery('.field--type-telephone:not(blue):nth-child(2) a').html().indexOf('877') > -1) {
          jQuery('.field--type-telephone:not(blue):nth-child(2) a').html(phoneIcon + sitePhone);
        }
      }
      
      jQuery('.field--type-telephone').fadeIn( "slow"); 
      jQuery('.call-us').fadeIn( "slow"); 
  }  else {
      jQuery('.field--type-telephone').fadeIn( "slow"); 
      jQuery('.call-us').fadeIn( "slow"); 
  }
  
}
checkCookie('phoneUpdate');