import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


import Sidebar from "../components/sidebar";
import TrendingFeed from "../components/TrendingFeed";
import QuestionCard from "../components/QuestionCards";

export default function Questions() {
    const navigate = useNavigate();  
  const { user } = useAuth();


    function handleAskQuestion() {
    if (!user) {
      navigate("/login?reason=ask");
    } else {
      navigate("/ask");
    }
  }

  const questions = [
     { id: 1, votes: 1, answers: 1, views: 4, tags: ["python", "machine-learning", "langchain", "large-language-model", "agent"] },
     { id: 2, votes: 0, answers: 0, views: 10, tags: ["html", "css", "react"] },
     { id: 3, votes: 2, answers: 1, views: 40, tags: ["vite", "tailwind", "javascript"] },
     { id: 4, votes: 2, answers: 1, views: 40, tags: ["socket", "server", "blocking"] },
    // { id: 5, votes: 2, answers: 1, views: 40, tags: ["angular", "signals", "angular-signals","angular-services"] }
  ];

  return (
    <div className="flex w-full">

      
      <Sidebar />

   
      <main className="flex-1 px-8 py-6">

    
        <TrendingFeed />

      
        <div className="flex justify-between items-center mb-6 mt-6">
          <h1 className="text-2xl font-semibold">Newest Questions</h1>
         <button
  onClick={handleAskQuestion}
  className="bg-blue-400 text-white px-4 py-2 rounded"
>
  Ask Question
</button>

        </div>

        <p className="text-gray-600 mb-4">8 questions</p>
        <div className="border-b border-gray-500 mb-6"></div> 
        <div className="flex items-center justify-between mb-6"> 
          <div className="flex rounded-md overflow-hidden bg-gray-100 text-sm"> 
        <button className="px-4 py-2 hover:bg-white font-medium"> Newest </button>
        <button className="px-4 py-2 hover:bg-white"> Active </button>
        <button className="px-4 py-2 hover:bg-white flex items-center gap-1"> Bountied <span className="bg-green-600 text-white text-xs px-2 rounded"> 0 </span>
         </button> <button className="px-4 py-2 hover:bg-white"> Answered </button> 
         <button className="px-4 py-2 hover:bg-white"> Unanswered </button>
      <button className="px-4 py-2 hover:bg-white"> More <span>▾</span> </button> </div>
        <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded text-sm hover:bg-blue-50"> ☰ Filter </button> </div>

        <div className="border-b border-gray-500 mb-6"></div>

   {questions.map((q) => (
  <QuestionCard key={q.id} question={q} />
))}

      
      </main>

    </div>
  );
}




// export default function Questions() {
//   return (
//     <main className="flex-1 px-6 py-6">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-semibold">Newest Questions</h1>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//           Ask Question
//         </button>
//       </div>

//       <p className="text-gray-600 mb-4">24,175,844 questions</p>

//       {/* FILTER BAR */}
//       <div className="flex justify-between items-center border-b pb-3 mb-4">
//         <div className="flex gap-2">
//           <button className="px-3 py-1 bg-gray-100 rounded">Newest</button>
//           <button className="px-3 py-1 hover:bg-gray-100 rounded">Active</button>
//           <button className="px-3 py-1 hover:bg-gray-100 rounded">
//             Bountied <span className="ml-1 bg-green-600 text-white px-2 rounded text-xs">7</span>
//           </button>
//           <button className="px-3 py-1 hover:bg-gray-100 rounded">Unanswered</button>
//         </div>

//         <button className="border px-3 py-1 rounded text-blue-600">
//           Filter
//         </button>
//       </div>

//       {/* QUESTION LIST */}
//       <div className="space-y-6">

//         {/* QUESTION ITEM */}
//         <div className="flex gap-6 border-b pb-4">
//           <div className="text-sm text-gray-600 text-right w-20">
//             <p>-1 votes</p>
//             <p>0 answers</p>
//             <p>4 views</p>
//           </div>

//           <div>
//             <h2 className="text-blue-600 text-lg hover:underline cursor-pointer">
//               Why does TypeScript not understand the return of my map function?
//             </h2>

//             <p className="text-gray-600 text-sm mt-1">
//               let filteredTestMap = Object.fromEntries(Object.entries(...))
//             </p>

//             <div className="flex gap-2 mt-2">
//               <span className="bg-gray-100 px-2 py-1 rounded text-xs">typescript</span>
//             </div>

//             <p className="text-xs text-gray-500 mt-2">
//               asked 2 mins ago by <span className="text-blue-600">Nanea Biznes</span>
//             </p>
//           </div>
//         </div>

//         {/* duplicate items later via map() */}

//       </div>

//     </main>
//   );
// }
