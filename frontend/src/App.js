import { Suspense } from 'react';
import Router from './appFolder/router';
import Store from './appFolder/store';


function App() {
  return (
    <div className="App">
      <Suspense
        fallback={() => <div>Loading ...</div>}
      >
        <Store>
          <Router />
        </Store>
      </Suspense>
    </div>
  );
}

export default App;
