// import { PipelineToolbar } from './NodePanel';
// import { PipelineUI } from './ui';
// import { SubmitButton } from './submit';

// function App() {
//   return (
//     <div>
//       <PipelineToolbar />
//       <PipelineUI />
//       <SubmitButton />
//     </div>
//   );
// }

// export default App;

import { PipelineToolbar } from './NodePanel';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto bg-gray-900 text-white shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-white text-center">
          🧠 VectorFlow Builder
        </h1>

        {/* Toolbar */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <PipelineToolbar />
        </div>

        {/* Flow UI Canvas */}
        <div className="rounded-xl border border-gray-700 bg-gray-800 h-[70vh] overflow-hidden">
          <PipelineUI />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;
