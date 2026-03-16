import Link from "next/link";
import { Shield, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-2 rounded-xl">
                <Shield size={20} strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
                若者防災協議会
              </span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-sm mb-8">
              若者の力で、未来の命を守る。
              私たちは、次世代の視点から新しい防災のカタチを提案し、
              地域社会のレジリエンス向上に貢献する学生団体です。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all" aria-label="Github">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">リンク</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium">ホーム</Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium">団体概要</Link>
              </li>
              <li>
                <Link href="/activities" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium">活動実績</Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium">お問い合わせ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">お問い合わせ</h3>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              <li>info@wakamonobousai.example.com</li>
              <li>平日 10:00 - 18:00</li>
              <li className="pt-2">
                <Link href="/contact" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline underline-offset-4">
                  メッセージを送る →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
          <p>&copy; {new Date().getFullYear()} 若者防災協議会. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">プライバシーポリシー</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
