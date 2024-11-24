import React, { useState } from 'react';
import './Linux_cmds.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Linux_Commands(props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    // Combine the commands
    const fullCommand = `${props.cmd1} ${props.cmd2} ${props.cmd3}`;

    return (
        <>
            <div className="box">
                <div className="upperpart">
                    <span className='cmdtitle'>{props.title}</span>

                    {/* Add CopyToClipboard component */}
                    <CopyToClipboard text={fullCommand} onCopy={handleCopy}>
                        <button className="copy-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                            </svg>
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </CopyToClipboard>
                </div>
                <div className="lowerpart">
                    <p>
                        <span className='cmd1'>{props.cmd1} </span> 
                        <span className="cmd2">{props.cmd2} </span>
                        <span className="cmd3">{props.cmd3} </span>
                        <div className="">{props.noncommand1}</div>
                        <div className="">{props.noncommand2}</div>
                        <div>{props.comments}</div>
                    </p>
                </div>
            </div>
        </>
    );
}