import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import { AdminScreen } from '../components/admin/AdminScreen';
import { Bottom } from '../components/ui/Bottom';
import { TableScreen } from '../components/admin/TableScreen';

export const AdminRoutes = () => {
    return (
        <>
            <div className="routes__mainBottom">
                <div className="routes__middelBottom">
                    <Switch>
                        <Route exact path="/admin/create" component={AdminScreen} />
                        <Route exact path="/admin/table" component={TableScreen} />
                    </Switch>
                </div>
                <div>
                    <Bottom />
                </div>
            </div>
        </>
    )
}
