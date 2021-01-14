"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.scss");

var _Aux = _interopRequireDefault(require("./components/hoc/Aux"));

var _Project = _interopRequireDefault(require("./components/Project/Project"));

var _reactRouterDom = require("react-router-dom");

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Aux.default, {
        className: "app"
      }, /*#__PURE__*/_react.default.createElement(_Project.default, {
        data: _data.default
      })));
    }
  }]);

  return App;
}(_react.default.Component);

var _default = App;
exports.default = _default;
"use strict";

var _react = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders learn react link', function () {
  (0, _react.render)( /*#__PURE__*/React.createElement(_App.default, null));

  var linkElement = _react.screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ActivityHeader = _interopRequireDefault(require("./ActivityHeader"));

var _Activity = _interopRequireDefault(require("../Custom/Activity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Activity() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-pane fade",
    id: "activity",
    role: "tabpanel",
    "data-filter-list": "list-group-activity"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "content-list"
  }, /*#__PURE__*/_react.default.createElement(_ActivityHeader.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    class: "content-list-body"
  }, /*#__PURE__*/_react.default.createElement(_Activity.default, null)));
}

var _default = Activity;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActivityHeader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "row content-list-head"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Activity")), /*#__PURE__*/_react.default.createElement("form", {
    class: "col-md-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "filter_list"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control filter-list-input",
    placeholder: "Filter activity",
    "aria-label": "Filter activity"
  }))));
}

var _default = ActivityHeader;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActivityComponent(_ref) {
  var icon = _ref.icon,
      author = _ref.author,
      date = _ref.date,
      source = _ref.source;
  return /*#__PURE__*/_react.default.createElement("ol", {
    class: "list-group list-group-activity"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "media align-items-center"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "avatar bg-primary"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, icon))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: author,
    src: source,
    class: "avatar"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "media-body"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    class: "h6"
  }, author, " "), /*#__PURE__*/_react.default.createElement("span", null, "performed action "), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "In item")), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small"
  }, date)))), /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "media align-items-center"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "avatar bg-primary"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, icon))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: author,
    src: source,
    class: "avatar"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "media-body"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    class: "h6"
  }, author, " "), /*#__PURE__*/_react.default.createElement("span", null, "performed action "), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "In item")), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small"
  }, date)))));
}

var _default = ActivityComponent;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Alert(_ref) {
  var message = _ref.message,
      type = _ref.type;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "alert alert-".concat(type),
    role: "alert"
  }, message);
}

var _default = Alert;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Avatar(_ref) {
  var source = _ref.source,
      name = _ref.name,
      style = _ref.style,
      size = _ref.size;
  return /*#__PURE__*/_react.default.createElement("img", {
    alt: "User",
    src: source,
    class: "avatar ".concat(style),
    "data-title": name,
    "data-toggle": "tooltip",
    title: name
  });
}

var _default = Avatar;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AvatarList(_ref) {
  var source = _ref.source,
      size = _ref.size,
      style = _ref.style;
  var users = source.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      source: item.src,
      name: item.name
    }));
  });
  return /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars ".concat(style)
  }, users);
}

var _default = AvatarList;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Badge(_ref) {
  var message = _ref.message,
      type = _ref.type;
  return /*#__PURE__*/_react.default.createElement("span", {
    class: "badge badge-".concat(type)
  }, message);
}

var _default = Badge;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = _interopRequireDefault(require("react-router-dom"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Breadcrumbs() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "navbar bg-white breadcrumb-bar"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("ol", {
    class: "breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "breadcrumb-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "index.html"
  }, "Overview")), /*#__PURE__*/_react.default.createElement("li", {
    class: "breadcrumb-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "pages-app.html#"
  }, "App Pages")), /*#__PURE__*/_react.default.createElement("li", {
    class: "breadcrumb-item active",
    "aria-current": "page"
  }, "Project"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn btn-round",
    role: "button",
    "data-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "settings")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#",
    "data-toggle": "modal",
    "data-target": "#project-edit-modal"
  }, "Edit Project"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Share"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Mark as Complete"), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item text-danger",
    href: "#"
  }, "Archive"))));
}

var _default = Breadcrumbs;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var message = _ref.message,
      type = _ref.type,
      toggle = _ref.toggle,
      aria = _ref.aria,
      icon = _ref.icon;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "data-toggle": '',
    "aria-expanded": '',
    class: "btn btn-".concat(type)
  }, message, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, icon));
}

var _default = Button;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(_ref) {
  var title = _ref.title,
      message = _ref.message,
      link = _ref.link,
      linkText = _ref.linkText;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "card-title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    class: "card-text"
  }, message), /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    class: "btn btn-primary"
  }, linkText)));
}

