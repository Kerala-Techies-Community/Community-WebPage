import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar-light header-static bg-transparent">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" href="/">
            <img
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="light-mode-item navbar-brand-item"
            />
          </Link>

          {/* Responsive navbar toggler */}
          <button
            className="navbar-toggler ms-auto icon-md btn btn-light p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Main navbar */}
          <div className="flex-1 flex h-full items-center justify-between">
            <ul className="flex my-4 box-border items-center flex-col md:flex-row md:space-x-6">
              <li>
                <a href="blog.html" className="text-gray-700 hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="settings.html" className="text-gray-700 hover:text-blue-600">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Right button */}
          <div className="ms-3 ms-lg-auto">
            <a className="btn btn-dark" href="app-download.html">
              Download app
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
