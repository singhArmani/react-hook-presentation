import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import ClassComponent from 'components/ClassComponent';

import ComponentA from 'components/ComponentA';
import HOC from 'components/HOC';
import RenderProps from 'components/RenderProps';
import Cat from 'components/Cat';
import ComponetB from 'components/ComponetB';
import { TalkContext } from 'TalkContext';

const ComponentAWithMouse = HOC(ComponentA);

function App() {
  return (
    <TalkContext.Provider value={{ talk: 'react context', presenter: 'aman' }}>
      <div className="App">
        <ClassComponent title="Class Component" />
        <ComponentAWithMouse title="Using HOC" />
        <RenderProps
          render={data => <Cat {...data} />}
          title="Using Render props"
        />
        <ComponetB title="Using Hooks" />
      </div>
    </TalkContext.Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
