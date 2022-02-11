"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _red = /*#__PURE__*/new WeakMap();

var _green = /*#__PURE__*/new WeakMap();

var _blue = /*#__PURE__*/new WeakMap();

var Color = /*#__PURE__*/_createClass(function Color() {
  var _this = this;

  _classCallCheck(this, Color);

  _classPrivateFieldInitSpec(this, _red, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _green, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _blue, {
    writable: true,
    value: void 0
  });

  _defineProperty(this, "generate", function () {
    console.log("".concat(_classPrivateFieldGet(_this, _red), " ").concat(_classPrivateFieldGet(_this, _green), " ").concat(_classPrivateFieldGet(_this, _blue)));
  });

  _classPrivateFieldSet(this, _red, _classStaticPrivateFieldSpecGet(Color, Color, _random).call(Color));

  _classPrivateFieldSet(this, _blue, _classStaticPrivateFieldSpecGet(Color, Color, _random).call(Color));

  _classPrivateFieldSet(this, _green, _classStaticPrivateFieldSpecGet(Color, Color, _random).call(Color));
});

var _random = {
  writable: true,
  value: function value() {
    return Math.floor(Math.random() * 255);
  }
};
var color = new Color();
color.generate();
