import React from 'react';

interface IconProps {
  className?: string;
  colored?: boolean;
}

export const PythonIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M63.5 12C41.3 12 42.8 21.6 42.8 21.6l.1 10.1h21.1v3H30.4S17 33.2 17 55.4s11.8 22.1 11.8 22.1h7V66.8s-.4-12.8 12.6-12.8h21.7s12.2-.2 12.2-12.2V24.5S86.8 12 63.5 12zM52.3 20.3a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4z"
      fill={colored ? "#3776AB" : "currentColor"}
    />
    <path
      d="M64.5 116c22.2 0 20.7-9.6 20.7-9.6l-.1-10.1H64v-3h33.6s13.4 1.5 13.4-20.7-11.8-22.1-11.8-22.1h-7v10.7s.4 12.8-12.6 12.8H47.9s-12.2.2-12.2 12.2v17.3S41.2 116 64.5 116zm11.2-8.3a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z"
      fill={colored ? "#FFD438" : "currentColor"}
    />
  </svg>
);

export const PyTorchIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.8 2.2a9 9 0 00-7 2.6l2.1 2.1a6 6 0 014.8-1.7l1.7-1.7c-.5-.5-1-.9-1.6-1.3zm4.2 2.6l-1.7 1.7A6 6 0 0118 12a6 6 0 01-6 6c-2.4 0-4.5-1.4-5.4-3.5L4.4 16A9 9 0 0012 21a9 9 0 009-9c0-2.4-1-4.7-3-6.2z"
      fill={colored ? "#EE4C2C" : "currentColor"}
    />
    <path
      d="M14.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill={colored ? "#EE4C2C" : "currentColor"}
    />
  </svg>
);

export const HuggingFaceIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill={colored ? "#FFA000" : "currentColor"} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 7c.83 0 1.5.67 1.5 1.5S9.33 12 8.5 12 7 11.33 7 10.5 7.67 9 8.5 9zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3.5 8.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
    <path d="M2.5 13.5c.3 1.2 1.3 2.1 2.5 2.1v-2c-.6 0-1.1-.5-1.3-1.1l-1.2 1zM21.5 13.5l-1.2-1c-.2.6-.7 1.1-1.3 1.1v2c1.2 0 2.2-.9 2.5-2.1z" />
  </svg>
);

export const FastAPIIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill={colored ? "#05998B" : "currentColor"} />
    <path d="M12.5 4L6 14h5.5l-1 6 7.5-10h-5.5l1-6z" fill="#FFFFFF" />
  </svg>
);

export const LangChainIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill={colored ? "#1C3C3C" : "currentColor"} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 6a3 3 0 013-3h4a3 3 0 013 3v2h-2V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v2H7V6zm-3 8a3 3 0 013-3h2v2H7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-2h2v2a3 3 0 01-3 3H7a3 3 0 01-3-3v-4zm13-3h-2v2h2a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2h-2v2a3 3 0 003 3h4a3 3 0 003-3v-4a3 3 0 00-3-3z" />
    <circle cx="12" cy="12" r="2.5" fill={colored ? "#22C55E" : "currentColor"} />
  </svg>
);

export const ChromaIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="4.5" fill={colored ? "#EC4899" : "currentColor"} fillOpacity="0.85" />
    <circle cx="16" cy="8" r="4.5" fill={colored ? "#3B82F6" : "currentColor"} fillOpacity="0.85" />
    <circle cx="12" cy="15.5" r="4.5" fill={colored ? "#10B981" : "currentColor"} fillOpacity="0.85" />
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.5 18.5c3.5 1 7.5.5 10-.5-1.5 1-4.5 2-8 2-3.5 0-6.5-1-6.5-2.5 0-.5.5-.8 1.5-1 1 1 2 1.5 3 2zm2.5-4c2.5.5 5 .5 7 0-1 .8-3 1.2-5.5 1.2-2 0-4-.4-5-1 .7.5 2.2.8 3.5.8zm-2-6c-.5 2 1 3.5 3.5 4.5 2.5 1 3 2.5 2 4.5 1.5-1 2-2.5 1-4-1-1.5-3-2.5-3.5-3.5-.5-1 0-2 1-3.5-2 1-3.5 2.5-4 2.5z"
      fill={colored ? "#ED8B00" : "currentColor"}
    />
    <path
      d="M14 4.5c1 1 1 2 .5 3 1.5-1 1.8-2.2 1-3.5-.8-1.3-2-2-3-2.5.5.8 1 1.8 1.5 3z"
      fill={colored ? "#5382A1" : "currentColor"}
    />
  </svg>
);

