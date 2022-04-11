import React from "react";

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <defs>
      <linearGradient
        id="d"
        y2="24.14"
        gradientUnits="userSpaceOnUse"
        x2="27.27"
        gradientTransform="matrix(-.9772 0 0 .9959 50.6 9.116)"
        y1="10.96"
        x1="35"
      />
      <linearGradient
        id="e"
        y2="35.48"
        gradientUnits="userSpaceOnUse"
        x2="49.08"
        gradientTransform="matrix(-1.008 0 0 .9876 61.88.275)"
        y1="19.99"
        x1="36.44"
      />
      <linearGradient id="a">
        <stop stop-color="#f5f5f5" offset="0" />
        <stop stop-color="#e9e9e9" offset="1" />
      </linearGradient>
      <radialGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        cy="27.64"
        cx="29.5"
        gradientTransform="matrix(1.373 0 0 .3785-21.09 26.47)"
        r="11.52"
      >
        <stop offset="0" />
        <stop stop-opacity="0" offset="1" />
      </radialGradient>
    </defs>
    <use transform="translate(10.75-6.5)" />
    <ellipse
      id="c"
      opacity=".12"
      rx="15.81"
      ry="4.359"
      cy="36.94"
      cx="19.41"
      fill="url(#b)"
    />
    <use
      stroke-width=".99"
      fill="url(#e)"
      transform="matrix(-1.03 0 0 .9898 49.08-8.724)"
    />
    <g fill="url(#d)">
      <g id="f">
        <path
          stroke="#787878"
          d="m31.64 17.39v15.19c0 1.059-.823 1.898-1.862 1.898h-13.71c-.831 1.113-2.504 2.928-6.427 4.41 1.725-2.066 1.827-3.459 1.632-4.41h-2.809c-1.039 0-1.893-.839-1.893-1.898v-15.19c0-1.059.854-1.93 1.893-1.93h21.32c1.039 0 1.862.871 1.862 1.93z"
        />
        <path
          stroke="#fff"
          fill="none"
          d="m30.62 17.88v14.2c0 .96-.242 1.368-1.184 1.368h-13.9c-.753 1.01-2.068 2.596-3.511 3.251.403-1.167.248-2.136.173-3.251h-3.407c-.942 0-1.212-.408-1.212-1.368v-14.08c0-.96.27-1.548 1.212-1.548h20.6c.943 0 1.235.461 1.235 1.422z"
        />
      </g>
    </g>
  </svg>
);

export default ChatIcon;
