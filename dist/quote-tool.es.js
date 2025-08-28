import et from "react";
import * as p from "three";
import { Controls as yt, Vector3 as E, MOUSE as k, TOUCH as A, Quaternion as lt, Spherical as ct, Vector2 as y, Ray as gt, Plane as Et, MathUtils as Tt } from "three";
var W = { exports: {} }, v = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Pt() {
  if (dt) return v;
  dt = 1;
  var i = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(n, o, a) {
    var l = null;
    if (a !== void 0 && (l = "" + a), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      a = {};
      for (var d in o)
        d !== "key" && (a[d] = o[d]);
    } else a = o;
    return o = a.ref, {
      $$typeof: i,
      type: n,
      key: l,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return v.Fragment = t, v.jsx = s, v.jsxs = s, v;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function Rt() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === C ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case M:
          return "Fragment";
        case U:
          return "Profiler";
        case it:
          return "StrictMode";
        case V:
          return "Suspense";
        case q:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case K:
            return "Portal";
          case F:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case R:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function s(e) {
      try {
        t(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var c = r.error, _ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(e);
      }
    }
    function n(e) {
      if (e === M) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function c() {
        nt || (nt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function T() {
      var e = i(this.type);
      return ot[e] || (ot[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, r, c, _, w, g, $, J) {
      return c = g.ref, e = {
        $$typeof: I,
        type: e,
        key: r,
        props: g,
        _owner: w
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: T
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, c, _, w, g, $, J) {
      var f = r.children;
      if (f !== void 0)
        if (_)
          if (B(f)) {
            for (_ = 0; _ < f.length; _++)
              Y(f[_]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Y(f);
      if (H.call(r, "key")) {
        f = i(e);
        var L = Object.keys(r).filter(function(bt) {
          return bt !== "key";
        });
        _ = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", ht[f + _] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          f,
          L,
          f
        ), ht[f + _] = !0);
      }
      if (f = null, c !== void 0 && (s(c), f = "" + c), l(r) && (s(r.key), f = "" + r.key), "key" in r) {
        c = {};
        for (var Q in r)
          Q !== "key" && (c[Q] = r[Q]);
      } else c = r;
      return f && d(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(
        e,
        f,
        g,
        w,
        o(),
        c,
        $,
        J
      );
    }
    function Y(e) {
      typeof e == "object" && e !== null && e.$$typeof === I && e._store && (e._store.validated = 1);
    }
    var x = et, I = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), F = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), S = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, B = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var nt, ot = {}, at = x["react-stack-bottom-frame"].bind(
      x,
      a
    )(), rt = G(n(a)), ht = {};
    N.Fragment = M, N.jsx = function(e, r, c, _, w) {
      var g = 1e4 > S.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        c,
        !1,
        _,
        w,
        g ? Error("react-stack-top-frame") : at,
        g ? G(n(e)) : rt
      );
    }, N.jsxs = function(e, r, c, _, w) {
      var g = 1e4 > S.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        c,
        !0,
        _,
        w,
        g ? Error("react-stack-top-frame") : at,
        g ? G(n(e)) : rt
      );
    };
  }()), N;
}
var pt;
function St() {
  return pt || (pt = 1, process.env.NODE_ENV === "production" ? W.exports = Pt() : W.exports = Rt()), W.exports;
}
var m = St();
const mt = { type: "change" }, st = { type: "start" }, ft = { type: "end" }, X = new gt(), _t = new Et(), wt = Math.cos(70 * Tt.DEG2RAD), u = new E(), b = 2 * Math.PI, h = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, tt = 1e-6;
class Dt extends yt {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, s = null) {
    super(t, s), this.state = h.NONE, this.target = new E(), this.cursor = new E(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: k.ROTATE, MIDDLE: k.DOLLY, RIGHT: k.PAN }, this.touches = { ONE: A.ROTATE, TWO: A.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new E(), this._lastQuaternion = new lt(), this._lastTargetPosition = new E(), this._quat = new lt().setFromUnitVectors(t.up, new E(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new ct(), this._sphericalDelta = new ct(), this._scale = 1, this._panOffset = new E(), this._rotateStart = new y(), this._rotateEnd = new y(), this._rotateDelta = new y(), this._panStart = new y(), this._panEnd = new y(), this._panDelta = new y(), this._dollyStart = new y(), this._dollyEnd = new y(), this._dollyDelta = new y(), this._dollyDirection = new E(), this._mouse = new y(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Mt.bind(this), this._onPointerDown = xt.bind(this), this._onPointerUp = Ot.bind(this), this._onContextMenu = Nt.bind(this), this._onMouseWheel = At.bind(this), this._onKeyDown = kt.bind(this), this._onTouchStart = Ct.bind(this), this._onTouchMove = vt.bind(this), this._onMouseDown = jt.bind(this), this._onMouseMove = Lt.bind(this), this._interceptControlDown = Yt.bind(this), this._interceptControlUp = It.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  /**
   * Get the current vertical rotation, in radians.
   *
   * @return {number} The current vertical rotation, in radians.
   */
  getPolarAngle() {
    return this._spherical.phi;
  }
  /**
   * Get the current horizontal rotation, in radians.
   *
   * @return {number} The current horizontal rotation, in radians.
   */
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  /**
   * Returns the distance from the camera to the target.
   *
   * @return {number} The distance from the camera to the target.
   */
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  /**
   * Adds key event listeners to the given DOM element.
   * `window` is a recommended argument for using this method.
   *
   * @param {HTMLDOMElement} domElement - The DOM element
   */
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  /**
   * Removes the key event listener previously defined with `listenToKeyEvents()`.
   */
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  /**
   * Save the current state of the controls. This can later be recovered with `reset()`.
   */
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  /**
   * Reset the controls to their state from either the last time the `saveState()`
   * was called, or the initial state.
   */
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(mt), this.update(), this.state = h.NONE;
  }
  update(t = null) {
    const s = this.object.position;
    u.copy(s).sub(this.target), u.applyQuaternion(this._quat), this._spherical.setFromVector3(u), this.autoRotate && this.state === h.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, o = this.maxAzimuthAngle;
    isFinite(n) && isFinite(o) && (n < -Math.PI ? n += b : n > Math.PI && (n -= b), o < -Math.PI ? o += b : o > Math.PI && (o -= b), n <= o ? this._spherical.theta = Math.max(n, Math.min(o, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + o) / 2 ? Math.max(n, this._spherical.theta) : Math.min(o, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let a = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const l = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), a = l != this._spherical.radius;
    }
    if (u.setFromSpherical(this._spherical), u.applyQuaternion(this._quatInverse), s.copy(this.target).add(u), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let l = null;
      if (this.object.isPerspectiveCamera) {
        const d = u.length();
        l = this._clampDistance(d * this._scale);
        const T = d - l;
        this.object.position.addScaledVector(this._dollyDirection, T), this.object.updateMatrixWorld(), a = !!T;
      } else if (this.object.isOrthographicCamera) {
        const d = new E(this._mouse.x, this._mouse.y, 0);
        d.unproject(this.object);
        const T = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), a = T !== this.object.zoom;
        const D = new E(this._mouse.x, this._mouse.y, 0);
        D.unproject(this.object), this.object.position.sub(D).add(d), this.object.updateMatrixWorld(), l = u.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      l !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position) : (X.origin.copy(this.object.position), X.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(X.direction)) < wt ? this.object.lookAt(this.target) : (_t.setFromNormalAndCoplanarPoint(this.object.up, this.target), X.intersectPlane(_t, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const l = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), l !== this.object.zoom && (this.object.updateProjectionMatrix(), a = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, a || this._lastPosition.distanceToSquared(this.object.position) > tt || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > tt || this._lastTargetPosition.distanceToSquared(this.target) > tt ? (this.dispatchEvent(mt), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? b / 60 * this.autoRotateSpeed * t : b / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const s = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * s);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, s) {
    u.setFromMatrixColumn(s, 0), u.multiplyScalar(-t), this._panOffset.add(u);
  }
  _panUp(t, s) {
    this.screenSpacePanning === !0 ? u.setFromMatrixColumn(s, 1) : (u.setFromMatrixColumn(s, 0), u.crossVectors(this.object.up, u)), u.multiplyScalar(t), this._panOffset.add(u);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, s) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const o = this.object.position;
      u.copy(o).sub(this.target);
      let a = u.length();
      a *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * a / n.clientHeight, this.object.matrix), this._panUp(2 * s * a / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(s * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(t, s) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), o = t - n.left, a = s - n.top, l = n.width, d = n.height;
    this._mouse.x = o / l * 2 - 1, this._mouse.y = -(a / d) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const s = this.domElement;
    this._rotateLeft(b * this._rotateDelta.x / s.clientHeight), this._rotateUp(b * this._rotateDelta.y / s.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let s = !1;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(b * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), s = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-b * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), s = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(b * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), s = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-b * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), s = !0;
        break;
    }
    s && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const s = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + s.x), o = 0.5 * (t.pageY + s.y);
      this._rotateStart.set(n, o);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const s = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + s.x), o = 0.5 * (t.pageY + s.y);
      this._panStart.set(n, o);
    }
  }
  _handleTouchStartDolly(t) {
    const s = this._getSecondPointerPosition(t), n = t.pageX - s.x, o = t.pageY - s.y, a = Math.sqrt(n * n + o * o);
    this._dollyStart.set(0, a);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), o = 0.5 * (t.pageX + n.x), a = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(o, a);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const s = this.domElement;
    this._rotateLeft(b * this._rotateDelta.x / s.clientHeight), this._rotateUp(b * this._rotateDelta.y / s.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const s = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + s.x), o = 0.5 * (t.pageY + s.y);
      this._panEnd.set(n, o);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const s = this._getSecondPointerPosition(t), n = t.pageX - s.x, o = t.pageY - s.y, a = Math.sqrt(n * n + o * o);
    this._dollyEnd.set(0, a), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const l = (t.pageX + s.x) * 0.5, d = (t.pageY + s.y) * 0.5;
    this._updateZoomParameters(l, d);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  // pointers
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let s = 0; s < this._pointers.length; s++)
      if (this._pointers[s] == t.pointerId) {
        this._pointers.splice(s, 1);
        return;
      }
  }
  _isTrackingPointer(t) {
    for (let s = 0; s < this._pointers.length; s++)
      if (this._pointers[s] == t.pointerId) return !0;
    return !1;
  }
  _trackPointer(t) {
    let s = this._pointerPositions[t.pointerId];
    s === void 0 && (s = new y(), this._pointerPositions[t.pointerId] = s), s.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const s = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[s];
  }
  //
  _customWheelEvent(t) {
    const s = t.deltaMode, n = {
      clientX: t.clientX,
      clientY: t.clientY,
      deltaY: t.deltaY
    };
    switch (s) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function xt(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function Mt(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function Ot(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(ft), this.state = h.NONE;
      break;
    case 1:
      const t = this._pointers[0], s = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: s.x, pageY: s.y });
      break;
  }
}
function jt(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case k.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = h.DOLLY;
      break;
    case k.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = h.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = h.ROTATE;
      }
      break;
    case k.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = h.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = h.PAN;
      }
      break;
    default:
      this.state = h.NONE;
  }
  this.state !== h.NONE && this.dispatchEvent(st);
}
function Lt(i) {
  switch (this.state) {
    case h.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case h.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case h.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function At(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== h.NONE || (i.preventDefault(), this.dispatchEvent(st), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(ft));
}
function kt(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function Ct(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case A.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = h.TOUCH_ROTATE;
          break;
        case A.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = h.TOUCH_PAN;
          break;
        default:
          this.state = h.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case A.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = h.TOUCH_DOLLY_PAN;
          break;
        case A.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = h.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = h.NONE;
      }
      break;
    default:
      this.state = h.NONE;
  }
  this.state !== h.NONE && this.dispatchEvent(st);
}
function vt(i) {
  switch (this._trackPointer(i), this.state) {
    case h.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case h.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case h.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case h.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = h.NONE;
  }
}
function Nt(i) {
  this.enabled !== !1 && i.preventDefault();
}
function Yt(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function It(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
class Ft extends et.Component {
  mountRef = et.createRef();
  scene;
  camera;
  renderer;
  line;
  controls;
  state = {
    lineLength: "20",
    bendRadius: "",
    bendLength: "",
    bendStart: ""
  };
  componentDidMount() {
    this.initThree();
  }
  // TODO fix this
  // TODO: Need to have this as bend Radius, bend length, start point
  componentDidUpdate(t) {
    (t.lineLength !== this.state.lineLength || t.bendRadius !== this.state.bendRadius || t.bendLength !== this.state.bendLength || t.bendStart !== this.state.bendStart) && this.updateLine();
  }
  componentWillUnmount() {
    this.renderer && this.mountRef.current && this.mountRef.current.removeChild(this.renderer.domElement);
  }
  initThree() {
    this.scene = new p.Scene(), this.scene.background = new p.Color(16777215), this.camera = new p.PerspectiveCamera(75, 600 / 400, 0.1, 1e3), this.renderer = new p.WebGLRenderer({ antialias: !0 }), this.renderer.setSize(600, 400), this.mountRef.current && this.mountRef.current.appendChild(this.renderer.domElement), this.controls = new Dt(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.05;
    const n = new p.GridHelper(200, 100, 8947848, 13421772);
    this.scene.add(n), this.camera.position.set(20, 20, 20), this.camera.lookAt(0, 0, 0), this.createLine(), this.animate();
  }
  animate = () => {
    requestAnimationFrame(this.animate), this.controls?.update(), this.renderer?.render(this.scene, this.camera);
  };
  createLine() {
    const t = parseFloat(this.state.lineLength), s = parseFloat(this.state.bendRadius), n = parseFloat(this.state.bendLength), o = parseFloat(this.state.bendStart), a = [], l = 100, d = Math.max(0.2, Math.abs(t) * 2e-3), T = !isNaN(s) && !isNaN(n) && !isNaN(o) && s > 0 && n > 0 && o >= 0 && o + n <= t, D = isNaN(t) ? 0 : t / 2, P = -D, Y = D;
    if (T) {
      const M = o;
      M > 0 ? (a.push(new p.Vector3(P, 0, 0)), a.push(new p.Vector3(P + M, 0, 0))) : a.push(new p.Vector3(P, 0, 0));
      const U = n / s, z = 320, F = new p.Vector3(P + o, 0, 0), Z = 1, V = F.x, q = F.y;
      for (let R = 0; R <= z; R++) {
        const j = R / z * U, C = V + s * Math.sin(j), S = q + s * (1 - Math.cos(j)) * Z;
        a.push(new p.Vector3(C, S, 0));
      }
      if (o + n < t) {
        const R = a[a.length - 1], O = U, j = Math.cos(O), C = Z * Math.sin(O), S = t - (o + n), H = R.x + S * j, B = R.y + S * C;
        a.push(new p.Vector3(H, B, 0));
      }
    } else
      a.push(new p.Vector3(P, 0, 0), new p.Vector3(Y, 0, 0));
    this.line && this.scene && (this.scene.remove(this.line), this.line.geometry.dispose(), this.line.material.dispose && this.line.material.dispose(), this.line = void 0);
    const x = new p.CatmullRomCurve3(a), I = new p.TubeGeometry(x, 320, d, l, !1), K = new p.MeshBasicMaterial({ color: 8421504, side: p.DoubleSide });
    this.line = new p.Mesh(I, K), this.scene?.add(this.line);
  }
  updateLine() {
    this.line && this.scene && (this.scene.remove(this.line), this.line.geometry.dispose(), this.line.material.dispose && this.line.material.dispose(), this.line = void 0), this.createLine();
    const t = parseFloat(this.state.lineLength);
    if (this.camera) {
      const o = isNaN(t) ? 10 : Math.max(10, t * 1.2 / (2 * Math.tan(this.camera.fov * Math.PI / 360)));
      this.camera.position.z = o, this.camera.updateProjectionMatrix();
    }
  }
  handleInputChange = (t) => {
    const { name: s, value: n } = t.target;
    this.setState({ [s]: n });
  };
  setRandomValues = () => {
    const t = Math.floor(Math.random() * 481) + 20, s = Math.random() * 98 + 2, n = t * 0.8, o = Math.random() * (n - 5) + 5, a = t * 0.05, l = t - o - 5, d = Math.max(a, Math.random() * (l - a) + a);
    this.setState({
      lineLength: t.toFixed(2),
      bendRadius: s.toFixed(2),
      bendLength: o.toFixed(2),
      bendStart: d.toFixed(2)
    });
  };
  render() {
    const { lineLength: t, bendRadius: s, bendLength: n, bendStart: o } = this.state;
    return /* @__PURE__ */ m.jsxs("div", { style: { minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }, children: [
      /* @__PURE__ */ m.jsx("h2", { children: "3D Line Simulation" }),
      /* @__PURE__ */ m.jsxs("form", { style: { display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24, justifyContent: "center" }, children: [
        /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsxs("label", { children: [
          "Line Length: ",
          /* @__PURE__ */ m.jsx("input", { type: "number", name: "lineLength", value: t, onChange: this.handleInputChange })
        ] }) }),
        /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsxs("label", { children: [
          "Bend Radius: ",
          /* @__PURE__ */ m.jsx("input", { type: "number", name: "bendRadius", value: s, onChange: this.handleInputChange })
        ] }) }),
        /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsxs("label", { children: [
          "Bend Length: ",
          /* @__PURE__ */ m.jsx("input", { type: "number", name: "bendLength", value: n, onChange: this.handleInputChange })
        ] }) }),
        /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsxs("label", { children: [
          "Bend Start: ",
          /* @__PURE__ */ m.jsx("input", { type: "number", name: "bendStart", value: o, onChange: this.handleInputChange })
        ] }) })
      ] }),
      /* @__PURE__ */ m.jsx("button", { onClick: this.setRandomValues, style: { marginBottom: 24 }, children: "Randomize" }),
      /* @__PURE__ */ m.jsx("div", { ref: this.mountRef })
    ] });
  }
}
export {
  Ft as QuoteTool,
  Ft as default
};
