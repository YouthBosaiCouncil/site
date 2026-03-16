import Link from "next/link";
import { ArrowRight, BookOpen, Users, ShieldAlert } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container px-6 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-sm font-medium mb-8 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
            学生団体 若者防災協議会
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.15] max-w-4xl">
            若者の力で、<br className="sm:hidden" />
            <span className="text-gradient">
              未来の命
            </span>
            を守る。
          </h1>
          
          <p className="max-w-[650px] mx-auto text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
            私たちは、次世代の視点から新しい防災のカタチを提案し、地域社会のレジリエンス向上に貢献するプロフェッショナルな学生団体です。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link 
              href="/about" 
              className="px-8 py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-sm w-full sm:w-auto text-center"
            >
              私たちについて
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-bold text-base transition-all shadow-sm w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
            >
              活動に参加する
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-zinc-900">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">私たちのミッション</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-[600px] mx-auto text-lg">
              防災を「堅苦しいもの」から「身近なもの」へ。私たちは3つの柱を軸に活動を展開しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-premium group">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">教育・啓発</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                小中学生向けの防災ワークショップや、若者向けのイベントを通じて、楽しく実践的な防災知識を普及させます。
              </p>
            </div>
            
            <div className="card-premium group">
              <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/20 rounded-2xl flex items-center justify-center mb-6 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">地域コミュニティ</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                地域住民や自治体、他団体と連携し、世代を超えた防災ネットワークの構築を支援します。
              </p>
            </div>
            
            <div className="card-premium group">
              <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">研究・提言</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                災害時の若者の行動特性や、新しい防災ツールの有効性について研究し、社会へ提言を行います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Activities */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-2 tracking-tight">最新の活動実績</h2>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">直近のイベントやワークショップのレポート</p>
            </div>
            <Link href="/activities" className="hidden md:flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
              すべて見る <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Activity Card 1 */}
            <Link href="/activities" className="group flex flex-col gap-4">
              <div className="aspect-[4/3] w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 text-xs font-bold px-3 py-1 rounded-full text-zinc-900 dark:text-white shadow-sm backdrop-blur-md">イベント</div>
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">2026年3月15日</div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  〇〇市総合防災訓練に学生ブースを出展しました
                </h3>
              </div>
            </Link>

            {/* Activity Card 2 */}
            <Link href="/activities" className="group flex flex-col gap-4">
              <div className="aspect-[4/3] w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 text-xs font-bold px-3 py-1 rounded-full text-zinc-900 dark:text-white shadow-sm backdrop-blur-md">ワークショップ</div>
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">2026年2月28日</div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  オンライン防災シミュレーションゲーム大会の開催
                </h3>
              </div>
            </Link>

            {/* Activity Card 3 */}
            <Link href="/activities" className="group flex flex-col gap-4 hidden md:flex lg:flex">
              <div className="aspect-[4/3] w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 text-xs font-bold px-3 py-1 rounded-full text-zinc-900 dark:text-white shadow-sm backdrop-blur-md">講習会</div>
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">2026年1月10日</div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  メンバー向け普通救命講習およびハザードマップ確認会
                </h3>
              </div>
            </Link>
          </div>
          
          <div className="mt-8 md:hidden">
            <Link href="/activities" className="inline-flex w-full justify-center items-center gap-2 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-6 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 font-bold transition-colors">
              すべて見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-zinc-950 text-white">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/30 to-violet-600/30 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            一緒に防災の<span className="text-gradient">未来</span>を創りませんか？
          </h2>
          <p className="text-zinc-400 md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            若者防災協議会では、共に活動するメンバーを随時募集しています。<br className="hidden md:block"/>
            少しでも興味があれば、ぜひお気軽にお問い合わせください。
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95 group"
          >
            新メンバーに登録する
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
