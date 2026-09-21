/* @ds-bundle: {"format":4,"namespace":"DesignSystem_63f2d4","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Banner","sourcePath":"components/core/Banner.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MessageCard","sourcePath":"components/core/MessageCard.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e27991f7bc14","components/core/Banner.jsx":"5f4a938d8e5b","components/core/Button.jsx":"a43d27d484be","components/core/IconButton.jsx":"11eaeeed5204","components/core/MessageCard.jsx":"876bf48592e1","components/core/StatusPill.jsx":"de91919f0e88","components/data/Card.jsx":"09aa6f32d774","components/data/DataTable.jsx":"52b6e5e30167","components/forms/Checkbox.jsx":"052c9033ac72","components/forms/Radio.jsx":"3194647aa4ed","components/forms/SegmentedControl.jsx":"c9477e5e6551","components/forms/Select.jsx":"a8cbdf5674ba","components/forms/TextField.jsx":"0740e086c6e4","components/navigation/NavBar.jsx":"68a22b220fee","components/overlay/Modal.jsx":"17c361708336"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_63f2d4 = window.DesignSystem_63f2d4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "rw-badge"
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Banner.jsx
try { (() => {
function Banner({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-banner"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--warn-text)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), action);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Banner.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  disabled,
  children,
  onClick,
  style,
  type = "button"
}) {
  const variantCls = {
    primary: "rw-btn-primary",
    accent: "rw-btn-accent",
    secondary: "rw-btn-secondary",
    ghost: "rw-btn-ghost"
  }[variant] || "rw-btn-primary";
  const sizeCls = size === "sm" ? "rw-btn-sm" : "";
  const cls = ["rw-btn", variantCls, sizeCls].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  variant = "secondary",
  size = "md",
  label,
  disabled,
  onClick,
  style,
  children
}) {
  const variantCls = {
    primary: "rw-btn-primary",
    accent: "rw-btn-accent",
    secondary: "rw-btn-secondary",
    ghost: "rw-btn-ghost"
  }[variant] || "rw-btn-secondary";
  const sizeCls = size === "sm" ? "rw-btn-sm" : "";
  const cls = ["rw-btn", "rw-btn-icon", variantCls, sizeCls].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cls,
    disabled: disabled,
    onClick: onClick,
    style: style,
    "aria-label": label,
    title: label
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MessageCard.jsx
try { (() => {
function MessageCard({
  severity = "error",
  title,
  children
}) {
  const cls = severity === "warning" ? "rw-message rw-message-warning" : severity === "info" ? "rw-message" : "rw-message rw-message-error";
  const color = severity === "warning" ? "var(--warn-text)" : severity === "info" ? "var(--brand-blue)" : "var(--coral)";
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "alert"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "0 0 auto",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginBottom: 2
    }
  }, title), children));
}
Object.assign(__ds_scope, { MessageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MessageCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function StatusPill({
  status = "ok",
  children
}) {
  const cls = {
    ok: "rw-pill rw-pill-ok",
    todo: "rw-pill rw-pill-todo",
    info: "rw-pill rw-pill-info",
    bad: "rw-pill rw-pill-bad"
  }[status] || "rw-pill rw-pill-ok";
  const icon = status === "todo" ? /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  })) : status === "bad" ? /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9l-6 6M9 9l6 6"
  })) : status === "info" ? /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01M11 12h1v5h1"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, icon, children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  title,
  children,
  footer,
  hoverable,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-card" + (hoverable ? " rw-card-hoverable" : ""),
    style: style
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "rw-card-title"
  }, title), typeof children === "string" ? /*#__PURE__*/React.createElement("p", {
    className: "rw-card-body"
  }, children) : children, footer && /*#__PURE__*/React.createElement("div", {
    className: "rw-card-footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  selectable,
  sortKey,
  sortDir,
  onSort,
  page,
  pageCount,
  onPageChange
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "rw-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 32
    }
  }), columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.sortable ? "rw-th-sortable" : "",
    onClick: () => c.sortable && onSort?.(c.key)
  }, c.label, sortKey === c.key ? sortDir === "desc" ? " ↓" : " ↑" : "")))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, selectable && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "rw-checkbox"
  })), columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key
  }, row[c.key])))))), pageCount ? /*#__PURE__*/React.createElement("div", {
    className: "rw-table-pagination"
  }, /*#__PURE__*/React.createElement("span", null, "Page ", page, " / ", pageCount), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "rw-btn rw-btn-secondary rw-btn-sm",
    disabled: page <= 1,
    onClick: () => onPageChange?.(page - 1)
  }, "Pr\xE9c\xE9dent"), /*#__PURE__*/React.createElement("button", {
    className: "rw-btn rw-btn-secondary rw-btn-sm",
    disabled: page >= pageCount,
    onClick: () => onPageChange?.(page + 1)
  }, "Suivant"))) : null);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  id,
  ...inputProps
}) {
  const fieldId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return /*#__PURE__*/React.createElement("label", {
    className: "rw-option-row",
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fieldId,
    className: "rw-checkbox"
  }, inputProps)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  id,
  name,
  ...inputProps
}) {
  const fieldId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return /*#__PURE__*/React.createElement("label", {
    className: "rw-option-row",
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: fieldId,
    name: name,
    className: "rw-radio"
  }, inputProps)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
const {
  useState
} = React;
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange
}) {
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.value);
  const current = value ?? internal;
  const select = v => {
    setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-segmented",
    role: "tablist"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "tab",
    className: "rw-segmented-btn",
    "aria-selected": current === o.value,
    onClick: () => select(o.value)
  }, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  id,
  options = [],
  ...selectProps
}) {
  const fieldId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "rw-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "rw-select"
  }, selectProps), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint && /*#__PURE__*/React.createElement("span", {
    className: "rw-hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  hint,
  error,
  id,
  ...inputProps
}) {
  const fieldId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "rw-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "rw-input" + (error ? " rw-input-error" : "")
  }, inputProps)), error ? /*#__PURE__*/React.createElement("span", {
    className: "rw-error-text"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "rw-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logo,
  links = [],
  activeHref,
  actions
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "rw-navbar"
  }, logo, /*#__PURE__*/React.createElement("div", {
    className: "rw-navbar-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    className: "rw-navlink",
    href: l.href,
    "aria-current": activeHref === l.href ? "page" : undefined
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "rw-navbar-actions"
  }, actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function Modal({
  title,
  children,
  footer,
  onClose,
  open = true
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-modal",
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-modal-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rw-modal-title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "rw-btn rw-btn-ghost rw-btn-icon rw-btn-sm",
    "aria-label": "Fermer",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rw-modal-body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "rw-modal-footer"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MessageCard = __ds_scope.MessageCard;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Modal = __ds_scope.Modal;

})();
