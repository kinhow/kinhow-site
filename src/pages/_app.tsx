import "@/styles/globals.css";
import { Layouts } from "@/layouts";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`text-muted-primary ${robotoMono.className}`}>
      <div className="flex flex-col border border-border rounded-lg md:h-[calc(100dvh-10%)] md:w-[calc(100dvw-5%)] h-[calc(100dvh-4%)] w-[calc(100dvw-5%)]">
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </div>
    </main>
  )
}
