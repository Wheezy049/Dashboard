const NavItem = ({ icon, text, active = false }) => (
    <a
      href="me"
      className={`
        flex items-center mt-1 py-2 text-gray-700 hover:bg-gray-100
        px-4 md:px-6
        ${active ? 'bg-blue-50 text-blue-600' : ''}
        transition-colors duration-200
      `}
      title={text}
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span className="ml-3 text-sm font-medium hidden md:block">{text}</span>
    </a>
  );

  export default NavItem