var _default = Card;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TaskCard = _interopRequireDefault(require("./TaskCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardList(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card-list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "card-list-head"
  }, /*#__PURE__*/_react.default.createElement("h6", null, title), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    id: "...",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, icon)), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, "..."))), /*#__PURE__*/_react.default.createElement(_TaskCard.default, null), /*#__PURE__*/_react.default.createElement(_TaskCard.default, null));
}

var _default = CardList;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChatItem(_ref) {
  var source = _ref.source,
      author = _ref.author,
      date = _ref.date,
      message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "media chat-item"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    source: source
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "media-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "chat-item-title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "chat-item-author"
  }, author), /*#__PURE__*/_react.default.createElement("span", null, date)), /*#__PURE__*/_react.default.createElement("div", {
    class: "chat-item-body"
  }, message)));
}

var _default = ChatItem;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChatItem = _interopRequireDefault(require("./ChatItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChatModule(_ref) {
  var source = _ref.source,
      message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "chat-module"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "chat-module-top"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "S"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control",
    placeholder: "Search chat",
    "aria-label": "Search Chat"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "chat-module-body"
  }, /*#__PURE__*/_react.default.createElement(_ChatItem.default, {
    source: source,
    message: message
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "chat-module-bottom"
  }, /*#__PURE__*/_react.default.createElement("form", {
    class: "chat-form"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    class: "form-control",
    placeholder: "Type message",
    rows: "1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "chat-form-buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    class: "btn btn-link"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "tag_faces")), /*#__PURE__*/_react.default.createElement("div", {
    class: "custom-file custom-file-naked"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    class: "custom-file-input",
    id: "customFile"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "custom-file-label",
    for: "customFile"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "attach_file")))))));
}

var _default = ChatModule;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Aux = _interopRequireDefault(require("../hoc/Aux"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Checklist() {
  return /*#__PURE__*/_react.default.createElement(_Aux.default, null, /*#__PURE__*/_react.default.createElement("form", {
    class: "checklist"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "row justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group col-md-auto"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "checklist-reorder"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "reorder")), /*#__PURE__*/_react.default.createElement("div", {
    class: "custom-control custom-checkbox col-md-auto"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    class: "custom-control-input",
    id: "..."
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "custom-control-label",
    for: "..."
  }), /*#__PURE__*/_react.default.createElement("span", {
    contenteditable: "true"
  }, "Checklist text"), /*#__PURE__*/_react.default.createElement("div", {
    class: "checklist-strikethrough"
  }))), " end of form group"), " end of individual checklist item"), /*#__PURE__*/_react.default.createElement("div", {
    class: "drop-to-delete"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "drag-to-delete-title"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "delete"))));
}

var _default = Checklist;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatePicker() {
  return /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control",
    type: "text",
    placeholder: "Select a Date",
    "data-flatpickr": true,
    "data-alt-input": "true"
  });
}

var _default = DatePicker;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dropwdown() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown js-dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn btn-primary js-dropdown-toggle dropdown-toggle",
    type: "button",
    id: "dropdownMenuButton",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Dropdown button"), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu js-dropdown-list",
    "aria-labelledby": "dropdownMenuButton"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Action"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Another action"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Something else here")));
}

var _default = Dropwdown;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Aux = _interopRequireDefault(require("../hoc/Aux"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Files() {
  return /*#__PURE__*/_react.default.createElement(_Aux.default, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "d-none dz-template"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item dz-preview dz-file-preview"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "media align-items-center dz-details"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "avatar bg-primary dz-file-representation"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "avatar",
    "data-dz-thumbnail": true
  }), /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "attach_file"))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "...",
    src: "...",
    class: "avatar",
    "data-title": "...",
    "data-toggle": "tooltip"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "media-body d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dz-file-details"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dz-filename"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "data-dz-name": true
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small dz-size",
    "data-dz-size": true
  })), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Loader",
    src: "assets/img/loader.svg",
    class: "dz-loading"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "more_vert")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Download"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Share"), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item text-danger",
    href: "#",
    "data-dz-remove": true
  }, "Delete"))), /*#__PURE__*/_react.default.createElement("button", {
    class: "btn btn-danger btn-sm dz-remove",
    "data-dz-remove": true
  }, "Cancel"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "progress dz-progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress-bar dz-upload",
    "data-dz-uploadprogress": true
  })))), /*#__PURE__*/_react.default.createElement("form", {
    class: "dropzone",
    action: "..."
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "dz-message"
  }, "Drop files or click here to upload")), /*#__PURE__*/_react.default.createElement("ul", {
    class: "list-group list-group-activity dropzone-previews flex-column-reverse"
  }));
}

