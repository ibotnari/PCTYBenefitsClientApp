(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
    /***/
    "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js ***!
      \********************************************************************************************/

    /*! exports provided: JSONValidator, LocalDatabase, LocalStorage, SERIALIZATION_ERROR, SerializationError, StorageMap, StorageModule, VALIDATION_ERROR, ValidationError, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf */

    /***/
    function node_modulesNgxPwaLocalStorage__ivy_ngcc__Fesm2015NgxPwaLocalStorageJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JSONValidator", function () {
        return JSONValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalDatabase", function () {
        return LocalDatabase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorage", function () {
        return LocalStorage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SERIALIZATION_ERROR", function () {
        return SERIALIZATION_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SerializationError", function () {
        return SerializationError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageMap", function () {
        return StorageMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageModule", function () {
        return StorageModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VALIDATION_ERROR", function () {
        return VALIDATION_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidationError", function () {
        return ValidationError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return localDatabaseFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return LS_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return IDB_DB_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return IDB_DB_VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return IDB_STORE_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return IDB_NO_WRAP;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var JSONValidator = /*#__PURE__*/function () {
        function JSONValidator() {
          _classCallCheck(this, JSONValidator);
        }

        _createClass(JSONValidator, [{
          key: "validate",

          /**
           * Validate a JSON data against a Jsubset of the JSON Schema standard.
           * Types are enforced to validate everything: each schema must
           * @param data JSON data to validate
           * @param schema Subset of JSON Schema. Must have a `type`.
           * @returns If data is valid: `true`, if it is invalid: `false`
           * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/VALIDATION.md}
           */
          value: function validate(data, schema) {
            switch (schema.type) {
              case 'string':
                return this.validateString(data, schema);

              case 'number':
              case 'integer':
                return this.validateNumber(data, schema);

              case 'boolean':
                return this.validateBoolean(data, schema);

              case 'array':
                return this.validateArray(data, schema);

              case 'object':
                return this.validateObject(data, schema);
            }
          }
          /**
           * Validate a string
           * @param data Data to validate
           * @param schema Schema describing the string
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateString",
          value: function validateString(data, schema) {
            if (typeof data !== 'string') {
              return false;
            }

            if (!this.validateConst(data, schema)) {
              return false;
            }

            if (!this.validateEnum(data, schema)) {
              return false;
            }

            if (schema.maxLength !== undefined && data.length > schema.maxLength) {
              return false;
            }

            if (schema.minLength !== undefined && data.length < schema.minLength) {
              return false;
            }

            if (schema.pattern) {
              var regularExpression = null;

              try {
                regularExpression = new RegExp(schema.pattern);
              } catch (_a) {}

              if (regularExpression && !regularExpression.test(data)) {
                return false;
              }
            }

            return true;
          }
          /**
           * Validate a number or an integer
           * @param data Data to validate
           * @param schema Schema describing the number or integer
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateNumber",
          value: function validateNumber(data, schema) {
            if (typeof data !== 'number') {
              return false;
            }

            if (schema.type === 'integer' && !Number.isInteger(data)) {
              return false;
            }

            if (!this.validateConst(data, schema)) {
              return false;
            }

            if (!this.validateEnum(data, schema)) {
              return false;
            }
            /* Test is done this way to not divide by 0 */


            if (schema.multipleOf && !Number.isInteger(data / schema.multipleOf)) {
              return false;
            }

            if (schema.maximum !== undefined && data > schema.maximum) {
              return false;
            }

            if (schema.exclusiveMaximum !== undefined && data >= schema.exclusiveMaximum) {
              return false;
            }

            if (schema.minimum !== undefined && data < schema.minimum) {
              return false;
            }

            if (schema.exclusiveMinimum !== undefined && data <= schema.exclusiveMinimum) {
              return false;
            }

            return true;
          }
          /**
           * Validate a boolean
           * @param data Data to validate
           * @param schema Schema describing the boolean
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateBoolean",
          value: function validateBoolean(data, schema) {
            if (typeof data !== 'boolean') {
              return false;
            }

            if (!this.validateConst(data, schema)) {
              return false;
            }

            return true;
          }
          /**
           * Validate an array
           * @param data Data to validate
           * @param schema Schema describing the array
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateArray",
          value: function validateArray(data, schema) {
            if (!Array.isArray(data)) {
              return false;
            }

            if (schema.maxItems !== undefined && data.length > schema.maxItems) {
              return false;
            }

            if (schema.minItems !== undefined && data.length < schema.minItems) {
              return false;
            }

            if (schema.uniqueItems) {
              /* Create a set to eliminate values with multiple occurences */
              var dataSet = new Set(data);

              if (data.length !== dataSet.size) {
                return false;
              }
            }
            /* Specific test for tuples */


            if (Array.isArray(schema.items)) {
              return this.validateTuple(data, schema.items);
            }
            /* Validate all the values in array */


            var _iterator = _createForOfIteratorHelper(data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;

                if (!this.validate(value, schema.items)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return true;
          }
          /**
           * Validate a tuple (array with fixed length and multiple types)
           * @param data Data to validate
           * @param schemas Schemas describing the tuple
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateTuple",
          value: function validateTuple(data, schemas) {
            /* Tuples have a fixed length */
            if (data.length !== schemas.length) {
              return false;
            }

            for (var i = 0; i < schemas.length; i += 1) {
              if (!this.validate(data[i], schemas[i])) {
                return false;
              }
            }

            return true;
          }
          /**
           * Validate an object
           * @param data Data to validate
           * @param schema JSON schema describing the object
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateObject",
          value: function validateObject(data, schema) {
            /* Check the type and if not `null` as `null` also have the type `object` in old browsers */
            if (typeof data !== 'object' || data === null) {
              return false;
            }
            /* Check if the object doesn't have more properties than expected
             * Equivalent of `additionalProperties: false`
             */


            if (Object.keys(schema.properties).length < Object.keys(data).length) {
              return false;
            }
            /* Validate required properties */


            if (schema.required) {
              var _iterator2 = _createForOfIteratorHelper(schema.required),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var requiredProp = _step2.value;

                  if (!data.hasOwnProperty(requiredProp)) {
                    return false;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            /* Recursively validate all properties */


            for (var property in schema.properties) {
              /* Filter to keep only real properties (no internal JS stuff) and check if the data has the property too */
              if (schema.properties.hasOwnProperty(property) && data.hasOwnProperty(property)) {
                if (!this.validate(data[property], schema.properties[property])) {
                  return false;
                }
              }
            }

            return true;
          }
          /**
           * Validate a constant
           * @param data Data ta validate
           * @param schema JSON schema describing the constant
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateConst",
          value: function validateConst(data, schema) {
            if (!schema["const"]) {
              return true;
            }

            return data === schema["const"];
          }
          /**
           * Validate an enum
           * @param data Data ta validate
           * @param schema JSON schema describing the enum
           * @returns If data is valid: `true`, if it is invalid: `false`
           */

        }, {
          key: "validateEnum",
          value: function validateEnum(data, schema) {
            if (!schema["enum"]) {
              return true;
            }
            /* Cast as the data can be of multiple types, and so TypeScript is lost */


            return schema["enum"].includes(data);
          }
        }]);

        return JSONValidator;
      }();

      JSONValidator.ɵfac = function JSONValidator_Factory(t) {
        return new (t || JSONValidator)();
      };

      JSONValidator.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function JSONValidator_Factory() {
          return new JSONValidator();
        },
        token: JSONValidator,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JSONValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * Token to provide a prefix to `localStorage` keys.
       */


      var LS_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('localStoragePrefix', {
        providedIn: 'root',
        factory: function factory() {
          return '';
        }
      });
      /**
       * Default name used for `indexedDB` database.
       */

      var DEFAULT_IDB_DB_NAME = 'ngStorage';
      /**
       * Token to provide `indexedDB` database name.
       */

      var IDB_DB_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('localStorageIDBDBName', {
        providedIn: 'root',
        factory: function factory() {
          return DEFAULT_IDB_DB_NAME;
        }
      });
      /**
       * Default version used for `indexedDB` database.
       */

      var DEFAULT_IDB_DB_VERSION = 1;
      /**
       * Token to provide `indexedDB` database version.
       * Must be an unsigned **integer**.
       */

      var IDB_DB_VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('localStorageIDBDBVersion', {
        providedIn: 'root',
        factory: function factory() {
          return DEFAULT_IDB_DB_VERSION;
        }
      });
      /**
       * Default name used for `indexedDB` object store.
       */

      var DEFAULT_IDB_STORE_NAME = 'localStorage';
      /**
       * Token to provide `indexedDB` store name.
       * For backward compatibility, the default can't be set now, `IndexedDBDatabase` will do it at runtime.
       */

      var IDB_STORE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('localStorageIDBStoreName', {
        providedIn: 'root',
        factory: function factory() {
          return DEFAULT_IDB_STORE_NAME;
        }
      });
      /**
       * Default value for interoperability with native `indexedDB` and other storage libs,
       * by changing how values are stored in `indexedDB` database.
       */

      var DEFAULT_IDB_NO_WRAP = true;
      /**
       * Token to allow interoperability with native `indexedDB` and other storage libs,
       * by changing how values are stored in `indexedDB` database.
       * Defaults to `true`. Change to `false` for backward compatiblity in existing applications.
       * **DO NOT CHANGE THIS BEHAVIOR ONCE IN PRODUCTION**, as it would break with existing data.
       */

      var IDB_NO_WRAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('localStorageIDBWrap', {
        providedIn: 'root',
        factory: function factory() {
          return DEFAULT_IDB_NO_WRAP;
        }
      });
      /**
       * Exception message when `indexedDB` is not working
       */

      var IDB_BROKEN_ERROR = 'indexedDB is not working';
      /**
       * Exception raised when `indexedDB` is not working
       */

      var IDBBrokenError = /*#__PURE__*/function (_Error) {
        _inherits(IDBBrokenError, _Error);

        var _super = _createSuper(IDBBrokenError);

        function IDBBrokenError() {
          var _this;

          _classCallCheck(this, IDBBrokenError);

          _this = _super.apply(this, arguments);
          _this.message = IDB_BROKEN_ERROR;
          return _this;
        }

        return IDBBrokenError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      /**
       * Exception message when a value can't be serialized for `localStorage`
       */


      var SERIALIZATION_ERROR = "The storage is currently localStorage,\nwhere data must be serialized, and the provided data can't be serialized.";
      /**
       * Exception raised when a value can't be serialized for `localStorage`
       */

      var SerializationError = /*#__PURE__*/function (_Error2) {
        _inherits(SerializationError, _Error2);

        var _super2 = _createSuper(SerializationError);

        function SerializationError() {
          var _this2;

          _classCallCheck(this, SerializationError);

          _this2 = _super2.apply(this, arguments);
          _this2.message = SERIALIZATION_ERROR;
          return _this2;
        }

        return SerializationError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var IndexedDBDatabase = /*#__PURE__*/function () {
        /**
         * Constructor params are provided by Angular (but can also be passed manually in tests)
         * @param dbName `indexedDB` database name
         * @param storeName `indexedDB` store name
         * @param dbVersion `indexedDB` database version
         * @param noWrap Flag to not wrap `indexedDB` values for interoperability or to wrap for backward compatibility
         */
        function IndexedDBDatabase() {
          var dbName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_IDB_DB_NAME;
          var storeName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_IDB_STORE_NAME;
          var dbVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_IDB_DB_VERSION;
          var noWrap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_IDB_NO_WRAP;

          _classCallCheck(this, IndexedDBDatabase);

          /**
           * `indexedDB` database connection, wrapped in a RxJS `ReplaySubject` to be able to access the connection
           * even after the connection success event happened
           */
          this.database = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          /**
           * Index used when wrapping value. *For backward compatibility only.*
           */

          this.wrapIndex = 'value';
          this.dbName = dbName;
          this.storeName = storeName;
          this.dbVersion = dbVersion;
          this.noWrap = noWrap;
          /* Connect to `indexedDB`, with prefix if provided by the user */

          this.connect();
        }
        /**
         * Information about `indexedDB` connection. *Only useful for interoperability.*
         * @returns `indexedDB` database name, store name and database version
         */


        _createClass(IndexedDBDatabase, [{
          key: "get",

          /**
           * Gets an item value in our `indexedDB` store
           * @param key The item's key
           * @returns The item's value if the key exists, `undefined` otherwise, wrapped in an RxJS `Observable`
           */
          value: function get(key) {
            var _this3 = this;

            /* Open a transaction in read-only mode */
            return this.transaction('readonly').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transactionData) {
              var store = transactionData.store,
                  events = transactionData.events;
              /* Request the value with the key provided by the user */

              var request = store.get(key);
              /* Listen events and return the result */

              return events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                if (request.result !== undefined && request.result !== null) {
                  /* Prior to v8, the value was wrapped in an `{ value: ...}` object */
                  if (!_this3.noWrap && typeof request.result === 'object' && _this3.wrapIndex in request.result && request.result[_this3.wrapIndex] !== undefined && request.result[_this3.wrapIndex] !== null) {
                    return request.result[_this3.wrapIndex];
                  } else {
                    /* Cast to the wanted type */
                    return request.result;
                  }
                }
                /* Return `undefined` if the value is empty */


                return undefined;
              }));
            }),
            /* The observable will complete after the first value */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
          }
          /**
           * Sets an item in our `indexedDB` store
           * @param key The item's key
           * @param data The item's value
           * @returns An RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "set",
          value: function set(key, data) {
            var _this4 = this;

            /* Storing `undefined` in `indexedDb` can cause issues in some browsers so removing item instead */
            if (data === undefined) {
              return this["delete"](key);
            }
            /* Open a transaction in write mode */


            return this.transaction('readwrite').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transactionData) {
              var store = transactionData.store,
                  events = transactionData.events;
              /* Prior to v8, data was wrapped in a `{ value: ... }` object */

              var dataToStore = _this4.noWrap ? data : _defineProperty({}, _this4.wrapIndex, data);
              /* Add if the item is not existing yet, or update otherwise */

              store.put(dataToStore, key);
              /* Listen to events and return `undefined` as no value is expected */

              return events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(undefined));
            }),
            /* The observable will complete after the first value */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
          }
          /**
           * Deletes an item in our `indexedDB` store
           * @param key The item's key
           * @returns An RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "delete",
          value: function _delete(key) {
            /* Open a transaction in write mode */
            return this.transaction('readwrite').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transactionData) {
              var store = transactionData.store,
                  events = transactionData.events;
              /* Delete the item in store */

              store["delete"](key);
              /* Listen to events and return `undefined` as no data is expected here */

              return events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(undefined));
            }),
            /* The observable will complete after the first value */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
          }
          /**
           * Deletes all items from our `indexedDB` objet store
           * @returns An RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "clear",
          value: function clear() {
            /* Open a transaction in write mode */
            return this.transaction('readwrite').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transactionData) {
              var store = transactionData.store,
                  events = transactionData.events;
              /* Delete all items in object store */

              store.clear();
              /* Listen to events and return `undefined` as no data is expected here */

              return events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(undefined));
            }),
            /* The observable will complete */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
          }
          /**
           * Get all the keys in our `indexedDB` store
           * @returns An RxJS `Observable` iterating on each key
           */

        }, {
          key: "keys",
          value: function keys() {
            var _this5 = this;

            /* Open a transaction in read-only mode */
            return this.transaction('readonly').pipe(
            /* `first()` is used as the final operator in other methods to complete the `Observable`
             * (as it all starts from a `ReplaySubject` which never ends),
             * but as this method is iterating over multiple values, `first()` **must** be used here */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transactionData) {
              var store = transactionData.store;
              /* Open a cursor on the store
               * `.openKeyCursor()` is better for performance, but only available in indexedDB v2 (missing in IE)
               * Avoid issues like https://github.com/cyrilletuzi/angular-async-local-storage/issues/69 */

              var request = 'openKeyCursor' in store ? store.openKeyCursor() : store.openCursor();
              /* Listen to success event */

              var success$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(request, 'success').pipe(
              /* Stop the `Observable` when the cursor is `null` */
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () {
                return request.result !== null;
              }),
              /* This lib only allows string keys, but user could have added other types of keys from outside
               * It's OK to cast as the cursor as been tested in the previous operator */
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                return request.result.key.toString();
              }),
              /* Iterate on the cursor */
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                request.result["continue"]();
              }));
              /* Listen to error event and if so, throw an error */

              var error$ = _this5.listenError(request);
              /* Choose the first event to occur */


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["race"])([success$, error$]);
            }));
          }
          /**
           * Check if a key exists in our `indexedDB` store
           * @returns An RxJS `Observable` telling if the key exists or not
           */

        }, {
          key: "has",
          value: function has(key) {
            /* Open a transaction in read-only mode */
            return this.transaction('readonly').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transactionData) {
              var store = transactionData.store,
                  events = transactionData.events;
              /* Check if the key exists in the store
               * `getKey()` is better but only available in `indexedDB` v2 (Chrome >= 58, missing in IE/ Legacy).
               * In older browsers, the value is checked instead, but it could lead to an exception
               * if `undefined` was stored outside of this lib (e.g. directly with the native `indexedDB` API).
               * Fixes https://github.com/cyrilletuzi/angular-async-local-storage/issues/69
               */

              var request = 'getKey' in store ? store.getKey(key) : store.get(key);
              /* Listen to events and return `true` or `false` */

              return events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                return request.result !== undefined ? true : false;
              }));
            }),
            /* The observable will complete */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
          }
          /**
           * Connects to `indexedDB` and creates the object store on first time
           */

        }, {
          key: "connect",
          value: function connect() {
            var _this6 = this;

            var request;
            /* Connect to `indexedDB`
             * Will fail in Safari cross-origin iframes
             * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/issues/42} */

            try {
              /* Do NOT explicit `window` here, as `indexedDB` could be used from a web worker too */
              request = indexedDB.open(this.dbName, this.dbVersion);
            } catch (_a) {
              this.database.error(new IDBBrokenError());
              return;
            }
            /* Create store on first connection */


            this.createStore(request);
            /* Listen to success and error events */

            var success$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(request, 'success');
            var error$ = this.listenError(request);
            /* Choose the first to occur */

            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["race"])([success$, error$])
            /* The observable will complete */
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe({
              next: function next() {
                /* Register the database connection in the `ReplaySubject` for further access */
                _this6.database.next(request.result);
              },
              error: function error() {
                /* Firefox private mode issue: fallback storage if IndexedDb connection is failing
                * @see {@link https://bugzilla.mozilla.org/show_bug.cgi?id=781982}
                * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/issues/26} */
                _this6.database.error(new IDBBrokenError());
              }
            });
          }
          /**
           * Create store on first use of `indexedDB`
           * @param request `indexedDB` database opening request
           */

        }, {
          key: "createStore",
          value: function createStore(request) {
            var _this7 = this;

            /* Listen to the event fired on first connection */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(request, 'upgradeneeded')
            /* The observable will complete */
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe({
              next: function next() {
                /* Check if the store already exists, to avoid error */
                if (!request.result.objectStoreNames.contains(_this7.storeName)) {
                  /* Create the object store */
                  request.result.createObjectStore(_this7.storeName);
                }
              }
            });
          }
          /**
           * Open an `indexedDB` transaction and get our store
           * @param mode `readonly` or `readwrite`
           * @returns An `indexedDB` transaction store and events, wrapped in an RxJS `Observable`
           */

        }, {
          key: "transaction",
          value: function transaction(mode) {
            var _this8 = this;

            /* From the `indexedDB` connection, open a transaction and get the store */
            return this.database.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (database) {
              var transaction;

              try {
                transaction = database.transaction([_this8.storeName], mode);
              } catch (error) {
                /* The store could have been deleted from outside */
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }
              /* Get the store from the transaction */


              var store = transaction.objectStore(_this8.storeName);
              /* Listen transaction `complete` and `error` events */

              var events = _this8.listenTransactionEvents(transaction);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                store: store,
                events: events
              });
            }));
          }
          /**
           * Listen errors on a transaction or request, and throw if trigerred
           * @param transactionOrRequest `indexedDb` transaction or request to listen
           * @returns An `Observable` listening to errors
           */

        }, {
          key: "listenError",
          value: function listenError(transactionOrRequest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(transactionOrRequest, 'error').pipe(
            /* Throw on error to be able to catch errors in RxJS way.
             * Here `event.target` must be used, as `transactionOrRequest.error` will be `null`
             * if we are on the request and the error is only triggered later by the transaction */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (event) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(event.target.error);
            }));
          }
          /**
           * Listen transaction `complete` and `error` events
           * @param transaction Transaction to listen
           * @returns An `Observable` listening to transaction `complete` and `error` events
           */

        }, {
          key: "listenTransactionEvents",
          value: function listenTransactionEvents(transaction) {
            /* Listen to the `complete` event */
            var complete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(transaction, 'complete');
            /* Listen to the `error` event */

            var error$ = this.listenError(transaction);
            /* Choose the first event to occur */

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["race"])([complete$, error$]);
          }
        }, {
          key: "backingStore",
          get: function get() {
            return {
              database: this.dbName,
              store: this.storeName,
              version: this.dbVersion
            };
          }
          /**
           * Number of items in our `indexedDB` database and object store
           */

        }, {
          key: "size",
          get: function get() {
            /* Open a transaction in read-only mode */
            return this.transaction('readonly').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transactionData) {
              var store = transactionData.store,
                  events = transactionData.events;
              /* Request to know the number of items */

              var request = store.count();
              /* Return the result */

              return events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                return request.result;
              }));
            }),
            /* The observable will complete after the first value */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
          }
        }]);

        return IndexedDBDatabase;
      }();

      IndexedDBDatabase.ɵfac = function IndexedDBDatabase_Factory(t) {
        return new (t || IndexedDBDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](IDB_DB_NAME), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](IDB_STORE_NAME), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](IDB_DB_VERSION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](IDB_NO_WRAP));
      };

      IndexedDBDatabase.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function IndexedDBDatabase_Factory() {
          return new IndexedDBDatabase(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_DB_NAME), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_STORE_NAME), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_DB_VERSION), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_NO_WRAP));
        },
        token: IndexedDBDatabase,
        providedIn: "root"
      });

      IndexedDBDatabase.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [IDB_DB_NAME]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [IDB_STORE_NAME]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [IDB_DB_VERSION]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [IDB_NO_WRAP]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexedDBDatabase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [IDB_DB_NAME]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [IDB_STORE_NAME]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [IDB_DB_VERSION]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [IDB_NO_WRAP]
            }]
          }];
        }, null);
      })();

      var LocalStorageDatabase = /*#__PURE__*/function () {
        /**
         * Constructor params are provided by Angular (but can also be passed manually in tests)
         * @param prefix Prefix option to avoid collision for multiple apps on the same subdomain or for interoperability
         */
        function LocalStorageDatabase() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          _classCallCheck(this, LocalStorageDatabase);

          /* Prefix if asked, or no prefix otherwise */
          this.prefix = prefix || '';
        }
        /**
         * Number of items in `localStorage`
         */


        _createClass(LocalStorageDatabase, [{
          key: "get",

          /**
           * Gets an item value in `localStorage`
           * @param key The item's key
           * @returns The item's value if the key exists, `undefined` otherwise, wrapped in a RxJS `Observable`
           */
          value: function get(key) {
            /* Get raw data */
            var unparsedData = localStorage.getItem(this.prefixKey(key));
            var parsedData;
            /* No need to parse if data is `null` or `undefined` */

            if (unparsedData !== undefined && unparsedData !== null) {
              /* Try to parse */
              try {
                parsedData = JSON.parse(unparsedData);
              } catch (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }
            }
            /* Wrap in a RxJS `Observable` to be consistent with other storages */


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(parsedData);
          }
          /**
           * Store an item in `localStorage`
           * @param key The item's key
           * @param data The item's value
           * @returns A RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "set",
          value: function set(key, data) {
            var serializedData = null;
            /* Check if data can be serialized */

            var dataPrototype = Object.getPrototypeOf(data);

            if (typeof data === 'object' && data !== null && !Array.isArray(data) && !(dataPrototype === Object.prototype || dataPrototype === null)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new SerializationError());
            }
            /* Try to stringify (can fail on circular references) */


            try {
              serializedData = JSON.stringify(data);
            } catch (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
            /* Can fail if storage quota is exceeded */


            try {
              localStorage.setItem(this.prefixKey(key), serializedData);
            } catch (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
            /* Wrap in a RxJS `Observable` to be consistent with other storages */


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
          }
          /**
           * Deletes an item in `localStorage`
           * @param key The item's key
           * @returns A RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "delete",
          value: function _delete(key) {
            localStorage.removeItem(this.prefixKey(key));
            /* Wrap in a RxJS `Observable` to be consistent with other storages */

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
          }
          /**
           * Deletes all items in `localStorage`
           * @returns A RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "clear",
          value: function clear() {
            localStorage.clear();
            /* Wrap in a RxJS `Observable` to be consistent with other storages */

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
          }
          /**
           * Get all keys in `localStorage`
           * Note the order of the keys may be inconsistent in Firefox
           * @returns A RxJS `Observable` iterating on keys
           */

        }, {
          key: "keys",
          value: function keys() {
            var _this9 = this;

            /* Create an `Observable` from keys */
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
              /* Iteretate over all the indexes */
              for (var index = 0; index < localStorage.length; index += 1) {
                /* Cast as we are sure in this case the key is not `null` */
                subscriber.next(_this9.getUnprefixedKey(index));
              }

              subscriber.complete();
            }).pipe(
            /* Required to work like other databases which are asynchronous */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["asyncScheduler"]));
          }
          /**
           * Check if a key exists in `localStorage`
           * @param key The item's key
           * @returns A RxJS `Observable` telling if the key exists or not
           */

        }, {
          key: "has",
          value: function has(key) {
            /* Itérate over all indexes in storage */
            for (var index = 0; index < localStorage.length; index += 1) {
              if (key === this.getUnprefixedKey(index)) {
                /* Wrap in a RxJS `Observable` to be consistent with other storages */
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
              }
            }
            /* Wrap in a RxJS `Observable` to be consistent with other storages */


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }
          /**
           * Get an unprefixed key
           * @param index Index of the key
           * @returns The unprefixed key name if exists, `null` otherwise
           */

        }, {
          key: "getUnprefixedKey",
          value: function getUnprefixedKey(index) {
            /* Get the key in storage: may have a prefix */
            var prefixedKey = localStorage.key(index);

            if (prefixedKey !== null) {
              /* If no prefix, the key is already good, otherwrite strip the prefix */
              return !this.prefix ? prefixedKey : prefixedKey.substr(this.prefix.length);
            }

            return null;
          }
          /**
           * Add the prefix to a key
           * @param key The key name
           * @returns The prefixed key name
           */

        }, {
          key: "prefixKey",
          value: function prefixKey(key) {
            return "".concat(this.prefix).concat(key);
          }
        }, {
          key: "size",
          get: function get() {
            /* Wrap in a RxJS `Observable` to be consistent with other storages */
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(localStorage.length);
          }
        }]);

        return LocalStorageDatabase;
      }();

      LocalStorageDatabase.ɵfac = function LocalStorageDatabase_Factory(t) {
        return new (t || LocalStorageDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LS_PREFIX));
      };

      LocalStorageDatabase.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LocalStorageDatabase_Factory() {
          return new LocalStorageDatabase(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LS_PREFIX));
        },
        token: LocalStorageDatabase,
        providedIn: "root"
      });

      LocalStorageDatabase.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LS_PREFIX]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageDatabase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LS_PREFIX]
            }]
          }];
        }, null);
      })();

      var MemoryDatabase = /*#__PURE__*/function () {
        function MemoryDatabase() {
          _classCallCheck(this, MemoryDatabase);

          /**
           * Memory storage
           */
          this.memoryStorage = new Map();
        }
        /**
         * Number of items in memory
         */


        _createClass(MemoryDatabase, [{
          key: "get",

          /**
           * Gets an item value in memory
           * @param key The item's key
           * @returns The item's value if the key exists, `undefined` otherwise, wrapped in a RxJS `Observable`
           */
          value: function get(key) {
            var rawData = this.memoryStorage.get(key);
            /* Wrap in a RxJS `Observable` to be consistent with other storages */

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(rawData);
          }
          /**
           * Sets an item in memory
           * @param key The item's key
           * @param data The item's value
           * @returns A RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "set",
          value: function set(key, data) {
            this.memoryStorage.set(key, data);
            /* Wrap in a RxJS `Observable` to be consistent with other storages */

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
          }
          /**
           * Deletes an item in memory
           * @param key The item's key
           * @returns A RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "delete",
          value: function _delete(key) {
            this.memoryStorage["delete"](key);
            /* Wrap in a RxJS `Observable` to be consistent with other storages */

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
          }
          /**
           * Deletes all items in memory
           * @returns A RxJS `Observable` to wait the end of the operation
           */

        }, {
          key: "clear",
          value: function clear() {
            this.memoryStorage.clear();
            /* Wrap in a RxJS `Observable` to be consistent with other storages */

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
          }
          /**
           * Get all keys in memory
           * @returns A RxJS `Observable` iterating on keys
           */

        }, {
          key: "keys",
          value: function keys() {
            /* Create an `Observable` from keys */
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.memoryStorage.keys());
          }
          /**
           * Check if a key exists in memory
           * @param key Key name
           * @returns a RxJS `Observable` telling if the key exists or not
           */

        }, {
          key: "has",
          value: function has(key) {
            /* Wrap in a RxJS `Observable` to be consistent with other storages */
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.memoryStorage.has(key));
          }
        }, {
          key: "size",
          get: function get() {
            /* Wrap in a RxJS `Observable` to be consistent with other storages */
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.memoryStorage.size);
          }
        }]);

        return MemoryDatabase;
      }();

      MemoryDatabase.ɵfac = function MemoryDatabase_Factory(t) {
        return new (t || MemoryDatabase)();
      };

      MemoryDatabase.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MemoryDatabase_Factory() {
          return new MemoryDatabase();
        },
        token: MemoryDatabase,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemoryDatabase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * Factory to create a storage according to browser support
       * @param platformId Context about the platform (`browser`, `server`...)
       * @param LSPrefix Prefix for `localStorage` keys to avoid collision for multiple apps on the same subdomain
       * @param IDBDBName `indexedDB` database name
       * @param IDBstoreName `indexedDB` storeName name
       * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/BROWSERS_SUPPORT.md}
       */


      function localDatabaseFactory(platformId, LSPrefix, IDBDBName, IDBStoreName, IDBDBVersion, IDBNoWrap) {
        /* When storage is fully disabled in browser (via the "Block all cookies" option),
         * just trying to check `indexedDB` or `localStorage` variables causes a security exception.
         * Prevents https://github.com/cyrilletuzi/angular-async-local-storage/issues/118
         */
        try {
          // Do not explicit `window` here, as the global object is not the same in web workers
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId) && indexedDB !== undefined && indexedDB !== null && 'open' in indexedDB) {
            /* Check:
            * - if we are in a browser context (issue: server-side rendering)
            * - if `indexedDB` exists (issue: IE9)
            * - it could exist but be `undefined` or `null` (issue: IE private mode)
            * - it could exists but not having a working API
            * Will be the case for:
            * - IE10+ and all other browsers in normal mode
            * - Chromium / Safari private mode, but in this case, data will be swiped when the user leaves the app */
            return new IndexedDBDatabase(IDBDBName, IDBStoreName, IDBDBVersion, IDBNoWrap);
          } else if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId) && localStorage !== undefined && localStorage !== null && 'getItem' in localStorage) {
            /* Check:
            * - if we are in a browser context (issue: server-side rendering)
            * - if `localStorage` exists (to be sure)
            * - it could exists but not having a working API
            * Will be the case for:
            * - IE9
            * - Safari cross-origin iframes, detected later in `IndexedDBDatabase.connect()`
            * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/issues/42}
            * - IE / Firefox private mode, but in this case, data will be swiped when the user leaves the app
            * For Firefox, can only be detected later in `IndexedDBDatabase.connect()`
            * @see {@link https://bugzilla.mozilla.org/show_bug.cgi?id=781982}
            */
            return new LocalStorageDatabase(LSPrefix);
          }
        } catch (_a) {}
        /* Will be the case for:
         * - In browsers if storage has been fully disabled (via the "Block all cookies" option)
         * - Server-side rendering
         * - All other non-browser context
         */


        return new MemoryDatabase();
      }

      var LocalDatabase = function LocalDatabase() {
        _classCallCheck(this, LocalDatabase);
      };

      LocalDatabase.ɵfac = function LocalDatabase_Factory(t) {
        return new (t || LocalDatabase)();
      };

      LocalDatabase.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LocalDatabase_Factory() {
          return localDatabaseFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LS_PREFIX), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_DB_NAME), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_STORE_NAME), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_DB_VERSION), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IDB_NO_WRAP));
        },
        token: LocalDatabase,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalDatabase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root',
            useFactory: localDatabaseFactory,
            deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], LS_PREFIX, IDB_DB_NAME, IDB_STORE_NAME, IDB_DB_VERSION, IDB_NO_WRAP]
          }]
        }], null, null);
      })();
      /**
       * Exception message when a value is not valid against the JSON schema
       */


      var VALIDATION_ERROR = "Data stored is not valid against the provided JSON schema.\nCheck your JSON schema, otherwise it means data has been corrupted.";
      /**
       * Exception raised when a value is not valid against the JSON schema
       */

      var ValidationError = /*#__PURE__*/function (_Error3) {
        _inherits(ValidationError, _Error3);

        var _super3 = _createSuper(ValidationError);

        function ValidationError() {
          var _this10;

          _classCallCheck(this, ValidationError);

          _this10 = _super3.apply(this, arguments);
          _this10.message = VALIDATION_ERROR;
          return _this10;
        }

        return ValidationError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var StorageMap = /*#__PURE__*/function () {
        /**
         * Constructor params are provided by Angular (but can also be passed manually in tests)
         * @param database Storage to use
         * @param jsonValidator Validator service
         * @param LSPrefix Prefix for `localStorage` keys to avoid collision for multiple apps on the same subdomain or for interoperability
         */
        function StorageMap(database) {
          var jsonValidator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new JSONValidator();
          var LSPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

          _classCallCheck(this, StorageMap);

          this.database = database;
          this.jsonValidator = jsonValidator;
          this.LSPrefix = LSPrefix;
          this.notifiers = new Map();
        }
        /**
         * **Number of items** in storage, wrapped in an `Observable`.
         *
         * @example
         * this.storageMap.size.subscribe((size) => {
         *   console.log(size);
         * });
         */


        _createClass(StorageMap, [{
          key: "get",
          value: function get(key, schema) {
            var _this11 = this;

            /* Get the data in storage */
            return this.database.get(key).pipe(
            /* Check if `indexedDb` is broken */
            this.catchIDBBroken(function () {
              return _this11.database.get(key);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (data) {
              /* No need to validate if the data is empty */
              if (data === undefined || data === null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
              } else if (schema) {
                /* Validate data against a JSON schema if provided */
                if (!_this11.jsonValidator.validate(data, schema)) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new ValidationError());
                }
                /* Data have been checked, so it's OK to cast */


                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data);
              }
              /* Cast to unknown as the data wasn't checked */


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data);
            }));
          }
          /**
           * Set an item in storage.
           * Note that setting `null` or `undefined` will remove the item to avoid some browsers issues.
           * @param key The item's key
           * @param data The item's value
           * @param schema Optional JSON schema to validate the data
           * @returns A RxJS `Observable` to wait the end of the operation
           *
           * @example
           * this.storageMap.set('key', 'value').subscribe(() => {});
           */

        }, {
          key: "set",
          value: function set(key, data, schema) {
            var _this12 = this;

            /* Storing `undefined` or `null` is useless and can cause issues in `indexedDb` in some browsers,
             * so removing item instead for all storages to have a consistent API */
            if (data === undefined || data === null) {
              return this["delete"](key);
            }
            /* Validate data against a JSON schema if provided */


            if (schema && !this.jsonValidator.validate(data, schema)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new ValidationError());
            }

            return this.database.set(key, data).pipe(
            /* Catch if `indexedDb` is broken */
            this.catchIDBBroken(function () {
              return _this12.database.set(key, data);
            }),
            /* Notify watchers (must be last because it should only happen if the operation succeeds) */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this12.notify(key, data);
            }));
          }
          /**
           * Delete an item in storage
           * @param key The item's key
           * @returns A RxJS `Observable` to wait the end of the operation
           *
           * @example
           * this.storageMap.delete('key').subscribe(() => {});
           */

        }, {
          key: "delete",
          value: function _delete(key) {
            var _this13 = this;

            return this.database["delete"](key).pipe(
            /* Catch if `indexedDb` is broken */
            this.catchIDBBroken(function () {
              return _this13.database["delete"](key);
            }),
            /* Notify watchers (must be last because it should only happen if the operation succeeds) */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this13.notify(key, undefined);
            }));
          }
          /**
           * Delete all items in storage
           * @returns A RxJS `Observable` to wait the end of the operation
           *
           * @example
           * this.storageMap.clear().subscribe(() => {});
           */

        }, {
          key: "clear",
          value: function clear() {
            var _this14 = this;

            return this.database.clear().pipe(
            /* Catch if `indexedDb` is broken */
            this.catchIDBBroken(function () {
              return _this14.database.clear();
            }),
            /* Notify watchers (must be last because it should only happen if the operation succeeds) */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              var _iterator3 = _createForOfIteratorHelper(_this14.notifiers.keys()),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var key = _step3.value;

                  _this14.notify(key, undefined);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }));
          }
          /**
           * Get all keys stored in storage. Note **this is an *iterating* `Observable`**:
           * * if there is no key, the `next` callback will not be invoked,
           * * if you need to wait the whole operation to end, be sure to act in the `complete` callback,
           * as this `Observable` can emit several values and so will invoke the `next` callback several times.
           * @returns A list of the keys wrapped in a RxJS `Observable`
           *
           * @example
           * this.storageMap.keys().subscribe({
           *   next: (key) => { console.log(key); },
           *   complete: () => { console.log('Done'); },
           * });
           */

        }, {
          key: "keys",
          value: function keys() {
            var _this15 = this;

            return this.database.keys()
            /* Catch if `indexedDb` is broken */
            .pipe(this.catchIDBBroken(function () {
              return _this15.database.keys();
            }));
          }
          /**
           * Tells if a key exists in storage
           * @returns A RxJS `Observable` telling if the key exists
           *
           * @example
           * this.storageMap.has('key').subscribe((hasKey) => {
           *   if (hasKey) {}
           * });
           */

        }, {
          key: "has",
          value: function has(key) {
            var _this16 = this;

            return this.database.has(key)
            /* Catch if `indexedDb` is broken */
            .pipe(this.catchIDBBroken(function () {
              return _this16.database.has(key);
            }));
          }
        }, {
          key: "watch",
          value: function watch(key, schema) {
            /* Check if there is already a notifier and cast according to schema */
            var notifier = this.notifiers.get(key);

            if (!notifier) {
              /* Create a notifier and cast according to schema */
              notifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
              /* Memorize the notifier */

              this.notifiers.set(key, notifier);
              /* Get the current item value */

              this.get(key, schema).subscribe({
                next: function next(result) {
                  return notifier.next(result);
                },
                error: function error(_error) {
                  return notifier.error(_error);
                }
              });
            }
            /* Only the public API of the `Observable` should be returned */


            return notifier.asObservable();
          }
          /**
           * Notify when a value changes
           * @param key The item's key
           * @param data The new value
           */

        }, {
          key: "notify",
          value: function notify(key, value) {
            var notifier = this.notifiers.get(key);

            if (notifier) {
              notifier.next(value);
            }
          }
          /**
           * RxJS operator to catch if `indexedDB` is broken
           * @param operationCallback Callback with the operation to redo
           */

        }, {
          key: "catchIDBBroken",
          value: function catchIDBBroken(operationCallback) {
            var _this17 = this;

            return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              /* Check if `indexedDB` is broken based on error message (the specific error class seems to be lost in the process) */
              if (error !== undefined && error !== null && error.message === IDB_BROKEN_ERROR) {
                /* When storage is fully disabled in browser (via the "Block all cookies" option),
                 * just trying to check `localStorage` variable causes a security exception.
                 * Prevents https://github.com/cyrilletuzi/angular-async-local-storage/issues/118
                 */
                try {
                  if ('getItem' in localStorage) {
                    /* Fallback to `localStorage` if available */
                    _this17.database = new LocalStorageDatabase(_this17.LSPrefix);
                  } else {
                    /* Fallback to memory storage otherwise */
                    _this17.database = new MemoryDatabase();
                  }
                } catch (_a) {
                  /* Fallback to memory storage otherwise */
                  _this17.database = new MemoryDatabase();
                }
                /* Redo the operation */


                return operationCallback();
              } else {
                /* Otherwise, rethrow the error */
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }
            });
          }
        }, {
          key: "size",
          get: function get() {
            var _this18 = this;

            return this.database.size
            /* Catch if `indexedDb` is broken */
            .pipe(this.catchIDBBroken(function () {
              return _this18.database.size;
            }));
          }
          /**
           * Tells you which storage engine is used. *Only useful for interoperability.*
           * Note that due to some browsers issues in some special contexts
           * (Firefox private mode and Safari cross-origin iframes),
           * **this information may be wrong at initialization,**
           * as the storage could fallback from `indexedDB` to `localStorage`
           * only after a first read or write operation.
           * @returns Storage engine used
           *
           * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/INTEROPERABILITY.md}
           *
           * @example
           * if (this.storageMap.backingEngine === 'indexedDB') {}
           */

        }, {
          key: "backingEngine",
          get: function get() {
            if (this.database instanceof IndexedDBDatabase) {
              return 'indexedDB';
            } else if (this.database instanceof LocalStorageDatabase) {
              return 'localStorage';
            } else if (this.database instanceof MemoryDatabase) {
              return 'memory';
            } else {
              return 'unknown';
            }
          }
          /**
           * Info about `indexedDB` database. *Only useful for interoperability.*
           * @returns `indexedDB` database name, store name and database version.
           * **Values will be empty if the storage is not `indexedDB`,**
           * **so it should be used after an engine check**.
           *
           * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/INTEROPERABILITY.md}
           *
           * @example
           * if (this.storageMap.backingEngine === 'indexedDB') {
           *   const { database, store, version } = this.storageMap.backingStore;
           * }
           */

        }, {
          key: "backingStore",
          get: function get() {
            return this.database instanceof IndexedDBDatabase ? this.database.backingStore : {
              database: '',
              store: '',
              version: 0
            };
          }
          /**
           * Info about `localStorage` fallback storage. *Only useful for interoperability.*
           * @returns `localStorage` prefix.
           * **Values will be empty if the storage is not `localStorage`,**
           * **so it should be used after an engine check**.
           *
           * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/INTEROPERABILITY.md}
           *
           * @example
           * if (this.storageMap.backingEngine === 'localStorage') {
           *   const { prefix } = this.storageMap.fallbackBackingStore;
           * }
           */

        }, {
          key: "fallbackBackingStore",
          get: function get() {
            return this.database instanceof LocalStorageDatabase ? {
              prefix: this.database.prefix
            } : {
              prefix: ''
            };
          }
        }]);

        return StorageMap;
      }();

      StorageMap.ɵfac = function StorageMap_Factory(t) {
        return new (t || StorageMap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LocalDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JSONValidator), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LS_PREFIX));
      };

      StorageMap.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function StorageMap_Factory() {
          return new StorageMap(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LocalDatabase), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(JSONValidator), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LS_PREFIX));
        },
        token: StorageMap,
        providedIn: "root"
      });

      StorageMap.ctorParameters = function () {
        return [{
          type: LocalDatabase
        }, {
          type: JSONValidator
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LS_PREFIX]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageMap, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: LocalDatabase
          }, {
            type: JSONValidator
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LS_PREFIX]
            }]
          }];
        }, null);
      })();

      var LocalStorage = /*#__PURE__*/function () {
        /* Use the `StorageMap` service to avoid code duplication */
        function LocalStorage(storageMap) {
          _classCallCheck(this, LocalStorage);

          this.storageMap = storageMap;
        }
        /**
         * Number of items in storage wrapped in an `Observable`
         *
         * @example
         * this.localStorage.length.subscribe((length) => {
         *   console.log(length);
         * });
         */


        _createClass(LocalStorage, [{
          key: "getItem",
          value: function getItem(key, schema) {
            if (schema) {
              /* Backward compatibility with version <= 7 */
              var schemaFinal = 'schema' in schema ? schema.schema : schema;
              return this.storageMap.get(key, schemaFinal).pipe(
              /* Transform `undefined` into `null` to align with `localStorage` API */
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return value !== undefined ? value : null;
              }));
            } else {
              return this.storageMap.get(key).pipe(
              /* Transform `undefined` into `null` to align with `localStorage` API */
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return value !== undefined ? value : null;
              }));
            }
          }
          /**
           * Set an item in storage.
           * Note that setting `null` or `undefined` will remove the item to avoid some browsers issues.
           * @param key The item's key
           * @param data The item's value
           * @param schema Optional JSON schema to validate the data
           * @returns A RxJS `Observable` to wait the end of the operation
           *
           * @example
           * this.localStorage.set('key', 'value').subscribe(() => {});
           */

        }, {
          key: "setItem",
          value: function setItem(key, data, schema) {
            return this.storageMap.set(key, data, schema).pipe(
            /* Transform `undefined` into `true` for backward compatibility with v7 */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));
          }
          /**
           * Delete an item in storage
           * @param key The item's key
           * @returns A RxJS `Observable` to wait the end of the operation
           *
           * @example
           * this.localStorage.delete('key').subscribe(() => {});
           */

        }, {
          key: "removeItem",
          value: function removeItem(key) {
            return this.storageMap["delete"](key).pipe(
            /* Transform `undefined` into `true` for backward compatibility with v7 */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));
          }
          /**
           * Delete all items in storage
           * @returns A RxJS `Observable` to wait the end of the operation
           *
           * @example
           * this.localStorage.clear().subscribe(() => {});
           */

        }, {
          key: "clear",
          value: function clear() {
            return this.storageMap.clear().pipe(
            /* Transform `undefined` into `true` for backward compatibility with v7 */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));
          }
        }, {
          key: "length",
          get: function get() {
            return this.storageMap.size;
          }
        }]);

        return LocalStorage;
      }();

      LocalStorage.ɵfac = function LocalStorage_Factory(t) {
        return new (t || LocalStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StorageMap));
      };

      LocalStorage.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LocalStorage_Factory() {
          return new LocalStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StorageMap));
        },
        token: LocalStorage,
        providedIn: "root"
      });

      LocalStorage.ctorParameters = function () {
        return [{
          type: StorageMap
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: StorageMap
          }];
        }, null);
      })();
      /**
       * This module does not contain anything, it's only useful to provide options via `.forRoot()`.
       */


      var StorageModule = /*#__PURE__*/function () {
        function StorageModule() {
          _classCallCheck(this, StorageModule);
        }

        _createClass(StorageModule, null, [{
          key: "forRoot",

          /**
           * Only useful to provide options, otherwise it does nothing.
           * **Must be used at initialization, ie. in `AppModule`, and must not be loaded again in another module.**
           *
           * @example
           * NgModule({
           *   imports: [StorageModule.forRoot({
           *     LSPrefix: 'custom_',
           *   })]
           * })
           * export class AppModule
           */
          value: function forRoot(config) {
            return {
              ngModule: StorageModule,
              providers: [config.LSPrefix ? {
                provide: LS_PREFIX,
                useValue: config.LSPrefix
              } : [], config.IDBDBName ? {
                provide: IDB_DB_NAME,
                useValue: config.IDBDBName
              } : [], config.IDBStoreName ? {
                provide: IDB_STORE_NAME,
                useValue: config.IDBStoreName
              } : [], config.IDBDBVersion ? {
                provide: IDB_DB_VERSION,
                useValue: config.IDBDBVersion
              } : [], config.IDBNoWrap === false ? {
                provide: IDB_NO_WRAP,
                useValue: config.IDBNoWrap
              } : []]
            };
          }
        }]);

        return StorageModule;
      }();

      StorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: StorageModule
      });
      StorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function StorageModule_Factory(t) {
          return new (t || StorageModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
        }], null, null);
      })();
      /*
       * Public API Surface of local-storage
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-pwa-local-storage.js.map

      /***/

    },

    /***/
    "./src/app/pages/dashboard/dashboard.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["ngx-dashboard"]],
        decls: 14,
        vars: 0,
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dashboard Components ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ........................ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Card 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ........................ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/miscellaneous/not-found/not-found.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/miscellaneous/not-found/not-found.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function srcAppPagesMiscellaneousNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent(menuService) {
          _classCallCheck(this, NotFoundComponent);

          this.menuService = menuService;
        }

        _createClass(NotFoundComponent, [{
          key: "goToHome",
          value: function goToHome() {
            this.menuService.navigateHome();
          }
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbMenuService"]));
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["ngx-not-found"]],
        decls: 11,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-12"], [1, "flex-centered", "col-xl-4", "col-lg-6", "col-md-8", "col-sm-12"], [1, "title"], [1, "sub-title"], ["nbButton", "", "matRipple", "", "fullWidth", "", "type", "button", 1, "home-button", 3, "click"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "404 Page Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "The page you were looking for doesn't exist");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_9_listener() {
              return ctx.goToHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Take me home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
        styles: [".flex-centered[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin-bottom: 3rem;\n}\n\n.home-button[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzY2VsbGFuZW91cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtBQUVmOztBQUNBO0VBQ0Usa0JBQWtCO0FBRXBCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFFckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taXNjZWxsYW5lb3VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jZW50ZXJlZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbm5iLWNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5ob21lLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngx-not-found',
            styleUrls: ['./not-found.component.scss'],
            templateUrl: './not-found.component.html'
          }]
        }], function () {
          return [{
            type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbMenuService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/pages-menu.ts":
    /*!*************************************!*\
      !*** ./src/app/pages/pages-menu.ts ***!
      \*************************************/

    /*! exports provided: PINNED_EMPLOYEES_MENU_ITEMS, MENU_ITEMS */

    /***/
    function srcAppPagesPagesMenuTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PINNED_EMPLOYEES_MENU_ITEMS", function () {
        return PINNED_EMPLOYEES_MENU_ITEMS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function () {
        return MENU_ITEMS;
      });

      var PINNED_EMPLOYEES_MENU_ITEMS = {
        title: 'PINNED',
        expanded: true
      };
      var MENU_ITEMS = [{
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/dashboard',
        home: true
      }, {
        title: 'ADMIN',
        group: true
      }, {
        title: 'Employees',
        icon: 'people-outline',
        link: '/pages/employees',
        home: true,
        children: null
      }, {
        title: 'Benefits',
        icon: 'award-outline',
        link: '/pages/benefits',
        home: true
      }, {
        title: 'Discounts',
        icon: 'gift-outline',
        link: '/pages/discounts',
        home: true
      }, PINNED_EMPLOYEES_MENU_ITEMS];
      /***/
    },

    /***/
    "./src/app/pages/pages-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/pages-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: PagesRoutingModule */

    /***/
    function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
        return PagesRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages.component */
      "./src/app/pages/pages.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/pages/dashboard/dashboard.component.ts");
      /* harmony import */


      var _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./miscellaneous/not-found/not-found.component */
      "./src/app/pages/miscellaneous/not-found/not-found.component.ts");

      var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | employees-employees-module */
            "employees-employees-module").then(__webpack_require__.bind(null,
            /*! ./employees/employees.module */
            "./src/app/pages/employees/employees.module.ts")).then(function (m) {
              return m.EmployeesModule;
            });
          }
        }, {
          path: 'dashboard',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
        }, {
          path: 'employees',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | employees-employees-module */
            "employees-employees-module").then(__webpack_require__.bind(null,
            /*! ./employees/employees.module */
            "./src/app/pages/employees/employees.module.ts")).then(function (m) {
              return m.EmployeesModule;
            });
          }
        }, {
          path: '**',
          component: _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
        }]
      }];

      var PagesRoutingModule = function PagesRoutingModule() {
        _classCallCheck(this, PagesRoutingModule);
      };

      PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PagesRoutingModule
      });
      PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function PagesRoutingModule_Factory(t) {
          return new (t || PagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/pages.component.ts":
    /*!******************************************!*\
      !*** ./src/app/pages/pages.component.ts ***!
      \******************************************/

    /*! exports provided: PagesComponent */

    /***/
    function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
        return PagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_employee_pinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/employee-pinner.service */
      "./src/app/pages/services/employee-pinner.service.ts");
      /* harmony import */


      var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages-menu */
      "./src/app/pages/pages-menu.ts");
      /* harmony import */


      var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../@theme/layouts/one-column/one-column.layout */
      "./src/app/@theme/layouts/one-column/one-column.layout.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PagesComponent = /*#__PURE__*/function () {
        function PagesComponent(employeePinService) {
          var _this19 = this;

          _classCallCheck(this, PagesComponent);

          this.employeePinService = employeePinService;
          this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"];
          this.employeePinService.employeePinAddEvent.subscribe({
            next: function next(_) {
              _this19.loadEmployeeMenu();
            }
          });
          this.employeePinService.employeePinRemoveEvent.subscribe({
            next: function next(_) {
              _this19.loadEmployeeMenu();
            }
          });
        }

        _createClass(PagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadEmployeeMenu();
          }
        }, {
          key: "loadEmployeeMenu",
          value: function loadEmployeeMenu() {
            var _this20 = this;

            var menuItems = this.employeePinService.getPinnedEmployees().map(function (item) {
              return _this20.createMenuItem(item);
            });

            if (menuItems.length === 0) {
              menuItems = null;
            }

            _pages_menu__WEBPACK_IMPORTED_MODULE_2__["PINNED_EMPLOYEES_MENU_ITEMS"].hidden = menuItems == null;
            _pages_menu__WEBPACK_IMPORTED_MODULE_2__["PINNED_EMPLOYEES_MENU_ITEMS"].children = menuItems;
            this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"];
          }
        }, {
          key: "createMenuItem",
          value: function createMenuItem(e) {
            return {
              title: e.firstName + ' ' + e.lastName,
              icon: 'person-outline',
              link: '/pages/employees/employee/' + e.id
            };
          }
        }]);

        return PagesComponent;
      }();

      PagesComponent.ɵfac = function PagesComponent_Factory(t) {
        return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_pinner_service__WEBPACK_IMPORTED_MODULE_1__["EmployeePinService"]));
      };

      PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PagesComponent,
        selectors: [["ngx-pages"]],
        decls: 3,
        vars: 1,
        consts: [[3, "items"]],
        template: function PagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-one-column-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menu);
          }
        },
        directives: [_theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_3__["OneColumnLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: [".nb-theme-default   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-material-dark   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-material-light   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL19mdW5jdGlvbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fdmFyaWFudHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19tYXBwaW5nLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvdGhlbWluZy9fcmVnaXN0ZXIuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19pbnN0YWxsLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvdGhlbWluZy9fZ2V0LXZhbHVlLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGVmYXVsdC5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2Rhcmsuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3NtaWMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3Jwb3JhdGUuc2NzcyIsInNyYy9hcHAvQHRoZW1lL3N0eWxlcy9tYXRlcmlhbC9fbWF0ZXJpYWwtZGFyay5zY3NzIiwic3JjL2FwcC9AdGhlbWUvc3R5bGVzL21hdGVyaWFsL19tYXRlcmlhbC1saWdodC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VDSUU7QURFRjs7O0VDRUU7QUNSRjs7OztFRGFFO0FDMkpGOzs7O0VEdEpFO0FDZ0xGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NENURDO0FFdElEOzs7O0VGMklFO0FHM0lGOzs7O0VIZ0pFO0FJaEpGOzs7O0VKcUpFO0FLbkpGOzs7O0VMd0pFO0FNMUpGOzs7O0VOK0pFO0FPL0pGOzs7O0VQb0tFO0FRcEtGOzs7O0VSeUtFO0FFektGOzs7O0VGOEtFO0FDOUtGOzs7O0VEbUxFO0FDWEY7Ozs7RURnQkU7QUNVRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDBHQztBUzVTRDs7OztFVGlURTtBRWpURjs7OztFRnNURTtBQ3RURjs7OztFRDJURTtBQ25KRjs7OztFRHdKRTtBQzlIRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRGtQQztBUXBiRDs7OztFUnliRTtBRXpiRjs7OztFRjhiRTtBQzliRjs7OztFRG1jRTtBQzNSRjs7OztFRGdTRTtBQ3RRRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDBYQztBVTVqQkQ7Ozs7RVZpa0JFO0FFamtCRjs7OztFRnNrQkU7QUN0a0JGOzs7O0VEMmtCRTtBQ25hRjs7OztFRHdhRTtBQzlZRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRGtnQkM7QVNwc0JEOzs7O0VUeXNCRTtBRXpzQkY7Ozs7RUY4c0JFO0FDOXNCRjs7OztFRG10QkU7QUMzaUJGOzs7O0VEZ2pCRTtBQ3RoQkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Qwb0JDO0FRNTBCRDs7OztFUmkxQkU7QUVqMUJGOzs7O0VGczFCRTtBQ3QxQkY7Ozs7RUQyMUJFO0FDbnJCRjs7OztFRHdyQkU7QUM5cEJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEa3hCQztBV3A5QkQ7Ozs7RVh5OUJFO0FFejlCRjs7OztFRjg5QkU7QUM5OUJGOzs7O0VEbStCRTtBQzN6QkY7Ozs7RURnMEJFO0FDdHlCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDA1QkM7QVE1bENEOzs7O0VSaW1DRTtBRWptQ0Y7Ozs7RUZzbUNFO0FDdG1DRjs7OztFRDJtQ0U7QUNuOEJGOzs7O0VEdzhCRTtBQzk2QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RraUNDO0FZcHVDRDs7OztFWnl1Q0U7QUV6dUNGOzs7O0VGOHVDRTtBQzl1Q0Y7Ozs7RURtdkNFO0FDM2tDRjs7OztFRGdsQ0U7QUN0akNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEMHFDQztBYTUyQ0Q7Ozs7RWJpM0NFO0FFajNDRjs7OztFRnMzQ0U7QUN0M0NGOzs7O0VEMjNDRTtBQ250Q0Y7Ozs7RUR3dENFO0FDOXJDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRGt6Q0M7QU16NkNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tONjdDQztBQXJnREg7RUFDRSxjQUFjO0VBQ2QsMEJBQWtCO1VBQWxCLGtCQUFrQjtBQXVnRHRCO0FBcmdESTtFQUNFO0lBQ0UsVUFBVTtFQXdnRGhCO0VBcmdESTtJQUNFLFVBQVU7RUF1Z0RoQjtBQUNGO0FBOWdESTtFQUNFO0lBQ0UsVUFBVTtFQXdnRGhCO0VBcmdESTtJQUNFLFVBQVU7RUF1Z0RoQjtBQUNGO0FNMThDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTis5Q0M7QUF2aURIO0VBQ0UsY0FBYztFQUNkLDBCQUFrQjtVQUFsQixrQkFBa0I7QUF5aUR0QjtBQXZpREk7RUFDRTtJQUNFLFVBQVU7RUEwaURoQjtFQXZpREk7SUFDRSxVQUFVO0VBeWlEaEI7QUFDRjtBTTUrQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S05pZ0RDO0FBemtESDtFQUNFLGNBQWM7RUFDZCwwQkFBa0I7VUFBbEIsa0JBQWtCO0FBMmtEdEI7QUF6a0RJO0VBQ0U7SUFDRSxVQUFVO0VBNGtEaEI7RUF6a0RJO0lBQ0UsVUFBVTtFQTJrRGhCO0FBQ0Y7QU05Z0RJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tObWlEQztBQTNtREg7RUFDRSxjQUFjO0VBQ2QsMEJBQWtCO1VBQWxCLGtCQUFrQjtBQTZtRHRCO0FBM21ESTtFQUNFO0lBQ0UsVUFBVTtFQThtRGhCO0VBM21ESTtJQUNFLFVBQVU7RUE2bURoQjtBQUNGO0FNaGpESTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTnFrREM7QUE3b0RIO0VBQ0UsY0FBYztFQUNkLDBCQUFrQjtVQUFsQixrQkFBa0I7QUErb0R0QjtBQTdvREk7RUFDRTtJQUNFLFVBQVU7RUFncERoQjtFQTdvREk7SUFDRSxVQUFVO0VBK29EaEI7QUFDRjtBTWxsREk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S051bURDO0FBL3FESDtFQUNFLGNBQWM7RUFDZCwwQkFBa0I7VUFBbEIsa0JBQWtCO0FBaXJEdEI7QUEvcURJO0VBQ0U7SUFDRSxVQUFVO0VBa3JEaEI7RUEvcURJO0lBQ0UsVUFBVTtFQWlyRGhCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLypcbiAgRGVjbGFyZSB2YXJpYWJsZXMgYmVmb3JlIG1ha2luZyB0aGVtIGdsb2JhbC5cbiAgZGFydC1zYXNzIGRvZXNuJ3QgYWxsb3cgdG8gZGVjbGFyZSB2YXJpYWJsZSB3aXRoICFnbG9iYWwuXG4gKi9cbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZGVmYXVsdDtcbiRuYi1lbmFibGVkLXRoZW1lczogKCk7XG4kbmItdGhlbWVzOiAoKTtcbiRuYi10aGVtZS1wcm9jZXNzLW1vZGU6IG51bGw7XG4kbmItdGhlbWUtbmFtZTogJ2RlZmF1bHQnO1xuJG5iLXRoZW1lOiAoKTtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpO1xuJG5iLXRoZW1lLWV4cG9ydC1tb2RlOiBmYWxzZSAhZGVmYXVsdDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKTtcblxuLy8gcHVibGljIHZhcmlhYmxlc1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItZW5hYmxlZC10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuXG4vLyBwcml2YXRlIHZhcmlhYmxlc1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ2xhenktcHJvY2VzcycgIWdsb2JhbDtcbiRuYi10aGVtZS1uYW1lOiBudWxsICFnbG9iYWw7XG4kbmItdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lLWV4cG9ydC1tb2RlOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ2NvcmUvdmFyaWFudHMnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL3JlZ2lzdGVyJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9pbnN0YWxsJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9nZXQtdmFsdWUnO1xuIiwiQGltcG9ydCAnLi4vQHRoZW1lL3N0eWxlcy90aGVtZXMnO1xuXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcbiAgOjpuZy1kZWVwIHJvdXRlci1vdXRsZXQgKyAqIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbmltYXRpb246IGZhZGUgMXM7XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmZztcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmc7XG59XG5cbkBtaXhpbiBuYi1oZWFkaW5ncygkZnJvbTogMSwgJHRvOiA2KSB7XG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XG4gICAgaCN7JGl9IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLW91dGxpbmUoJG91dGxpbmUtd2lkdGgsICRvdXRsaW5lLWNvbG9yLCAkaW5zZXQtc2hhZG93LWxlbmd0aDogMCkge1xuICAkb3V0c2V0LXNoYWRvdzogMCAwIDAgJG91dGxpbmUtd2lkdGggJG91dGxpbmUtY29sb3I7XG4gIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93O1xuXG4gIEBpZiAoJGluc2V0LXNoYWRvdy1sZW5ndGggIT0gMCkge1xuICAgICY6bm90KDpob3Zlcik6bm90KDphY3RpdmUpIHtcbiAgICAgICRpbnNldC1zaGFkb3c6IGluc2V0ICRpbnNldC1zaGFkb3ctbGVuZ3RoICRvdXRsaW5lLWNvbG9yO1xuICAgICAgYm94LXNoYWRvdzogJG91dHNldC1zaGFkb3csICRpbnNldC1zaGFkb3c7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlci1ob3Jpem9udGFsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xufVxuXG5AbWl4aW4gaW5zdGFsbC10aHVtYigpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXRodW1iJ1xuICAgICc6Oi1tb3otcmFuZ2UtdGh1bWInXG4gICAgJzo6LW1zLXRodW1iJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC10cmFjaygpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrJ1xuICAgICc6Oi1tb3otcmFuZ2UtdHJhY2snXG4gICAgJzo6LW1zLXRyYWNrJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC1wbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5OiAxKSB7XG4gICRwbGFjZWhvbGRlci1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJ1xuICAgICc6Oi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1zLWlucHV0LXBsYWNlaG9sZGVyJ1xuICApO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgfVxuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkcGxhY2Vob2xkZXItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHkpO1xuICAgIH1cblxuICAgICY6Zm9jdXMjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXItZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHkpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXItZm9jdXMoKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG5AbWl4aW4gbmItY29tcG9uZW50LWFuaW1hdGlvbigkcHJvcGVydGllcy4uLikge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHByb3BlcnRpZXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uKCRhbmltYXRlLi4uKSB7XG4gICRtYXg6IGxlbmd0aCgkYW5pbWF0ZSk7XG4gICRhbmltYXRpb25zOiAnJztcblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgge1xuICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgbnRoKCRhbmltYXRlLCAkaSl9O1xuXG4gICAgQGlmICRpIDwgJG1heCB7XG4gICAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArICcsICd9O1xuICAgIH1cbiAgfVxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbnM7XG4gIC1tb3otYW5pbWF0aW9uOiAgICAkYW5pbWF0aW9ucztcbiAgLW8tYW5pbWF0aW9uOiAgICAgICRhbmltYXRpb25zO1xuICBhbmltYXRpb246ICAgICAgICAgJGFuaW1hdGlvbnM7XG59XG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbkBtaXhpbiBidG4tcHVsc2UoJG5hbWUsICRjb2xvcikge1xuICAmLmJ0bi1wdWxzZSB7XG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uKGJ0bi0jeyRuYW1lfS1wdWxzZSAxLjVzIGluZmluaXRlKTtcbiAgfVxuXG4gIEBpbmNsdWRlIGtleWZyYW1lcyhidG4tI3skbmFtZX0tcHVsc2UpIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFyZW0gMCAkY29sb3I7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gIH1cbn1cblxuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuXG5AbWl4aW4gX3ByZXBlbmQtd2l0aC1zZWxlY3Rvcigkc2VsZWN0b3IsICRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgI3skc2VsZWN0b3J9ICYge1xuICAgIEBpZiAkcHJvcCAhPSBudWxsIHtcbiAgICAgICN7JHByb3B9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWx0cigkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9bHRyXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItcnRsKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1ydGxdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vLy8gU2xpZ2h0bHkgbGlnaHRlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byB0aW50XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHRpbnQoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peCh3aGl0ZSwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbi8vLyBTbGlnaHRseSBkYXJrZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gc2hhZGVcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gc2hhZGUoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peChibGFjaywgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbkBmdW5jdGlvbiBtYXAtc2V0KCRtYXAsICRrZXksICR2YWx1ZTogbnVsbCkge1xuICAkbmV3OiAoJGtleTogJHZhbHVlKTtcbiAgQHJldHVybiBtYXAtbWVyZ2UoJG1hcCwgJG5ldyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gIEByZXR1cm4gJ2Jhc2ljJywgJ3ByaW1hcnknLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdpbmZvJywgJ2NvbnRyb2wnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNpemVzKCkge1xuICBAcmV0dXJuICd0aW55JywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdnaWFudCc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc2hhcGVzKCkge1xuICBAcmV0dXJuICdyZWN0YW5nbGUnLCAnc2VtaS1yb3VuZCcsICdyb3VuZCc7XG59XG5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuJGV2YS1tYXBwaW5nOiAoXG5cbiAgLyogQ29tcG9uZW50cyBtYXBwaW5ncyAtIG1hcHMgdGhlbWUgdmFyaWFibGVzIG9udG8gY29tcG9uZW50IHZhcmlhYmxlcyAqL1xuXG4gIGxpbmstdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBsaW5rLXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lLFxuICBsaW5rLXRleHQtZm9jdXMtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgbGluay10ZXh0LWhvdmVyLWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG5cbiAgY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNhcmQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgY2FyZC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBjYXJkLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBjYXJkLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBjYXJkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBjYXJkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgY2FyZC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjYXJkLXBhZGRpbmc6IDFyZW0gMS41cmVtLFxuICBjYXJkLXNoYWRvdzogbm9uZSxcbiAgY2FyZC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYXJkLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGNhcmQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBjYXJkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhcmQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FyZC1oZWFkZXItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjYXJkLWhlYWRlci1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLWhlYWRlci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIGNhcmQtaGVpZ2h0LXRpbnk6IDEzLjVyZW0sXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAyMS4xODc1cmVtLFxuICBjYXJkLWhlaWdodC1tZWRpdW06IDI4Ljg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDM2LjU2MjVyZW0sXG4gIGNhcmQtaGVpZ2h0LWdpYW50OiA0NC4yNXJlbSxcbiAgY2FyZC1tYXJnaW4tYm90dG9tOiAxLjg3NXJlbSxcblxuICBjYXJkLXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBjYXJkLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgY2FyZC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBoZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBoZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBoZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGhlYWRlci1oZWlnaHQ6IDQuNzVyZW0sXG4gIGhlYWRlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBoZWFkZXItc2hhZG93OiBzaGFkb3csXG5cbiAgZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgZm9vdGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGZvb3Rlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgZm9vdGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgZm9vdGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBmb290ZXItdGV4dC1oaWdobGlnaHQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGZvb3Rlci1oZWlnaHQ6IDQuNzI1cmVtLFxuICBmb290ZXItcGFkZGluZzogMS4yNXJlbSxcbiAgZm9vdGVyLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGZvb3Rlci1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBmb290ZXItZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgZm9vdGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGxheW91dC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGxheW91dC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBsYXlvdXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGxheW91dC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBsYXlvdXQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGxheW91dC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgbGF5b3V0LW1pbi1oZWlnaHQ6IDEwMHZoLFxuICBsYXlvdXQtY29udGVudC13aWR0aDogOTAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1taW4td2lkdGg6IDMwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWF4LXdpZHRoOiAxOTIwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGxheW91dC13aW5kb3ctbW9kZS1wYWRkaW5nLXRvcDogNC43NXJlbSxcbiAgbGF5b3V0LXdpbmRvdy1zaGFkb3c6IHNoYWRvdyxcbiAgbGF5b3V0LXBhZGRpbmc6IDIuMjVyZW0gMi4yNXJlbSAwLjc1cmVtLFxuICBsYXlvdXQtbWVkaXVtLXBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMC41cmVtLFxuICBsYXlvdXQtc21hbGwtcGFkZGluZzogMXJlbSAxcmVtIDAsXG4gIGxheW91dC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGxheW91dC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgbGF5b3V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIHNpZGViYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzaWRlYmFyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNpZGViYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHNpZGViYXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2lkZWJhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2lkZWJhci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgc2lkZWJhci1oZWlnaHQ6IDEwMHZoLFxuICBzaWRlYmFyLXdpZHRoOiAxNnJlbSxcbiAgc2lkZWJhci13aWR0aC1jb21wYWN0OiAzLjVyZW0sXG4gIHNpZGViYXItcGFkZGluZzogMS4yNXJlbSxcbiAgc2lkZWJhci1oZWFkZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItZm9vdGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLXNoYWRvdzogc2hhZG93LFxuICBzaWRlYmFyLW1lbnUtaXRlbS1oaWdobGlnaHQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2lkZWJhci1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIHNpZGViYXItc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIHNpZGViYXItc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgbWVudS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgbWVudS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBtZW51LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseSxcbiAgbWVudS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgbWVudS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIG1lbnUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuXG4gIG1lbnUtZ3JvdXAtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiAwLFxuICBtZW51LWl0ZW0tcGFkZGluZzogMC43NXJlbSAxcmVtLFxuXG4gIG1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtaXRlbS1ob3Zlci1jdXJzb3I6IHBvaW50ZXIsXG4gIG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIG1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcblxuICBtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIG1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcjogbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLFxuICBtZW51LWl0ZW0taWNvbi13aWR0aDogMS4yNXJlbSxcblxuICBtZW51LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgbWVudS1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIG1lbnUtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtbWFyZ2luOiAwLFxuICBtZW51LXN1Ym1lbnUtcGFkZGluZzogMCAxLjI1cmVtLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1zdHlsZTogc29saWQsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMCxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogMCxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogbWVudS1pdGVtLXBhZGRpbmcsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcjogbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3I6IG1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcixcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLXRleHQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWhvdmVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yLFxuXG4gIHRhYnNldC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LWJvcmRlci1yYWRpdXM6IDAsXG4gIHRhYnNldC1zaGFkb3c6IG5vbmUsXG5cbiAgdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHRhYnNldC10YWItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICB0YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICB0YWJzZXQtdGFiLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICB0YWJzZXQtdGFiLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICB0YWJzZXQtdGFiLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICB0YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aDogMC4yNXJlbSxcbiAgdGFic2V0LXRhYi11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFic2V0LXRhYi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIHRhYnNldC10YWItZm9jdXMtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIHRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICB0YWJzZXQtdGFiLWhvdmVyLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICB0YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHRhYnNldC1jb250ZW50LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtY29udGVudC1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHRhYnNldC1jb250ZW50LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRhYnNldC1jb250ZW50LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHJvdXRlLXRhYnNldC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXM6IDAsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICByb3V0ZS10YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aDogMC4yNXJlbSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHVzZXItcGljdHVyZS1ib3gtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdXNlci1waWN0dXJlLWJveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgdXNlci1pbml0aWFscy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLW5hbWUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1uYW1lLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLW5hbWUtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHVzZXItdGl0bGUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5LFxuICB1c2VyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG5cbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC41cmVtLFxuICB1c2VyLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgdXNlci1yb3VuZC1ib3JkZXItcmFkaXVzOiA1MCUsXG5cbiAgdXNlci10aW55LWhlaWdodDogMS4yNXJlbSxcbiAgdXNlci10aW55LXdpZHRoOiAxLjI1cmVtLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICB1c2VyLXNtYWxsLXdpZHRoOiAxLjVyZW0sXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbWVkaXVtLWhlaWdodDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS13aWR0aDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLW1lZGl1bS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbGFyZ2UtaGVpZ2h0OiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLXdpZHRoOiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItbGFyZ2UtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQsXG5cbiAgdXNlci1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIHVzZXItZ2lhbnQtd2lkdGg6IDRyZW0sXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHBvcG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcG9wb3Zlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBwb3BvdmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBwb3BvdmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBwb3BvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMC42ODc1cmVtLFxuICBwb3BvdmVyLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBjb250ZXh0LW1lbnUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDAsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtdGV4dC1hbGlnbjogY2VudGVyLFxuICBjb250ZXh0LW1lbnUtbWluLXdpZHRoOiAxMHJlbSxcbiAgY29udGV4dC1tZW51LW1heC13aWR0aDogMTVyZW0sXG4gIGNvbnRleHQtbWVudS1zaGFkb3c6IHNoYWRvdyxcblxuICBhY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBhY3Rpb25zLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGFjdGlvbnMtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgYWN0aW9ucy1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBhY3Rpb25zLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBhY3Rpb25zLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBhY3Rpb25zLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBhY3Rpb25zLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBhY3Rpb25zLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjdGlvbnMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBhY3Rpb25zLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBhY3Rpb25zLXRpbnktaWNvbi1oZWlnaHQ6IGFjdGlvbnMtdGlueS1oZWlnaHQsXG4gIGFjdGlvbnMtdGlueS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGFjdGlvbnMtc21hbGwtaGVpZ2h0OiAxLjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtc21hbGwtaGVpZ2h0LFxuICBhY3Rpb25zLXNtYWxsLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBhY3Rpb25zLW1lZGl1bS1oZWlnaHQ6IDIuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLWljb24taGVpZ2h0OiBhY3Rpb25zLW1lZGl1bS1oZWlnaHQsXG4gIGFjdGlvbnMtbWVkaXVtLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGFjdGlvbnMtbGFyZ2UtaGVpZ2h0OiAzLjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtbGFyZ2UtaGVpZ2h0LFxuICBhY3Rpb25zLWxhcmdlLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBhY3Rpb25zLWdpYW50LWhlaWdodDogNHJlbSxcbiAgYWN0aW9ucy1naWFudC1pY29uLWhlaWdodDogYWN0aW9ucy1naWFudC1oZWlnaHQsXG4gIGFjdGlvbnMtZ2lhbnQtcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG5cbiAgc2VhcmNoLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VhcmNoLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNlYXJjaC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBzZWFyY2gtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc2VhcmNoLWV4dHJhLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VhcmNoLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlYXJjaC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseSxcbiAgc2VhcmNoLXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctMS1mb250LXNpemUsXG4gIHNlYXJjaC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodCxcbiAgc2VhcmNoLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0LFxuICBzZWFyY2gtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VhcmNoLWluZm8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgc2VhcmNoLWluZm8tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG5cbiAgc21hcnQtdGFibGUtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSxcbiAgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1hZGQtZWRpdC1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1jYW5jZWwtZGVsZXRlLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLXRleHQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcixcblxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1mYW1pbHk6IGJ1dHRvbi10ZXh0LWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1zaXplOiBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1wYWdpbmctbGluZS1oZWlnaHQ6IGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogdHJhbnNwYXJlbnQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcixcblxuICB0b2FzdHItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgdG9hc3RyLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9hc3RyLXBhZGRpbmc6IDFyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICB0b2FzdHItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRvYXN0ci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICB0b2FzdHItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWljb24tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG5cbiAgdG9hc3RyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG5cbiAgdG9hc3RyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG5cbiAgdG9hc3RyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24taW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG5cbiAgdG9hc3RyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG5cbiAgdG9hc3RyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2FzdHItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG5cbiAgdG9hc3RyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2FzdHItY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItaWNvbi1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG5cbiAgYnV0dG9uLWN1cnNvcjogcG9pbnRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24tdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGJ1dHRvbi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYnV0dG9uLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICBidXR0b24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJ1dHRvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi10aW55LWljb24tc2l6ZTogMC43NXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBidXR0b24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXNpemU6IDFyZW0sXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tc21hbGwtaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tbWVkaXVtLWljb24tc2l6ZTogMS4yNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tbWVkaXVtLWljb24tb2Zmc2V0OiAwLjVyZW0sXG5cbiAgYnV0dG9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWxhcmdlLWljb24tc2l6ZTogMS41cmVtLFxuICBidXR0b24tbGFyZ2UtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tb2Zmc2V0OiAwLjc1cmVtLFxuXG4gIGJ1dHRvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuICBidXR0b24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1naWFudC1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWdpYW50LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJ1dHRvbi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ1dHRvbi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZmlsbGVkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZmlsbGVkLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tb3V0bGluZS1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tZ2hvc3QtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWZvY3VzLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci13aWR0aDogMCxcbiAgYnV0dG9uLWhlcm8tdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcblxuICBidXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuMzc1cmVtIDAuNjg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41cmVtIDAuOTM3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjE4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMS40Mzc1cmVtLFxuXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby10ZXh0LXNoYWRvdzogc2hhZG93LFxuICBidXR0b24taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgYnV0dG9uLWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1iZXZlbC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBidXR0b24taGVyby1iYXNpYy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBidXR0b24taGVyby1iYXNpYy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24taGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1iZXZlbC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZ2xvdy1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1zdWNjZXNzLWJldmVsLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1nbG93LWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTMwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24taGVyby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYmV2ZWwtY29sb3I6IGNvbG9yLWluZm8tNjAwLFxuICBidXR0b24taGVyby1pbmZvLWdsb3ctY29sb3I6IGNvbG9yLWluZm8tNzAwLFxuICBidXR0b24taGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBidXR0b24taGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1iZXZlbC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZ2xvdy1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1iZXZlbC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWdsb3ctY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGljb24tYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC40Mzc1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDAuOTM3NXJlbSxcblxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC40Mzc1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDAuOTM3NXJlbSxcblxuICBpY29uLWJ1dHRvbi1naG9zdC10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLWhlcm8tdGlueS1wYWRkaW5nOiAwLjVyZW0gMC4zNzVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1tZWRpdW0tcGFkZGluZzogMC43NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tbGFyZ2UtcGFkZGluZzogMC44NzVyZW0gMC42ODc1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAxcmVtLFxuXG4gIGlucHV0LWJvcmRlci1zdHlsZTogc29saWQsXG4gIGlucHV0LWJvcmRlci13aWR0aDogMXB4LFxuICBpbnB1dC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBpbnB1dC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBpbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgaW5wdXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcblxuICBpbnB1dC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBpbnB1dC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGlucHV0LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBpbnB1dC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBpbnB1dC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGlucHV0LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBpbnB1dC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIGlucHV0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIGlucHV0LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMCxcbiAgaW5wdXQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGlucHV0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBpbnB1dC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBpbnB1dC10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIGlucHV0LXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIGlucHV0LXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgaW5wdXQtdGlueS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIGlucHV0LXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgaW5wdXQtc21hbGwtbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuICBpbnB1dC1tZWRpdW0tbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGlucHV0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGlucHV0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIGlucHV0LWxhcmdlLW1heC13aWR0aDogMzByZW0sXG5cbiAgaW5wdXQtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgaW5wdXQtZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQsXG4gIGlucHV0LWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxcmVtLFxuICBpbnB1dC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIGNoZWNrYm94LWhlaWdodDogMS4yNXJlbSxcbiAgY2hlY2tib3gtd2lkdGg6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNoZWNrYm94LWJvcmRlci13aWR0aDogMXB4LFxuICBjaGVja2JveC1ib3JkZXItcmFkaXVzOiAzcHgsXG4gIGNoZWNrYm94LW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGNoZWNrYm94LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGNoZWNrYm94LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseSxcbiAgY2hlY2tib3gtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIGNoZWNrYm94LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgY2hlY2tib3gtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBjaGVja2JveC10ZXh0LXNwYWNlOiAwLjY4NzVyZW0sXG4gIGNoZWNrYm94LXBhZGRpbmc6IDAsXG4gIGNoZWNrYm94LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsXG5cbiAgY2hlY2tib3gtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBjaGVja2JveC1jb250cm9sLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjaGVja2JveC1jb250cm9sLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgYmFkZ2UtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYmFkZ2UtdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGJhZGdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgYmFkZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJhZGdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGJhZGdlLXBhZGRpbmc6IDAuMjVyZW0gMC40cmVtLFxuXG4gIGJhZGdlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgYmFkZ2UtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYmFkZ2UtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJhZGdlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBiYWRnZS1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBiYWRnZS1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBwcm9ncmVzcy1iYXItYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyxcbiAgcHJvZ3Jlc3MtYmFyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHByb2dyZXNzLWJhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuXG4gIHByb2dyZXNzLWJhci10aW55LWhlaWdodDogMXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItc21hbGwtaGVpZ2h0OiAxLjI1cmVtLFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1tZWRpdW0taGVpZ2h0OiAxLjM3NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtaGVpZ2h0OiAxLjVyZW0sXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LWhlaWdodDogMS43NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHByb2dyZXNzLWJhci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHByb2dyZXNzLWJhci1iYXNpYy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci00LFxuICBwcm9ncmVzcy1iYXItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1pbmZvLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIGFsZXJ0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGFsZXJ0LWJvdHRvbS1tYXJnaW46IDEuNXJlbSxcbiAgYWxlcnQtcGFkZGluZzogMXJlbSAxLjEyNXJlbSxcbiAgYWxlcnQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGFsZXJ0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgYWxlcnQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGFsZXJ0LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgYWxlcnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgYWxlcnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBhbGVydC1jbG9zYWJsZS1zdGFydC1wYWRkaW5nOiAzcmVtLFxuXG4gIGFsZXJ0LXRpbnktaGVpZ2h0OiA0LjVyZW0sXG4gIGFsZXJ0LXNtYWxsLWhlaWdodDogNS43NXJlbSxcbiAgYWxlcnQtbWVkaXVtLWhlaWdodDogN3JlbSxcbiAgYWxlcnQtbWVkaXVtLXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LWxhcmdlLWhlaWdodDogOC4yNXJlbSxcbiAgYWxlcnQtZ2lhbnQtaGVpZ2h0OiA5LjVyZW0sXG5cbiAgYWxlcnQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBhbGVydC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBhbGVydC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYWxlcnQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBhbGVydC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGFsZXJ0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYWxlcnQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYWxlcnQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGFsZXJ0LWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIGFsZXJ0LWFjY2VudC1iYXNpYy1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGFsZXJ0LWFjY2VudC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtY29udHJvbC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuXG4gIGFsZXJ0LW91dGxpbmUtd2lkdGg6IDFweCxcbiAgYWxlcnQtb3V0bGluZS1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1jb250cm9sLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcblxuICBjaGF0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2hhdC1ib3JkZXI6IG5vbmUsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2hhdC1zaGFkb3c6IHNoYWRvdyxcbiAgY2hhdC1wYWRkaW5nOiAxcmVtIDEuMjVyZW0sXG4gIGNoYXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGNoYXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBjaGF0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGNoYXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgY2hhdC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBjaGF0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBjaGF0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2hhdC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjaGF0LXRpbnktaGVpZ2h0OiAxMy41cmVtLFxuICBjaGF0LXNtYWxsLWhlaWdodDogMjFyZW0sXG4gIGNoYXQtbWVkaXVtLWhlaWdodDogMjguNXJlbSxcbiAgY2hhdC1sYXJnZS1oZWlnaHQ6IDM2cmVtLFxuICBjaGF0LWdpYW50LWhlaWdodDogNDMuNXJlbSxcblxuICBjaGF0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2hhdC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGF0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGF0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGF0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGF0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hhdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjaGF0LWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIGNoYXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2hhdC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBjaGF0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgY2hhdC1tZXNzYWdlLWJhY2tncm91bmQ6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hhdC1tZXNzYWdlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtNTAwLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWZpbGUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNwaW5uZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIHNwaW5uZXItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIHNwaW5uZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIHNwaW5uZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuXG4gIHNwaW5uZXItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWJhc2ljLWNpcmNsZS1maWxsZWQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc3Bpbm5lci1iYXNpYy1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItcHJpbWFyeS1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNwaW5uZXItcHJpbWFyeS1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItaW5mby1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNwaW5uZXItaW5mby1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItc3VjY2Vzcy1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNwaW5uZXItc3VjY2Vzcy1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItd2FybmluZy1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNwaW5uZXItd2FybmluZy1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1kYW5nZXItY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWNvbnRyb2wtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzcGlubmVyLWNvbnRyb2wtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWhlaWdodC10aW55OiAxcmVtLFxuICBzcGlubmVyLWhlaWdodC1zbWFsbDogMS4yNXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtbWVkaXVtOiAxLjVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LWxhcmdlOiAxLjc1cmVtLFxuICBzcGlubmVyLWhlaWdodC1naWFudDogMnJlbSxcblxuICBzdGVwcGVyLXN0ZXAtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgc3RlcHBlci1zdGVwLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktYWN0aXZlLWNvbG9yLFxuICBzdGVwcGVyLXN0ZXAtY29tcGxldGVkLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcblxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1zdHlsZTogc29saWQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItd2lkdGg6IDFweCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1yYWRpdXM6IDUwJSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LXdpZHRoOiAycmVtLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzdGVwcGVyLWNvbm5lY3Rvci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHN0ZXBwZXItY29ubmVjdG9yLWNvbXBsZXRlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItaG9yaXpvbnRhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLFxuICBzdGVwcGVyLXZlcnRpY2FsLWNvbm5lY3Rvci1tYXJnaW46IDFyZW0sXG5cbiAgc3RlcHBlci1zdGVwLWNvbnRlbnQtcGFkZGluZzogMS4yNXJlbSxcblxuICBhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYWNjb3JkaW9uLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGFjY29yZGlvbi1zaGFkb3c6IHNoYWRvdyxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgYWNjb3JkaW9uLWhlYWRlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgYWNjb3JkaW9uLWl0ZW0tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIGxpc3QtaXRlbS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBsaXN0LWl0ZW0tZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgbGlzdC1pdGVtLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGxpc3QtaXRlbS1wYWRkaW5nOiAxcmVtLFxuICBsaXN0LWl0ZW0tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbGlzdC1pdGVtLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgbGlzdC1pdGVtLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBsaXN0LWl0ZW0tZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBsaXN0LWl0ZW0tbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXdpZHRoOiAyMC42MjVyZW0sXG4gIGNhbGVuZGFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2FsZW5kYXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgY2FsZW5kYXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2FsZW5kYXItYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGNhbGVuZGFyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNhbGVuZGFyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNhbGVuZGFyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy10b3A6IDAuMjVyZW0sXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLWJvdHRvbTogMC42MjVyZW0sXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXN0YXJ0OiAwLjYyNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctZW5kOiAwLjYyNXJlbSxcblxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXBhZGRpbmc6IDAuNjI1cmVtIDAuMjVyZW0sXG5cbiAgY2FsZW5kYXItY2VsbC1pbmFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgY2FsZW5kYXItY2VsbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLWJvcmRlci1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuXG4gIGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoOiAyLjc1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNzVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGg6IDQuODEyNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcblxuICBjYWxlbmRhci13ZWVrZGF5LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci13ZWVrZGF5LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LXRleHQtY29sb3I6IGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtd2lkdGgsXG5cbiAgY2FsZW5kYXItd2Vla251bWJlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItaGVpZ2h0OiBjYWxlbmRhci13ZWVrZGF5LWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci13aWR0aDogY2FsZW5kYXItd2Vla2RheS13aWR0aCxcblxuICBjYWxlbmRhci1sYXJnZS13aWR0aDogMjIuMzc1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aDogM3JlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0OiAzcmVtLFxuICBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLXdlZWtkYXktbGFyZ2UtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLXdpZHRoOiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoOiA1LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0LFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0LFxuXG4gIG92ZXJsYXktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KSxcblxuICB0b29sdGlwLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMyxcbiAgdG9vbHRpcC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWJvcmRlci1zdHlsZTogZGFzaGVkLFxuICB0b29sdGlwLWJvcmRlci13aWR0aDogMCxcbiAgdG9vbHRpcC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB0b29sdGlwLXBhZGRpbmc6IDAuNXJlbSAxcmVtLFxuICB0b29sdGlwLXRleHQtY29sb3I6IHRleHQtYWx0ZXJuYXRlLWNvbG9yLFxuICB0b29sdGlwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtY2FwdGlvbi1mb250LWZhbWlseSxcbiAgdG9vbHRpcC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdG9vbHRpcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tZm9udC13ZWlnaHQsXG4gIHRvb2x0aXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB0b29sdGlwLWljb24taGVpZ2h0OiAxcmVtLFxuICB0b29sdGlwLWljb24td2lkdGg6IDFyZW0sXG4gIHRvb2x0aXAtbWF4LXdpZHRoOiAxNnJlbSxcblxuICB0b29sdGlwLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgdG9vbHRpcC1iYXNpYy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvb2x0aXAtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvb2x0aXAtcHJpbWFyeS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b29sdGlwLWluZm8tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9vbHRpcC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvb2x0aXAtd2FybmluZy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9vbHRpcC1kYW5nZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b29sdGlwLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9vbHRpcC1zaGFkb3c6IHNoYWRvdyxcblxuICBvcHRpb24tbGlzdC1tYXgtaGVpZ2h0OiAyMHJlbSxcbiAgb3B0aW9uLWxpc3Qtc2hhZG93OiBub25lLFxuICBvcHRpb24tbGlzdC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZTogc29saWQsXG4gIG9wdGlvbi1saXN0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBvcHRpb24tbGlzdC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBvcHRpb24tbGlzdC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItY29sb3I6IG9wdGlvbi1saXN0LWJvcmRlci1jb2xvcixcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXN0eWxlOiBvcHRpb24tbGlzdC1ib3JkZXItc3R5bGUsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci13aWR0aDogb3B0aW9uLWxpc3QtYm9yZGVyLXdpZHRoLFxuXG4gIG9wdGlvbi1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIG9wdGlvbi1ncm91cC10aW55LXN0YXJ0LXBhZGRpbmc6IDEuMjVyZW0sXG4gIG9wdGlvbi1ncm91cC1zbWFsbC1zdGFydC1wYWRkaW5nOiAxLjc1cmVtLFxuICBvcHRpb24tZ3JvdXAtbWVkaXVtLXN0YXJ0LXBhZGRpbmc6IDIuMjVyZW0sXG4gIG9wdGlvbi1ncm91cC1sYXJnZS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtZ2lhbnQtc3RhcnQtcGFkZGluZzogMi43NXJlbSxcblxuICBvcHRpb24tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIG9wdGlvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcixcbiAgb3B0aW9uLWhvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG9wdGlvbi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBvcHRpb24tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG9wdGlvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cyxcbiAgb3B0aW9uLWZvY3VzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIG9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBvcHRpb24tc2VsZWN0ZWQtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIG9wdGlvbi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIG9wdGlvbi10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIG9wdGlvbi10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgb3B0aW9uLXRpbnktcGFkZGluZzogc2VsZWN0LW91dGxpbmUtdGlueS1wYWRkaW5nLFxuXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgb3B0aW9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgb3B0aW9uLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXNtYWxsLXBhZGRpbmcsXG5cbiAgb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgb3B0aW9uLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tbWVkaXVtLXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nLFxuXG4gIG9wdGlvbi1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIG9wdGlvbi1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgb3B0aW9uLWxhcmdlLXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLWxhcmdlLXBhZGRpbmcsXG5cbiAgb3B0aW9uLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgb3B0aW9uLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tZ2lhbnQtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZyxcblxuICBzZWxlY3QtY3Vyc29yOiBwb2ludGVyLFxuICBzZWxlY3QtZGlzYWJsZWQtY3Vyc29yOiBkZWZhdWx0LFxuICBzZWxlY3QtbWluLXdpZHRoOiAxM3JlbSxcbiAgc2VsZWN0LW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBzZWxlY3QtaWNvbi1vZmZzZXQ6IDJyZW0sXG5cbiAgc2VsZWN0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHNlbGVjdC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcblxuICBzZWxlY3QtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBzZWxlY3QtdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgc2VsZWN0LXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQsXG4gIHNlbGVjdC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtdGlueS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgc2VsZWN0LXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LXNtYWxsLW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3QtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgc2VsZWN0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1sYXJnZS1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LWdpYW50LW1heC13aWR0aDogMzByZW0sXG5cbiAgc2VsZWN0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBzZWxlY3Qtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBzZWxlY3Qtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aDogMXB4LFxuXG4gIHNlbGVjdC1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG5cbiAgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXN0eWxlOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItc3R5bGUsXG4gIHNlbGVjdC1vdXRsaW5lLWFkamFjZW50LWJvcmRlci13aWR0aDogc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc2VsZWN0LWZpbGxlZC1ib3JkZXItd2lkdGg6IDFweCxcblxuICBzZWxlY3QtZmlsbGVkLXRpbnktcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tdGlueS1wYWRkaW5nOiAwLjI1cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuMjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1sYXJnZS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMXJlbSxcblxuICBzZWxlY3QtaGVyby1iYXNpYy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1iYXNpYy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtNDAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tYmFzaWMtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTMwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8taW5mby1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBzZWxlY3QtaGVyby1pbmZvLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8taW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1pbmZvLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIHNlbGVjdC1oZXJvLWluZm8tZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby13YXJuaW5nLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1kYW5nZXItZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3QtaGVyby1kYW5nZXItaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItMzAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tY29udHJvbC1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tY29udHJvbC1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBkYXRlcGlja2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgZGF0ZXBpY2tlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBkYXRlcGlja2VyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsXG5cbiAgcmFkaW8td2lkdGg6IDEuMjVyZW0sXG4gIHJhZGlvLWhlaWdodDogMS4yNXJlbSxcbiAgcmFkaW8tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgcmFkaW8tYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHJhZGlvLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseSxcbiAgcmFkaW8tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHJhZGlvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcmFkaW8tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICByYWRpby1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICByYWRpby1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuXG4gIHJhZGlvLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcmFkaW8tYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICByYWRpby1iYXNpYy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgcmFkaW8tYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICByYWRpby1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8taW5mby1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcmFkaW8taW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICByYWRpby1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8taW5mby1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8taW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8taW5mby1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8td2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgcmFkaW8td2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICByYWRpby1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgcmFkaW8tY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItd2lkdGg6IDFweCxcbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgdHJlZS1ncmlkLXJvdy1taW4taGVpZ2h0OiAycmVtLFxuICB0cmVlLWdyaWQtY2VsbC1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuXG4gIHRyZWUtZ3JpZC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LWZhbWlseTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1zaXplOiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWxpbmUtaGVpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1yb3ctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJvcmRlcjogbm9uZSxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1wYWRkaW5nOiAwLFxuXG4gIGljb24tZm9udC1zaXplOiAxLjI1cmVtLFxuICBpY29uLWxpbmUtaGVpZ2h0OiAxLFxuICBpY29uLXdpZHRoOiAxZW0sXG4gIGljb24taGVpZ2h0OiAxZW0sXG4gIGljb24tc3ZnLXZlcnRpY2FsLWFsaWduOiB0b3AsXG4gIGljb24tYmFzaWMtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaWNvbi1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGljb24taW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgaWNvbi13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGljb24tZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgaWNvbi1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG5cbiAgdG9nZ2xlLWhlaWdodDogMS44NzVyZW0sXG4gIHRvZ2dsZS13aWR0aDogMy4xMjVyZW0sXG4gIHRvZ2dsZS1ib3JkZXItd2lkdGg6IDFweCxcbiAgdG9nZ2xlLWJvcmRlci1yYWRpdXM6IDEwMHB4LFxuICB0b2dnbGUtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgdG9nZ2xlLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHRvZ2dsZS1zd2l0Y2hlci1zaXplOiAxLjc1cmVtLFxuICB0b2dnbGUtc3dpdGNoZXItaWNvbi1zaXplOiAwLjc1cmVtLFxuICB0b2dnbGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICB0b2dnbGUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHRvZ2dsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHRvZ2dsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHRvZ2dsZS1jdXJzb3I6IHBvaW50ZXIsXG4gIHRvZ2dsZS1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgdG9nZ2xlLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0b2dnbGUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBmb3JtLWZpZWxkLXRpbnktbWF4LXdpZHRoOiBpbnB1dC10aW55LW1heC13aWR0aCxcbiAgZm9ybS1maWVsZC1zbWFsbC1tYXgtd2lkdGg6IGlucHV0LXNtYWxsLW1heC13aWR0aCxcbiAgZm9ybS1maWVsZC1tZWRpdW0tbWF4LXdpZHRoOiBpbnB1dC1tZWRpdW0tbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLWxhcmdlLW1heC13aWR0aDogaW5wdXQtbGFyZ2UtbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLWdpYW50LW1heC13aWR0aDogaW5wdXQtZ2lhbnQtbWF4LXdpZHRoLFxuXG4gIGZvcm0tZmllbGQtYWRkb24tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24taW5mby10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1pbmZvLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaGVpZ2h0OiAxLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi10aW55LWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWljb24tc2l6ZTogYnV0dG9uLXRpbnktaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWhlaWdodDogMnJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaWNvbi1zaXplOiBidXR0b24tc21hbGwtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodDogMi41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1pY29uLXNpemU6IGJ1dHRvbi1tZWRpdW0taWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2Utd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWljb24tc2l6ZTogYnV0dG9uLWxhcmdlLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWhlaWdodDogMy41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1pY29uLXNpemU6IGJ1dHRvbi1naWFudC1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZXMvbWFwcGluZyc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcblxuICBAaWYgKGxlbmd0aCgkbmItZW5hYmxlZC10aGVtZXMpID09IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICRuYi10aGVtZXMge1xuICAgICAgJG5iLWVuYWJsZWQtdGhlbWVzOiBhcHBlbmQoJG5iLWVuYWJsZWQtdGhlbWVzLCAkdGhlbWUtbmFtZSkgIWdsb2JhbDtcbiAgICB9XG4gIH1cbiAgQHJldHVybiAkbmItZW5hYmxlZC10aGVtZXM7XG59XG5cbkBmdW5jdGlvbiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCkge1xuICAkdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcbiAgQHJldHVybiBudGgoJHRoZW1lcywgbGVuZ3RoKCR0aGVtZXMpKTtcbn1cblxuQGZ1bmN0aW9uIG5iLXNldC1mb3ItZXhwb3J0KCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gICRwYXJlbnQtdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcy1leHBvcnQsICRwYXJlbnQtbmFtZSk7XG4gIEBpZiAoJHBhcmVudC10aGVtZSAhPSBudWxsKSB7XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UobWFwLWdldCgkcGFyZW50LXRoZW1lLCBkYXRhKSwgJHRoZW1lKTtcbiAgfVxuXG4gICR0aGVtZS1kYXRhOiAoXG4gICAgZGF0YTogJHRoZW1lLFxuICAgIHBhcmVudDogJHBhcmVudC1uYW1lLFxuICApO1xuICBAcmV0dXJuIG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCAkdGhlbWUtZGF0YSk7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmFtZSkge1xuICAkdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcywgJG5hbWUpO1xuXG4gIC8vIFRPRE86IGNoZWNrIGlmIG9wdGltYWwgcGxhY2VcbiAgQGlmICgkdGhlbWUgPT0gbnVsbCkge1xuICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogdGhlbWUgYCcgKyAkbmFtZSArICdgIGlzIG5vdCByZWdpc3RlcmVkIHdpdGggYG5iLXJlZ2lzdGVyLXRoZW1lYCBmdW5jdGlvbi4nO1xuICB9XG5cbiAgQHJldHVybiAkdGhlbWU7XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBSZWdpc3RlcnMgYSBuZXcgdGhlbWVcbkBmdW5jdGlvbiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWU6IG51bGwpIHtcblxuICBAaWYgKCRuYi10aGVtZS1leHBvcnQtbW9kZSA9PSB0cnVlKSB7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG5iLXNldC1mb3ItZXhwb3J0KCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZSkgIWdsb2JhbDtcbiAgfVxuXG4gICR0aGVtZS1kYXRhOiAoKTtcblxuICBAaWYgKCRwYXJlbnQtbmFtZSAhPSBudWxsKSB7XG4gICAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkcGFyZW50LW5hbWUpO1xuICAgIEBpZiAoJHBhcmVudC10aGVtZSA9PSBudWxsKSB7XG4gICAgICBAZXJyb3IgJ05lYnVsYXIgVGhlbWU6IHBhcmVudCB0aGVtZSBgJyArICRwYXJlbnQtbmFtZSArICdgIGlzIG5vdCByZWdpc3RlcmVkIG9yIGltcG9ydGVkLic7XG4gICAgfVxuICAgICR0aGVtZTogbWFwLW1lcmdlKCRwYXJlbnQtdGhlbWUsICR0aGVtZSk7XG4gIH1cbiAgJHRoZW1lOiBtYXAtbWVyZ2UoJGV2YS1tYXBwaW5nLCAkdGhlbWUpO1xuICAkbmItdGhlbWVzOiBtYXAtc2V0KCRuYi10aGVtZXMsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgQHJldHVybiAkbmItdGhlbWVzO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgPT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgIT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LWZvci10aGVtZXMoJG5hbWVzLi4uKSB7XG4gIEBlYWNoICRuYW1lIGluICRuYW1lcyB7XG4gICAgQGluY2x1ZGUgbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtY3NzLXByb3BlcnRpZXMoJHRoZW1lLW5hbWUsICR0aGVtZSkge1xuICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuXG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgICBAaWYgKHR5cGUtb2YoJHZhbHVlKSA9PSAnc3RyaW5nJyBhbmQgbWFwLWdldCgkdGhlbWUsICR2YWx1ZSkpIHtcbiAgICAgICAgLS0jeyR2YXJ9OiB2YXIoLS0jeyR2YWx1ZX0pO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIC0tI3skdmFyfTogI3skdmFsdWV9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAncHJlLXByb2Nlc3MnICFnbG9iYWw7XG5cbiAgJG5iLXRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gICRuYi1wcm9jZXNzZWQtdGhlbWU6IG5iLXByb2Nlc3MtdGhlbWUobmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJHRoZW1lLW5hbWUpKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpIHtcbiAgJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ2xhenktcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogKCkgIWdsb2JhbDtcbn1cblxuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtY3NzLXByb3BzKCkge1xuICAvLyBAYnJlYWtpbmctY2hhbmdlIDUuMC4wXG4gIDpob3N0IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICRlbmFibGVkLXRoZW1lczogbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gJGVuYWJsZWQtdGhlbWVzIHtcblxuICAgIEBpbmNsdWRlIG5iLWxhenktcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKTtcblxuICAgIC8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0gOmhvc3Qge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBjb21wb25lbnQgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG4vLyBUT0RPOiB3ZSBoaWRlIDpob3N0IGluc2lkZSBvZiBpdCB3aGljaCBpcyBub3Qgb2J2aW91c1xuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMpIHtcblxuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuXG4gIH0gQGVsc2Uge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICBAY29udGVudDtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJHRoZW1lLW5hbWUpKTtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1zY3NzLXZhcnMoKSB7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAgIEBpbmNsdWRlIG5iLXByZS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gSW5zdGFsbHMgZ2xvYmFsIHN0eWxlcyBiYXNlZCBvbiByZWdpc3RlcmVkIHRoZW1lc1xuQG1peGluIG5iLWluc3RhbGwoKSB7XG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLWNzcy1wcm9wcygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkge1xuICAkcGFyZW50LXZhbHVlOiBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKTtcblxuICBAaWYgKCRwYXJlbnQtdmFsdWUgIT0gbnVsbCkge1xuICAgIEByZXR1cm4gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJHZhbHVlLCAkcGFyZW50LXZhbHVlKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5AZnVuY3Rpb24gbmItcHJvY2Vzcy10aGVtZSgkdGhlbWUpIHtcbiAgJHByb2Nlc3NlZC10aGVtZTogKCk7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICRwcm9jZXNzZWQtdGhlbWU6IG1hcC1zZXQoJHByb2Nlc3NlZC10aGVtZSwgJGtleSwgbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSk7XG4gIH1cbiAgQHJldHVybiAkcHJvY2Vzc2VkLXRoZW1lO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWN1cnJlbnQtdGhlbWUtbmFtZSgpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiAkbmItdGhlbWUtbmFtZTtcbiAgfVxuXG4gIEByZXR1cm4gZ2V0LWxhc3QtZW5hYmxlZC10aGVtZSgpO1xufVxuXG5AZnVuY3Rpb24gbmItdGhlbWUoJGtleSkge1xuXG4gICR2YWx1ZTogKCk7XG5cbiAgLy8gaW4gY2FzZSBvZiBjc3MgY3VzdG9tIHByb3BlcnRpZXMgLSBqdXN0IHJldHVybnMgdmFyKC0tdmFyLW5hbWUpIC0gdGhlIHJlc3QgaXMgYSBicm93c2VyIGpvYlxuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzID09IHRydWUpIHtcbiAgICAvLyB0aGVyZSBpcyBubyB3YXkgdG8gY2hlY2sgaWYgdmFyaWFibGUgZXhpc3RzIGFzIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQgaXMgb3V0c2lkZSBvZiBwYXJ0aWN1bGFyIHRoZW1lXG4gICAgLy8gYmVjYXVzZSB3ZSBwcm9jZXNzIGNzcyBpbiB0aGlzIG1vZGUgb25seSBvbmNlISAoYW5kIG5vdCBmb3IgZWFjaCB0aGVtZSlcbiAgICAkdmFsdWU6IHZhcigtLSN7JGtleX0pO1xuICB9IEBlbHNlIHtcbiAgICAvLyBpbiBhIHByZXByb2Nlc3MgbW9kZSAobmItaW5zdGFsbC1nbG9iYWwgY2FsbCkgZ2V0IHJlYWR5IHZhbHVlIGZyb20gJG5iLXByb2Nlc3NlZC10aGVtZSB2YXJpYWJsZVxuICAgIEBpZiAoJG5iLXRoZW1lLXByb2Nlc3MtbW9kZSA9PSAncHJlLXByb2Nlc3MnKSB7XG4gICAgICAkdmFsdWU6IG1hcC1nZXQoJG5iLXByb2Nlc3NlZC10aGVtZSwgJGtleSk7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIGxhemlseSBzZWFyY2ggZm9yIHZhcmlhYmxlIHZhbHVlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdsYXp5LXByb2Nlc3MnKSB7XG5cbiAgICAgICRuYi10aGVtZS1uYW1lOiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCk7XG5cbiAgICAgICR0aGVtZTogbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJG5iLXRoZW1lLW5hbWUpO1xuICAgICAgJHZhbHVlOiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCBtYXAtZ2V0KCR0aGVtZSwgJGtleSkpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiAoJHZhbHVlID09IG51bGwpIHtcbiAgICBAd2FybiAnTmVidWxhciBUaGVtZTogYG5iLXRoZW1lKClgIGNhbm5vdCBmaW5kIHZhbHVlIGZvciBrZXkgYCcgKyAka2V5ICsgJ2AgZm9yIHRoZW1lIGAnKyAkbmItdGhlbWUtbmFtZSArJ2AnO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcblxuJHRoZW1lOiAoXG5cbiAgLyoqXG4gICAqIFNhc3MgbWFwIGNvbnRhaW5zIGEgbGlzdCBvZiBhbGwgVGhlbWUgdmFyaWFibGVzIGFuZCBhbHNvIHRoZWlyIG1hcHBpbmdzIGludG8gQ29tcG9uZW50IHZhcmlhYmxlc1xuICAgKiBBIHRoZW1lIGNvbnNpc3RzIG9mIGEgbGlzdCBvZiBjb2xvcnMsIGJhY2tncm91bmRzLCBib3JkZXJzLCB0ZXh0IHN0eWxlcyBhbmQgc3VwcG9ydGluZyB2YXJpYWJsZXMuXG4gICAqL1xuXG5cbiAgLyogU3RhdHVzIGNvbG9yczogcHJpbWFyeSwgc3VjY2VzcywgaW5mbywgd2FybmluZywgZGFuZ2VyIC0gZm9yIGNvbG9yZWQgZWxlbWVudHMgKGJ1dHRvbnMsIGV0YykgKi9cblxuICBjb2xvci1wcmltYXJ5LTEwMDogI2YyZjZmZixcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNkOWU0ZmYsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjYTZjMWZmLFxuICBjb2xvci1wcmltYXJ5LTQwMDogIzU5OGJmZixcbiAgY29sb3ItcHJpbWFyeS01MDA6ICMzMzY2ZmYsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjMjc0YmRiLFxuICBjb2xvci1wcmltYXJ5LTcwMDogIzFhMzRiOCxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICMxMDI2OTQsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjMDkxYzdhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4xNiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC40KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci1zdWNjZXNzLTEwMDogI2YwZmZmNSxcbiAgY29sb3Itc3VjY2Vzcy0yMDA6ICNjY2ZjZTMsXG4gIGNvbG9yLXN1Y2Nlc3MtMzAwOiAjOGNmYWM3LFxuICBjb2xvci1zdWNjZXNzLTQwMDogIzJjZTY5YixcbiAgY29sb3Itc3VjY2Vzcy01MDA6ICMwMGQ2OGYsXG4gIGNvbG9yLXN1Y2Nlc3MtNjAwOiAjMDBiODg3LFxuICBjb2xvci1zdWNjZXNzLTcwMDogIzAwOTk3YSxcbiAgY29sb3Itc3VjY2Vzcy04MDA6ICMwMDdkNmMsXG4gIGNvbG9yLXN1Y2Nlc3MtOTAwOiAjMDA0YTQ1LFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjA4KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMTYpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4yNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjMyKSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjQ4KSxcblxuICBjb2xvci1pbmZvLTEwMDogI2YyZjhmZixcbiAgY29sb3ItaW5mby0yMDA6ICNjN2UyZmYsXG4gIGNvbG9yLWluZm8tMzAwOiAjOTRjYmZmLFxuICBjb2xvci1pbmZvLTQwMDogIzQyYWFmZixcbiAgY29sb3ItaW5mby01MDA6ICMwMDk1ZmYsXG4gIGNvbG9yLWluZm8tNjAwOiAjMDA2ZmQ2LFxuICBjb2xvci1pbmZvLTcwMDogIzAwNTdjMixcbiAgY29sb3ItaW5mby04MDA6ICMwMDQxYTgsXG4gIGNvbG9yLWluZm8tOTAwOiAjMDAyODg1LFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjA4KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMTYpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4yNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjMyKSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci13YXJuaW5nLTEwMDogI2ZmZmRmMixcbiAgY29sb3Itd2FybmluZy0yMDA6ICNmZmYxYzIsXG4gIGNvbG9yLXdhcm5pbmctMzAwOiAjZmZlNTllLFxuICBjb2xvci13YXJuaW5nLTQwMDogI2ZmYzk0ZCxcbiAgY29sb3Itd2FybmluZy01MDA6ICNmZmFhMDAsXG4gIGNvbG9yLXdhcm5pbmctNjAwOiAjZGI4YjAwLFxuICBjb2xvci13YXJuaW5nLTcwMDogI2I4NmUwMCxcbiAgY29sb3Itd2FybmluZy04MDA6ICM5NDU0MDAsXG4gIGNvbG9yLXdhcm5pbmctOTAwOiAjNzAzYzAwLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjA4KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMTYpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4yNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjMyKSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjQ4KSxcblxuICBjb2xvci1kYW5nZXItMTAwOiAjZmZmMmYyLFxuICBjb2xvci1kYW5nZXItMjAwOiAjZmZkNmQ5LFxuICBjb2xvci1kYW5nZXItMzAwOiAjZmZhOGI0LFxuICBjb2xvci1kYW5nZXItNDAwOiAjZmY3MDhkLFxuICBjb2xvci1kYW5nZXItNTAwOiAjZmYzZDcxLFxuICBjb2xvci1kYW5nZXItNjAwOiAjZGIyYzY2LFxuICBjb2xvci1kYW5nZXItNzAwOiAjYjgxZDViLFxuICBjb2xvci1kYW5nZXItODAwOiAjOTQxMjRlLFxuICBjb2xvci1kYW5nZXItOTAwOiAjNzAwOTQwLFxuXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjA4KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMTYpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4yNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjMyKSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjQ4KSxcblxuICAvKiBCYXNpYyBjb2xvcnMgLSBmb3IgYmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgYW5kIHRleHRzICovXG5cbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxuICBjb2xvci1iYXNpYy0yMDA6ICNmN2Y5ZmMsXG4gIGNvbG9yLWJhc2ljLTMwMDogI2VkZjFmNyxcbiAgY29sb3ItYmFzaWMtNDAwOiAjZTRlOWYyLFxuICBjb2xvci1iYXNpYy01MDA6ICNjNWNlZTAsXG4gIGNvbG9yLWJhc2ljLTYwMDogIzhmOWJiMyxcbiAgY29sb3ItYmFzaWMtNzAwOiAjMmUzYTU5LFxuICBjb2xvci1iYXNpYy04MDA6ICMyMjJiNDUsXG4gIGNvbG9yLWJhc2ljLTkwMDogIzE5MjAzOCxcbiAgY29sb3ItYmFzaWMtMTAwMDogIzE1MWEzMCxcbiAgY29sb3ItYmFzaWMtMTEwMDogIzEwMTQyNixcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpLFxuXG4gIC8qIFN0YXR1cyBjb2xvcnMgc3RhdGVzIC0gZm9jdXMsIGhvdmVyLCBkZWZhdWx0LCBhY3RpdmUsIGRpc2FibGVkICAqL1xuXG4gIGNvbG9yLWJhc2ljLWZvY3VzOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1wcmltYXJ5LWZvY3VzOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3ZlcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdDogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1zdWNjZXNzLWZvY3VzOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3ZlcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1pbmZvLWZvY3VzOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1ob3ZlcjogY29sb3ItaW5mby00MDAsXG4gIGNvbG9yLWluZm8tZGVmYXVsdDogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tYWN0aXZlOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby03MDAsXG4gIGNvbG9yLWluZm8taG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci13YXJuaW5nLWZvY3VzOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1ob3ZlcjogY29sb3Itd2FybmluZy00MDAsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdDogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy03MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1kYW5nZXItZm9jdXM6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1ob3ZlcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQ6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmU6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNzAwLFxuICBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC1hY3RpdmU6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkLWJvcmRlcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcblxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIC8qIEJhY2tncm91bmRzIGFuZCBib3JkZXJzIC0gYmFzaWMsIGFsdGVybmF0aXZlIGFuZCBwcmltYXJ5ICAqL1xuXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0xOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTI6IGNvbG9yLXByaW1hcnktNjAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMzogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci00OiBjb2xvci1wcmltYXJ5LTgwMCxcblxuICBib3JkZXItcHJpbWFyeS1jb2xvci0xOiBjb2xvci1iYXNpYy01MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMzogY29sb3ItYmFzaWMtNzAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci00OiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTU6IGNvbG9yLWJhc2ljLTkwMCxcblxuICAvKiBUZXh0IGNvbG9ycyAtIGdlbmVyYWwgYW5kIHN0YXR1cyAqL1xuXG4gIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdGV4dC1oaW50LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG5cbiAgdGV4dC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0ZXh0LXByaW1hcnktYWN0aXZlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdGV4dC1wcmltYXJ5LWRpc2FibGVkLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcblxuICB0ZXh0LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdGV4dC1zdWNjZXNzLWZvY3VzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0ZXh0LXN1Y2Nlc3MtaG92ZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRleHQtc3VjY2Vzcy1hY3RpdmUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICB0ZXh0LXN1Y2Nlc3MtZGlzYWJsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuXG4gIHRleHQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0ZXh0LWluZm8tZm9jdXMtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRleHQtaW5mby1ob3Zlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdGV4dC1pbmZvLWFjdGl2ZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHRleHQtaW5mby1kaXNhYmxlZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG5cbiAgdGV4dC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRleHQtd2FybmluZy1mb2N1cy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdGV4dC13YXJuaW5nLWhvdmVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0ZXh0LXdhcm5pbmctYWN0aXZlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgdGV4dC13YXJuaW5nLWRpc2FibGVkLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcblxuICB0ZXh0LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRleHQtZGFuZ2VyLWZvY3VzLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHRleHQtZGFuZ2VyLWhvdmVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRleHQtZGFuZ2VyLWFjdGl2ZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG5cbiAgLyogRm9udHMgYW5kIHRleHQgc3R5bGVzIC0gaGVhZGluZ3MsIHN1YnRpdGxlcywgcGFyYWdyYXBocywgY2FwdGlvbnMsIGJ1dHRvbiAqL1xuXG4gIGZvbnQtZmFtaWx5LXByaW1hcnk6IHVucXVvdGUoJ09wZW4gU2Fucywgc2Fucy1zZXJpZicpLFxuICBmb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG5cbiAgdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplOiAyLjI1cmVtLFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodDogM3JlbSxcblxuICB0ZXh0LWhlYWRpbmctMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMi1mb250LXNpemU6IDJyZW0sXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0yLWxpbmUtaGVpZ2h0OiAyLjVyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTMtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTMtZm9udC1zaXplOiAxLjg3NXJlbSxcbiAgdGV4dC1oZWFkaW5nLTMtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTMtbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctNC1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNC1mb250LXNpemU6IDEuNjI1cmVtLFxuICB0ZXh0LWhlYWRpbmctNC1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNC1saW5lLWhlaWdodDogMnJlbSxcblxuICB0ZXh0LWhlYWRpbmctNS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNS1mb250LXNpemU6IDEuMzc1cmVtLFxuICB0ZXh0LWhlYWRpbmctNS1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNS1saW5lLWhlaWdodDogMnJlbSxcblxuICB0ZXh0LWhlYWRpbmctNi1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNi1mb250LXNpemU6IDEuMTI1cmVtLFxuICB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtc3VidGl0bGUtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZTogMC44MTI1cmVtLFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZTogMC45Mzc1cmVtLFxuICB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodDogMS4yNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZTogMC44MTI1cmVtLFxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQ6IDEuMTI1cmVtLFxuXG4gIHRleHQtbGFiZWwtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtbGFiZWwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWxhYmVsLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtbGFiZWwtbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWNhcHRpb24tZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWNhcHRpb24tZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWNhcHRpb24tMi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZTogMC42MjVyZW0sXG4gIHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQ6IDAuNzVyZW0sXG4gIHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQ6IDFyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemU6IDAuODc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6IDFyZW0sXG4gIHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZTogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgLyogU3VwcG9ydGluZyB2YXJpYWJsZXMgLSBib3JkZXIgcmFkaXVzLCBvdXRsaW5lLCBzaGFkb3csIGRpdmlkZXIgKi9cblxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuXG4gIG91dGxpbmUtd2lkdGg6IDAuMzc1cmVtLFxuICBvdXRsaW5lLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG5cbiAgc2Nyb2xsYmFyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQsXG4gIHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNjcm9sbGJhci13aWR0aDogMC4zMTI1cmVtLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoNDQsIDUxLCA3MywgMC4xKSxcblxuICBkaXZpZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgZGl2aWRlci1zdHlsZTogc29saWQsXG4gIGRpdmlkZXItd2lkdGg6IDFweCxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4kdGhlbWU6IChcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtOTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgIzFhMWYzMyxcbiAgb3V0bGluZS1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRhcmssIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkYXJrJztcblxuJHRoZW1lOiAoXG5cbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNmYWY3ZmYsXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjZWNlM2ZmLFxuICBjb2xvci1wcmltYXJ5LTMwMDogI2Q1YmZmZixcbiAgY29sb3ItcHJpbWFyeS00MDA6ICNiMThhZmYsXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjYTE2ZWZmLFxuICBjb2xvci1wcmltYXJ5LTYwMDogIzdiNTFkYixcbiAgY29sb3ItcHJpbWFyeS03MDA6ICM1YTM3YjgsXG4gIGNvbG9yLXByaW1hcnktODAwOiAjM2UyNDk0LFxuICBjb2xvci1wcmltYXJ5LTkwMDogIzI5MTU3YSxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4xNiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC40KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxuICBjb2xvci1iYXNpYy0yMDA6ICNmN2Y3ZmMsXG4gIGNvbG9yLWJhc2ljLTMwMDogI2YwZjBmYSxcbiAgY29sb3ItYmFzaWMtNDAwOiAjZTFlMWYyLFxuICBjb2xvci1iYXNpYy01MDA6ICNjZWNlZWIsXG4gIGNvbG9yLWJhc2ljLTYwMDogI2I0YjRkYixcbiAgY29sb3ItYmFzaWMtNzAwOiAjNmE2YTk0LFxuICBjb2xvci1iYXNpYy04MDA6ICMzMjMyNTksXG4gIGNvbG9yLWJhc2ljLTkwMDogIzI1MjU0NyxcbiAgY29sb3ItYmFzaWMtMTAwMDogIzFiMWIzOCxcbiAgY29sb3ItYmFzaWMtMTEwMDogIzEzMTMyYixcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40OCksXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvc21pYywgZGFyayk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4kdGhlbWU6IChcbiAgYm9yZGVyLXJhZGl1czogMC4xN3JlbSxcbiAgc2hhZG93OiBub25lLFxuXG4gIGJ1dHRvbi1oZXJvLWdsb3ctc2l6ZTogMCAwIDIwcHggMCxcblxuICBjYXJkLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgY29udGV4dC1tZW51LWJvcmRlci13aWR0aDogMXB4LFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICB0YWJzZXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIG1vZGFsLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG5cbiAgdGFic2V0LXNoYWRvdzogbm9uZSxcbiAgcm91dGUtdGFic2V0LXNoYWRvdzogbm9uZSxcbiAgYnV0dG9uLWhlcm8tc2hhZG93OiBub25lLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFjY29yZGlvbi1zaGFkb3c6IG5vbmUsXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvcnBvcmF0ZSwgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuICBjb2xvci1wcmltYXJ5LTEwMDogI2ZmZjJmNyxcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNmZmQ0ZTMsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjZmM5YWJjLFxuICBjb2xvci1wcmltYXJ5LTQwMDogI2YyNDY4MSxcbiAgY29sb3ItcHJpbWFyeS01MDA6ICNlOTFkNjMsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjYzcxNDUxLFxuICBjb2xvci1wcmltYXJ5LTcwMDogI2E4MGQ0MyxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICM4NzA5MzUsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjNzAwNjJhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDIzMywgMjksIDk5LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjMzLCAyOSwgOTksIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSgyMzMsIDI5LCA5OSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDIzMywgMjksIDk5LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoMjMzLCAyOSwgOTksIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDIzMywgMjksIDk5LCAwLjQ4KSxcblxuICBjb2xvci1zdWNjZXNzLTEwMDogI2VkZmJkMSxcbiAgY29sb3Itc3VjY2Vzcy0yMDA6ICNkN2Y3YTYsXG4gIGNvbG9yLXN1Y2Nlc3MtMzAwOiAjYjRlNzc1LFxuICBjb2xvci1zdWNjZXNzLTQwMDogIzhmY2Y1MCxcbiAgY29sb3Itc3VjY2Vzcy01MDA6ICM2MGFmMjAsXG4gIGNvbG9yLXN1Y2Nlc3MtNjAwOiAjNDk5NjE3LFxuICBjb2xvci1zdWNjZXNzLTcwMDogIzM1N2QxMCxcbiAgY29sb3Itc3VjY2Vzcy04MDA6ICMyNDY1MGEsXG4gIGNvbG9yLXN1Y2Nlc3MtOTAwOiAjMTc1MzA2LFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjA4KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMTYpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4yNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjMyKSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC01MDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjQ4KSxcblxuICBjb2xvci1pbmZvLTEwMDogI2NjZjdmZSxcbiAgY29sb3ItaW5mby0yMDA6ICM5OWU5ZmQsXG4gIGNvbG9yLWluZm8tMzAwOiAjNjZkM2Y5LFxuICBjb2xvci1pbmZvLTQwMDogIzQwYmJmNCxcbiAgY29sb3ItaW5mby01MDA6ICMwNDk1ZWUsXG4gIGNvbG9yLWluZm8tNjAwOiAjMDI3M2NjLFxuICBjb2xvci1pbmZvLTcwMDogIzAyNTZhYixcbiAgY29sb3ItaW5mby04MDA6ICMwMTNkOGEsXG4gIGNvbG9yLWluZm8tOTAwOiAjMDAyYjcyLFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjA4KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuMTYpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4yNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjMyKSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC01MDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjQ4KSxcblxuICBjb2xvci13YXJuaW5nLTEwMDogI2ZmZjNjZCxcbiAgY29sb3Itd2FybmluZy0yMDA6ICNmZmU0OWIsXG4gIGNvbG9yLXdhcm5pbmctMzAwOiAjZmZkMTY5LFxuICBjb2xvci13YXJuaW5nLTQwMDogI2ZmYmU0MyxcbiAgY29sb3Itd2FybmluZy01MDA6ICNmZjlmMDUsXG4gIGNvbG9yLXdhcm5pbmctNjAwOiAjZGI4MDAzLFxuICBjb2xvci13YXJuaW5nLTcwMDogI2I3NjMwMixcbiAgY29sb3Itd2FybmluZy04MDA6ICM5MzRhMDEsXG4gIGNvbG9yLXdhcm5pbmctOTAwOiAjN2EzODAwLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjA4KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuMTYpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4yNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjMyKSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjQ4KSxcblxuICBjb2xvci1kYW5nZXItMTAwOiAjZmJkMmM4LFxuICBjb2xvci1kYW5nZXItMjAwOiAjZjc5ZTk0LFxuICBjb2xvci1kYW5nZXItMzAwOiAjZTc1ZDVjLFxuICBjb2xvci1kYW5nZXItNDAwOiAjY2YzMzQxLFxuICBjb2xvci1kYW5nZXItNTAwOiAjYjAwMDIwLFxuICBjb2xvci1kYW5nZXItNjAwOiAjOTcwMDI5LFxuICBjb2xvci1kYW5nZXItNzAwOiAjN2UwMDJlLFxuICBjb2xvci1kYW5nZXItODAwOiAjNjYwMDJmLFxuICBjb2xvci1kYW5nZXItOTAwOiAjNTQwMDJmLFxuXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4wOCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4xNiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4yNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC00MDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4zMiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDA6IHJnYmEoMTc2LCAwLCAzMiwgMC40KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y1ZjVmNSxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZjVmNWY1LFxuICBjb2xvci1iYXNpYy00MDA6ICNkNGQ0ZDQsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2IzYjNiMyxcbiAgY29sb3ItYmFzaWMtNjAwOiAjODA4MDgwLFxuICBjb2xvci1iYXNpYy03MDA6ICM0MDQwNDAsXG4gIGNvbG9yLWJhc2ljLTgwMDogIzM1MzUzNSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMzAzMDMwLFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMWYxZjFmLFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTQxNDE0LFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtZm9jdXM6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgY29sb3ItYmFzaWMtZGVmYXVsdDogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1iYXNpYy1hY3RpdmU6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy1hY3RpdmUsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXByaW1hcnktZm9jdXM6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWhvdmVyOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmU6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1czogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWluZm8tZm9jdXM6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWhvdmVyOiBjb2xvci1pbmZvLTQwMCxcbiAgY29sb3ItaW5mby1kZWZhdWx0OiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby1hY3RpdmU6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTcwMCxcbiAgY29sb3ItaW5mby1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8taG92ZXIsXG4gIGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY29sb3ItaW5mby1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1czogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXdhcm5pbmctZm9jdXM6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWhvdmVyOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0OiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmU6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci03MDAsXG4gIGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItY29udHJvbC1mb2N1czogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdDogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLWFjdGl2ZTogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRpc2FibGVkLFxuXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtOTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLFxuXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMzogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci01OiBjb2xvci1wcmltYXJ5LTkwMCxcblxuICBib3JkZXItc3VjY2Vzcy1jb2xvci0xOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItMjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTM6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICBib3JkZXItc3VjY2Vzcy1jb2xvci00OiBjb2xvci1zdWNjZXNzLTgwMCxcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItNTogY29sb3Itc3VjY2Vzcy05MDAsXG5cbiAgYm9yZGVyLWluZm8tY29sb3ItMTogY29sb3ItaW5mby01MDAsXG4gIGJvcmRlci1pbmZvLWNvbG9yLTI6IGNvbG9yLWluZm8tNjAwLFxuICBib3JkZXItaW5mby1jb2xvci0zOiBjb2xvci1pbmZvLTcwMCxcbiAgYm9yZGVyLWluZm8tY29sb3ItNDogY29sb3ItaW5mby04MDAsXG4gIGJvcmRlci1pbmZvLWNvbG9yLTU6IGNvbG9yLWluZm8tOTAwLFxuXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTE6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBib3JkZXItd2FybmluZy1jb2xvci0yOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItMzogY29sb3Itd2FybmluZy03MDAsXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTQ6IGNvbG9yLXdhcm5pbmctODAwLFxuICBib3JkZXItd2FybmluZy1jb2xvci01OiBjb2xvci13YXJuaW5nLTkwMCxcblxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTE6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJvcmRlci1kYW5nZXItY29sb3ItMjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYm9yZGVyLWRhbmdlci1jb2xvci0zOiBjb2xvci1kYW5nZXItNzAwLFxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTQ6IGNvbG9yLWRhbmdlci04MDAsXG4gIGJvcmRlci1kYW5nZXItY29sb3ItNTogY29sb3ItZGFuZ2VyLTkwMCxcblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy05MDAsXG4gIHRleHQtY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRleHQtaGludC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuXG4gIHRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG5cbiAgdGV4dC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0ZXh0LXN1Y2Nlc3MtYWN0aXZlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcblxuICB0ZXh0LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdGV4dC1pbmZvLWZvY3VzLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0ZXh0LWluZm8taG92ZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRleHQtaW5mby1hY3RpdmUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICB0ZXh0LWluZm8tZGlzYWJsZWQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuXG4gIHRleHQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRleHQtd2FybmluZy1ob3Zlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG5cbiAgdGV4dC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0ZXh0LWRhbmdlci1ob3Zlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0ZXh0LWRhbmdlci1hY3RpdmUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuXG4gIGZvbnQtZmFtaWx5LXByaW1hcnk6IHVucXVvdGUoJ1JvYm90bywgc2Fucy1zZXJpZicpLFxuXG4gIHNoYWRvdzogdW5xdW90ZShcbiAgICAnMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSdcbiAgICApLFxuICBjYXJkLXNoYWRvdzogc2hhZG93LFxuICBoZWFkZXItc2hhZG93OiB1bnF1b3RlKFxuICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiknXG4gICksXG5cbiAgaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBmb290ZXItdGV4dC1oaWdobGlnaHQtY29sb3I6IGZvb3Rlci10ZXh0LWNvbG9yLFxuICBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcblxuICBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIG1lbnUtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgbWVudS10ZXh0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXG4gIG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXG4gIG1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpLFxuICBtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSksXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KSxcblxuICBjYXJkLWJvcmRlci1zdHlsZTogbm9uZSxcbiAgY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGNhcmQtZGl2aWRlci1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuXG4gIGlucHV0LWJvcmRlci13aWR0aDogMXB4LFxuICBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcixcbiAgaW5wdXQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3IsXG4gIGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBpbnB1dC1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBpbnB1dC1tZWRpdW0tcGFkZGluZzogMC43NXJlbSAxcmVtLFxuICBpbnB1dC1sYXJnZS1wYWRkaW5nOiAxcmVtIDFyZW0sXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG5cbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgc2VsZWN0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAsXG4gIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAsXG4gIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLFxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGg6IDAgMCAxcHggMCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBvcHRpb24tbGlzdC1zaGFkb3c6IHNoYWRvdyxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlOiBub25lLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG5vbmUsXG4gIG9wdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIG9wdGlvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhLFxuICBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyLFxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0XG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIG1hdGVyaWFsLWRhcmssIGRhcmspO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNlOGNiZmUsXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjY2U5N2ZkLFxuICBjb2xvci1wcmltYXJ5LTMwMDogI2FlNjNmOSxcbiAgY29sb3ItcHJpbWFyeS00MDA6ICM5MDNkZjQsXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjNjIwMGVlLFxuICBjb2xvci1wcmltYXJ5LTYwMDogIzRiMDBjYyxcbiAgY29sb3ItcHJpbWFyeS03MDA6ICMzODAwYWIsXG4gIGNvbG9yLXByaW1hcnktODAwOiAjMjcwMDhhLFxuICBjb2xvci1wcmltYXJ5LTkwMDogIzFiMDA3MixcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSg5OCwgMCwgMjM4LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoOTgsIDAsIDIzOCwgMC4xNiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDk4LCAwLCAyMzgsIDAuMjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSg5OCwgMCwgMjM4LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoOTgsIDAsIDIzOCwgMC40KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoOTgsIDAsIDIzOCwgMC40OCksXG5cbiAgY29sb3Itc3VjY2Vzcy0xMDA6ICNlZGZiZDEsXG4gIGNvbG9yLXN1Y2Nlc3MtMjAwOiAjZDdmN2E2LFxuICBjb2xvci1zdWNjZXNzLTMwMDogI2I0ZTc3NSxcbiAgY29sb3Itc3VjY2Vzcy00MDA6ICM4ZmNmNTAsXG4gIGNvbG9yLXN1Y2Nlc3MtNTAwOiAjNjBhZjIwLFxuICBjb2xvci1zdWNjZXNzLTYwMDogIzQ5OTYxNyxcbiAgY29sb3Itc3VjY2Vzcy03MDA6ICMzNTdkMTAsXG4gIGNvbG9yLXN1Y2Nlc3MtODAwOiAjMjQ2NTBhLFxuICBjb2xvci1zdWNjZXNzLTkwMDogIzE3NTMwNixcblxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4wOCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjE2KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTQwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4zMiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTYwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC40OCksXG5cbiAgY29sb3ItaW5mby0xMDA6ICNjY2Y3ZmUsXG4gIGNvbG9yLWluZm8tMjAwOiAjOTllOWZkLFxuICBjb2xvci1pbmZvLTMwMDogIzY2ZDNmOSxcbiAgY29sb3ItaW5mby00MDA6ICM0MGJiZjQsXG4gIGNvbG9yLWluZm8tNTAwOiAjMDQ5NWVlLFxuICBjb2xvci1pbmZvLTYwMDogIzAyNzNjYyxcbiAgY29sb3ItaW5mby03MDA6ICMwMjU2YWIsXG4gIGNvbG9yLWluZm8tODAwOiAjMDEzZDhhLFxuICBjb2xvci1pbmZvLTkwMDogIzAwMmI3MixcblxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4wOCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjE2KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuMjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4zMiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTYwMDogcmdiYSg0LCAxNDksIDIzOCwgMC40OCksXG5cbiAgY29sb3Itd2FybmluZy0xMDA6ICNmZmYzY2QsXG4gIGNvbG9yLXdhcm5pbmctMjAwOiAjZmZlNDliLFxuICBjb2xvci13YXJuaW5nLTMwMDogI2ZmZDE2OSxcbiAgY29sb3Itd2FybmluZy00MDA6ICNmZmJlNDMsXG4gIGNvbG9yLXdhcm5pbmctNTAwOiAjZmY5ZjA1LFxuICBjb2xvci13YXJuaW5nLTYwMDogI2RiODAwMyxcbiAgY29sb3Itd2FybmluZy03MDA6ICNiNzYzMDIsXG4gIGNvbG9yLXdhcm5pbmctODAwOiAjOTM0YTAxLFxuICBjb2xvci13YXJuaW5nLTkwMDogIzdhMzgwMCxcblxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4wOCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjE2KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuMjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4zMiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC40OCksXG5cbiAgY29sb3ItZGFuZ2VyLTEwMDogI2ZiZDJjOCxcbiAgY29sb3ItZGFuZ2VyLTIwMDogI2Y3OWU5NCxcbiAgY29sb3ItZGFuZ2VyLTMwMDogI2U3NWQ1YyxcbiAgY29sb3ItZGFuZ2VyLTQwMDogI2NmMzM0MSxcbiAgY29sb3ItZGFuZ2VyLTUwMDogI2IwMDAyMCxcbiAgY29sb3ItZGFuZ2VyLTYwMDogIzk3MDAyOSxcbiAgY29sb3ItZGFuZ2VyLTcwMDogIzdlMDAyZSxcbiAgY29sb3ItZGFuZ2VyLTgwMDogIzY2MDAyZixcbiAgY29sb3ItZGFuZ2VyLTkwMDogIzU0MDAyZixcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMDgpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMTYpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMjQpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMzIpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC02MDA6IHJnYmEoMTc2LCAwLCAzMiwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxuICBjb2xvci1iYXNpYy0yMDA6ICNmNWY1ZjUsXG4gIGNvbG9yLWJhc2ljLTMwMDogI2ViZWJlYixcbiAgY29sb3ItYmFzaWMtNDAwOiAjZTBlMGUwLFxuICBjb2xvci1iYXNpYy01MDA6ICNiM2IzYjMsXG4gIGNvbG9yLWJhc2ljLTYwMDogIzgzODM4MyxcbiAgY29sb3ItYmFzaWMtNzAwOiAjNjM2MzYzLFxuICBjb2xvci1iYXNpYy04MDA6ICM0MjQyNDIsXG4gIGNvbG9yLWJhc2ljLTkwMDogIzI0MjQyNCxcbiAgY29sb3ItYmFzaWMtMTAwMDogIzFiMWIxYixcbiAgY29sb3ItYmFzaWMtMTEwMDogIzAwMDAwMCxcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLWZvY3VzOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1wcmltYXJ5LWZvY3VzOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3ZlcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdDogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1zdWNjZXNzLWZvY3VzOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3ZlcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1pbmZvLWZvY3VzOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1ob3ZlcjogY29sb3ItaW5mby00MDAsXG4gIGNvbG9yLWluZm8tZGVmYXVsdDogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tYWN0aXZlOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby03MDAsXG4gIGNvbG9yLWluZm8taG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci13YXJuaW5nLWZvY3VzOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1ob3ZlcjogY29sb3Itd2FybmluZy00MDAsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdDogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy03MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1kYW5nZXItZm9jdXM6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1ob3ZlcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQ6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmU6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNzAwLFxuICBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC1hY3RpdmU6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkLWJvcmRlcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcblxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiAjZmFmYWZhLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItcHJpbWFyeS1jb2xvci0xOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLXByaW1hcnktNzAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci00OiBjb2xvci1wcmltYXJ5LTgwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItcHJpbWFyeS05MDAsXG5cbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItMTogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTI6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBib3JkZXItc3VjY2Vzcy1jb2xvci0zOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItNDogY29sb3Itc3VjY2Vzcy04MDAsXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTU6IGNvbG9yLXN1Y2Nlc3MtOTAwLFxuXG4gIGJvcmRlci1pbmZvLWNvbG9yLTE6IGNvbG9yLWluZm8tNTAwLFxuICBib3JkZXItaW5mby1jb2xvci0yOiBjb2xvci1pbmZvLTYwMCxcbiAgYm9yZGVyLWluZm8tY29sb3ItMzogY29sb3ItaW5mby03MDAsXG4gIGJvcmRlci1pbmZvLWNvbG9yLTQ6IGNvbG9yLWluZm8tODAwLFxuICBib3JkZXItaW5mby1jb2xvci01OiBjb2xvci1pbmZvLTkwMCxcblxuICBib3JkZXItd2FybmluZy1jb2xvci0xOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItMjogY29sb3Itd2FybmluZy02MDAsXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTM6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBib3JkZXItd2FybmluZy1jb2xvci00OiBjb2xvci13YXJuaW5nLTgwMCxcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItNTogY29sb3Itd2FybmluZy05MDAsXG5cbiAgYm9yZGVyLWRhbmdlci1jb2xvci0xOiBjb2xvci1kYW5nZXItNTAwLFxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTI6IGNvbG9yLWRhbmdlci02MDAsXG4gIGJvcmRlci1kYW5nZXItY29sb3ItMzogY29sb3ItZGFuZ2VyLTcwMCxcbiAgYm9yZGVyLWRhbmdlci1jb2xvci00OiBjb2xvci1kYW5nZXItODAwLFxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTU6IGNvbG9yLWRhbmdlci05MDAsXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcblxuICB0ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0ZXh0LXByaW1hcnktaG92ZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuXG4gIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG5cbiAgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcblxuICB0ZXh0LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0ZXh0LXdhcm5pbmctaG92ZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRleHQtd2FybmluZy1hY3RpdmUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuXG4gIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcblxuICBmb250LWZhbWlseS1wcmltYXJ5OiB1bnF1b3RlKCdSb2JvdG8sIHNhbnMtc2VyaWYnKSxcblxuICBzaGFkb3c6IHVucXVvdGUoJzAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKScpLFxuICBjYXJkLXNoYWRvdzogc2hhZG93LFxuICBoZWFkZXItc2hhZG93OiB1bnF1b3RlKFxuICAgICcwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKSdcbiAgKSxcblxuICBoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBoZWFkZXItdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXG4gIGZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWFsdGVybmF0ZS1jb2xvcixcbiAgZm9vdGVyLXRleHQtaGlnaGxpZ2h0LWNvbG9yOiBmb290ZXItdGV4dC1jb2xvcixcbiAgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG5cbiAgbWVudS10ZXh0LWZvbnQtd2VpZ2h0OiA0MDAsXG4gIG1lbnUtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSxcbiAgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NyksXG4gIG1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpLFxuICBtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCksXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NyksXG4gIG1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSksXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpLFxuXG4gIGNhcmQtYm9yZGVyLXN0eWxlOiBub25lLFxuICBjYXJkLWRpdmlkZXItY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcblxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcbiAgaW5wdXQtYmFzaWMtYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpLFxuICBpbnB1dC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKSxcbiAgaW5wdXQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpLFxuICBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG4gIGlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcbiAgaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcbiAgaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcbiAgaW5wdXQtbGFyZ2UtcGFkZGluZzogMXJlbSAxcmVtLFxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgc2VsZWN0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLFxuICBzZWxlY3Qtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLFxuICBzZWxlY3Qtcm91bmQtYm9yZGVyLXJhZGl1czogMCxcbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDAsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKSxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXG4gIG9wdGlvbi1saXN0LXNoYWRvdzogc2hhZG93LFxuICBvcHRpb24tbGlzdC1ib3JkZXItc3R5bGU6IG5vbmUsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1zdHlsZTogbm9uZSxcbiAgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgb3B0aW9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IG9wdGlvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0XG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIG1hdGVyaWFsLWxpZ2h0LCBkZWZhdWx0KTtcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-pages',
            styleUrls: ['pages.component.scss'],
            template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  "
          }]
        }], function () {
          return [{
            type: _services_employee_pinner_service__WEBPACK_IMPORTED_MODULE_1__["EmployeePinService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/pages.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pages/pages.module.ts ***!
      \***************************************/

    /*! exports provided: PagesModule */

    /***/
    function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../@theme/theme.module */
      "./src/app/@theme/theme.module.ts");
      /* harmony import */


      var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages.component */
      "./src/app/pages/pages.component.ts");
      /* harmony import */


      var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages-routing.module */
      "./src/app/pages/pages-routing.module.ts");
      /* harmony import */


      var _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./miscellaneous/not-found/not-found.component */
      "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/pages/dashboard/dashboard.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_employee_pinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/employee-pinner.service */
      "./src/app/pages/services/employee-pinner.service.ts");

      var PagesModule = function PagesModule() {
        _classCallCheck(this, PagesModule);
      };

      PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PagesModule
      });
      PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PagesModule_Factory(t) {
          return new (t || PagesModule)();
        },
        providers: [_services_employee_pinner_service__WEBPACK_IMPORTED_MODULE_8__["EmployeePinService"]],
        imports: [[_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
          declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]],
          imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]],
            providers: [_services_employee_pinner_service__WEBPACK_IMPORTED_MODULE_8__["EmployeePinService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/services/employee-pinner.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/services/employee-pinner.service.ts ***!
      \***********************************************************/

    /*! exports provided: EmployeePinService */

    /***/
    function srcAppPagesServicesEmployeePinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeePinService", function () {
        return EmployeePinService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");

      var EmployeePinService = /*#__PURE__*/function () {
        function EmployeePinService(storage) {
          var _this21 = this;

          _classCallCheck(this, EmployeePinService);

          this.storage = storage;
          this.STORAGE_KEY = 'EmployeePinService:pinnedEmployees';
          this.pinnedEmployees = new Set();
          this.employeePinAddEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.employeePinRemoveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.storage.get(this.STORAGE_KEY).subscribe(function (storedPinnedEmployees) {
            if (!(storedPinnedEmployees === undefined)) {
              _this21.pinnedEmployees = storedPinnedEmployees;
            }
          });
        }

        _createClass(EmployeePinService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "pinEmployee",
          value: function pinEmployee(employee) {
            if (!this.isPinned(employee)) {
              this.pinnedEmployees.add(employee);
            }

            this.employeePinAddEvent.emit(employee);
          }
        }, {
          key: "unpinEmployee",
          value: function unpinEmployee(employee) {
            var _iterator4 = _createForOfIteratorHelper(this.pinnedEmployees),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var pinnedEmployee = _step4.value;

                if (pinnedEmployee.id === employee.id) {
                  this.pinnedEmployees["delete"](pinnedEmployee);
                  break;
                }
              } // this.pinnedEmployees.delete(employee);

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this.employeePinRemoveEvent.emit(employee);
          }
        }, {
          key: "getPinnedEmployees",
          value: function getPinnedEmployees() {
            return Array.from(this.pinnedEmployees.keys());
          }
        }, {
          key: "isPinned",
          value: function isPinned(employee) {
            var _iterator5 = _createForOfIteratorHelper(this.pinnedEmployees),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var pinnedEmployee = _step5.value;

                if (pinnedEmployee.id === employee.id) {
                  return true;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return false; //return this.pinnedEmployees.has(employee);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.storage.set(this.STORAGE_KEY, this.pinnedEmployees);
          }
        }]);

        return EmployeePinService;
      }();

      EmployeePinService.ɵfac = function EmployeePinService_Factory(t) {
        return new (t || EmployeePinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["StorageMap"]));
      };

      EmployeePinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployeePinService,
        factory: EmployeePinService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeePinService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["StorageMap"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-pages-module-es5.js.map