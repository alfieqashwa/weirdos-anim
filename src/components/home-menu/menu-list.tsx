const MENULIST = [
  { title: "home", link: "#__home" },
  { title: "about", link: "#__about" },
  { title: "roadmap", link: "#__roadmap" },
  { title: "showcase", link: "#__showcase" },
  { title: "team", link: "#__team" },
  { title: "faq", link: "#__faq" },
] as const;

export const MenuList = (): JSX.Element => (
  <nav className="flex space-x-8">
    {MENULIST.map((m, i) => (
      <a href={m.link} className="capitalize tracking-wide" key={i}>
        {m.title}
      </a>
    ))}
  </nav>
);
