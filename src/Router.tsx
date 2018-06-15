import * as React from 'react';
import { Switch, Route } from 'react-router';

import { LoadableHome } from '@routes/home';

export const Router: React.SFC<{}> = () => (
  <>
    <Switch>
      <Route
        exact={true}
        path={'/'}
        render={() => <LoadableHome />}
      />
      <Route 
        path={'/:id'}
        render={() => <div>ID</div>}
      />
    </Switch>
  </>
);