export const SpringBootIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8z"
      fill={colored ? "#6DB33F" : "currentColor"}
      fillOpacity="0.2"
    />
    <path
      d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm-1 3.5c1.8 0 3.5.7 4.7 2l-1.4 1.4c-.9-.9-2.1-1.4-3.3-1.4-2.8 0-5 2.2-5 5s2.2 5 5 5c1.2 0 2.4-.5 3.3-1.4l1.4 1.4c-1.2 1.3-2.9 2-4.7 2-3.9 0-7-3.1-7-7s3.1-7 7-7zm2 1.5v5.5h5.5c0-3-2.5-5.5-5.5-5.5z"
      fill={colored ? "#6DB33F" : "currentColor"}
    />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="16" fill={colored ? "#3178C6" : "currentColor"} />
    <path
      d="M59.6 57.6H45.2V104h-9.9V57.6H21V49h38.6v8.6zm49 19.3c0 7.8-3.8 14.1-11.2 18.2-7.5 4.1-16.8 4.7-25.5 1.8l2.6-8.5c6.5 2.3 12.8 2.5 18 0 4.2-2 6.3-5.2 6.3-9.5 0-3.6-1.5-6.5-4.5-8.7-3-2.2-8.3-4.8-15.8-7.7-6.5-2.5-11.2-5.7-14-9.5-2.8-3.8-4.2-8.6-4.2-14.3 0-7.3 3.6-13.3 10.6-17.2 7-3.9 15.5-4.4 23.6-1.8l-2.4 8.6c-5.8-1.9-11.5-2-16 .1-3.6 1.7-5.4 4.5-5.4 8.5 0 3.4 1.4 6.1 4.1 8.2 2.7 2.1 7.7 4.5 15.1 7.3 6.8 2.6 11.7 5.9 14.7 9.8 3.1 3.8 4.6 8.7 4.6 14.7z"
      fill="#FFFFFF"
    />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="16" fill={colored ? "#F7DF1E" : "currentColor"} />
    <path
      d="M67.3 103.7c-5.8 0-10.4-1.7-13.7-5.1-3.3-3.4-4.8-8.5-4.5-15.2l9.9-.6c-.2 4 .6 6.8 2.3 8.5 1.7 1.7 4.3 2.5 7.6 2.5 3.1 0 5.4-.7 7-2.1 1.6-1.4 2.4-3.3 2.4-5.8 0-2.3-.8-4.1-2.4-5.5s-4.6-2.9-9.1-4.6c-6.8-2.6-11.6-5.5-14.4-8.8-2.8-3.3-4.2-7.7-4.2-13.1 0-6.4 2.3-11.5 6.9-15.3 4.6-3.8 10.7-5.7 18.2-5.7 7 0 12.5 1.7 16.5 5.2 4 3.5 6 8.6 6 15.2l-9.9.6c0-3.6-.9-6.2-2.7-7.7s-4.5-2.3-8.1-2.3c-3.1 0-5.4.7-6.9 2-1.5 1.3-2.3 3.1-2.3 5.3 0 2 .7 3.6 2.1 4.9 1.4 1.3 4.3 2.6 8.7 4.2 6.8 2.5 11.6 5.4 14.5 8.7 2.9 3.3 4.3 7.8 4.3 13.5 0 6.6-2.4 11.8-7.1 15.7-4.8 3.8-11.2 5.8-19.3 5.8zm-39.7-.5c-4.7 0-8.5-1.5-11.3-4.5-2.8-3-4.2-7.5-4.2-13.5l9.9-.6c0 3.2.7 5.5 2 7s3.3 2.2 5.8 2.2c3 0 5.2-.9 6.6-2.7 1.4-1.8 2.1-4.7 2.1-8.7V40.2h9.9v44.8c0 6.1-1.6 10.7-4.8 13.9-3.2 3.1-7.9 4.3-13.3 4.3z"
      fill={colored ? "#000000" : "#FFFFFF"}
    />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill={colored ? "#61DAFB" : "currentColor"} />
    <g stroke={colored ? "#61DAFB" : "currentColor"} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextJsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill={colored ? "#000000" : "currentColor"} />
    <path
      d="M87.5 98.7L46.2 45.3H38v37.4h8.3V57.1l35.8 46.5c1.8-1.5 3.6-3.2 5.4-4.9z"
      fill="#FFFFFF"
    />
    <path d="M81.7 45.3H90v25.2h-8.3z" fill="#FFFFFF" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill={colored ? "#06B6D4" : "currentColor"} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

