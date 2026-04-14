/** 
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
*/



// import { useRef,useEffect } from 'react';
// import PropTypes from 'prop-types';


// const Navbar = ({navOpen}) => {
//   const lastActiveLink=useRef();
//   const activeBox=useRef();

//   const initActiveBox=()=>{
//     activeBox.current.style.top=lastActiveLink.current.offsetTop + 'px';
//     activeBox.current.style.left=lastActiveLink.current.offsetLeft + 'px';
//     activeBox.current.style.width=lastActiveLink.current.offsetWidth + 'px';
//     activeBox.current.style.height=lastActiveLink.current.offsetHeight + 'px';
    
//   }
// useEffect(initActiveBox,[]);
// window.addEventListener('resize',initActiveBox);

// const activeCurrentLink=(event)=>{
//   lastActiveLink.current?.classList.remove('active');
//   event.target.classList.add('active');
//   lastActiveLink.current=event.target;

//     activeBox.current.style.top=event.target.offsetTop + 'px';
//     activeBox.current.style.left=event.target.offsetLeft + 'px';
//     activeBox.current.style.width=event.target.offsetWidth + 'px';
//     activeBox.current.style.height=event.target.offsetHeight + 'px';
// }

//   const navItems = [
//     {
//       label: 'Home',
//       link: '#home',
//       className: 'nav-link active',
//       ref: lastActiveLink
//     },
//     {
//       label: 'About',
//       link: '#about',
//       className: 'nav-link'
//     },
//     {
//       label: 'Work',
//       link: '#work',
//       className: 'nav-link'
//     },
//     {
//       label: 'Reviews',
//       link: '#reviews',
//       className: 'nav-link'
//     },
//     {
//       label: 'Contact',
//       link: '#contact',
//       className: 'nav-link md:hidden'
//     }
//   ];

//   return (
//     <nav className={'navbar ' + (navOpen ? 'active' : '')}>
//       {
//         navItems.map(({ label, link, className, ref },key)=>(
//           <a href={link} 
//           key={key} 
//           ref={ref} 
//           className={className} 
//           onClick={activeCurrentLink}>
//             {label}</a>
//         ))
//       }
//       <div className="active-box"
//       ref={activeBox}
//       ></div>
//     </nav>
//   )
// }
// Navbar.propTypes={
//   navOpen: PropTypes.bool.isRequired
// }
// export default Navbar

import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// Inline styles for spacing and visual enhancement
const styles = {
  navbar: {
  display: 'flex',
  justifyContent: 'space-between', // better for mobile
  alignItems: 'center',
  gap: '10px',
  background: '#232323',
  borderRadius: '0px', // optional (better full width look)
  padding: '12px 16px',
  position: 'relative',
  margin: '0', // remove auto centering
  width: '100%', // ✅ IMPORTANT
  overflowX: 'auto',
   whiteSpace: 'nowrap'
},
  navLink: {
    color: '#eaeaed',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '11px',
    fontWeight: 500,
    //fontSize: '16px',
    transition: 'background 0.24s, color 0.18s',
    position: 'relative',
    zIndex: 2,
    cursor: 'pointer',
    fontSize: '14px', // slightly smaller for mobile
    flexShrink: 0,    // ✅ prevents shrinking
  },
  navLinkActive: {
    background: '#34343b',
    color: '#f3f3f8',
  },
  activeBox: {
    position: 'absolute',
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '11px',
    transition: 'all 0.3s cubic-bezier(.33,1,.68,1)',
    zIndex: 1,
    pointerEvents: 'none',
  },
};

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // Update position of the active box
  const updateActiveBox = (element) => {
    if (element && activeBox.current) {
      activeBox.current.style.top = `${element.offsetTop}px`;
      activeBox.current.style.left = `${element.offsetLeft}px`;
      activeBox.current.style.width = `${element.offsetWidth}px`;
      activeBox.current.style.height = `${element.offsetHeight}px`;
    }
  };

  useEffect(() => {
    if (lastActiveLink.current) {
      updateActiveBox(lastActiveLink.current);
    }
    const handleResize = () => {
      if (lastActiveLink.current) updateActiveBox(lastActiveLink.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (event) => {
  const target = event.currentTarget;
  // Remove the active class and reset style from the previous link
  if (lastActiveLink.current) {
    lastActiveLink.current.classList.remove('active');
    // Restore default navLink style
    Object.assign(lastActiveLink.current.style, styles.navLink);
  }
  // Set up the new active link
  target.classList.add('active');
  Object.assign(target.style, styles.navLink, styles.navLinkActive);
  lastActiveLink.current = target;
  updateActiveBox(target);
};


  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Work', link: '#work' },
    { label: 'Reviews', link: '#reviews' },
    { label: 'Contact', link: '#contact', className: 'md:hidden' }
  ];

  return (
    <nav
      style={{
        ...styles.navbar,
        ...(navOpen ? { boxShadow: '0 6px 24px rgba(0,0,0,0.2)' } : {}),
      }}
    >
      {navItems.map((item, idx) => (
        <a
          href={item.link}
          key={item.label}
          ref={idx === 0 ? lastActiveLink : null}
          className={`nav-link${idx === 0 ? ' active' : ''}${item.className ? ` ${item.className}` : ''}`}
          style={{
            ...styles.navLink,
            ...(idx === 0 ? styles.navLinkActive : {}),
          }}
          onClick={handleNavClick}
        >
          {item.label}
        </a>
      ))}
      <div ref={activeBox} style={styles.activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
