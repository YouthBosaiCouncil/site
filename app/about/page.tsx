import { CheckCircle2, Target, Heart } from "lucide-react";

export const metadata = {
  title: "団体概要 | 若者防災協議会",
  description: "若者防災協議会の設立背景、ビジョン、およびコアメンバーのご紹介です。",
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
                「誰一人<span className="text-gradient">取り残さない</span>」<br />新しい防災のスタンダードを。
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 text-lg">
                近年激甚化する自然災害。その中で、若者は単なる「守られるべき対象」ではありません。身体的にも情報収集能力にも長けた若者こそが、地域防災の新たな担い手になれると私たちは信じています。
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                若者防災協議会は、デジタル技術と若者ならではの柔軟な発想を組み合わせ、従来の枠にとらわれない新しい防災・減災の在り方を提案し、社会全体の実践力向上を目指します。
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 mix-blend-multiply dark:mix-blend-screen"></div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl dark:border dark:border-zinc-800 hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Target size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">設立</div>
                    <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">2023年 4月</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-zinc-900">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">私たちが大切にしていること</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">活動の根底にある3つのコアバリュー</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">共感と寄り添い</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                被災者の声に耳を傾け、上段からではなく一緒に考える姿勢を持ち続けます。
              </p>
            </div>
            
            <div className="card-premium">
              <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">実践志向</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                机上の空論ではなく、「いざという時に本当に動けるか」を常に問い続けます。
              </p>
            </div>

            <div className="card-premium">
              <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">常にアップデート</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                テクノロジーの進化や環境の変化に合わせて、防災の手法もアップデートし続けます。
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
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400 font-medium">学生団体 若者防災協議会<br/><span className="text-sm font-normal text-zinc-400">(Youth Disaster Prevention Council)</span></td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80">設立</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400 font-medium">2023年4月1日</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80">代表</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400 font-medium">防災 太郎（〇〇大学 〇〇学部 3年）</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80">メンバー数</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400 font-medium">約30名（関東圏の大学生を中心とする）</td>
                </tr>
                <tr>
                  <th className="py-6 px-8 font-bold w-1/3 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/80 align-top">主な活動内容</th>
                  <td className="py-6 px-8 text-zinc-600 dark:text-zinc-400">
                    <ul className="list-disc list-inside space-y-3 font-medium">
                      <li>若者向け防災教育プログラムの開発・実施</li>
                      <li>地域防災イベントへの企画・運営サポート</li>
                      <li>防災グッズの共同開発検証</li>
                      <li>SNSを通じた日常的な防災啓発ワーキング</li>
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
