import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='logoBox'>
                <h1 className='logo' style={{ fontSize: '100px', textAlign: 'left' }}>My Blog</h1>
            </div>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }} >

                    <li style={{ padding: '2px 15px', border: '2px solid blue', borderRadius: '10px' }}>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                    </li>

                    <li style={{ padding: '2px 15px', border: '2px solid blue', borderRadius: '10px' }}>
                        <Link to="/about">
                            <button>About</button>
                        </Link>
                    </li>

                    <li style={{ padding: '2px 15px', border: '2px solid blue', borderRadius: '10px' }}>
                        <Link to="/counter">
                            <button>Counter</button>
                        </Link>
                    </li>

                    <li style={{ padding: '2px 15px', border: '2px solid blue', borderRadius: '10px' }}>
                        <Link to="/textpass">
                            <button>Text-Pass</button>
                        </Link>
                    </li>

                    <li style={{ padding: '2px 15px', border: '2px solid blue', borderRadius: '10px' }}>
                        <Link to="/contact">
                            <button>Contact</button>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
