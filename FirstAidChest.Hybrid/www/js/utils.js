/**
 * Created by abdur on 24.11.2015.
 */

'use strict';

var Utils = {
  Ajax:{
    transformRequest:function(data){
      var str = [];
      for (var p in data)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
      return str.join("&");
    }
  }
};
