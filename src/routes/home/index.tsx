import * as React from 'react';
import * as Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

export const LoadableHome = Loadable({
  loader: () => import('@routes/home/containers/HomeContainer'),
  loading: Loading,
  render: ({ HomeContainer }) => <HomeContainer />
});
