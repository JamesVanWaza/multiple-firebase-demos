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

import { deepCopy } from "@firebase/util";

FriendlyEats.prototype.initTemplates = function() {
    this.templates = {};

    var that = this;
    document.querySelectorAll('.template').forEach(function(el) {
        that.templates[el.getAttribute('id')] = el;
    });
}

FriendlyEats.prototype.viewHome = function() {
    this.getAllRestaurants();
}

FriendlyEats.prototype.viewList = function(filters, filter_description) {
    if (!filter_description) {
        filter_description = 'any type of food with any price in any city.';
    }

    var mainEl = this.renderTemplate('main-adjusted');
    var headerEl = this.renderTemplate('header-base', {
        hasSectionHeader: true
    });

    this.replaceElement(
        headerEl.querySelector('#section-header'),
        this.renderTemplate('filter-display', {
            filter_description: filter_description
        })
    );

    this.replaceElement(document.querySelector('.header'), headerEl);
    this.replaceElement(document.querySelector('main'), mainEl);

    var that = this;
    headerEl.querySelector('#show-filters').addEventListener('click', function() {
        that.dialogs.filter.show();
    });

    var renderer = {
        remove: function(doc) {
            var locationCardToDelete = mainEl.querySelector('#doc-' + doc.id);
            if (locationCardToDelete) {
                mainEl.querySelector('#cards').removeChild(locationCardToDelete.parentNode);
            }

            return;
        },
        display: function(doc) {
            var data = doc.data();
            data['.id'] = doc.id;
            data['go_to_restaurant'] = function() {
                that.router.navigate('/restaurants/' + doc.id);
            }

            var el = that.renderTemplate('restaurant-card', data);
            el.querySelector('.rating').append(that.renderRating(data.avgRating));
            el.querySelector('.price').append(that.renderPrice(data.price));

            // Setting the id allows to locationg the indiviudal resturant card
            el.querySelector('.location-card').id = 'doc-' + doc.id;

            var existingLocationCard = mainEl.querySelector('#doc-' + doc.id);
            if (existingLocationCard) {
                // modify
                existingLocationCard.parentNode.before(el);
                mainEl.querySelector('#cards').removeChild(existingLocationCard.parentNode);
            } else {
                // add
                mainEl.querySelector('#cards').append(el);
            }
        },
        empty: function() {
            var headerEl = that.renderTemplate('header-base', {
                hasSectionHeader: true
            });

            var noResultsEl = that.renderTemplate('no-results');

            that.replaceElement(
                headerEl.querySelector('#section-header'),
                that.renderTemplate('filter-display', {
                    filter_description: filter_description
                })
            );

            headerEl.querySelector('#show-filters').addEventListener('click', function() {
                that.dialogs.filter.show();
            });

            that.replaceElement(document.querySelector('.header'), headerEl);
            that.replaceElement(document.querySelector('main'), noResultsEl);
            return;
        }
    };

    if (filters.city || filters.category || filters.price || filters.sort !== 'Rating') {
        this.getFilteredRestaurants({
            city: filters.city || 'Any',
            category: filters.category || 'Any',
            price: filters.price || 'Any',
            sort: filters.sort
        }, renderer);
    } else {
        this.getAllRestaurants(renderer);
    }

    var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
    toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

    mdc.autoInit();
}