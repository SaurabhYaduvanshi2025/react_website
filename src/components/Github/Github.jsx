import { useEffect, useState } from "react";

export default function Github() {
  // 1. State: API data ko hold karne ke liye variable
  const [data, setData] = useState(null);

  // 2. State: Jab tak data internet se aa raha hai, loading dikhane ke liye
  const [loading, setLoading] = useState(true);

  // Apna ya kisi ka bhi public GitHub username yahan likhein
  const username = "hiteshchoudhary";

  // 3. useEffect: Yeh component load hote hi sirf EK baar chalega
  useEffect(() => {
    fetch("https://api.github.com/users/SaurabhYaduvanshi2025")
      .then((response) => response.json()) // Raw response ko JSON object me badla
      .then((result) => {
        setData(result);       // State me data save kiya
        setLoading(false);     // Loading band kar di
      })
      .catch((error) => {
        console.error("API error:", error);
        setLoading(false);
      });
  }, []); // [] empty dependency array ka matlab: sirf first render par run ho

  // 4. Conditional Rendering: Jab tak data download ho raha hai
  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-slate-600">
        Loading GitHub data...
      </div>
    );
  }

  // 5. Data aane ke baad UI render karein
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-lg text-center">
        
        {/* Profile Image */}
        <img
          src={data?.avatar_url}
          alt={data?.name}
          className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500/20 shadow-md object-cover mb-4"
        />

        {/* Name and Username */}
        <h2 className="text-2xl font-bold text-slate-900">{data?.name}</h2>
        <p className="text-sm text-orange-600 font-medium mb-3">@{data?.login}</p>
        
        {/* Bio */}
        <p className="text-slate-600 text-sm mb-6">
          {data?.bio || "No bio available"}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-100">
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-2xl font-black text-slate-900">{data?.followers}</p>
            <p className="text-xs text-slate-500">Followers</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-2xl font-black text-slate-900">{data?.public_repos}</p>
            <p className="text-xs text-slate-500">Repositories</p>
          </div>
        </div>

        {/* External Link */}
        <a
          href={data?.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block w-full py-3 bg-slate-900 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition-colors"
        >
          View Profile on GitHub
        </a>
      </div>
    </div>
  );
}


