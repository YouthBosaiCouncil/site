import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata = {
  title: "お問い合わせ | 若者防災協議会",
  description: "若者防災協議会への参加申し込み、イベントのご相談、その他のお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20 bg-zinc-50 dark:bg-black">
      {/* Page Header */}
      <section className="bg-zinc-950 text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="container px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">お問い合わせ</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            活動内容へのご質問、イベントのご依頼、新メンバーの参加応募などお気軽にご連絡ください。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mb-6">ご連絡先情報</h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium mb-8">
                  お急ぎのご用件以外は、右記のフォームよりお問い合わせいただくようお願い申し上げます。確認次第、担当者よりご連絡いたします。
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-900 dark:text-white shrink-0 shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <Mail size={24} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Email</h3>
                    <p className="text-zinc-900 dark:text-zinc-200 font-bold text-lg">info@wakamonobousai.example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-900 dark:text-white shrink-0 shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <Phone size={24} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Phone</h3>
                    <p className="text-zinc-900 dark:text-zinc-200 font-bold text-lg">03-XXXX-XXXX</p>
                    <p className="text-sm font-medium text-zinc-500 mt-1">平日 10:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-900 dark:text-white shrink-0 shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <MapPin size={24} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Address</h3>
                    <p className="text-zinc-900 dark:text-zinc-200 font-bold text-lg">〒100-0000</p>
                    <p className="font-medium text-zinc-500 mt-1">東京都千代田区〇〇 1-2-3<br/>防災ビル 4F</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl p-8 mt-12">
                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  新メンバー募集について
                </h4>
                <p className="text-sm text-blue-800/80 dark:text-blue-400/80 font-medium leading-relaxed">
                  現在、特に関西圏の高校生・大学生・専門学生の方を募集しております。デザイン、企画、広報など、防災の知識がなくても得意分野を活かして参加できます！
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
              <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mb-8 relative z-10">お問い合わせフォーム</h2>
              
              <form className="space-y-6 relative z-10" action="/contact">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="name" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                      お名前 <span className="text-blue-600">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors dark:text-white font-medium"
                      placeholder="防災 太郎"
                      required
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="furigana" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                      フリガナ
                    </label>
                    <input 
                      type="text" 
                      id="furigana" 
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors dark:text-white font-medium"
                      placeholder="ボウサイ タロウ"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="email" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    メールアドレス <span className="text-blue-600">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors dark:text-white font-medium"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="category" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    お問い合わせ種別 <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="category" 
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors appearance-none dark:text-white font-medium"
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="join">メンバー参加について</option>
                      <option value="event">イベント・講演のご依頼</option>
                      <option value="media">取材・メディア掲載について</option>
                      <option value="other">その他のお問い合わせ</option>
                    </select>
                    {/* Select Arrow Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="message" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    お問い合わせ内容 <span className="text-blue-600">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none dark:text-white font-medium"
                    placeholder="具体的な内容をご記入ください。"
                    required
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center">
                  <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 accent-blue-600" required />
                  <label htmlFor="privacy" className="ml-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <a href="#" className="text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 mr-1">プライバシーポリシー</a>
                    に同意する
                  </label>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center justify-center gap-2 group"
                  >
                    送信する
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
