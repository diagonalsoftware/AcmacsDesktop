/*
    Antigenic Cartography for Desktop
    [Antigenic Cartography](http://www.antigenic-cartography.org/) is the process of creating maps of antigenically variable pathogens.
    In some cases two-dimensional maps can be produced which reveal interesting information about the antigenic evolution of a pathogen.
    This project aims at providing a desktop application for working with antigenic maps.

    © 2015 The Antigenic Cartography Group at the University of Cambridge

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function() {
    'use strict';

    angular.module('acjim.toolbar')
        .factory('toolbarItems', [toolbarItems]);

    function toolbarItems () {
        return {
            SELECTION: 1,
            MOVEMENT: 2,
            SHOW_ERROR_LINES: 3,
            SHOW_CONNECTION_LINES: 4,
            SHOW_BLOBS: 5,
            SHOW_LABELS: 6,
            RE_OPTIMIZE: 7,
            DISCONNECT_NODES: 8,
            ZOOM_IN: 14,
            ZOOM_OUT: 15,
            MAP_TOOLS: 10,
            FIX_NODES:13,
            NEW_MAP_FROM_SELECTED: 16,
            RANDOMIZE_NODES: 17,
            FLIP_MAP_LEFT: 18,
            FLIP_MAP_HORIZENTAL: 19,
            UPDATE_TABLE: 20,
            COMPUTE_BLOBS: 21,
            DUPLICATE_MAP: 22

        };
    }
})();
