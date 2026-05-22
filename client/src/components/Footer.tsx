export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="min-w-0">
            <img
              src="/manus-storage/QRALogo_24986d40.jpeg"
              alt="QRA Strategies LLC"
              className="max-w-[200px] h-auto max-h-16 object-contain mb-4"
            />
            <p className="text-sm text-gray-300 break-words">
              Fractional Quality and Regulatory Affairs Execution for MedTech Startups
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide break-words">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors break-words">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors break-words">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide break-words">Contact</h4>
            <p className="text-sm break-words">
              <a href="mailto:genevieve@qrastrategies.com" className="text-gray-300 hover:text-white transition-colors break-words">
                genevieve@qrastrategies.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm text-gray-400">
          <p className="break-words">
            &copy; {currentYear} QRA Strategies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
