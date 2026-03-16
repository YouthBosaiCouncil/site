import { CheckCircle2, Target, Heart } from "lucide-react";

export const metadata = {
  title: "団体概要 | 若者防災協議会",
  description: "若者防災協議会の設立背景、ビジョン、および概要のご紹介です。",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-zinc-950 text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">団体概要</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            若者防災協議会について、私たちの成り立ちと目指す未来をご案内します。
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white dark:bg-black relative">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs font-bold mb-6 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 uppercase tracking-widest">
                Our Vision
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-8 leading-tight tracking-tight">
                「防災が<span className="text-gradient">日常</span>の<br />世界にする」
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 text-lg">
                私たちは、防災が特別なことではなく、毎日の生活の一部として当たり前になる社会を目指しています。災害のニュースを見た時だけでなく、日常の中で自然と防災に触れる機会を創出します。
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                神戸学院大学の学生・卒業生を中心に活動を開始し、現在ではオンラインを通じて全国からメンバーが参加。オンライン活動と対面イベントを融合させた「ハイブリッド型活動」を展開しています。
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden relative border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 mix-blend-multiply dark:mix-blend-screen"></div>
                {/* プレースホルダーとしてアイコンを大きく表示（実際の画像があれば置き換え可能） */}
                <Heart className="w-32 h-32 text-zinc-300 dark:text-zinc-700/50" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl dark:border dark:border-zinc-800 hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Target size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">設立</div>
                    <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">2021年 5月</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-zinc-900">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">活動の特長・受賞歴</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">私たちの取り組みは各所で評価されています</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">オンラインの基盤</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                「Zoomで防災教育」など、全国どこからでも参加できるオンライン環境を活用。コロナ禍でも歩みを止めずに活動を拡大しました。
              </p>
            </div>
            
            <div className="card-premium">
              <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">教材「VERGE」の開発</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                子どもから大人まで体験できる、被災者の視点での選択型防災ゲーム「VERGE」を制作し、各地のイベントで提供しています。
              </p>
            </div>

            <div className="card-premium">
              <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">ぼうさい甲子園 受賞</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                18回（2022年度）1.17防災未来賞「ぼうさい甲子園」において、継続的かつ柔軟な活動が評価され「しなやかwithコロナ賞」を受賞しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">団体概要</h2>
          </div>

          <div className="bg-white dark:bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80">団体名</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400 font-medium">若者防災協議会</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80">設立</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400 font-medium">2021年5月</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80">主なメンバー層</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400 font-medium">神戸学院大学の学生・卒業生を中心に、全国の若者がオンラインベースで参画</td>
                </tr>
                <tr>
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80 align-top">主な活動内容</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400">
                    <ul className="list-disc list-inside space-y-3 font-medium">
                      <li>Zoomなどのオンラインを活用した防災教育イベントの開催</li>
                      <li>選択型防災ゲーム「VERGE」の開発・アップデート</li>
                      <li>小学生向けなど対面の防災イベント（防災ストラックアウト等）の実施</li>
                      <li>オンラインと対面を組み合わせたハイブリッド型活動</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