var _default = Files;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Form() {
  return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    for: "exampleInputEmail1"
  }, "Email address"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    class: "form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter email"
  }), /*#__PURE__*/_react.default.createElement("small", {
    id: "emailHelp",
    class: "form-text text-muted"
  }, "We'll never share your email with anyone else.")), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    for: "exampleInputPassword1"
  }, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    class: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Password"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    class: "form-check-input",
    id: "exampleCheck1"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "exampleCheck1"
  }, "Check me out")), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    class: "btn btn-primary"
  }, "Submit"));
}

var _default = Form;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputGroup() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "email"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    class: "form-control",
    placeholder: "Email Address",
    "aria-label": "Email Address"
  }));
}

var _default = InputGroup;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KanbanCard() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card card-kanban"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress-bar",
    role: "progressbar",
    style: {
      width: "20%"
    },
    "aria-valuenow": "20",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown card-options"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    id: "...",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "more_vert")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, "...")), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-title"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    "data-toggle": "modal",
    "data-target": "#task-modal"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "Task Title"))), /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, "..."), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-meta d-flex justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "playlist_add_check"), /*#__PURE__*/_react.default.createElement("span", null, "-/-")), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small"
  }, "Due 2 days"))));
}

var _default = KanbanCard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListGroup() {
  return /*#__PURE__*/_react.default.createElement("ul", {
    class: "list-group"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item"
  }, "Cras justo odio"), /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item"
  }, "Dapibus ac facilisis in"), /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item"
  }, "Morbi leo risus"), /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item"
  }, "Porta ac consectetur ac"), /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item"
  }, "Vestibulum at eros"));
}

var _default = ListGroup;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav(_ref) {
  var titles = _ref.titles;
  var headers = titles.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/_react.default.createElement("a", {
      class: "nav-link ".concat(item.active ? 'active' : null),
      "data-toggle": "tab",
      href: "#".concat(item.name.toLowerCase()),
      role: "tab",
      "aria-controls": "tasks",
      "aria-selected": "true"
    }, item.name));
  });
  return /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav nav-tabs nav-fill",
    role: "tablist"
  }, headers);
}

var _default = Nav;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Search = _interopRequireDefault(require("./Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar(_ref) {
  var logo = _ref.logo,
      user = _ref.user;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "navbar navbar-expand-lg bg-dark navbar-dark sticky-top"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "navbar-brand",
    href: "index.html"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Pipeline",
    src: logo
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbar-collapse",
    "aria-controls": "navbar-collapse",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-block d-lg-none ml-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Image",
    src: user,
    class: "avatar"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dropdown-item"
  }, "Profile"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dropdown-item"
  }, "Account Settings"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dropdown-item"
  }, "Log Out"))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "collapse navbar-collapse flex-column",
    id: "navbar-collapse"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "navbar-nav d-lg-block"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Overview")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#",
    "data-toggle": "collapse",
    "aria-expanded": "false",
    "data-target": "#submenu-2",
    "aria-controls": "submenu-2"
  }, "Pages"), /*#__PURE__*/_react.default.createElement("div", {
    id: "submenu-2",
    class: "collapse"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav nav-small flex-column"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "App Pages")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Utility Pages")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Layouts"))))), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#",
    "data-toggle": "collapse",
    "aria-expanded": "false",
    "data-target": "#submenu-3",
    "aria-controls": "submenu-3"
  }, "Components"), /*#__PURE__*/_react.default.createElement("div", {
    id: "submenu-3",
    class: "collapse"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav nav-small flex-column"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Bootstrap")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Pipeline"))))), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Documentation")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Changelog"))), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-none d-lg-block w-100"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small text-muted"
  }, "Quick Links"), /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav nav-small flex-column mt-2"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "nav-link"
  }, "Team Overview")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "nav-link"
  }, "Project")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "nav-link"
  }, "Single Task")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "nav-link"
  }, "Kanban Board"))), /*#__PURE__*/_react.default.createElement("hr", null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Search.default, null), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown mt-2"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn btn-primary btn-block dropdown-toggle",
    type: "button",
    id: "newContentButton",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Add New"), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Team"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Project"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Task"))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropup"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Image",
    src: user,
    class: "avatar"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dropdown-item"
  }, "Profile"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dropdown-item"
  }, "Account Settings"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dropdown-item"
  }, "Log Out")))));
}

