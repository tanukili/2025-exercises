export default function Footer() {
  return (
    <footer className="border-t border-secondary">
      <section className="hidden justify-between py-20 lg:flex lg:mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-1296">
        <h2 className="hidden">與我聯繫</h2>
        <a
          className="text-32 hover:text-primary"
          href="mailto:alysewang@hexschool.com"
        >
          alysewang@hexschool.com
        </a>
        <nav>
          <ul className="flex gap-x-1">
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <i className="icon icon-lg icon-yt"></i>
              </a>
            </li>
            <li>
              <a href="https://podcasters.apple.com/zh-tw" target="_blank">
                <i className="icon icon-lg icon-podcast"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="icon icon-lg icon-fb"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="icon icon-lg icon-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="icon icon-lg icon-ig"></i>
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <p className="py-6 text-center">
        © 2025 Alyse Wang. All rights reserved.
      </p>
    </footer>
  );
}
