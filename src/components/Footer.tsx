export function Footer() {
  return (
    <footer className="bg-marvel-red text-white p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ul className="flex flex-col  gap-1">
          <li className="font-medium">Rodrigo Andrade</li>
          <li className="text-[#a1a1a1] text-sm">Developer</li>
        </ul>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium ">Contact</div>
          <ul className="grid gap-1 text-[#a1a1a1]">
            <li className="flex items-center gap-2">
              <a
                href="https://mail.google.com/mail/u/0/?pli=1#inbox"
                target="_blank"
              >
                rodrigoacm10@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#">(81) 99335-3017</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium ">Social</div>
          <ul className="grid gap-1 text-[#a1a1a1]">
            <li className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/rodrigo-andrade-5420b2277/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/rodrigo-andrade
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://github.com/rodrigoacm10"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/rodrigoacm10
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
