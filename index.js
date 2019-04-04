'use strict';

var _ = {};


_.typeOf = function (v) {
    // YOUR CODE BELOW HERE //
    if(typeof v === 'string'){
        return('string');
    }else if (typeof v === 'number'){
        return('number');
    }else if (typeof v === 'boolean'){
        return('boolean');
    }else if (typeof v === 'function'){
        return('function');
    }else if (typeof v === 'undefined'){
        return('undefined');
    }else{
        if (Array.isArray(v)) {
            return('array');
        } else if (v instanceof Date) {
            return('date');
        } else if (v === null) {
            return('null');
        } else {
            return('object');
        }
    }
    
    
   
};


_.first = function (arr, num){
    var res = [];
    if (_.typeOf(num) !== 'number'){
        return arr[0];
    } else if (_.typeOf(arr) !== 'array'){
        return [];
    }else if (num >= arr.length){
        return arr;
    }else{
        for(var i = 0; i <= num-1; i++){
            res.push(arr[i]);
        }
    }
    return res;
};


_.last = function(arr,num){
    var e = [];
    if(_.typeOf(arr)!== 'array'){
        return [];
    }else if (_.typeOf(num)!== 'number'){
        return arr[arr.length-1];
    }else if(num >arr.length){
        return arr;
    }else{
        for(var i=arr.length-num; i<=arr.length-1;i++)
        e.push(arr[i]);
    }
    return e;
};


_.indexOf = function(arr, val){
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
};


_.contains = function(arr,val){
    var ind = _.indexOf(arr, val);
    if(ind === -1){
        return false;
    }
    return true;
};


_.each = function(coll, fn){
    if(Array.isArray(coll)){
        for(var i = 0; i < coll.length; i++){
            fn(coll[i], i, coll);
        }
    }else{
        for(var key in coll){
            fn(coll[key], key, coll);
        }
    }
};


_.filter = function(array, fn){
    var arr = [];
    _.each(array, function(elt, loc, coll){
        if(fn(elt,loc,coll)){
            arr.push(elt);
        }
    });
    return arr;
};


_.map = function(coll, fn){
    var res = [];
    _.each(coll, function(elt, loc, coll){
        res.push(fn(elt, loc, coll));
    });
    return res;
};


_.reject = function(arr, fn){
    var res = [];
    _.each(arr, function(elt, loc, coll){
        if(!fn(elt,loc,coll)){
            res.push(elt);
        }
    });
    return res;
};



_.partition = function(col, fn){
   var res = [];
   res.push(_.filter(col, fn));
   res.push(_.reject(col, fn));
   return res;

};


_.every = function(col, test){
    if(!test){
        var bool = true;
        _.each(col,function(val){
            if(!val){
                bool = false;
            }
        })
        return bool;
    }else{
        var allTrue = true;
        _.each(col, function(value, loc, col){
            if(!test(value, loc, col)){
                allTrue = false;
            }
        
        });
    }
    
    return allTrue;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(col, fn){
    var oneTrue = false;
    if(!fn){
        _.each(col,function(val){
            if(!val){
                oneTrue = false;
            }else{
                oneTrue = true;
            }
        });
        return oneTrue;
    }else{
        _.each(col, function(value, loc, col){
        if(fn(value, loc, col)){
            oneTrue = true;
        }
        
    });
    }
    
    return oneTrue;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arr, prop){
  var newArr = [];
  for (var i = 0;i < arr.length; i++){
    if (arr[i].hasOwnProperty(prop)){
      newArr.push(arr[i][prop]);
    }
  }
  return newArr;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
