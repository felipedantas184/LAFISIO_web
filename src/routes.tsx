import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Laai from './pages/Laai';

    function Routes() {
        return (
            <BrowserRouter>
                <Route path="/laai" exact component={Laai}/>
            </BrowserRouter>
        )
    }

export default Routes;