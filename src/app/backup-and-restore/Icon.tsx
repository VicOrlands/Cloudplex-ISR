import "./icon.css"

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" fill="none" className="svg">
      <rect width="28" height="28" x="0.143" fill="#DCFAE6" rx="14"></rect>
      <path
        fill="#17B26A"
        fillRule="evenodd"
        d="M20.089 8.622l-8.353 8.061-2.217-2.368c-.408-.385-1.05-.408-1.517-.082-.455.339-.583.934-.303 1.412l2.625 4.27c.257.397.7.642 1.202.642.478 0 .933-.245 1.19-.642.42-.548 8.435-10.103 8.435-10.103 1.05-1.074-.222-2.019-1.062-1.202v.012z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" fill="none" className="icon">
      <g filter="url(#a)">
        <rect
          width="48"
          height="48"
          x="2"
          y="1.413"
          fill="#3E54AC"
          rx="10"
        ></rect>
        <rect
          width="46"
          height="46"
          x="3"
          y="2.413"
          stroke="url(#b)"
          strokeWidth="2"
          rx="9"
        ></rect>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.094 24.642A8.003 8.003 0 0120 23.413c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8 0 .998-.184 1.954-.52 2.835-.07.183-.105.274-.12.346a.897.897 0 00-.024.193c-.002.073.008.154.028.315l.403 3.27c.043.354.065.53.006.66a.5.5 0 01-.257.25c-.13.057-.306.03-.66-.02l-3.184-.468c-.167-.024-.25-.036-.326-.036a.898.898 0 00-.2.022 2.926 2.926 0 00-.358.122c-.883.33-1.84.511-2.84.511a8.161 8.161 0 01-1.23-.092m-5.191 4.092c2.965 0 5.368-2.462 5.368-5.5 0-3.037-2.403-5.5-5.368-5.5s-5.369 2.463-5.369 5.5c0 .61.097 1.198.276 1.747a3.5 3.5 0 01.127.427.857.857 0 01.01.213c-.005.08-.025.17-.065.352L16 35.413l2.995-.409c.163-.022.245-.033.316-.033a.843.843 0 01.19.02c.07.014.173.05.381.124a5.243 5.243 0 001.75.298z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="26"
          x2="26"
          y1="1.413"
          y2="49.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.12"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <filter
          id="a"
          width="52"
          height="52"
          x="0"
          y="0.413"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2406_13560"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2406_13560"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-2"></feOffset>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect2_innerShadow_2406_13560"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1"
            result="effect3_innerShadow_2406_13560"
          ></feMorphology>
          <feOffset></feOffset>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"></feColorMatrix>
          <feBlend
            in2="effect2_innerShadow_2406_13560"
            result="effect3_innerShadow_2406_13560"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="none" className="icon">
      <g filter="url(#a)">
        <rect
          width="48"
          height="48"
          x="2.333"
          y="1.413"
          fill="#3E54AC"
          rx="10"
        ></rect>
        <rect
          width="46"
          height="46"
          x="3.333"
          y="2.413"
          stroke="url(#b)"
          strokeWidth="2"
          rx="9"
        ></rect>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M27.333 15.413l-8.906 10.688c-.349.419-.523.628-.526.805a.5.5 0 00.186.396c.137.111.41.111.954.111h7.292l-1 8 8.907-10.687c.349-.42.523-.628.526-.805a.5.5 0 00-.186-.397c-.137-.11-.41-.11-.955-.11h-7.292l1-8z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="26.333"
          x2="26.333"
          y1="1.413"
          y2="49.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.12"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <filter
          id="a"
          width="52"
          height="52"
          x="0.333"
          y="0.413"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2406_16229"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2406_16229"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-2"></feOffset>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect2_innerShadow_2406_16229"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1"
            result="effect3_innerShadow_2406_16229"
          ></feMorphology>
          <feOffset></feOffset>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"></feColorMatrix>
          <feBlend
            in2="effect2_innerShadow_2406_16229"
            result="effect3_innerShadow_2406_16229"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

function KvmIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="none" className="icon">
      <g filter="url(#a)">
        <rect
          width="48"
          height="48"
          x="2.667"
          y="1.413"
          fill="#3E54AC"
          rx="10"
        ></rect>
        <rect
          width="46"
          height="46"
          x="3.667"
          y="2.413"
          stroke="url(#b)"
          strokeWidth="2"
          rx="9"
        ></rect>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.667 16.413h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311c-.327.642-.327 1.482-.327 3.162v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.31 1.311c.642.327 1.483.327 3.163.327h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.31-1.31c.328-.642.328-1.483.328-3.163v-3.2m-9-5h4v4m-.5-8.5v-1.5m3.939 2.561l1.06-1.06m.01 5h1.5m-19.01 4.846c.653.101 1.32.153 2 .153 4.387 0 8.266-2.172 10.62-5.5"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="26.667"
          x2="26.667"
          y1="1.413"
          y2="49.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.12"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <filter
          id="a"
          width="52"
          height="52"
          x="0.667"
          y="0.413"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2406_13704"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2406_13704"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-2"></feOffset>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect2_innerShadow_2406_13704"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1"
            result="effect3_innerShadow_2406_13704"
          ></feMorphology>
          <feOffset></feOffset>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"></feColorMatrix>
          <feBlend
            in2="effect2_innerShadow_2406_13704"
            result="effect3_innerShadow_2406_13704"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export { Icon, AwsIcon, AzureIcon, KvmIcon }
