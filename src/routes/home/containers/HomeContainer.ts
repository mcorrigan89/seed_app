import { connect, Dispatch } from 'react-redux';
import { RootActions } from '@store/actions';
import { RootState } from '@store/rootReducer';
import { HomeComponent } from '@routes/home/components/Home';
import { Actions } from '@routes/home/module/actions';

const mapStateToProps = ({ home }: RootState) => ({
  title: home.title
});

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  updateTitle: (title: string) => dispatch(Actions.updateTitle(title)),
  clearTitle: () => dispatch(Actions.clearTitle())
});

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);