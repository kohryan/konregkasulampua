import Link from "next/link";
import { ReactNode, ReactElement } from "react";
import cn from "classnames";
import { ThemeSwitch } from "nextra-theme-docs";
import BPSLogo from "./logos/BPS";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm text-black dark:text-white">{children}</h3>;
}

const navigation = {
  pemda: [
    { name: "Kalimantan Selatan", href: "http://bappeda.kalselprov.go.id/" },
    { name: "Kalimantan Barat", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "Kalimantan Tengah", href: "http://bappeda.kalteng.go.id/" },
    { name: "Kalimantan Timur", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "Kalimantan Utara", href: "https://bappedalitbang.kaltaraprov.go.id/" },
    { name: "Sulawesi Utara", href: "http://bappeda.sulutprov.go.id" },
    { name: "Sulawesi Tengah", href: "http://bappeda.sultengprov.go.id" },
    { name: "Sulawesi Selatan", href: "https://bappelitbangda.sulselprov.go.id/" },
    { name: "Sulawesi Tenggara", href: "https://bappedasultra.go.id" },
    { name: "Sulawesi Barat", href: "http://bappeda.sulbarprov.go.id" },
    { name: "Gorontalo", href: "https://bappeda.gorontaloprov.go.id/" },
    { name: "Maluku", href: "https://malukuprov.go.id" },
    { name: "Maluku Utara", href: "https://bappeda.malutprov.go.id" },
    { name: "Papua", href: "https://bappeda.papua.go.id" },
    { name: "Papua Barat", href: "https://bappeda.papuabaratprov.go.id" },
  ],
  bps: [
    { name: "BPS Prov. Kalimantan Selatan", href: "https://kalsel.bps.go.id" },
    { name: "BPS Prov. Kalimantan Barat", href: "https://kalbar.bps.go.id" },
    { name: "BPS Prov. Kalimantan Tengah", href: "https://kalteng.bps.go.id" },
    { name: "BPS Prov. Kalimantan Timur", href: "https://kaltim.bps.go.id" },
    { name: "BPS Prov. Kalimantan Utara", href: "https://kaltara.bps.go.id" },
    { name: "BPS Prov. Sulawesi Utara", href: "https://sulut.bps.go.id" },
    { name: "BPS Prov. Sulawesi Tengah", href: "https://sulteng.bps.go.id" },
    { name: "BPS Prov. Sulawesi Selatan", href: "https://sulsel.bps.go.id" },
    { name: "BPS Prov. Sulawesi Tenggara", href: "https://sultra.bps.go.id" },
    { name: "BPS Prov. Sulawesi Barat", href: "https://sulbar.bps.go.id" },
    { name: "BPS Prov. Gorontalo", href: "https://gorontalo.bps.go.id" },
    { name: "BPS Prov. Maluku", href: "https://maluku.bps.go.id" },
    { name: "BPS Prov. Maluku Utara", href: "https://malut.bps.go.id" },
    { name: "BPS Prov. Papua", href: "https://papua.bps.go.id" },
    { name: "BPS Prov. Papua Barat", href: "https://papuabarat.bps.go.id" },
  ],
  bi: [
    { name: "KP Kalimantan Selatan", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Kalimantan-Selatan.aspx" },
    { name: "KP Kalimantan Barat", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Kalimantan-Barat.aspx" },
    { name: "KP Kalimantan Tengah", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Kalimantan-Tengah.aspx" },
    { name: "KP Kalimantan Timur", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Kalimantan-Timur.aspx" },
    { name: "KP Kalimantan Utara", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Kalimantan-Utara.aspx" },
    { name: "KP Sulawesi Utara", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Sulawesi-Utara.aspx" },
    { name: "KP Sulawesi Tengah", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Sulawesi-Tengah.aspx" },
    { name: "KP Sulawesi Selatan", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Sulawesi-Selatan.aspx" },
    { name: "KP Sulawesi Tenggara", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Sulawesi-Tenggara.aspx" },
    { name: "KP Sulawesi Barat", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Sulawesi-Barat.aspx" },
    { name: "KP Gorontalo", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Gorontalo.aspx" },
    { name: "KP Maluku", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Maluku.aspx" },
    { name: "KP Maluku Utara", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Maluku-Utara.aspx" },
    { name: "KP Papua", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Papua.aspx" },
    { name: "KP Papua Barat", href: "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Provinsi-Papua-Barat.aspx" },
  ]
};

export function FooterContent() {
  return (
    <div className="w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full py-8 mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Pemerintah Daerah</FooterHeader>
                <ul role="list" className="mt-2 space-y-1.5 list-none ml-0">
                  {navigation.pemda.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Badan Pusat Statistik</FooterHeader>
                <ul role="list" className="mt-2 space-y-1.5 list-none ml-0">
                  {navigation.bps.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Bank Indonesia</FooterHeader>
                <ul role="list" className="mt-2 space-y-1.5 list-none ml-0">
                  {navigation.bi.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:!mt-0">
            <FooterHeader>Ikuti Kami di Media Daring:</FooterHeader>
            <div className="mt-2 inline-flex mr-2">
                <a href="https://facebook.com/bpsprovsultra">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none">
                    <path fill="currentColor" d="M31 15.539C31 6.96 24.056 0 15.5 0 6.944 0 0 6.961 0 15.539c0 7.52 5.332 13.783 12.4 15.228V20.2H9.3v-4.662h3.1v-3.885c0-2.999 2.434-5.438 5.425-5.438H21.7v4.661h-3.1c-.853 0-1.55.7-1.55 1.554v3.108h4.65V20.2h-4.65V31C24.878 30.223 31 23.604 31 15.539Z"/>
                  </svg>
                </a>
            </div>
            <div className="mt-2 inline-flex mr-2">
                <a href="https://instagram.com/bpsprovsultra">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none">
                  <path fill="currentColor" fillRule="evenodd" d="M15.667 31c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5-8.56 0-15.5 6.94-15.5 15.5 0 8.56 6.94 15.5 15.5 15.5ZM26 11.16a5.998 5.998 0 0 0-5.993-5.993h-8.68a5.993 5.993 0 0 0-5.994 5.993v8.68a5.998 5.998 0 0 0 5.994 5.993h8.68A5.993 5.993 0 0 0 26 19.84v-8.68ZM8.49 8.323a3.72 3.72 0 0 1 2.63-1.09h9.093a3.718 3.718 0 0 1 3.72 3.72v9.094a3.72 3.72 0 0 1-3.72 3.72H11.12a3.718 3.718 0 0 1-3.72-3.72v-9.094a3.72 3.72 0 0 1 1.09-2.63Zm13.515.839a1.291 1.291 0 1 0-1.827 1.826 1.291 1.291 0 0 0 1.827-1.826Zm-2.685 2.685a5.167 5.167 0 1 0-7.307 7.307 5.167 5.167 0 0 0 7.307-7.307Zm-5.845 1.461a3.1 3.1 0 1 1 4.384 4.383 3.1 3.1 0 0 1-4.384-4.383Z" clipRule="evenodd"/>
                  </svg>
                </a>
            </div>
            <div className="mt-2 inline-flex mr-2">
                <a href="https://youtube.com/bpsprovsultra">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none">
                  <path fill="currentColor" fillRule="evenodd" d="M15.542 31c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5-8.56 0-15.5 6.94-15.5 15.5 0 8.56 6.94 15.5 15.5 15.5Zm3.708-15.113-6.033 3.488V12.4l6.033 3.487Zm7.73-3.406c-.07-.93-.174-1.662-.325-2.208-.29-1.047-.965-1.72-2.01-2.011-1.198-.326-4.232-.512-9.103-.512l-1.849.07c-1.278 0-2.662.035-4.173.116-1.535.07-2.534.174-3.08.325-1.047.291-1.721.965-2.012 2.012-.325 1.197-.511 3.069-.511 5.614l.07.977c0 .697.034 1.5.116 2.43.07.93.174 1.662.325 2.208.29 1.047.965 1.72 2.011 2.012 1.198.325 4.232.511 9.103.511l1.848-.07c1.279 0 2.662-.035 4.173-.116 1.535-.07 2.535-.174 3.081-.325 1.046-.291 1.72-.965 2.011-2.012.326-1.197.512-3.069.512-5.614l-.07-.977c0-.697-.035-1.5-.116-2.43Z" clipRule="evenodd"/>
                  </svg>
                </a>
            </div>
            <div className="mt-2 inline-flex mr-2">
                <a href="https://sultra.bps.go.id">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none">
                  <path fill="currentColor" fillRule="evenodd" d="M15.583 31c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5-8.56 0-15.5 6.94-15.5 15.5 0 8.56 6.94 15.5 15.5 15.5Zm5.813-15.5c0 .878-.078 1.73-.181 2.583h4.366c.207-.826.336-1.692.336-2.583 0-.891-.13-1.757-.336-2.583h-4.366c.103.852.18 1.705.18 2.583Zm-.685 5.167a20.21 20.21 0 0 1-1.782 4.598 10.372 10.372 0 0 0 5.593-4.598h-3.81Zm-8.15-2.584h6.045c.116-.852.206-1.705.206-2.583 0-.878-.09-1.744-.206-2.583H12.56a17 17 0 0 0-.207 2.583c0 .878.078 1.73.207 2.583Zm.555 2.584c.53 1.847 1.395 3.565 2.467 5.115 1.072-1.55 1.938-3.268 2.467-5.115h-4.934ZM6.645 10.333h3.772c.452-1.614 1.033-3.164 1.808-4.598a10.234 10.234 0 0 0-5.58 4.598Zm3.772 10.334H6.645a10.344 10.344 0 0 0 5.58 4.598c-.775-1.434-1.356-2.984-1.808-4.598ZM5.25 15.5c0 .891.13 1.757.336 2.583h4.366A21.33 21.33 0 0 1 9.77 15.5c0-.878.077-1.73.18-2.583H5.587A10.646 10.646 0 0 0 5.25 15.5Zm12.8-5.167c-.53-1.847-1.395-3.578-2.467-5.128-1.072 1.55-1.937 3.281-2.467 5.128h4.934Zm2.661 0h3.81a10.316 10.316 0 0 0-5.592-4.598 20.213 20.213 0 0 1 1.782 4.598ZM2.667 15.5c0-7.104 5.773-12.917 12.916-12.917A12.916 12.916 0 1 1 2.667 15.5Z" clipRule="evenodd"/>
                  </svg>
                </a>
            </div>
            <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <a
              className="text-current"
              target="_blank"
              rel="noopener noreferrer"
              title="bps sultra"
              href="https://sultra.bps.go.id"
            >
              <BPSLogo />
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-[#888888]">
              &copy; {new Date().getFullYear()} Badan Pusat Statistik Provinsi Sulawesi Tenggara. Semua Hak Dilindungi
            </p>
            <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
              Desain oleh <a className="text-current" target="_blank" rel="noopener noreferrer" title="ryan" href="https://github.com/kohryan"
            >Ryan W. Januardi, SST</a>. Didukung oleh <a className="text-current" target="_blank" rel="noopener noreferrer" title="vercel" href="https://vercel.com/kohryan">Vercel</a> & <a className="text-current" target="_blank" rel="noopener noreferrer" title="nextra" href="https://nextra.site">Nextra</a>
            </p>
          </div>
        </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]">
      <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black pointer-events-none" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
          menu ? "flex" : "hidden"
        )}
      >
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
