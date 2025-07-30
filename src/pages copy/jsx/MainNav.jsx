import "../css/MainNavstyle.css";
 // if you're using external CSS

export default function MainNavbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_345)">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.146 14.6667C14.146 14.6667 12.0248 11.3013 13.7231 8C15.6208 4.3112 14.0693 1.33333 14.0693 1.33333H2.33711C2.33711 1.33333 3.8859 4.31067 1.98971 7.99897C0.292091 11.301 2.42365 14.6667 2.42365 14.6667H14.146Z" fill="#121417" />
            </g>
            <defs>
              <clipPath id="clip0_2_345">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="logo-text">Tasklify</h1>
        </div>
      </div>
    </>
  );
}