export const NodeJsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z"
      fill={colored ? "#5FA04E" : "currentColor"}
    />
    <path
      d="M12 6.8l5.2 3v6l-5.2 3-5.2-3v-6l5.2-3z"
      fill="#FFFFFF"
    />
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.5C7 2.5 3 6.3 3 11.2c0 3.4 2 6.4 5 7.9-.1-.6-.2-1.5-.2-2.3 0-2.8 1.7-5.2 4.2-5.7-.3-.6-.5-1.3-.5-2.1 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .8-.2 1.5-.5 2.1 2.5.5 4.2 2.9 4.2 5.7 0 .8-.1 1.7-.2 2.3 3-1.5 5-4.5 5-7.9 0-4.9-4-8.7-9-8.7z"
      fill={colored ? "#4169E1" : "currentColor"}
    />
    <circle cx="10.5" cy="8.5" r="1" fill="#FFFFFF" />
    <circle cx="15.5" cy="8.5" r="1" fill="#FFFFFF" />
  </svg>
);

export const MongoIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 1.5C12 1.5 5 7.5 5 13.8c0 4.2 3.1 7.6 7 8.7 3.9-1.1 7-4.5 7-8.7C19 7.5 12 1.5 12 1.5z"
      fill={colored ? "#47A248" : "currentColor"}
    />
    <path
      d="M12 3.5v16.7c2.8-.9 5-3.5 5-6.4 0-4.5-5-10.3-5-10.3z"
      fill={colored ? "#3FA037" : "#FFFFFF"}
      fillOpacity="0.4"
    />
  </svg>
);

export const MySQLIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5 13.2c-.8-1.5-2.2-2.5-3.8-2.9 1.1-1.2 1.5-2.8 1-4.3-.8-2.3-3.1-3.6-5.4-3.1-1.4.3-2.6 1.2-3.3 2.4-1.5-.4-3.1 0-4.2 1.1-1.4 1.4-1.8 3.5-1.1 5.4.3.8.8 1.5 1.4 2-1.7 1.5-2.6 3.7-2.4 6 0 .5.4.8.9.8h14.8c.4 0 .8-.3.9-.7.6-2.2.3-4.8-1-6.7z"
      fill={colored ? "#00758F" : "currentColor"}
    />
    <path
      d="M18.2 14.5c-.5.3-1.1.4-1.7.3-1-.2-1.8-.8-2.5-1.6l-.3-.3c-.8-1-1.8-1.7-3-2-1-.2-2 .1-2.8.8l-.4.3c-.6.5-1.4.8-2.2.8-.5 0-1-.1-1.4-.3.4 1.5 1.5 2.7 3 3.1h7.8c1.3-.3 2.5-1.4 3-2.7l.5-1.5z"
      fill={colored ? "#F29111" : "#FFFFFF"}
    />
  </svg>
);

export const SparkIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2l1.9 6.2 6.1-1.9-4.2 4.8 4.2 4.9-6.1-1.9L12 22l-1.9-6.2-6.1 1.9 4.2-4.9-4.2-4.8 6.1 1.9L12 2z"
      fill={colored ? "#E25A1C" : "currentColor"}
    />
  </svg>
);

export const DeltaLakeIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 19.5h20L12 2z" stroke={colored ? "#00ADD8" : "currentColor"} strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 7.5L6.5 17h11L12 7.5z" fill={colored ? "#00ADD8" : "currentColor"} />
  </svg>
);

