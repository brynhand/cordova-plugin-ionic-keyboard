/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var Keyboard = function() {};

Keyboard.hideFormAccessoryBar = function(hide, success) {
    if (hide !== null && hide !== undefined){
        exec(success, null, "Keyboard", "hideFormAccessoryBar", [hide]);
    } else {
        exec(success, null, "Keyboard", "hideFormAccessoryBar", []);
    }
};

Keyboard.fireOnShow = function() {
    Keyboard.isVisible = true;
    cordova.fireWindowEvent('keyboardDidShow');
};

Keyboard.fireOnHide = function() {
    Keyboard.isVisible = false;
    cordova.fireWindowEvent('keyboardDidHide');
};

Keyboard.fireOnHiding = function() {
    cordova.fireWindowEvent('keyboardWillHide');
};

Keyboard.fireOnShowing = function() {
    cordova.fireWindowEvent('keyboardWillShow');
};

Keyboard.fireOnFrameChange = function(height) {
    cordova.fireWindowEvent('keyboardHeightWillChange', { 'keyboardHeight': height });
};

Keyboard.show = function() {
    exec(null, null, "Keyboard", "show", []);
};

Keyboard.hide = function() {
    exec(null, null, "Keyboard", "hide", []);
};

Keyboard.isVisible = false;
Keyboard.automaticScrollToTopOnHiding = false;

module.exports = Keyboard;
