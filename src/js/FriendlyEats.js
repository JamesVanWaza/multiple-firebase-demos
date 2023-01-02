/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/** Initializes the FriendlyEats app */
function FriendlyEats() {
    this.filters = {
        city: '',
        price: '',
        category: '',
        sort: 'Rating'
    };

    this.dialogs = {};

    var that = this;

    firebase.auth().signInAnonymously().then(function() {
        that.initTemplates();
        that.initRouter();
        that.initReviewDialog();
        that.initFilterDialog();
    }).catch(function(err) {
        console.log(err);
    });
}

/** Initialixed the router for the FriendlyEats app */
FriendlyEats.prototype.initRouter = function() {
    this.router = new Navigo();

    var that = this;
    this.router
        .on({
            '/': function() {
                that.updateQuery(that.filters);
            }
        })
        .on({
            '/setup': function() {
                that.viewSetup();
            }
        })
        .on({
            '/restaurants/*': function() {
                var path = that.getCleanPath(document.location.pathname);
                var id = path.split('/')[2];
                that.viewRestaurant(id);
            }
        })
        .resolve();

    firebase
        .firestore()
        .collection('restaurants')
        .limit(1)
        .onSnapshot(function(snapshot) {
            if (snapshot.empty) {
                that.router.navigate('/setup');
            }
        });
}