var _default = Navbar;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoteCard() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card card-note"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "card-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "media align-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "..",
    src: "...",
    class: "avatar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "media-body"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    class: "mb-0"
  }, "..."))), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("span", null, "..."), /*#__PURE__*/_react.default.createElement("div", {
    class: "ml-1 dropdown card-options"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    id: "...",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "more_vert")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Edit"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item text-danger",
    href: "#"
  }, "Delete"))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-body"
  }, "..."));
}

var _default = NoteCard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProgressBar(_ref) {
  var style = _ref.style,
      value = _ref.value;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress-bar ".concat(style),
    role: "progressbar",
    style: {
      width: "25%"
    },
    "aria-valuenow": value,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }));
}

var _default = ProgressBar;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProjectCard() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card card-project"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress-bar bg-warning",
    role: "progressbar",
    style: {
      width: "25%"
    },
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown card-options"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    id: "...",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "more_vert")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, "...")), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-title"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Project Name"))), /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, "..."), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-meta d-flex justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons mr-1"
  }, "playlist_add_check"), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small"
  }, "-/-")), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small"
  }, "Due date"))));
}

var _default = ProjectCard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Search() {
  return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-dark input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "search"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control form-control-dark",
    placeholder: "Search",
    "aria-label": "Search app"
  })));
}

var _default = Search;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TaskCard() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card card-task"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress-bar",
    role: "progressbar",
    style: {
      width: "60%"
    },
    "aria-valuenow": "60",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "card-title"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "Task Name")), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small"
  }, "Due Tomorrow")), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-meta"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "...",
    class: "avatar",
    src: "..."
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "playlist_add_check"), /*#__PURE__*/_react.default.createElement("span", null, "-/-")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown card-options"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    id: "task-dropdown-button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "more_vert")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, "...")))));
}

var _default = TaskCard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TeamCard() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card card-team"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown card-options"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    id: "...",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "more_vert")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, "...")), /*#__PURE__*/_react.default.createElement("div", {
    class: "card-title"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Team Name")), /*#__PURE__*/_react.default.createElement("span", null, "# Projects, # Members")), /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, "...")));
}

var _default = TeamCard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Toast(_ref) {
  var source = _ref.source,
      title = _ref.title,
      time = _ref.time,
      message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "toast",
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "data-autohide": "false"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "toast-header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "...",
    class: "rounded mr-2",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("strong", {
    class: "mr-auto"
  }, title), /*#__PURE__*/_react.default.createElement("small", null, time), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    class: "ml-2 mb-1 close",
    "data-dismiss": "toast",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "toast-body"
  }, message));
}

var _default = Toast;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tooltips(_ref) {
  var source = _ref.source;
  return /*#__PURE__*/_react.default.createElement("img", {
    alt: "User Icon",
    style: {
      height: "200px",
      width: "200px"
    },
    src: source,
    class: "avatar avatar-lg",
    "data-title": "Peggy Brown",
    "data-toggle": "tooltip",
    "data-placement": "bottom",
    title: "Tooltip"
  });
}

var _default = Tooltips;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Drop() {
  return /*#__PURE__*/_react.default.createElement("form", {
    class: "dropzone dz-clickable",
    action: "https://mediumra.re/dropzone/upload.php"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "dz-message"
  }, "Drop files here or click here to upload"));
}

var _default = Drop;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FilesHeader = _interopRequireDefault(require("./FilesHeader"));

var _Drop = _interopRequireDefault(require("./Drop"));

var _Upload = _interopRequireDefault(require("./Upload"));

var _FilesContent = _interopRequireDefault(require("./FilesContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Files() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-pane fade",
    id: "files",
    role: "tabpanel",
    "data-filter-list": "dropzone-previews"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "content-list"
  }, /*#__PURE__*/_react.default.createElement(_FilesHeader.default, null), /*#__PURE__*/_react.default.createElement("div", {
    class: "row content-list-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react.default.createElement(_Upload.default, null), /*#__PURE__*/_react.default.createElement(_Drop.default, null), /*#__PURE__*/_react.default.createElement(_FilesContent.default, null)))));
}

var _default = Files;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Activity = _interopRequireDefault(require("../Custom/Activity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilesContent() {
  return /*#__PURE__*/_react.default.createElement("ul", {
    class: "list-group list-group-activity dropzone-previews flex-column-reverse"
  });
}

var _default = FilesContent;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilesHeader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "row content-list-head"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Files")), /*#__PURE__*/_react.default.createElement("form", {
    class: "col-md-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "filter_list"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control filter-list-input",
    placeholder: "Filter files",
    "aria-label": "Filter Tasks"
  }))));
}

