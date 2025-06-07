
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/polyfills.DeWuInPR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/app.DuO9GYej.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/page-OnePage.DoflUyPq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/DeliveryMethodSelectorSection.DAMC_nK8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useEditorShopPayNavigation.Cyc1dR5t.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShopPayLogo.yiCDvPZj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/VaultedPayment.CPlP0JmB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/LocalizationExtensionField.BWSh3Hec.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShopPayOptInDisclaimer.BH26xeXm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShipmentBreakdown.D4G7Topi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/MerchandiseModal.DajWrNf3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/StackedMerchandisePreview.QWl814KC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PayButtonSection.BpSikpSp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/component-ShopPayVerificationSwitch.BVvVw1aG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useSubscribeMessenger.DHTd4Xiv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/index.Fq_-xMi_.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/app.CPlGjN8d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/DeliveryMethodSelectorSection.mzIofv1F.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/ShopPayLogo.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  