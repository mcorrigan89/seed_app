import * as React from 'react';
import { Actions } from '../../module/actions';

export interface Props {
  title: string;
  clearTitle: typeof Actions.clearTitle;
}

export class HomeComponent extends React.Component<Props, {}> {
  public render() {
    return <div>{this.props.title}</div>;
  }
}