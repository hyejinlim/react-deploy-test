import { BrowserRouter } from 'react-router-dom';
import Router from '~/Router';
import * as styles from './styles';

function App() {
  return (
    <BrowserRouter>
      <div css={styles.text}>Text Styling</div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