export const AzureIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.2 2.5L5.5 14.8l5.8 4.2L20 21.5l-6.8-19z"
      fill={colored ? "#0089D6" : "currentColor"}
    />
    <path
      d="M13.2 2.5L4 16.5l3.5 5h6.5l4-5-4.8-14z"
      fill={colored ? "#0072C6" : "currentColor"}
      fillOpacity="0.4"
    />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.5 11.5c-.3-.2-1.3-.4-2.5.2-.2-1.2-1-2.1-2.1-2.6l-.6-.2-.3.6c-.6 1.1-.4 2.4.2 3.4-.6.3-1.6.4-2.6.4H2.4c-.2 0-.4.2-.4.4 0 2.8 1.2 5.1 3.5 6.7C7.6 21.7 10.3 22 13 22c5.8 0 10.2-3.6 10.8-9.4.1-.4 0-.8-.3-1.1z"
      fill={colored ? "#2496ED" : "currentColor"}
    />
    <path
      d="M7 6h2.5v2.5H7V6zm3.5 0H13v2.5h-2.5V6zm-7 3.5H6V12H3.5V9.5zm3.5 0H9V12H7V9.5zm3.5 0H13V12h-2.5V9.5zm3.5 0H16V12h-2.2V9.5zm3.5 0H19V12h-2.2V9.5z"
      fill={colored ? "#2496ED" : "currentColor"}
    />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.7 10.3l-8-8c-.8-.8-2.1-.8-2.8 0L9.1 4.1l3.5 3.5c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.4 3.4c.8-.3 1.7-.1 2.3.5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.6-2.6l-3.2-3.2v4.8c.4.3.7.8.8 1.4.3 1.3-.5 2.5-1.8 2.8-1.3.3-2.5-.5-2.8-1.8-.3-1.1.3-2.2 1.3-2.6V8.6c-1-.4-1.6-1.5-1.3-2.6.2-.8.8-1.4 1.5-1.7L8.3 1.8 2.3 7.8c-.8.8-.8 2.1 0 2.8l8 8c.8.8 2.1.8 2.8 0l8.6-8.3z"
      fill={colored ? "#F05032" : "currentColor"}
    />
  </svg>
);

export const LinuxIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C9.8 2 8 3.8 8 6v5c0 3-1.5 4.5-3 5.5v1.5c1.5.5 4 .5 7 .5s5.5 0 7-.5V16.5c-1.5-1-3-2.5-3-5.5V6c0-2.2-1.8-4-4-4z"
      fill={colored ? "#000000" : "currentColor"}
    />
    <circle cx="10" cy="6" r="1" fill="#FFFFFF" />
    <circle cx="14" cy="6" r="1" fill="#FFFFFF" />
    <path d="M12 7.5l-1.5 2h3L12 7.5z" fill={colored ? "#FFA000" : "currentColor"} />
    <path
      d="M7 18.5c-2 0-3.5 1-3.5 2.5S5 22 8 22c2 0 3-.5 4-1-1.5-.5-3.5-1-5-2.5zm10 0c2 0 3.5 1 3.5 2.5S19 22 16 22c-2 0-3-.5-4-1 1.5-.5 3.5-1 5-2.5z"
      fill={colored ? "#FFA000" : "currentColor"}
    />
  </svg>
);

export const GsapIcon: React.FC<IconProps> = ({ className = "w-6 h-6", colored = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke={colored ? "#88CE02" : "currentColor"} strokeWidth="2" />
    <path
      d="M12 7v5l4 2"
      stroke={colored ? "#88CE02" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Comprehensive icon mapping dictionary
export const TECH_ICON_MAP: Record<string, React.FC<IconProps>> = {
  python: PythonIcon,
  pytorch: PyTorchIcon,
  huggingface: HuggingFaceIcon,
  fastapi: FastAPIIcon,
  langchain: LangChainIcon,
  chroma: ChromaIcon,
  java: JavaIcon,
  springboot: SpringBootIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  react: ReactIcon,
  nextjs: NextJsIcon,
  tailwind: TailwindIcon,
  nodejs: NodeJsIcon,
  postgresql: PostgresIcon,
  mongodb: MongoIcon,
  mysql: MySQLIcon,
  spark: SparkIcon,
  deltalake: DeltaLakeIcon,
  azure: AzureIcon,
  docker: DockerIcon,
  git: GitIcon,
  linux: LinuxIcon,
  gsap: GsapIcon,
};