var _default = FilesHeader;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Upload() {
  return /*#__PURE__*/_react.default.createElement("ul", {
    class: "d-none dz-template"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "list-group-item dz-preview dz-file-preview"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "media align-items-center dz-details"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    class: "avatars"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "avatar bg-primary dz-file-representation"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "attach_file"))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "David Whittaker",
    src: "assets/img/avatar-male-4.jpg",
    class: "avatar",
    "data-title": "David Whittaker",
    "data-toggle": "tooltip"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "media-body d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dz-file-details"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "dz-filename"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "data-dz-name": ""
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", {
    class: "text-small dz-size",
    "data-dz-size": ""
  })), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Loader",
    src: "assets/img/loader.svg",
    class: "dz-loading"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "btn-options",
    type: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "more_vert")), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Download"), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Share"), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    class: "dropdown-item text-danger",
    href: "#",
    "data-dz-remove": ""
  }, "Delete"))), /*#__PURE__*/_react.default.createElement("button", {
    class: "btn btn-danger btn-sm dz-remove",
    "data-dz-remove": ""
  }, "Cancel"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "progress dz-progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "progress-bar dz-upload",
    "data-dz-uploadprogress": ""
  }))));
}

var _default = Upload;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AvatarList = _interopRequireDefault(require("../Custom/AvatarList"));

var _ProgressBar = _interopRequireDefault(require("../Custom/ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var users = _ref.users;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "page-header"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Brand Concept and Design"), /*#__PURE__*/_react.default.createElement("p", {
    class: "lead"
  }, "Research, ideate and present brand concepts for client consideration"), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement(_AvatarList.default, {
    source: users
  }), /*#__PURE__*/_react.default.createElement("button", {
    class: "btn btn-round flex-shrink-0",
    "data-toggle": "modal",
    "data-target": "#user-manage-modal"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "add"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    style: "bg-success",
    value: "25"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex justify-content-between text-small"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "playlist_add_check"), /*#__PURE__*/_react.default.createElement("span", null, "3/12")), /*#__PURE__*/_react.default.createElement("span", null, "Due 9 days"))));
}

var _default = Header;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("../Custom/Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AvatarChecklist(_ref) {
  var users = _ref.users;
  var count = 0;
  var userlist = users.map(function (user) {
    count += 1;
    return /*#__PURE__*/_react.default.createElement("div", {
      class: "custom-control custom-checkbox"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      class: "custom-control-input",
      id: "user-manage-".concat(count)
    }), /*#__PURE__*/_react.default.createElement("label", {
      class: "custom-control-label",
      for: "user-manage-".concat(count)
    }, /*#__PURE__*/_react.default.createElement("span", {
      class: "d-flex align-items-center"
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      name: user.name,
      source: user.src,
      style: "mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", {
      class: "h6 mb-0 SPAN-filter-by-text",
      "data-filter-by": "text"
    }, user.name))));
  });
  return /*#__PURE__*/_react.default.createElement("div", null, userlist);
}

var _default = AvatarChecklist;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    role: "button",
    class: "btn btn-primary",
    type: "submit"
  }, content));
}

