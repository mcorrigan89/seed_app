import * as React from 'react';
import { Actions } from '@routes/home/module/actions';

export interface Props {
  title: string;
  updateTitle: typeof Actions.updateTitle;
  clearTitle: typeof Actions.clearTitle;
}

interface State {
  title: string;
}

export class HomeComponent extends React.Component<Props, State> {

  state = {
    title: this.props.title
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.currentTarget.value });
  }

  handleUpdate = () => {
    this.props.updateTitle(this.state.title);
  }

  public render() {
    return (
      <>
        <div data-attr={'test'}>{this.props.title}</div>
        <label>Update Title
          <input type={'text'} name={'title'} value={this.state.title} onChange={this.handleInputChange} />
        </label>
        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}