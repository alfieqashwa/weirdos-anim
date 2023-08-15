import { Akaya_Kanadaka } from "next/font/google"

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",
  subsets: ["kannada"],
})
export default function SandboxPage() {
  return (
    <section
      className={`${akayaKanadaka.className}
    grid h-full min-h-screen place-content-center bg-slate-950 text-slate-50`}
    >
      <h1 className="text-7xl font-bold">SANDBOX using Akaya Kanadaka</h1>
    </section>
  )
}
