'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var MuiTextField = _interopDefault(require('@material-ui/core/TextField'));
var MuiSwitch = _interopDefault(require('@material-ui/core/Switch'));
var MuiCheckbox = _interopDefault(require('@material-ui/core/Checkbox'));
var FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel'));
var MuiSelect = _interopDefault(require('@material-ui/core/Select'));
var formik = require('formik');
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var InputLabel = _interopDefault(require('@material-ui/core/InputLabel'));
var Input = _interopDefault(require('@material-ui/core/Input'));
var FormHelperText = _interopDefault(require('@material-ui/core/FormHelperText'));
var MuiRadioGroup = _interopDefault(require('@material-ui/core/RadioGroup'));
var React = require('react');
var MuiInputBase = _interopDefault(require('@material-ui/core/InputBase'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var fieldToTextField = function (_a) {
    var field = _a.field, form = _a.form, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    var name = field.name;
    var touched = form.touched, errors = form.errors, isSubmitting = form.isSubmitting;
    var fieldError = formik.getIn(errors, name);
    var showError = formik.getIn(touched, name) && !!fieldError;
    return __assign({}, props, field, { error: showError, helperText: showError ? fieldError : props.helperText, disabled: disabled != undefined ? disabled : isSubmitting });
};
var TextField = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(MuiTextField, __assign({}, fieldToTextField(props)), children));
};
TextField.displayName = 'FormikMaterialUITextField';

var fieldToSwitch = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field, { value: field.name, checked: field.value });
};
var Switch = function (props) { return React.createElement(MuiSwitch, __assign({}, fieldToSwitch(props))); };
Switch.displayName = 'FormikMaterialUISwitch';

var fieldToCheckbox = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field, { checked: !!field.value, value: field.value ? 'checked' : '' });
};
var Checkbox = function (props) { return React.createElement(MuiCheckbox, __assign({}, fieldToCheckbox(props))); };
Checkbox.displayName = 'FormikMaterialUICheckbox';

var CheckboxWithLabel = function (_a) {
    var Label = _a.Label, props = __rest(_a, ["Label"]);
    return (React.createElement(FormControlLabel, __assign({ control: React.createElement(MuiCheckbox, __assign({}, fieldToCheckbox(props))) }, Label)));
};
CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';

var fieldToSelect = function (_a) {
    var field = _a.field, _b = _a.form, isSubmitting = _b.isSubmitting, setFieldValue = _b.setFieldValue, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    var onChange = React.useCallback(function (event) {
        if (props.multiple && props.native) {
            var options = event.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            setFieldValue(field.name, value);
        }
        else {
            field.onChange(event);
        }
    }, [field.name, props.multiple, props.native]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field, { onChange: onChange });
};
var Select = function (props) { return React.createElement(MuiSelect, __assign({}, fieldToSelect(props))); };
Select.displayName = 'FormikMaterialUISelect';

var SimpleFileUpload = function (_a) {
    var label = _a.label, field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors, isSubmitting = _b.isSubmitting, setFieldValue = _b.setFieldValue, _c = _a.disabled, disabled = _c === void 0 ? false : _c, inputProps = _a.InputProps, inputLabelProps = _a.InputLabelProps;
    var error = formik.getIn(touched, field.name) && formik.getIn(errors, field.name);
    return (React.createElement("div", null,
        React.createElement(FormControl, null,
            label && (React.createElement(InputLabel, __assign({ shrink: true, error: !!error }, inputLabelProps), label)),
            React.createElement(Input, __assign({ error: !!error, inputProps: {
                    type: 'file',
                    disabled: disabled || isSubmitting,
                    name: field.name,
                    onChange: function (event) {
                        var file = event.currentTarget.files[0];
                        setFieldValue(field.name, file);
                    },
                } }, inputProps)),
            error && React.createElement(FormHelperText, { error: true }, error))));
};

var fieldToRadioGroup = function (_a) {
    var field = _a.field, form = _a.form, props = __rest(_a, ["field", "form"]);
    return (__assign({}, props, field));
};
var RadioGroup = function (props) {
    return React.createElement(MuiRadioGroup, __assign({}, fieldToRadioGroup(props)));
};
RadioGroup.displayName = 'FormikMaterialUIRadioGroup';

var fieldToInputBase = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field);
};
var InputBase = function (props) { return React.createElement(MuiInputBase, __assign({}, fieldToInputBase(props))); };
InputBase.displayName = 'FormikMaterialUIInputBase';

exports.fieldToTextField = fieldToTextField;
exports.TextField = TextField;
exports.fieldToSwitch = fieldToSwitch;
exports.Switch = Switch;
exports.fieldToCheckbox = fieldToCheckbox;
exports.Checkbox = Checkbox;
exports.CheckboxWithLabel = CheckboxWithLabel;
exports.fieldToSelect = fieldToSelect;
exports.Select = Select;
exports.SimpleFileUpload = SimpleFileUpload;
exports.fieldToRadioGroup = fieldToRadioGroup;
exports.RadioGroup = RadioGroup;
exports.fieldToInputBase = fieldToInputBase;
exports.InputBase = InputBase;
//# sourceMappingURL=index.js.map