var _default = Footer;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AvatarChecklist = _interopRequireDefault(require("./AvatarChecklist"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _AvatarList = _interopRequireDefault(require("../Custom/AvatarList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProjectModal(_ref) {
  var users = _ref.users,
      activeusers = _ref.activeusers;
  return /*#__PURE__*/_react.default.createElement("form", {
    class: "modal fade",
    id: "project-edit-modal",
    tabindex: "-1",
    style: {
      display: "none"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "modal-title"
  }, "Edit Project"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    class: "close btn btn-round",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "close"))), /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav nav-tabs nav-fill",
    role: "tablist"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link active",
    id: "project-edit-details-tab",
    "data-toggle": "tab",
    href: "#project-edit-details",
    role: "tab",
    "aria-controls": "project-edit-details",
    "aria-selected": "true"
  }, "Details")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    id: "project-edit-members-tab",
    "data-toggle": "tab",
    href: "#project-edit-members",
    role: "tab",
    "aria-controls": "project-edit-members",
    "aria-selected": "false"
  }, "Members"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-pane fade show active",
    id: "project-edit-details",
    role: "tabpanel"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "General Details"), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Name"), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col",
    type: "text",
    value: "Brand Concept and Design",
    name: "project-name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Description"), /*#__PURE__*/_react.default.createElement("textarea", {
    class: "form-control col",
    rows: "3",
    placeholder: "Project description",
    name: "project-description"
  }, "Research, ideate and present brand concepts for client consideration")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h6", null, "Timeline"), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Start Date"), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input",
    type: "hidden",
    name: "project-start",
    placeholder: "Select a date",
    "data-flatpickr": "",
    "data-default-date": "2021-04-21",
    "data-alt-input": "true",
    value: "2021-04-21"
  }), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input form-control input",
    placeholder: "Select a date",
    tabindex: "0",
    type: "text",
    readonly: "readonly"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Due Date"), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input",
    type: "hidden",
    name: "project-due",
    placeholder: "Select a date",
    "data-flatpickr": "",
    "data-default-date": "2021-09-15",
    "data-alt-input": "true",
    value: "2021-09-15"
  }), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input form-control input",
    placeholder: "Select a date",
    tabindex: "0",
    type: "text",
    readonly: "readonly"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "alert alert-warning text-small",
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement("span", null, "You can change due dates at any time.")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h6", null, "Visibility"), /*#__PURE__*/_react.default.createElement("div", {
    class: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "custom-control custom-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    id: "visibility-everyone",
    name: "visibility",
    class: "custom-control-input",
    checked: ""
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "custom-control-label",
    for: "visibility-everyone"
  }, "Everyone"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "custom-control custom-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    id: "visibility-members",
    name: "visibility",
    class: "custom-control-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "custom-control-label",
    for: "visibility-members"
  }, "Members"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "custom-control custom-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    id: "visibility-me",
    name: "visibility",
    class: "custom-control-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "custom-control-label",
    for: "visibility-me"
  }, "Just me"))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-pane fade",
    id: "project-edit-members",
    role: "tabpanel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "users-manage",
    "data-filter-list": "form-group-users"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "mb-3"
  }, /*#__PURE__*/_react.default.createElement(_AvatarList.default, {
    source: activeusers,
    style: "text-center"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "filter_list"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control filter-list-input",
    placeholder: "Filter members",
    "aria-label": "Filter Members"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group-users filter-list-1610357232687"
  }, /*#__PURE__*/_react.default.createElement(_AvatarChecklist.default, {
    users: users
  })))))), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    content: "Save"
  }))));
}

var _default = ProjectModal;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AvatarChecklist = _interopRequireDefault(require("./AvatarChecklist"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _AvatarList = _interopRequireDefault(require("../Custom/AvatarList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TaskModal(_ref) {
  var users = _ref.users,
      activeusers = _ref.activeusers;
  return /*#__PURE__*/_react.default.createElement("form", {
    class: "modal fade",
    id: "task-add-modal",
    tabindex: "-1",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "modal-title"
  }, "New Task"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    class: "close btn btn-round",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "close"))), /*#__PURE__*/_react.default.createElement("ul", {
    class: "nav nav-tabs nav-fill",
    role: "tablist"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link active",
    id: "task-add-details-tab",
    "data-toggle": "tab",
    href: "#task-add-details",
    role: "tab",
    "aria-controls": "task-add-details",
    "aria-selected": "true"
  }, "Details")), /*#__PURE__*/_react.default.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "nav-link",
    id: "task-add-members-tab",
    "data-toggle": "tab",
    href: "#task-add-members",
    role: "tab",
    "aria-controls": "task-add-members",
    "aria-selected": "false"
  }, "Members"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-pane fade show active",
    id: "task-add-details",
    role: "tabpanel"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "General Details"), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Name"), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col",
    type: "text",
    placeholder: "Task name",
    name: "task-name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Description"), /*#__PURE__*/_react.default.createElement("textarea", {
    class: "form-control col",
    rows: "3",
    placeholder: "Task description",
    name: "task-description"
  })), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h6", null, "Timeline"), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Start Date"), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input",
    type: "hidden",
    name: "task-start",
    placeholder: "Select a date",
    "data-flatpickr": "",
    "data-default-date": "2021-04-21",
    "data-alt-input": "true",
    value: "2021-04-21"
  }), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input form-control input",
    placeholder: "Select a date",
    tabindex: "0",
    type: "text",
    readonly: "readonly"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    class: "col-3"
  }, "Due Date"), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input",
    type: "hidden",
    name: "task-due",
    placeholder: "Select a date",
    "data-flatpickr": "",
    "data-default-date": "2021-09-15",
    "data-alt-input": "true",
    value: "2021-09-15"
  }), /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col flatpickr-input form-control input",
    placeholder: "Select a date",
    tabindex: "0",
    type: "text",
    readonly: "readonly"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "alert alert-warning text-small",
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement("span", null, "You can change due dates at any time."))), /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-pane fade",
    id: "task-add-members",
    role: "tabpanel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "users-manage",
    "data-filter-list": "form-group-users"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "mb-3"
  }, /*#__PURE__*/_react.default.createElement(_AvatarList.default, {
    source: activeusers,
    style: "text-center"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "filter_list"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control filter-list-input",
    placeholder: "Filter members",
    "aria-label": "Filter Members"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group-users filter-list-1610357232685"
  }, /*#__PURE__*/_react.default.createElement(_AvatarChecklist.default, {
    users: users
  })))))), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    content: "Create Task"
  }))));
}

