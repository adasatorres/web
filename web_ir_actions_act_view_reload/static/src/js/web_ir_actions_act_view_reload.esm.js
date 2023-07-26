/** @odoo-module **/
// Copyright 2017 - 2018 Modoolar <info@modoolar.com>
// Copyright 2018 Modoolar <info@modoolar.com>
// License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).

import {registry} from "@web/core/registry";
const actionHandlersRegistry = registry.category("action_handlers");

    function ir_actions_act_view_reload(args) {
        location.reload();   
    }

actionHandlersRegistry.add("ir.actions.act_view_reload", ir_actions_act_view_reload);
