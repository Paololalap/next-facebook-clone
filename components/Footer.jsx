export default function Footer() {
  return (
    <footer className="bg-white pb-6">
      <nav className="mx-auto w-9/12 max-w-[980px]">
        {/* Language options */}
        <ul className="flex flex-row flex-wrap pt-6 text-center text-xs text-gray-400">
          {[
            "English (US)",
            "Filipino",
            "Bisaya",
            "Español",
            "日本語",
            "한국어",
            "中文 (简体)",
            "العربية",
            "Português (Brasil)",
            "Français (France)",
            "Deutsch",
          ].map((lang, index) => (
            <li
              key={index}
              className={`${index !== 0 && "ml-2"} mb-2 text-[#8a8d91]`}
            >
              {index === 0 ? (
                <span className="text-[#737373] hover:cursor-text">{lang}</span>
              ) : (
                <a href="#" className="hover:cursor-pointer hover:underline">
                  {lang}
                </a>
              )}
            </li>
          ))}

          {/* Plus icon */}
          <li className="mb-2 ml-2 cursor-pointer bg-slate-100 shadow hover:shadow-inner focus:bg-slate-700">
            <div className="flex h-5 w-8 items-center justify-center border pb-1 ">
              <a className="text-lg font-bold text-slate-700">+</a>
            </div>
          </li>
        </ul>
        {/* Footer links */}
        <ul className="flex flex-row flex-wrap border-t pt-2 text-xs leading-5 text-gray-400">
          {[
            "Sign Up",
            "Log In",
            "Messenger",
            "Facebook Lite",
            "Video",
            "Places",
            "Games",
            "Marketplace",
            "Meta Pay",
            "Meta Store",
            "Meta Quest",
            "Imagine with Meta AI",
            "Instagram",
            "Threads",
            "Fundraisers",
            "Services",
            "Voting Information Center",
            "Privacy Policy",
            "Privacy Center",
            "Groups",
            "About",
            "Create Ad",
            "Create Page",
            "Developers",
            "Careers",
            "Cookies",
            "Ad Choices",
            "Terms",
            "Help",
            "Contact Uploading & Non-Users",
          ].map((link, index) => (
            <li key={index} className="pr-5 text-[#8a8d91]">
              <a href="#" className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-left text-xs text-[#737373]">
          Meta &copy; 2024
        </div>
      </nav>
    </footer>
  );
}