var _default = TaskModal;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AvatarChecklist = _interopRequireDefault(require("./AvatarChecklist"));

var _AvatarList = _interopRequireDefault(require("../Custom/AvatarList"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserModal(_ref) {
  var users = _ref.users,
      activeusers = _ref.activeusers;
  return /*#__PURE__*/_react.default.createElement("form", {
    class: "modal fade",
    id: "user-manage-modal",
    tabindex: "-1",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "modal-title"
  }, "Manage Users"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    class: "close btn btn-round",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "close"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "users-manage",
    "data-filter-list": "form-group-users"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "mb-3"
  }, /*#__PURE__*/_react.default.createElement(_AvatarList.default, {
    source: activeusers,
    style: "text-center"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "filter_list"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control filter-list-input",
    placeholder: "Filter members",
    "aria-label": "Filter Members"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group-users filter-list-1610357232689"
  }, /*#__PURE__*/_react.default.createElement(_AvatarChecklist.default, {
    users: users
  })))), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    content: "Done"
  }))));
}

var _default = UserModal;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Breadcrumbs = _interopRequireDefault(require("../Custom/Breadcrumbs"));

var _Navbar = _interopRequireDefault(require("../Custom/Navbar"));

var _Header = _interopRequireDefault(require("../Header/Header"));

var _Nav = _interopRequireDefault(require("../Custom/Nav"));

var _Tasks = _interopRequireDefault(require("../Tasks/Tasks"));

var _Files = _interopRequireDefault(require("../Files/Files"));

var _Activity = _interopRequireDefault(require("../Activity/Activity"));

var _UserModal = _interopRequireDefault(require("../Modals/UserModal"));

var _TaskModal = _interopRequireDefault(require("../Modals/TaskModal"));

var _ProjectModal = _interopRequireDefault(require("../Modals/ProjectModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Project(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "layout layout-nav-side"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    logo: data.common.logo,
    user: data.common.fuser1
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "main-container"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, null), /*#__PURE__*/_react.default.createElement("div", {
    class: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "row justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "col-lg-11 col-xl-10"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    users: data.pages.projectpage.activeusers
  }), /*#__PURE__*/_react.default.createElement(_Nav.default, {
    titles: data.pages.projectpage.nav
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-content"
  }, /*#__PURE__*/_react.default.createElement(_Tasks.default, null), /*#__PURE__*/_react.default.createElement(_Files.default, null), /*#__PURE__*/_react.default.createElement(_Activity.default, null)), /*#__PURE__*/_react.default.createElement(_UserModal.default, {
    users: data.common.users,
    activeusers: data.pages.projectpage.tasks.activeusers
  }), /*#__PURE__*/_react.default.createElement(_ProjectModal.default, {
    users: data.common.users,
    activeusers: data.pages.projectpage.activeusers
  }), /*#__PURE__*/_react.default.createElement(_TaskModal.default, {
    users: data.common.users,
    activeusers: data.pages.projectpage.tasks.activeusers
  }))))));
}

var _default = Project;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CardList = _interopRequireDefault(require("../Custom/CardList"));

var _TasksHeader = _interopRequireDefault(require("./TasksHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tasks() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "tab-pane fade active show",
    id: "tasks",
    role: "tabpanel",
    "data-filter-list": "card-list-body"
  }, /*#__PURE__*/_react.default.createElement(_TasksHeader.default, null), /*#__PURE__*/_react.default.createElement("div", {
    class: "content-list-body"
  }, /*#__PURE__*/_react.default.createElement(_CardList.default, null)));
}

var _default = Tasks;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContentHeader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "row content-list-head"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Tasks"), /*#__PURE__*/_react.default.createElement("button", {
    class: "btn btn-round",
    "data-toggle": "modal",
    "data-target": "#task-add-modal"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "add"))), /*#__PURE__*/_react.default.createElement("form", {
    class: "col-md-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group input-group-round"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "input-group-prepend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "material-icons"
  }, "filter_list"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    class: "form-control filter-list-input",
    placeholder: "Filter tasks",
    "aria-label": "Filter Tasks"
  }))));
}

