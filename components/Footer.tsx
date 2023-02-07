import { useRouter } from "next/router";
import Link from "next/link";
import { useState, ReactNode, ReactElement } from "react";
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
    { name: "Sulawesi Utara", href: "http://bappeda.kalselprov.go.id/" },
    { name: "Sulawesi Tengah", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "Sulawesi Selatan", href: "http://bappeda.kalteng.go.id/" },
    { name: "Sulawesi Tenggara", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "Sulawesi Barat", href: "https://bappedalitbang.kaltaraprov.go.id/" },
    { name: "Gorontalo", href: "http://bappeda.kalselprov.go.id/" },
    { name: "Maluku", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "Maluku Utara", href: "http://bappeda.kalteng.go.id/" },
    { name: "Papua", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "Papua Barat", href: "https://bappedalitbang.kaltaraprov.go.id/" },
  ],
  bps: [
    { name: "BPS Prov. Kalimantan Selatan", href: "http://bappeda.kalselprov.go.id/" },
    { name: "BPS Prov. Kalimantan Barat", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "BPS Prov. Kalimantan Tengah", href: "http://bappeda.kalteng.go.id/" },
    { name: "BPS Prov. Kalimantan Timur", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "BPS Prov. Kalimantan Utara", href: "https://bappedalitbang.kaltaraprov.go.id/" },
    { name: "BPS Prov. Sulawesi Utara", href: "http://bappeda.kalselprov.go.id/" },
    { name: "BPS Prov. Sulawesi Tengah", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "BPS Prov. Sulawesi Selatan", href: "http://bappeda.kalteng.go.id/" },
    { name: "BPS Prov. Sulawesi Tenggara", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "BPS Prov. Sulawesi Barat", href: "https://bappedalitbang.kaltaraprov.go.id/" },
    { name: "BPS Prov. Gorontalo", href: "http://bappeda.kalselprov.go.id/" },
    { name: "BPS Prov. Maluku", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "BPS Prov. Maluku Utara", href: "http://bappeda.kalteng.go.id/" },
    { name: "BPS Prov. Papua", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "BPS Prov. Papua Barat", href: "https://bappedalitbang.kaltaraprov.go.id/" },
  ],
  bi: [
    { name: "KP Kalimantan Selatan", href: "http://bappeda.kalselprov.go.id/" },
    { name: "KP Kalimantan Barat", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "KP Kalimantan Tengah", href: "http://bappeda.kalteng.go.id/" },
    { name: "KP Kalimantan Timur", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "KP Kalimantan Utara", href: "https://bappedalitbang.kaltaraprov.go.id/" },
    { name: "KP Sulawesi Utara", href: "http://bappeda.kalselprov.go.id/" },
    { name: "KP Sulawesi Tengah", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "KP Sulawesi Selatan", href: "http://bappeda.kalteng.go.id/" },
    { name: "KP Sulawesi Tenggara", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "KP Sulawesi Barat", href: "https://bappedalitbang.kaltaraprov.go.id/" },
    { name: "KP Gorontalo", href: "http://bappeda.kalselprov.go.id/" },
    { name: "KP Maluku", href: "https://bappeda.kalbarprov.go.id/" },
    { name: "KP Maluku Utara", href: "http://bappeda.kalteng.go.id/" },
    { name: "KP Papua", href: "https://bappeda.kaltimprov.go.id/" },
    { name: "KP Papua Barat", href: "https://bappedalitbang.kaltaraprov.go.id/" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Regulasi", href: "#" },
  ],
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
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
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Legal</FooterHeader>
                <ul role="list" className="mt-2 space-y-1.5 list-none ml-0">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:!mt-0">
            <FooterHeader>Subscribe</FooterHeader>
            <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
              Masukkan alamat email untuk berlangganan
            </p>
            <SubmitForm />
          </div>
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
              Desain oleh Ryan W. Januardi, SST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <form
      className="mt-4 sm:flex sm:max-w-md"
      onSubmit={(e) => {
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((res) => {
            return router.push("/confirm");
          });
        e.preventDefault();
      }}
    >
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="email-address"
        id="email-address"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-[#666666] dark:border-[#888888] w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border rounded-md appearance-none dark:text-white sm:text-sm dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
        placeholder="you@example.com"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
        >
          Subscribe
        </button>
      </div>
    </form>
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
