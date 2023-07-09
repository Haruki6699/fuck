"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{4349:function(e,t,i){i.d(t,{h:function(){return eu}});var r,n,o=i(655),a=i(9613),s=i(507),c=i(2152),u=i(3361),f=function(){function e(){this.getFragmentDoc=(0,s.re)(u.Yk)}return e.prototype.batch=function(e){var t,i=this,r="string"==typeof e.optimistic?e.optimistic:!1===e.optimistic?null:void 0;return this.performTransaction(function(){return t=e.update(i)},r),t},e.prototype.recordOptimisticTransaction=function(e,t){this.performTransaction(e,t)},e.prototype.transformDocument=function(e){return e},e.prototype.identify=function(e){},e.prototype.gc=function(){return[]},e.prototype.modify=function(e){return!1},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,o.pi)((0,o.pi)({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,o.pi)((0,o.pi)({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:t}))},e.prototype.writeQuery=function(e){var t=e.id,i=e.data,r=(0,o._T)(e,["id","data"]);return this.write(Object.assign(r,{dataId:t||"ROOT_QUERY",result:i}))},e.prototype.writeFragment=function(e){var t=e.id,i=e.data,r=e.fragment,n=e.fragmentName,a=(0,o._T)(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(a,{query:this.getFragmentDoc(r,n),dataId:t,result:i}))},e.prototype.updateQuery=function(e,t){return this.batch({update:function(i){var r=i.readQuery(e),n=t(r);return null==n?r:(i.writeQuery((0,o.pi)((0,o.pi)({},e),{data:n})),n)}})},e.prototype.updateFragment=function(e,t){return this.batch({update:function(i){var r=i.readFragment(e),n=t(r);return null==n?r:(i.writeFragment((0,o.pi)((0,o.pi)({},e),{data:n})),n)}})},e}(),p=function(e,t,i,r){this.message=e,this.path=t,this.query=i,this.variables=r},l=i(1761),d=i(6982),h=i(320),y=i(3712),m=i(6765),g=i(182),v=i(9065),_=i(3154);function b(e){if(__DEV__){var t;(t=new Set([e])).forEach(function(e){(0,_.s)(e)&&function(e){if(__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(e){if(e instanceof TypeError)return null;throw e}return e}(e)===e&&Object.getOwnPropertyNames(e).forEach(function(i){(0,_.s)(e[i])&&t.add(e[i])})})}return e}var k=i(657),S=i(9641),O=Object.create(null),w=function(){return O},j=Object.create(null),R=function(){function e(e,t){var i=this;this.policies=e,this.group=t,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(e,t){return b((0,l.Yk)(e)?i.get(e.__ref,t):e&&e[t])},this.canRead=function(e){return(0,l.Yk)(e)?i.has(e.__ref):"object"==typeof e},this.toReference=function(e,t){if("string"==typeof e)return(0,l.kQ)(e);if((0,l.Yk)(e))return e;var r=i.policies.identify(e)[0];if(r){var n=(0,l.kQ)(r);return t&&i.merge(r,e),n}}}return e.prototype.toObject=function(){return(0,o.pi)({},this.data)},e.prototype.has=function(e){return void 0!==this.lookup(e,!0)},e.prototype.get=function(e,t){if(this.group.depend(e,t),S.RI.call(this.data,e)){var i=this.data[e];if(i&&S.RI.call(i,t))return i[t]}return"__typename"===t&&S.RI.call(this.policies.rootTypenamesById,e)?this.policies.rootTypenamesById[e]:this instanceof F?this.parent.get(e,t):void 0},e.prototype.lookup=function(e,t){return(t&&this.group.depend(e,"__exists"),S.RI.call(this.data,e))?this.data[e]:this instanceof F?this.parent.lookup(e,t):this.policies.rootTypenamesById[e]?Object.create(null):void 0},e.prototype.merge=function(e,t){var i,r=this;(0,l.Yk)(e)&&(e=e.__ref),(0,l.Yk)(t)&&(t=t.__ref);var n="string"==typeof e?this.lookup(i=e):e,o="string"==typeof t?this.lookup(i=t):t;if(o){__DEV__?(0,a.kG)("string"==typeof i,"store.merge expects a string ID"):(0,a.kG)("string"==typeof i,1);var s=new g.w0(x).merge(n,o);if(this.data[i]=s,s!==n&&(delete this.refs[i],this.group.caching)){var c=Object.create(null);n||(c.__exists=1),Object.keys(o).forEach(function(e){if(!n||n[e]!==s[e]){c[e]=1;var t=(0,S.E_)(e);t===e||r.policies.hasKeyArgs(s.__typename,t)||(c[t]=1),void 0!==s[e]||r instanceof F||delete s[e]}}),c.__typename&&!(n&&n.__typename)&&this.policies.rootTypenamesById[i]===s.__typename&&delete c.__typename,Object.keys(c).forEach(function(e){return r.group.dirty(i,e)})}}},e.prototype.modify=function(e,t){var i=this,r=this.lookup(e);if(r){var n=Object.create(null),a=!1,s=!0,c={DELETE:O,INVALIDATE:j,isReference:l.Yk,toReference:this.toReference,canRead:this.canRead,readField:function(t,r){return i.policies.readField("string"==typeof t?{fieldName:t,from:r||(0,l.kQ)(e)}:t,{store:i})}};if(Object.keys(r).forEach(function(u){var f=(0,S.E_)(u),p=r[u];if(void 0!==p){var l="function"==typeof t?t:t[u]||t[f];if(l){var d=l===w?O:l(b(p),(0,o.pi)((0,o.pi)({},c),{fieldName:f,storeFieldName:u,storage:i.getStorage(e,u)}));d===j?i.group.dirty(e,u):(d===O&&(d=void 0),d!==p&&(n[u]=d,a=!0,p=d))}void 0!==p&&(s=!1)}}),a)return this.merge(e,n),s&&(this instanceof F?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},e.prototype.delete=function(e,t,i){var r,n=this.lookup(e);if(n){var o=this.getFieldValue(n,"__typename"),a=t&&i?this.policies.getStoreFieldName({typename:o,fieldName:t,args:i}):t;return this.modify(e,a?((r={})[a]=w,r):w)}return!1},e.prototype.evict=function(e,t){var i=!1;return e.id&&(S.RI.call(this.data,e.id)&&(i=this.delete(e.id,e.fieldName,e.args)),this instanceof F&&this!==t&&(i=this.parent.evict(e,t)||i),(e.fieldName||i)&&this.group.dirty(e.id,e.fieldName||"__exists")),i},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var e=this,t=this.toObject(),i=[];return this.getRootIdSet().forEach(function(t){S.RI.call(e.policies.rootTypenamesById,t)||i.push(t)}),i.length&&(t.__META={extraRootIds:i.sort()}),t},e.prototype.replace=function(e){var t=this;if(Object.keys(this.data).forEach(function(i){e&&S.RI.call(e,i)||t.delete(i)}),e){var i=e.__META,r=(0,o._T)(e,["__META"]);Object.keys(r).forEach(function(e){t.merge(e,r[e])}),i&&i.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},e.prototype.release=function(e){if(this.rootIds[e]>0){var t=--this.rootIds[e];return t||delete this.rootIds[e],t}return 0},e.prototype.getRootIdSet=function(e){return void 0===e&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof F?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},e.prototype.gc=function(){var e=this,t=this.getRootIdSet(),i=this.toObject();t.forEach(function(r){S.RI.call(i,r)&&(Object.keys(e.findChildRefIds(r)).forEach(t.add,t),delete i[r])});var r=Object.keys(i);if(r.length){for(var n=this;n instanceof F;)n=n.parent;r.forEach(function(e){return n.delete(e)})}return r},e.prototype.findChildRefIds=function(e){if(!S.RI.call(this.refs,e)){var t=this.refs[e]=Object.create(null),i=this.data[e];if(!i)return t;var r=new Set([i]);r.forEach(function(e){(0,l.Yk)(e)&&(t[e.__ref]=!0),(0,_.s)(e)&&Object.keys(e).forEach(function(t){var i=e[t];(0,_.s)(i)&&r.add(i)})})}return this.refs[e]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),E=function(){function e(e,t){void 0===t&&(t=null),this.caching=e,this.parent=t,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?(0,s.dP)():null,this.keyMaker=new k.B(h.mr)},e.prototype.depend=function(e,t){if(this.d){this.d(t+"#"+e);var i=(0,S.E_)(t);i!==t&&this.d(i+"#"+e),this.parent&&this.parent.depend(e,t)}},e.prototype.dirty=function(e,t){this.d&&this.d.dirty(t+"#"+e,"__exists"===t?"forget":"setDirty")},e}();function T(e,t){D(e)&&e.group.depend(t,"__exists")}n=function(e){function t(t){var i=t.policies,r=t.resultCaching,n=t.seed,o=e.call(this,i,new E(void 0===r||r))||this;return o.stump=new I(o),o.storageTrie=new k.B(h.mr),n&&o.replace(n),o}return(0,o.ZT)(t,e),t.prototype.addLayer=function(e,t){return this.stump.addLayer(e,t)},t.prototype.removeLayer=function(){return this},t.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},t}(r=R||(R={})),r.Root=n;var F=function(e){function t(t,i,r,n){var o=e.call(this,i.policies,n)||this;return o.id=t,o.parent=i,o.replay=r,o.group=n,r(o),o}return(0,o.ZT)(t,e),t.prototype.addLayer=function(e,i){return new t(e,this,i,this.group)},t.prototype.removeLayer=function(e){var t=this,i=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(e){var r=t.data[e],n=i.lookup(e);n?r?r!==n&&Object.keys(r).forEach(function(i){(0,c.D)(r[i],n[i])||t.group.dirty(e,i)}):(t.group.dirty(e,"__exists"),Object.keys(n).forEach(function(i){t.group.dirty(e,i)})):t.delete(e)}),i):i===this.parent?this:i.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return(0,o.pi)((0,o.pi)({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(t){var i=this.parent.findChildRefIds(t);return S.RI.call(this.data,t)?(0,o.pi)((0,o.pi)({},i),e.prototype.findChildRefIds.call(this,t)):i},t.prototype.getStorage=function(){for(var e=this.parent;e.parent;)e=e.parent;return e.getStorage.apply(e,arguments)},t}(R),I=function(e){function t(t){return e.call(this,"EntityStore.Stump",t,function(){},new E(t.group.caching,t.group))||this}return(0,o.ZT)(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(){return this.parent.merge.apply(this.parent,arguments)},t}(F);function x(e,t,i){var r=e[i],n=t[i];return(0,c.D)(r,n)?r:n}function D(e){return!!(e instanceof R&&e.group.caching)}var C=i(900);function M(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var N=function(){function e(e){var t=this;this.knownResults=new(h.mr?WeakMap:Map),this.config=(0,y.o)(e,{addTypename:!1!==e.addTypename,canonizeResults:(0,S.lg)(e)}),this.canon=e.canon||new C.h,this.executeSelectionSet=(0,s.re)(function(e){var i,r=e.context.canonizeResults,n=M(e);n[3]=!r;var a=(i=t.executeSelectionSet).peek.apply(i,n);return a?r?(0,o.pi)((0,o.pi)({},a),{result:t.canon.admit(a.result)}):a:(T(e.context.store,e.enclosingRef.__ref),t.execSelectionSetImpl(e))},{max:this.config.resultCacheMaxSize,keyArgs:M,makeCacheKey:function(e,t,i,r){if(D(i.store))return i.store.makeCacheKey(e,(0,l.Yk)(t)?t.__ref:t,i.varString,r)}}),this.executeSubSelectedArray=(0,s.re)(function(e){return T(e.context.store,e.enclosingRef.__ref),t.execSubSelectedArrayImpl(e)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var t=e.field,i=e.array,r=e.context;if(D(r.store))return r.store.makeCacheKey(t,i,r.varString)}})}return e.prototype.resetCanon=function(){this.canon=new C.h},e.prototype.diffQueryAgainstStore=function(e){var t,i=e.store,r=e.query,n=e.rootId,a=e.variables,s=e.returnPartialData,c=e.canonizeResults,f=void 0===c?this.config.canonizeResults:c,d=this.config.cache.policies;a=(0,o.pi)((0,o.pi)({},(0,m.O4)((0,m.iW)(r))),a);var h=(0,l.kQ)(void 0===n?"ROOT_QUERY":n),y=new g.w0,v=this.executeSelectionSet({selectionSet:(0,m.p$)(r).selectionSet,objectOrReference:h,enclosingRef:h,context:{store:i,query:r,policies:d,variables:a,varString:(0,C.B)(a),canonizeResults:f,fragmentMap:(0,u.F)((0,m.kU)(r)),merge:function(e,t){return y.merge(e,t)}}});if(v.missing&&(t=[new p(function(e){try{JSON.stringify(e,function(e,t){if("string"==typeof t)throw t;return t})}catch(e){return e}}(v.missing),v.missing,r,a)],!(void 0===s||s)))throw t[0];return{result:v.result,complete:!t,missing:t}},e.prototype.isFresh=function(e,t,i,r){if(D(r.store)&&this.knownResults.get(e)===i){var n=this.executeSelectionSet.peek(i,t,r,this.canon.isKnown(e));if(n&&e===n.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(e){var t,i=this,r=e.selectionSet,n=e.objectOrReference,o=e.enclosingRef,a=e.context;if((0,l.Yk)(n)&&!a.policies.rootTypenamesById[n.__ref]&&!a.store.has(n.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(n.__ref," object")};var s=a.variables,c=a.policies,f=a.store.getFieldValue(n,"__typename"),p={};function h(e,i){var r;return e.missing&&(t=a.merge(t,((r={})[i]=e.missing,r))),e.result}this.config.addTypename&&"string"==typeof f&&!c.rootIdsByTypename[f]&&(p={__typename:f});var y=new Set(r.selections);y.forEach(function(e){var r,m;if((0,v.LZ)(e,s)){if((0,l.My)(e)){var g=c.readField({fieldName:e.name.value,field:e,variables:a.variables,from:n},a),_=(0,l.u2)(e);void 0===g?d.Gw.added(e)||(t=a.merge(t,((r={})[_]="Can't find field '".concat(e.name.value,"' on ").concat((0,l.Yk)(n)?n.__ref+" object":"object "+JSON.stringify(n,null,2)),r))):(0,S.kJ)(g)?g=h(i.executeSubSelectedArray({field:e,array:g,enclosingRef:o,context:a}),_):e.selectionSet?null!=g&&(g=h(i.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:g,enclosingRef:(0,l.Yk)(g)?g:o,context:a}),_)):a.canonizeResults&&(g=i.canon.pass(g)),void 0!==g&&(p=a.merge(p,((m={})[_]=g,m)))}else{var b=(0,u.hi)(e,a.fragmentMap);b&&c.fragmentMatches(b,f)&&b.selectionSet.selections.forEach(y.add,y)}}});var m={result:p,missing:t},g=a.canonizeResults?this.canon.admit(m):b(m);return g.result&&this.knownResults.set(g.result,r),g},e.prototype.execSubSelectedArrayImpl=function(e){var t,i=this,r=e.field,n=e.array,o=e.enclosingRef,s=e.context;function c(e,i){var r;return e.missing&&(t=s.merge(t,((r={})[i]=e.missing,r))),e.result}return r.selectionSet&&(n=n.filter(s.store.canRead)),n=n.map(function(e,t){return null===e?null:(0,S.kJ)(e)?c(i.executeSubSelectedArray({field:r,array:e,enclosingRef:o,context:s}),t):r.selectionSet?c(i.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:e,enclosingRef:(0,l.Yk)(e)?e:o,context:s}),t):(__DEV__&&function(e,t,i){if(!t.selectionSet){var r=new Set([i]);r.forEach(function(i){(0,_.s)(i)&&(__DEV__?(0,a.kG)(!(0,l.Yk)(i),"Missing selection set for object of type ".concat((0,S.jp)(e,i)," returned for query field ").concat(t.name.value)):(0,a.kG)(!(0,l.Yk)(i),5),Object.values(i).forEach(r.add,r))})}}(s.store,r,e),e)}),{result:s.canonizeResults?this.canon.admit(n):n,missing:t}},e}(),B=i(9487),P=i(1436),z=i(897),V=i(6438),Y=Object.create(null);function A(e){var t=JSON.stringify(e);return Y[t]||(Y[t]=Object.create(null))}function J(e){var t=A(e);return t.keyFieldsFn||(t.keyFieldsFn=function(t,i){var r=function(e,t){return i.readField(t,e)},n=i.keyObject=W(e,function(e){var n=L(i.storeObject,e,r);return void 0===n&&t!==i.storeObject&&S.RI.call(t,e[0])&&(n=L(t,e,G)),__DEV__?(0,a.kG)(void 0!==n,"Missing field '".concat(e.join("."),"' while extracting keyFields from ").concat(JSON.stringify(t))):(0,a.kG)(void 0!==n,2),n});return"".concat(i.typename,":").concat(JSON.stringify(n))})}function Q(e){var t=A(e);return t.keyArgsFn||(t.keyArgsFn=function(t,i){var r=i.field,n=i.variables,o=i.fieldName,a=JSON.stringify(W(e,function(e){var i=e[0],o=i.charAt(0);if("@"===o){if(r&&(0,P.O)(r.directives)){var a=i.slice(1),s=r.directives.find(function(e){return e.name.value===a}),c=s&&(0,l.NC)(s,n);return c&&L(c,e.slice(1))}return}if("$"===o){var u=i.slice(1);if(n&&S.RI.call(n,u)){var f=e.slice(0);return f[0]=u,L(n,f)}return}if(t)return L(t,e)}));return(t||"{}"!==a)&&(o+=":"+a),o})}function W(e,t){var i=new g.w0;return(function e(t){var i=A(t);if(!i.paths){var r=i.paths=[],n=[];t.forEach(function(i,o){(0,S.kJ)(i)?(e(i).forEach(function(e){return r.push(n.concat(e))}),n.length=0):(n.push(i),(0,S.kJ)(t[o+1])||(r.push(n.slice(0)),n.length=0))})}return i.paths})(e).reduce(function(e,r){var n,o=t(r);if(void 0!==o){for(var a=r.length-1;a>=0;--a)(n={})[r[a]]=o,o=n;e=i.merge(e,o)}return e},Object.create(null))}function G(e,t){return e[t]}function L(e,t,i){return i=i||G,function e(t){return(0,_.s)(t)?(0,S.kJ)(t)?t.map(e):W(Object.keys(t).sort(),function(e){return L(t,e)}):t}(t.reduce(function e(t,r){return(0,S.kJ)(t)?t.map(function(t){return e(t,r)}):t&&i(t,r)},e))}function U(e){return void 0!==e.args?e.args:e.field?(0,l.NC)(e.field,e.variables):null}l.PT.setStringify(C.B);var q=function(){},K=function(e,t){return t.fieldName},Z=function(e,t,i){return(0,i.mergeObjects)(e,t)},$=function(e,t){return t},X=function(){function e(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=(0,o.pi)({dataIdFromObject:S.uG},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return e.prototype.identify=function(e,t){var i,r,n=this,a=t&&(t.typename||(null===(i=t.storeObject)||void 0===i?void 0:i.__typename))||e.__typename;if(a===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];for(var s=t&&t.storeObject||e,c=(0,o.pi)((0,o.pi)({},t),{typename:a,storeObject:s,readField:t&&t.readField||function(){var e=ee(arguments,s);return n.readField(e,{store:n.cache.data,variables:e.variables})}}),u=a&&this.getTypePolicy(a),f=u&&u.keyFn||this.config.dataIdFromObject;f;){var p=f(e,c);if((0,S.kJ)(p))f=J(p);else{r=p;break}}return r=r?String(r):void 0,c.keyObject?[r,c.keyObject]:[r]},e.prototype.addTypePolicies=function(e){var t=this;Object.keys(e).forEach(function(i){var r=e[i],n=r.queryType,a=r.mutationType,s=r.subscriptionType,c=(0,o._T)(r,["queryType","mutationType","subscriptionType"]);n&&t.setRootTypename("Query",i),a&&t.setRootTypename("Mutation",i),s&&t.setRootTypename("Subscription",i),S.RI.call(t.toBeAdded,i)?t.toBeAdded[i].push(c):t.toBeAdded[i]=[c]})},e.prototype.updateTypePolicy=function(e,t){var i=this,r=this.getTypePolicy(e),n=t.keyFields,o=t.fields;function a(e,t){e.merge="function"==typeof t?t:!0===t?Z:!1===t?$:e.merge}a(r,t.merge),r.keyFn=!1===n?q:(0,S.kJ)(n)?J(n):"function"==typeof n?n:r.keyFn,o&&Object.keys(o).forEach(function(t){var r=i.getFieldPolicy(e,t,!0),n=o[t];if("function"==typeof n)r.read=n;else{var s=n.keyArgs,c=n.read,u=n.merge;r.keyFn=!1===s?K:(0,S.kJ)(s)?Q(s):"function"==typeof s?s:r.keyFn,"function"==typeof c&&(r.read=c),a(r,u)}r.read&&r.merge&&(r.keyFn=r.keyFn||K)})},e.prototype.setRootTypename=function(e,t){void 0===t&&(t=e);var i="ROOT_"+e.toUpperCase(),r=this.rootTypenamesById[i];t!==r&&(__DEV__?(0,a.kG)(!r||r===e,"Cannot change root ".concat(e," __typename more than once")):(0,a.kG)(!r||r===e,3),r&&delete this.rootIdsByTypename[r],this.rootIdsByTypename[t]=i,this.rootTypenamesById[i]=t)},e.prototype.addPossibleTypes=function(e){var t=this;this.usingPossibleTypes=!0,Object.keys(e).forEach(function(i){t.getSupertypeSet(i,!0),e[i].forEach(function(e){t.getSupertypeSet(e,!0).add(i);var r=e.match(S.$O);r&&r[0]===e||t.fuzzySubtypes.set(e,RegExp(e))})})},e.prototype.getTypePolicy=function(e){var t=this;if(!S.RI.call(this.typePolicies,e)){var i=this.typePolicies[e]=Object.create(null);i.fields=Object.create(null);var r=this.supertypeMap.get(e);r&&r.size&&r.forEach(function(e){var r=t.getTypePolicy(e),n=r.fields;Object.assign(i,(0,o._T)(r,["fields"])),Object.assign(i.fields,n)})}var n=this.toBeAdded[e];return n&&n.length&&n.splice(0).forEach(function(i){t.updateTypePolicy(e,i)}),this.typePolicies[e]},e.prototype.getFieldPolicy=function(e,t,i){if(e){var r=this.getTypePolicy(e).fields;return r[t]||i&&(r[t]=Object.create(null))}},e.prototype.getSupertypeSet=function(e,t){var i=this.supertypeMap.get(e);return!i&&t&&this.supertypeMap.set(e,i=new Set),i},e.prototype.fragmentMatches=function(e,t,i,r){var n=this;if(!e.typeCondition)return!0;if(!t)return!1;var o=e.typeCondition.name.value;if(t===o)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(o))for(var s=this.getSupertypeSet(t,!0),c=[s],u=function(e){var t=n.getSupertypeSet(e,!1);t&&t.size&&0>c.indexOf(t)&&c.push(t)},f=!!(i&&this.fuzzySubtypes.size),p=!1,l=0;l<c.length;++l){var d=c[l];if(d.has(o))return s.has(o)||(p&&__DEV__&&a.kG.warn("Inferring subtype ".concat(t," of supertype ").concat(o)),s.add(o)),!0;d.forEach(u),f&&l===c.length-1&&(0,S.RC)(e.selectionSet,i,r)&&(f=!1,p=!0,this.fuzzySubtypes.forEach(function(e,i){var r=t.match(e);r&&r[0]===t&&u(i)}))}return!1},e.prototype.hasKeyArgs=function(e,t){var i=this.getFieldPolicy(e,t,!1);return!!(i&&i.keyFn)},e.prototype.getStoreFieldName=function(e){var t,i=e.typename,r=e.fieldName,n=this.getFieldPolicy(i,r,!1),o=n&&n.keyFn;if(o&&i)for(var a={typename:i,fieldName:r,field:e.field||null,variables:e.variables},s=U(e);o;){var c=o(s,a);if((0,S.kJ)(c))o=Q(c);else{t=c||r;break}}return(void 0===t&&(t=e.field?(0,l.vf)(e.field,e.variables):(0,l.PT)(r,U(e))),!1===t)?r:r===(0,S.E_)(t)?t:r+":"+t},e.prototype.readField=function(e,t){var i=e.from;if(i&&(e.field||e.fieldName)){if(void 0===e.typename){var r=t.store.getFieldValue(i,"__typename");r&&(e.typename=r)}var n=this.getStoreFieldName(e),o=(0,S.E_)(n),a=t.store.getFieldValue(i,n),s=this.getFieldPolicy(e.typename,o,!1),c=s&&s.read;if(c){var u=H(this,i,e,t,t.store.getStorage((0,l.Yk)(i)?i.__ref:i,n));return V.ab.withValue(this.cache,c,[a,u])}return a}},e.prototype.getReadFunction=function(e,t){var i=this.getFieldPolicy(e,t,!1);return i&&i.read},e.prototype.getMergeFunction=function(e,t,i){var r=this.getFieldPolicy(e,t,!1),n=r&&r.merge;return!n&&i&&(n=(r=this.getTypePolicy(i))&&r.merge),n},e.prototype.runMergeFunction=function(e,t,i,r,n){var o=i.field,a=i.typename,s=i.merge;return s===Z?et(r.store)(e,t):s===$?t:(r.overwrite&&(e=void 0),s(e,t,H(this,void 0,{typename:a,fieldName:o.name.value,field:o,variables:r.variables},r,n||Object.create(null))))},e}();function H(e,t,i,r,n){var o=e.getStoreFieldName(i),a=(0,S.E_)(o),s=i.variables||r.variables,c=r.store,u=c.toReference,f=c.canRead;return{args:U(i),field:i.field||null,fieldName:a,storeFieldName:o,variables:s,isReference:l.Yk,toReference:u,storage:n,cache:e.cache,canRead:f,readField:function(){return e.readField(ee(arguments,t,r),r)},mergeObjects:et(r.store)}}function ee(e,t,i){var r,n,s,c=e[0],u=e[1],f=e.length;return"string"==typeof c?s={fieldName:c,from:f>1?u:t}:(s=(0,o.pi)({},c),S.RI.call(s,"from")||(s.from=t)),__DEV__&&void 0===s.from&&__DEV__&&a.kG.warn("Undefined 'from' passed to readField with arguments ".concat((r=Array.from(e),n=(0,z.X)("stringifyForDisplay"),JSON.stringify(r,function(e,t){return void 0===t?n:t}).split(JSON.stringify(n)).join("<undefined>")))),void 0===s.variables&&(s.variables=i),s}function et(e){return function(t,i){if((0,S.kJ)(t)||(0,S.kJ)(i))throw __DEV__?new a.ej("Cannot automatically merge arrays"):new a.ej(4);if((0,_.s)(t)&&(0,_.s)(i)){var r=e.getFieldValue(t,"__typename"),n=e.getFieldValue(i,"__typename");if(r&&n&&r!==n)return i;if((0,l.Yk)(t)&&(0,S.j)(i))return e.merge(t.__ref,i),t;if((0,S.j)(t)&&(0,l.Yk)(i))return e.merge(t,i.__ref),i;if((0,S.j)(t)&&(0,S.j)(i))return(0,o.pi)((0,o.pi)({},t),i)}return i}}function ei(e,t,i){var r="".concat(t).concat(i),n=e.flavors.get(r);return n||e.flavors.set(r,n=e.clientOnly===t&&e.deferred===i?e:(0,o.pi)((0,o.pi)({},e),{clientOnly:t,deferred:i})),n}var er=function(){function e(e,t){this.cache=e,this.reader=t}return e.prototype.writeToStore=function(e,t){var i=this,r=t.query,n=t.result,s=t.dataId,f=t.variables,p=t.overwrite,d=(0,m.$H)(r),h=(0,S.ig)();f=(0,o.pi)((0,o.pi)({},(0,m.O4)(d)),f);var y={store:e,written:Object.create(null),merge:function(e,t){return h.merge(e,t)},variables:f,varString:(0,C.B)(f),fragmentMap:(0,u.F)((0,m.kU)(r)),overwrite:!!p,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map},g=this.processSelectionSet({result:n||Object.create(null),dataId:s,selectionSet:d.selectionSet,mergeTree:{map:new Map},context:y});if(!(0,l.Yk)(g))throw __DEV__?new a.ej("Could not identify object ".concat(JSON.stringify(n))):new a.ej(6);return y.incomingById.forEach(function(t,r){var n=t.storeObject,o=t.mergeTree,s=t.fieldNodeSet,u=(0,l.kQ)(r);if(o&&o.map.size){var f=i.applyMerges(o,u,n,y);if((0,l.Yk)(f))return;n=f}if(__DEV__&&!y.overwrite){var p=Object.create(null);s.forEach(function(e){e.selectionSet&&(p[e.name.value]=!0)});var d=function(e){var t=o&&o.map.get(e);return Boolean(t&&t.info&&t.info.merge)};Object.keys(n).forEach(function(e){!0!==p[(0,S.E_)(e)]||d(e)||function(e,t,i,r){var n=function(e){var t=r.getFieldValue(e,i);return"object"==typeof t&&t},o=n(e);if(o){var s=n(t);if(!(!s||(0,l.Yk)(o)||(0,c.D)(o,s)||Object.keys(o).every(function(e){return void 0!==r.getFieldValue(s,e)}))){var u=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),f=(0,S.E_)(i),p="".concat(u,".").concat(f);if(!ec.has(p)){ec.add(p);var d=[];(0,S.kJ)(o)||(0,S.kJ)(s)||[o,s].forEach(function(e){var t=r.getFieldValue(e,"__typename");"string"!=typeof t||d.includes(t)||d.push(t)}),__DEV__&&a.kG.warn("Cache data may be lost when replacing the ".concat(f," field of a ").concat(u," object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(d.length?"either ensure all objects of type "+d.join(" and ")+" have an ID or a custom merge function, or ":"","define a custom merge function for the ").concat(p," field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(o).slice(0,1e3),"\n  incoming: ").concat(JSON.stringify(s).slice(0,1e3),"\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))}}}}(u,n,e,y.store)})}e.merge(r,n)}),e.retain(g.__ref),g},e.prototype.processSelectionSet=function(e){var t=this,i=e.dataId,r=e.result,n=e.selectionSet,s=e.context,c=e.mergeTree,u=this.cache.policies,f=Object.create(null),p=i&&u.rootTypenamesById[i]||(0,l.qw)(r,n,s.fragmentMap)||i&&s.store.get(i,"__typename");"string"==typeof p&&(f.__typename=p);var h=function(){var e=ee(arguments,f,s.variables);if((0,l.Yk)(e.from)){var t=s.incomingById.get(e.from.__ref);if(t){var i=u.readField((0,o.pi)((0,o.pi)({},e),{from:t.storeObject}),s);if(void 0!==i)return i}}return u.readField(e,s)},y=new Set;this.flattenFields(n,r,s,p).forEach(function(e,i){var n,o=r[(0,l.u2)(i)];if(y.add(i),void 0!==o){var s=u.getStoreFieldName({typename:p,fieldName:i.name.value,field:i,variables:e.variables}),m=eo(c,s),g=t.processFieldValue(o,i,i.selectionSet?ei(e,!1,!1):e,m),v=void 0;i.selectionSet&&((0,l.Yk)(g)||(0,S.j)(g))&&(v=h("__typename",g));var _=u.getMergeFunction(p,i.name.value,v);_?m.info={field:i,typename:p,merge:_}:es(c,s),f=e.merge(f,((n={})[s]=g,n))}else __DEV__&&!e.clientOnly&&!e.deferred&&!d.Gw.added(i)&&!u.getReadFunction(p,i.name.value)&&__DEV__&&a.kG.error("Missing field '".concat((0,l.u2)(i),"' while writing result ").concat(JSON.stringify(r,null,2)).substring(0,1e3))});try{var m=u.identify(r,{typename:p,selectionSet:n,fragmentMap:s.fragmentMap,storeObject:f,readField:h}),g=m[0],v=m[1];i=i||g,v&&(f=s.merge(f,v))}catch(e){if(!i)throw e}if("string"==typeof i){var _=(0,l.kQ)(i),b=s.written[i]||(s.written[i]=[]);if(b.indexOf(n)>=0||(b.push(n),this.reader&&this.reader.isFresh(r,_,n,s)))return _;var k=s.incomingById.get(i);return k?(k.storeObject=s.merge(k.storeObject,f),k.mergeTree=function e(t,i){if(t===i||!i||ea(i))return t;if(!t||ea(t))return i;var r=t.info&&i.info?(0,o.pi)((0,o.pi)({},t.info),i.info):t.info||i.info,n=t.map.size&&i.map.size,a={info:r,map:n?new Map:t.map.size?t.map:i.map};if(n){var s=new Set(i.map.keys());t.map.forEach(function(t,r){a.map.set(r,e(t,i.map.get(r))),s.delete(r)}),s.forEach(function(r){a.map.set(r,e(i.map.get(r),t.map.get(r)))})}return a}(k.mergeTree,c),y.forEach(function(e){return k.fieldNodeSet.add(e)})):s.incomingById.set(i,{storeObject:f,mergeTree:ea(c)?void 0:c,fieldNodeSet:y}),_}return f},e.prototype.processFieldValue=function(e,t,i,r){var n=this;return t.selectionSet&&null!==e?(0,S.kJ)(e)?e.map(function(e,o){var a=n.processFieldValue(e,t,i,eo(r,o));return es(r,o),a}):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:i,mergeTree:r}):__DEV__?(0,B.X)(e):e},e.prototype.flattenFields=function(e,t,i,r){void 0===r&&(r=(0,l.qw)(t,e,i.fragmentMap));var n=new Map,o=this.cache.policies,a=new k.B(!1);return function e(s,c){var f=a.lookup(s,c.clientOnly,c.deferred);f.visited||(f.visited=!0,s.selections.forEach(function(a){if((0,v.LZ)(a,i.variables)){var s=c.clientOnly,f=c.deferred;if(!(s&&f)&&(0,P.O)(a.directives)&&a.directives.forEach(function(e){var t=e.name.value;if("client"===t&&(s=!0),"defer"===t){var r=(0,l.NC)(e,i.variables);r&&!1===r.if||(f=!0)}}),(0,l.My)(a)){var p=n.get(a);p&&(s=s&&p.clientOnly,f=f&&p.deferred),n.set(a,ei(i,s,f))}else{var d=(0,u.hi)(a,i.fragmentMap);d&&o.fragmentMatches(d,r,t,i.variables)&&e(d.selectionSet,ei(i,s,f))}}}))}(e,i),n},e.prototype.applyMerges=function(e,t,i,r,n){var s=this;if(e.map.size&&!(0,l.Yk)(i)){var c,u,f=!(0,S.kJ)(i)&&((0,l.Yk)(t)||(0,S.j)(t))?t:void 0,p=i;f&&!n&&(n=[(0,l.Yk)(f)?f.__ref:f]);var d=function(e,t){return(0,S.kJ)(e)?"number"==typeof t?e[t]:void 0:r.store.getFieldValue(e,String(t))};e.map.forEach(function(e,t){var i=d(f,t),o=d(p,t);if(void 0!==o){n&&n.push(t);var c=s.applyMerges(e,i,o,r,n);c!==o&&(u=u||new Map).set(t,c),n&&(0,a.kG)(n.pop()===t)}}),u&&(i=(0,S.kJ)(p)?p.slice(0):(0,o.pi)({},p),u.forEach(function(e,t){i[t]=e}))}return e.info?this.cache.policies.runMergeFunction(t,i,e.info,r,n&&(c=r.store).getStorage.apply(c,n)):i},e}(),en=[];function eo(e,t){var i=e.map;return i.has(t)||i.set(t,en.pop()||{map:new Map}),i.get(t)}function ea(e){return!e||!(e.info||e.map.size)}function es(e,t){var i=e.map,r=i.get(t);r&&ea(r)&&(en.push(r),i.delete(t))}var ec=new Set,eu=function(e){function t(t){void 0===t&&(t={});var i=e.call(this)||this;return i.watches=new Set,i.typenameDocumentCache=new Map,i.makeVar=V.QS,i.txCount=0,i.config=(0,S.jS)(t),i.addTypename=!!i.config.addTypename,i.policies=new X({cache:i,dataIdFromObject:i.config.dataIdFromObject,possibleTypes:i.config.possibleTypes,typePolicies:i.config.typePolicies}),i.init(),i}return(0,o.ZT)(t,e),t.prototype.init=function(){var e=this.data=new R.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()},t.prototype.resetResultCache=function(e){var t=this,i=this.storeReader;this.storeWriter=new er(this,this.storeReader=new N({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:(0,S.lg)(this.config),canon:e?void 0:i&&i.canon})),this.maybeBroadcastWatch=(0,s.re)(function(e,i){return t.broadcastWatch(e,i)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var i=e.optimistic?t.optimisticData:t.data;if(D(i)){var r=e.optimistic,n=e.rootId,o=e.variables;return i.makeCacheKey(e.query,e.callback,(0,C.B)({optimistic:r,rootId:n,variables:o}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(e){return e.resetCaching()})},t.prototype.restore=function(e){return this.init(),e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).extract()},t.prototype.read=function(e){var t=e.returnPartialData;try{return this.storeReader.diffQueryAgainstStore((0,o.pi)((0,o.pi)({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:void 0!==t&&t})).result||null}catch(e){if(e instanceof p)return null;throw e}},t.prototype.write=function(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.modify=function(e){if(S.RI.call(e,"id")&&!e.id)return!1;var t=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore((0,o.pi)((0,o.pi)({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(e){var t=this;return this.watches.size||(0,V._v)(this),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),function(){t.watches.delete(e)&&!t.watches.size&&(0,V.li)(t),t.maybeBroadcastWatch.forget(e)}},t.prototype.gc=function(e){C.B.reset();var t=this.optimisticData.gc();return e&&!this.txCount&&(e.resetResultCache?this.resetResultCache(e.resetResultIdentities):e.resetResultIdentities&&this.storeReader.resetCanon()),t},t.prototype.retain=function(e,t){return(t?this.optimisticData:this.data).retain(e)},t.prototype.release=function(e,t){return(t?this.optimisticData:this.data).release(e)},t.prototype.identify=function(e){if((0,l.Yk)(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(e){__DEV__&&a.kG.warn(e)}},t.prototype.evict=function(e){if(!e.id){if(S.RI.call(e,"id"))return!1;e=(0,o.pi)((0,o.pi)({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.reset=function(e){var t=this;return this.init(),C.B.reset(),e&&e.discardWatches?(this.watches.forEach(function(e){return t.maybeBroadcastWatch.forget(e)}),this.watches.clear(),(0,V.li)(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=this.optimisticData.removeLayer(e);t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())},t.prototype.batch=function(e){var t,i=this,r=e.update,n=e.optimistic,a=void 0===n||n,s=e.removeOptimistic,c=e.onWatchUpdated,u=function(e){var n=i.data,o=i.optimisticData;++i.txCount,e&&(i.data=i.optimisticData=e);try{return t=r(i)}finally{--i.txCount,i.data=n,i.optimisticData=o}},f=new Set;return c&&!this.txCount&&this.broadcastWatches((0,o.pi)((0,o.pi)({},e),{onWatchUpdated:function(e){return f.add(e),!1}})),"string"==typeof a?this.optimisticData=this.optimisticData.addLayer(a,u):!1===a?u(this.data):u(),"string"==typeof s&&(this.optimisticData=this.optimisticData.removeLayer(s)),c&&f.size?(this.broadcastWatches((0,o.pi)((0,o.pi)({},e),{onWatchUpdated:function(e,t){var i=c.call(this,e,t);return!1!==i&&f.delete(e),i}})),f.size&&f.forEach(function(e){return i.maybeBroadcastWatch.dirty(e)})):this.broadcastWatches(e),t},t.prototype.performTransaction=function(e,t){return this.batch({update:e,optimistic:t||null!==t})},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=(0,d.Gw)(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(e){var t=this;this.txCount||this.watches.forEach(function(i){return t.maybeBroadcastWatch(i,e)})},t.prototype.broadcastWatch=function(e,t){var i=e.lastDiff,r=this.diff(e);(!t||(e.optimistic&&"string"==typeof t.optimistic&&(r.fromOptimisticTransaction=!0),!t.onWatchUpdated||!1!==t.onWatchUpdated.call(this,e,r,i)))&&(i&&(0,c.D)(i.result,r.result)||e.callback(e.lastDiff=r,i))},t}(f)},7243:function(e,t,i){i.d(t,{D:function(){return r}});var r=i(8702).i.from},3200:function(e,t,i){i.d(t,{q:function(){return a}});var r=i(655),n=i(6503),o=i(8702);function a(e){return new o.i(function(t,i){return new n.y(function(r){var n,o,a;try{n=i(t).subscribe({next:function(n){if(n.errors&&(a=e({graphQLErrors:n.errors,response:n,operation:t,forward:i}))){o=a.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(n)},error:function(n){if(a=e({operation:t,networkError:n,graphQLErrors:n&&n.result&&n.result.errors,forward:i})){o=a.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(n)},complete:function(){a||r.complete.bind(r)()}})}catch(n){e({networkError:n,operation:t,forward:i}),r.error(n)}return function(){n&&n.unsubscribe(),o&&n.unsubscribe()}})})}!function(e){function t(t){var i=e.call(this)||this;return i.link=a(t),i}(0,r.ZT)(t,e),t.prototype.request=function(e,t){return this.link.request(e,t)}}(o.i)},3768:function(e,t,i){i.d(t,{e:function(){return a}});var r=i(9613),n=i(7294),o=i(5317),a=function(e){var t=e.client,i=e.children,a=(0,o.K)();return n.createElement(a.Consumer,null,function(e){return void 0===e&&(e={}),t&&e.client!==t&&(e=Object.assign({},e,{client:t})),__DEV__?(0,r.kG)(e.client,'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'):(0,r.kG)(e.client,26),n.createElement(a.Provider,{value:e},i)})}}}]);