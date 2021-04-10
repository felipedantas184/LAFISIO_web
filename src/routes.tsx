import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Lafisio from './pages/Lafisio';

    function Routes() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Lafisio}/>
            </BrowserRouter>
        )
    }

export default Routes;