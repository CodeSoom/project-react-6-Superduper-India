import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const MobileSideBarMenuContainer = styled.div({
  backgroundColor: '#fff',
  maxWidth: '100%',
  height: '100vh',
  padding: '0 3.3rem',
  position: 'fixed',
  top: 0,
  zIndex: '1',

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
})

const MobileSideBarMenuContainer_close = styled.button({
  position: 'absolute',
  top: '1rem',
  left: '1rem',
})

const MobileSideBarMenuContainer_menu = styled.ul({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90%',
})
const MobileSideBarMenuContainer_menu_category = styled.li({
  color: '#828282',
  fontSize: '1rem',
  marginBottom: '2.5rem',
})
const MobileSideBarMenuContainer_menu_information = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& button': {
    color: '#828282',
    fontSize: '1rem',
    marginRight: '0.5rem',
  },
})

const MobileSideBarMenuContainer_logo = styled.div({
  flexFlow: 'nowrap',
  paddingTop: '1rem',
  borderTop: 'solid 1px #828282',
})
const MobileSideBarMenuContainer_copyright = styled.div({
  paddingTop: '1rem',
  paddingBottom: '3rem',
  '& span': {
    fontSize: '0.5rem',
    color: '#7D3200',
  },
})


export default function MoblieSideBarMenu({ onClickClose }) {
  return (
    <>
      <MobileSideBarMenuContainer>
        <MobileSideBarMenuContainer_close
          type='button'
          onClick={() => onClickClose()}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3999 10.4004L29.5999 29.6004M10.3999 29.6004L29.5999 10.4004" stroke="#FA625B" strokeWidth="2" />
          </svg>
        </MobileSideBarMenuContainer_close>

        <MobileSideBarMenuContainer_menu>
          <Link to="/home">
            <MobileSideBarMenuContainer_menu_category>
              Home
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/">
            <MobileSideBarMenuContainer_menu_category>
              Today is
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/custom">
            <MobileSideBarMenuContainer_menu_category>
              Selector
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/search">
            <MobileSideBarMenuContainer_menu_category>
              Search
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <MobileSideBarMenuContainer_menu_information>
            <button>About</button>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66699 14.0669L11.2003 8.00026L4.66699 1.93359" stroke="#828282" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </MobileSideBarMenuContainer_menu_information>
        </MobileSideBarMenuContainer_menu>

        <Link to='/home'>
          <MobileSideBarMenuContainer_logo>
            <svg width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.3807 117.976C41.3807 119.224 41.0527 120.645 40.7025 121.453L39.6314 121.388C39.6963 120.6 39.6758 119.574 39.6758 119.07V109.756C39.6758 109.254 39.6758 108.816 39.587 108.422C39.4777 107.897 39.1292 107.504 38.7345 107.241C38.5159 107.089 38.9976 106.126 39.3034 106.257C40.3096 106.695 41.0083 107.351 41.2048 107.942C41.3141 108.27 41.3807 108.598 41.3807 109.582V112.904C42.2981 112.882 43.3043 112.817 44.0919 112.686V107.569C44.0919 107.067 44.0919 106.63 44.0047 106.235C43.8954 105.711 43.5452 105.318 43.1523 105.055C42.9336 104.903 43.4581 103.941 43.7639 104.071C44.7701 104.508 45.4688 105.164 45.6652 105.755C45.7746 106.083 45.8412 106.411 45.8412 107.395V121.06C45.8412 122.307 45.4688 123.727 45.1186 124.536L44.0475 124.472C44.1141 123.684 44.0919 122.656 44.0919 122.153V114.02C43.2821 114.129 42.1239 114.194 41.3807 114.239V117.976ZM30.2954 112.641C30.2082 111.987 29.8358 111.133 29.2892 110.653C29.1371 110.521 29.7487 109.865 29.9452 109.975C30.7771 110.434 31.3016 110.914 31.5852 111.352C31.7816 111.659 31.9781 112.052 32.0225 112.534L32.3949 116.162L35.4545 115.921C35.6305 114.917 35.7825 112.424 35.762 111.833C35.7398 111.527 35.6527 111.331 35.2803 111.396C34.7114 111.483 34.5372 111.527 33.9034 111.592C33.4882 111.637 32.6341 111.309 32.1318 111.003C31.9781 110.914 32.1096 110.171 32.2856 110.193C32.8322 110.258 33.3994 110.368 33.9461 110.325L36.2643 110.106C37.1834 110.04 37.6412 110.325 37.6412 110.849C37.6412 111.702 37.1834 114.741 36.8759 116.053L37.4892 116.425L37.2039 117.146L32.5042 117.387L32.2412 118.262L31.0607 118.086L30.2954 112.641Z" fill="#7D3200" />
              <path d="M56.247 108.292C54.6514 108.335 53.9954 109.319 53.9954 110.586C53.9954 111.811 54.8052 112.927 56.3563 112.927C57.9536 112.927 58.7395 111.878 58.7395 110.566C58.7395 109.669 58.719 109.122 58.1057 108.663C57.8648 108.466 58.2816 107.636 58.543 107.723C59.5714 108.051 60.5332 109.1 60.5332 110.543C60.5332 112.534 59.0025 114.261 56.3785 114.261C53.7545 114.261 52.2017 112.534 52.2017 110.586C52.2017 108.707 53.6896 107.154 55.6132 107.089C55.6781 106.913 55.6576 106.672 55.591 106.498C55.5039 106.257 55.3074 105.974 54.935 105.668C54.8479 105.581 55.1332 105.121 55.2852 105.164C56.0283 105.383 57.0567 106.105 57.0567 106.913V107.395C57.0567 108.27 56.4657 108.292 56.247 108.292ZM59.3305 122.787C59.3305 123.093 59.4621 123.16 59.7457 123.16C60.4017 123.137 64.2061 122.941 65.2772 122.961C65.6497 122.961 66.2168 122.984 66.5243 123.115C66.743 123.202 66.5021 124.296 66.1963 124.296C65.8461 124.296 65.1679 124.273 64.8177 124.296L58.9803 124.492C57.9741 124.514 57.6034 124.012 57.6034 123.575V121.584C57.6034 120.973 57.407 120.754 57.2088 120.578C56.8381 120.25 56.9474 119.398 57.559 119.464C57.8648 119.485 58.3243 119.574 58.719 119.552L63.9652 119.42L64.0524 117.715C64.0746 117.43 63.9225 117.32 63.6595 117.32C62.1732 117.343 60.2923 117.584 58.8061 117.561C58.2594 117.561 57.3625 117.3 56.9252 117.059C56.7715 116.992 56.9901 115.988 57.2088 116.01L58.7395 116.207C59.7457 116.316 60.7297 116.207 61.9101 116.118C62.7626 116.053 64.0746 115.944 64.8399 115.921C65.3217 115.901 65.9982 116.316 65.911 116.883L65.5403 119.552C65.6719 119.683 65.911 119.857 66.0426 119.944L65.7795 120.667L59.3305 120.819V122.787ZM66.2168 111.57C66.2168 112.817 65.8017 114.239 65.4532 115.047L64.3804 114.982C64.447 114.194 64.4248 113.167 64.4248 112.664V107.569C64.4248 107.067 64.4248 106.63 64.3377 106.235C64.2283 105.711 63.9225 105.318 63.5279 105.055C63.3092 104.903 63.8337 103.941 64.1412 104.071C65.1457 104.508 65.8461 105.164 66.0426 105.755C66.1519 106.083 66.2168 106.411 66.2168 107.395V111.57Z" fill="#7D3200" />
              <path d="M77.6088 121.432C77.0622 121.475 76.5155 121.542 76.0132 121.607C75.4666 121.671 74.9404 121.76 74.416 121.803C73.9786 121.825 72.3608 121.453 72.0772 121.388C71.8142 121.323 72.0995 120.207 72.3386 120.23C72.9741 120.295 73.5857 120.339 74.1973 120.339C75.072 120.359 76.2524 120.295 77.7182 120.185C80.6035 119.967 83.5333 119.77 89.7209 119.703C90.1804 119.703 91.4275 119.813 92.1707 120.382L91.8649 121.323C91.0773 121.169 89.9396 121.06 89.4817 121.038C88.4977 120.995 87.5342 120.973 86.5297 120.973C83.7964 120.973 80.9315 121.147 77.6088 121.432ZM84.1466 117.146C85.0418 113.888 85.3493 110.63 85.3493 109.406C85.3493 109.122 85.2399 108.968 84.9324 108.968C83.2942 108.968 81.0853 109.428 79.1617 109.493C78.4391 109.515 77.0622 109.187 76.4062 108.968C76.2097 108.903 76.384 107.745 76.7342 107.788C77.3235 107.875 78.2426 108.051 79.2915 108.006C81.3911 107.919 84.3653 107.417 85.9831 107.614C86.3538 107.656 86.8133 107.788 86.9671 108.138C87.0542 108.334 87.0969 108.968 87.0969 109.209C87.0969 110.695 86.5297 114.807 85.4791 117.409L84.1466 117.146Z" fill="#7D3200" />
              <path d="M105.66 117.976C105.66 119.224 105.332 120.645 104.981 121.453L103.91 121.388C103.975 120.6 103.955 119.574 103.955 119.07V116.227C102.074 117.278 98.8588 118.349 95.9956 118.371C95.7325 118.371 95.5361 118.284 95.5361 117.934V114.063C95.5361 113.386 95.5361 112.927 95.4489 111.987C95.4045 111.505 95.2303 111.112 94.5299 110.784C94.3778 110.718 94.5521 109.887 94.728 109.91C95.1432 109.952 95.9085 110.062 96.3014 110.062C98.4881 109.997 100.499 109.691 101.373 109.537L102.029 110.258C102.161 110.434 101.637 110.74 101.462 110.784C100.63 110.959 98.9903 111.222 97.0445 111.222C96.8703 111.222 96.8037 111.287 96.913 111.396C97.0667 111.527 97.2632 111.746 97.2632 112.03V116.6C97.2632 116.84 97.3503 116.883 97.5263 116.883C98.9254 116.883 102.118 116.053 103.955 115.026V109.756C103.955 109.254 103.955 108.816 103.866 108.422C103.757 107.897 103.408 107.504 103.013 107.241C102.795 107.089 103.277 106.126 103.582 106.257C104.589 106.695 105.287 107.351 105.485 107.942C105.593 108.27 105.66 108.598 105.66 109.582V113.714C106.577 113.692 107.583 113.625 108.371 113.495V107.569C108.371 107.067 108.371 106.63 108.284 106.235C108.174 105.711 107.824 105.318 107.431 105.055C107.213 104.903 107.737 103.941 108.043 104.071C109.049 104.508 109.748 105.164 109.944 105.755C110.054 106.083 110.12 106.411 110.12 107.395V121.06C110.12 122.307 109.748 123.727 109.398 124.536L108.326 124.472C108.393 123.684 108.371 122.656 108.371 122.153V114.828C107.561 114.937 106.403 115.004 105.66 115.047V117.976Z" fill="#7D3200" />
              <path d="M130.08 116.097C130.868 116.01 131.765 115.944 132.289 115.901C132.704 115.879 133.711 116.14 134.344 116.403L134.126 117.43C133.36 117.343 132.421 117.191 132.158 117.211L130.08 117.387V121.06C130.08 122.307 129.665 123.727 129.315 124.536L128.244 124.472C128.311 123.684 128.288 122.656 128.288 122.153V117.365C125.423 118.393 119.892 119.268 118.558 119.377C118.078 119.42 117.837 119.42 117.136 119.398C116.897 119.398 115.759 119.201 115.257 119.005C115.126 118.96 115.3 117.867 115.498 117.889L117.116 118.065C117.924 118.13 119.39 117.999 121.03 117.758V117.168C121.03 116.555 120.767 116.272 120.416 115.879C120.198 115.616 120.963 114.917 121.248 115.069C121.597 115.245 122.429 115.988 122.67 116.403C122.735 116.512 122.735 116.972 122.69 117.496C124.964 117.102 127.238 116.6 128.288 116.294V107.569C128.288 107.067 128.288 106.63 128.201 106.235C128.092 105.711 127.784 105.318 127.391 105.055C127.173 104.903 127.697 103.941 128.003 104.071C129.009 104.508 129.71 105.164 129.906 105.755C130.015 106.083 130.08 106.411 130.08 107.395V116.097ZM121.095 108.968C119.936 108.968 119.214 109.734 119.214 111.112C119.214 112.751 120.242 113.451 121.487 113.451C122.647 113.451 123.674 112.751 123.674 111.133C123.674 110.215 123.631 109.997 123.194 109.428C122.998 109.187 123.391 108.444 123.652 108.553C124.812 109.035 125.401 109.91 125.401 111.09C125.401 112.904 124.134 114.741 121.51 114.741C118.886 114.741 117.487 113.058 117.487 111.112C117.487 109.734 118.383 107.964 120.657 107.788C120.702 107.328 120.679 106.848 120.001 106.389C119.892 106.324 120.198 105.842 120.351 105.887C121.095 106.105 122.079 106.826 122.079 107.788V108.094C122.079 108.968 121.597 108.968 121.095 108.968Z" fill="#7D3200" />
              <path d="M83.3633 91.6761C83.1002 91.6761 82.8371 91.6607 82.5757 91.6334C78.7525 91.2234 74.4492 87.8221 69.4215 81.2365C65.7708 76.4532 62.0176 70.2724 59.3817 64.7049C56.9678 59.6021 55.7344 55.0597 55.7156 51.2023C55.6848 45.3649 58.4455 42.4266 60.7671 40.9881C64.0745 38.9399 68.0651 39.0782 72.0011 41.3811C75.4434 43.3935 78.7969 46.9451 81.9727 51.9386C88.736 62.5866 92.7728 62.3611 95.7196 62.1971C98.0054 62.0656 103.016 59.6585 103.016 53.3172C103.016 50.7632 102.247 48.6637 100.797 47.2441C100.124 46.5983 99.3515 46.108 98.482 45.7715C97.6108 45.4349 96.7088 45.2795 95.776 45.3051C92.1902 45.3888 89.0605 48.5116 89.0298 48.5441C88.8965 48.6808 88.7513 48.8021 88.5959 48.9114C88.4387 49.019 88.273 49.1113 88.097 49.1864C87.9228 49.2616 87.7417 49.3197 87.5555 49.359C87.3693 49.3983 87.1814 49.4205 86.9918 49.4222C86.8004 49.4256 86.6125 49.4102 86.4246 49.3761C86.2367 49.3402 86.0556 49.2889 85.8779 49.2189C85.702 49.1471 85.5328 49.0617 85.374 48.9575C85.2134 48.8533 85.0648 48.7354 84.9281 48.6039C84.7914 48.4706 84.6701 48.3254 84.5608 48.17C84.4532 48.0128 84.3609 47.8471 84.2858 47.6711C84.2106 47.4969 84.1525 47.3158 84.1132 47.1296C84.0739 46.9434 84.0517 46.7555 84.05 46.5659C84.0466 46.3745 84.062 46.1866 84.0961 45.9987C84.132 45.8108 84.1833 45.6297 84.2533 45.452C84.325 45.2761 84.4105 45.1069 84.5147 44.9481C84.6189 44.7875 84.7368 44.6389 84.8683 44.5022C85.0596 44.304 89.6499 39.6488 95.6393 39.5053C96.4867 39.4831 97.3272 39.5463 98.1625 39.6915C98.9979 39.8367 99.8111 40.0639 100.6 40.3714C101.391 40.6789 102.143 41.0599 102.857 41.5177C103.571 41.9739 104.234 42.4966 104.844 43.0843C106.655 44.8524 108.812 48.0589 108.812 53.3069C108.812 58.6045 106.47 62.0434 104.504 63.9943C102.157 66.3244 98.9945 67.8141 96.0374 67.9781C91.0166 68.2566 84.9964 67.5117 77.0732 55.0375C72.2745 47.4815 67.0709 43.9009 63.8216 45.9133C60.4767 47.9855 60.7774 54.0808 64.6263 62.2193C67.0606 67.3665 70.6618 73.3047 74.0323 77.7139C78.4262 83.471 81.643 85.6987 83.1941 85.8644C84.3592 85.9874 86.7611 84.5865 90.0087 80.2747C91.647 78.0658 93.111 75.7476 94.4025 73.3201C94.4896 73.1509 94.5921 72.9921 94.71 72.8434C94.8296 72.6948 94.9611 72.5582 95.1063 72.4352C95.2515 72.3121 95.407 72.2045 95.5727 72.1123C95.7401 72.02 95.9144 71.9449 96.0955 71.8868C96.2765 71.8287 96.461 71.7894 96.6507 71.7672C96.8386 71.7467 97.0282 71.7433 97.2178 71.7587C97.4075 71.774 97.5937 71.8082 97.7782 71.8611C97.961 71.9124 98.1369 71.9824 98.306 72.0696C98.4752 72.1567 98.634 72.2592 98.7827 72.3771C98.933 72.4967 99.068 72.6282 99.191 72.7734C99.314 72.9186 99.4216 73.0741 99.5155 73.2398C99.6078 73.4055 99.683 73.5797 99.741 73.7608C99.7991 73.9419 99.8384 74.1281 99.8606 74.316C99.8828 74.5056 99.8863 74.6953 99.8709 74.8849C99.8555 75.0745 99.8213 75.2607 99.7684 75.4435C99.7171 75.6263 99.6471 75.8023 99.56 75.9731C98.1318 78.6706 96.5089 81.245 94.6895 83.6965C90.6664 89.0589 86.9525 91.6761 83.3633 91.6761Z" fill="#FA625B" />
            </svg>
          </MobileSideBarMenuContainer_logo>
        </Link>


        <MobileSideBarMenuContainer_copyright>
          <span>
            © 2022 - Page by Superduper-India
          </span>
        </MobileSideBarMenuContainer_copyright>
      </MobileSideBarMenuContainer>
    </>
  )
}