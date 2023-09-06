import React from 'react';
import { Link } from 'react-router-dom';

export function ProjectNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="./project1">Project 1</Link>
                </li>
                {/* Add links for other projects */}
            </ul>
        </nav>
    );
}