// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Home } from './pages';
import 'libs/ui-design/src/lib/assets/app.scss';

import { PageLoader } from './components';

export function App() {
  return (
    <>
      <PageLoader />
      <Home />
    </>
  );
}

export default App;
