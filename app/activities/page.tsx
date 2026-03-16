import { ArrowRight, MapPin, Trophy } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "活動実績 | 若者防災協議会",
  description: "若者防災協議会の「Zoomで防災教育」や対面イベント、受賞実績をご紹介します。",
};

// 実際の活動に即したデータ
const activities = [
  {
    id: 1,
    title: "1.17防災未来賞「ぼうさい甲子園」で受賞",
    date: "2022年度",
    category: "受賞実績",
    location: "兵庫県",
    description: "第18回「ぼうさい甲子園」において、コロナ禍でも止まらないオンラインを基盤とした継続的かつ柔軟な活動が高く評価され、「しなやかwithコロナ賞」を受賞しました。これを糧に、さらに全国へと活動の輪を広げていきます。",
  },
  {
    id: 2,
    title: "ポートアイランド夏祭り「防災ストラックアウト」出展",
    date: "2025年夏",
    category: "対面イベント",
    location: "神戸市",
    description: "小学生など地域の子どもたちを対象に、身近な物がどのように防災に役立つかを体験し、その重要性を伝えるイベントを実施。「防災ストラックアウト」を通じて、子どもたちに防災クイズを出し、災害時の注意点などを楽しく解説しました。",
  },
  {
    id: 3,
    title: "「Zoomで防災教育」オンラインワークショップ開催",
    date: "定期開催",
    category: "オンライン",
    location: "オンライン (Zoom)",
    description: "コロナ禍の発足時から継続している基盤活動です。特定のテーマに沿った講演会やディスカッションをZoom上で開催し、全国各地から参加できる環境を提供しています。物理的な距離を越えて、若者同士が防災について語り合える場となっています。",
  },
  {
    id: 4,
    title: "選択型防災ゲーム「VERGE」の開発・体験会",
    date: "継続中",
    category: "教材開発",
    location: "各地イベント",
    description: "被災者の視点での葛藤や決断を疑似体験できる、独自の選択型防災ゲーム「VERGE」を制作しています。子どもから大人まで直感的に学べる教材として、各地の防災イベントで体験会を開き、参加者の声をもとに継続的なブラッシュアップを行っています。",
  }
];

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20 bg-zinc-50 dark:bg-black">
      {/* Page Header */}
      <section className="bg-zinc-950 text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="container px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">活動実績</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            オンラインと対面を掛け合わせた、私たちの「ハイブリッド型活動」の実績をご紹介します。
          </p>
        </div>
      </section>

      {/* Activities Timeline/List */}
      <section className="py-24">
        <div className="container px-6 max-w-4xl mx-auto">
          
          <div className="space-y-12">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className="bg-white dark:bg-zinc-900/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-200 dark:border-zinc-800 group flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700`}></div>
                  
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md text-zinc-900 dark:text-white shadow-sm hover:scale-105 transition-transform">
                    {activity.category}
                  </div>
                  
                  {activity.category === "受賞実績" && (
                    <Trophy className="w-20 h-20 text-yellow-500/50 absolute z-10" />
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-zinc-400 dark:text-zinc-500 mb-4">
                    <div className="flex items-center gap-2">
                       <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-600 dark:text-zinc-300">
                         {activity.date}
                       </span>
                    </div>
                    {activity.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-zinc-400" />
                        <span>{activity.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-extrabold mb-4 text-zinc-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href="#">{activity.title}</Link>
                  </h2>
                  
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 font-medium">
                    {activity.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/btn">
                      詳細を見る <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
