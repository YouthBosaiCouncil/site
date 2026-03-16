import { ArrowRight, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "活動実績 | 若者防災協議会",
  description: "これまでの若者防災協議会の活動レポートやイベント実績をご紹介します。",
};

// 活動データのモック
const activities = [
  {
    id: 1,
    title: "〇〇市総合防災訓練に学生ブースを出展しました",
    date: "2026.03.15",
    category: "イベント",
    location: "〇〇市 中央公園",
    description: "若者ならではの視点で非常持ち出し袋のカスタマイズワークショップを開催。防災グッズの展示や、参加者自身が考えながらオリジナルの持ち出しリストを作成する体験型コンテンツを提供しました。多くの家族連れにご参加いただき、「楽しく学べた」という声を多数いただきました。",
  },
  {
    id: 2,
    title: "オンライン防災シミュレーションゲーム大会の開催",
    date: "2026.02.28",
    category: "ワークショップ",
    location: "オンライン (Zoom / Discord)",
    description: "全国の学生を対象に、完全リモートで参加できる防災シミュレーションゲームを実施。「もし今、大地震が起きたら？」というシナリオのもと、チームごとに情報収集と意思決定を行うプロセスを体験してもらいました。参加者同士の議論も白熱し、有意義な時間となりました。",
  },
  {
    id: 3,
    title: "メンバー向け普通救命講習およびハザードマップ確認会",
    date: "2026.01.10",
    category: "講習会",
    location: "〇〇区民センター",
    description: "新規参加メンバーを交えて、消防署の方をお招きし基礎的な心肺蘇生法とAEDの利用方法を実践で学びました。午後はハザードマップを広げながら、それぞれの大学・自宅周辺の危険箇所や避難経路についてグループワークを行いました。",
  },
  {
    id: 4,
    title: "「若者×デジタル」防災ハッカソン 共催",
    date: "2025.11.20",
    category: "イベント",
    location: "〇〇大学 カンファレンスルーム",
    description: "IT系学生団体と共同で「防災領域における課題解決」をテーマにしたハッカソンを2日間にわたって開催しました。安否確認の新しい仕組みや、備蓄品の管理アプリなど、学生ならではの斬新なプロダクトが多数提案され、専門家からも高い評価を受けました。",
  },
  {
    id: 5,
    title: "SNSを活用した「#1日1防災」キャンペーン",
    date: "2025.09.01",
    category: "啓発活動",
    location: "公式SNS (X / Instagram)",
    description: "防災の日（9月1日）に合わせて、9月の1ヶ月間、毎日1つずつすぐ実践できる防災アクションをSNSで発信しました。インフルエンサーの方々にもご協力いただき、総インプレッション数は10万を超え、多くの10代〜20代へのリーチに成功しました。",
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
            これまでのイベント開催やワークショップなど、私たちの活動の歩みをご紹介します。
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
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <div className={`absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700`}></div>
                  
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md text-zinc-900 dark:text-white shadow-sm">
                    {activity.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-zinc-400 dark:text-zinc-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-zinc-400" />
                      <span>{activity.date}</span>
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
          
          {/* Pagination (Mock) */}
          <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50" disabled>
                &lt;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-bold transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-500 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                &gt;
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