var _default = ContentHeader;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Aux(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, props.children);
}

var _default = Aux;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("./assets/logo.svg"));

var _avatarFemale = _interopRequireDefault(require("./assets/avatar-female-1.jpg"));

var _avatarFemale2 = _interopRequireDefault(require("./assets/avatar-female-2.jpg"));

var _avatarFemale3 = _interopRequireDefault(require("./assets/avatar-female-3.jpg"));

var _avatarFemale4 = _interopRequireDefault(require("./assets/avatar-female-4.jpg"));

var _avatarFemale5 = _interopRequireDefault(require("./assets/avatar-female-5.jpg"));

var _avatarFemale6 = _interopRequireDefault(require("./assets/avatar-female-6.jpg"));

var _avatarMale = _interopRequireDefault(require("./assets/avatar-male-1.jpg"));

var _avatarMale2 = _interopRequireDefault(require("./assets/avatar-male-2.jpg"));

var _avatarMale3 = _interopRequireDefault(require("./assets/avatar-male-3.jpg"));

var _avatarMale4 = _interopRequireDefault(require("./assets/avatar-male-4.jpg"));

var _avatarMale5 = _interopRequireDefault(require("./assets/avatar-male-5.jpg"));

var _avatarMale6 = _interopRequireDefault(require("./assets/avatar-male-6.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  common: {
    logo: _logo.default,
    user: _avatarFemale.default,
    users: [{
      name: 'Clarence',
      src: _avatarFemale.default
    }, {
      name: 'Peggy',
      src: _avatarFemale2.default
    }, {
      name: 'Sally',
      src: _avatarFemale3.default
    }, {
      name: 'Kristina',
      src: _avatarFemale4.default
    }, {
      name: 'Claire',
      src: _avatarFemale5.default
    }, {
      name: 'Kerri',
      src: _avatarFemale6.default
    }, {
      name: 'Marcus',
      src: _avatarMale.default
    }, {
      name: 'Matt',
      src: _avatarMale2.default
    }, {
      name: 'John',
      src: _avatarMale3.default
    }, {
      name: 'Harry',
      src: _avatarMale4.default
    }, {
      name: 'Ravi',
      src: _avatarMale5.default
    }, {
      name: 'David',
      src: _avatarMale6.default
    }]
  },
  components: {
    mainmenu: [{
      title: "Overview",
      active: true
    }, {
      title: "Pages",
      submenu: [{
        title: 'App Pages'
      }, {
        title: 'Utility Pages'
      }, {
        title: 'Layouts'
      }]
    }, {
      title: "Components",
      submenu: [{
        title: 'Bootstrap'
      }, {
        title: 'Pipeline'
      }]
    }, {
      title: "Documentation"
    }, {
      title: "Changelog"
    }],
    quicklinks: [{
      title: 'Team Overview',
      linkto: '/'
    }, {
      title: 'Project',
      linkto: '/'
    }, {
      title: 'Single Task',
      linkto: '/'
    }, {
      title: 'Kanban Board',
      linkto: '/'
    }]
  },
  pages: {
    projectpage: {
      activeusers: [{
        name: 'Clarence',
        src: _avatarFemale.default
      }, {
        name: 'Matt',
        src: _avatarMale2.default
      }, {
        name: 'John',
        src: _avatarMale3.default
      }],
      nav: [{
        name: 'Tasks',
        active: true
      }, {
        name: 'Files'
      }, {
        name: 'Activity'
      }],
      tasks: {
        activeusers: [{
          name: 'Clarence',
          src: _avatarFemale.default
        }, {
          name: 'Matt',
          src: _avatarMale2.default
        }, {
          name: 'John',
          src: _avatarMale3.default
        }]
      },
      files: {},
      activity: {}
    }
  }
};
var _default = data;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Project = _interopRequireDefault(require("./components/Project/Project"));

var _data = _interopRequireDefault(require("./data"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProjectPage = /*#__PURE__*/function (_Component) {
  _inherits(ProjectPage, _Component);

  var _super = _createSuper(ProjectPage);

  function ProjectPage() {
    _classCallCheck(this, ProjectPage);

    return _super.apply(this, arguments);
  }

  _createClass(ProjectPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_Project.default, {
        data: _data.default
      });
    }
  }]);

  return ProjectPage;
}(_react.Component);

exports.default = ProjectPage;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    Promise.resolve().then(function () {
      return _interopRequireWildcard(require('web-vitals'));
    }).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

var _default = reportWebVitals;
exports.default = _default;
"use strict";

require("@testing-library/jest-dom");
