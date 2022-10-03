import React from "react";

const OurServices = () => {
  return (
    <section id="services" className="px-3 py-20 md:lg:xl:px-40 bg-opacity-10 ">
      <h2 className="title title-2 max-w-md">
        Notre mission pour sauver la planète
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-white-gradient border shadow-xl md:lg:xl:grid-cols-3 group shadow-neutral-100">
        <div className="service__item flex flex-col  p-10 cursor-pointer  md:lg:xl:border-r md:lg:xl:border-b">
          <span className="p-5 w-max  icon-service">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.4283 5.80833L28.5717 7.525L33.3333 15.4617V26.6667H31.6667V23.3333C31.6667 22.4493 31.3155 21.6014 30.6904 20.9763C30.0652 20.3512 29.2174 20 28.3333 20H26.6667V5H6.66667V31.6667H5V35H28.3333V31.6667H26.6667V23.3333H28.3333V26.6667C28.3333 27.5507 28.6845 28.3986 29.3096 29.0237C29.9348 29.6488 30.7826 30 31.6667 30H33.3333C34.2174 30 35.0652 29.6488 35.6904 29.0237C36.3155 28.3986 36.6667 27.5507 36.6667 26.6667V14.5383L31.4283 5.80833ZM23.3333 31.6667H10V15H23.3333V31.6667ZM23.3333 11.6667H10V8.33333H23.3333V11.6667Z"
                fill="currentColor"
              />
              <path
                d="M16.6667 30.0002C17.9719 29.9356 19.2065 29.3881 20.1306 28.4641C21.0546 27.54 21.6021 26.3054 21.6667 25.0002C21.6667 22.8736 19 19.9702 17.845 18.8219L16.6667 17.6436L15.4884 18.8219C14.3334 19.9702 11.6667 22.8736 11.6667 25.0002C11.7313 26.3054 12.2788 27.54 13.2028 28.4641C14.1269 29.3881 15.3615 29.9356 16.6667 30.0002ZM16.6667 22.4669C17.3716 23.203 17.9364 24.0615 18.3334 25.0002C18.2757 25.4219 18.0816 25.8132 17.7806 26.1142C17.4797 26.4151 17.0884 26.6093 16.6667 26.6669C16.2493 26.6102 15.8614 26.4201 15.561 26.1248C15.2606 25.8295 15.0638 25.4449 15 25.0286C15.3913 24.0784 15.9565 23.2096 16.6667 22.4669Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="mt-3 title font-medium title-5">
            Recyclage de déchets plastiques en pavés écologiques
          </h4>
          <p className="mt-2  text-slate-500">
            La transformation du pavé écologique commence tout d'abord par le
            recyclage de plastique légers, tel que les bouteilles, les sachets,
            les bouchons
          </p>
        </div>
        <div className="service__item flex flex-col  p-10 cursor-pointer  md:lg:xl:border-r md:lg:xl:border-b">
          <span className="p-5 w-max  icon-service">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="fill-current"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.3333 35.8016L20 31.7183L3.66663 35.8016L20 1.08496L36.3333 35.8016ZM20 28.2816L30.3333 30.865L20 8.91496L9.66663 30.865L20 28.2816Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="mt-3 title font-medium title-5">
            Recyclage et vente des produits issus de l’aluminium recyclé
          </h4>
          <p className="mt-2  text-slate-500">
            Participer toutes les couches de la population dans le processus de
            protection de l'environnement. L'Aluminium est aussi recyclable à
            100%
          </p>
        </div>
        <div className="service__item flex flex-col  p-10 cursor-pointer  md:lg:xl:border-b">
          <span className="p-5 w-max  icon-service ">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_404_884" fill="currentColor">
                <path
                  fill="currentColor"
                  d="M33.0433 11.6752C33.236 11.1378 33.3341 10.5711 33.3333 10.0002C33.3333 8.6741 32.8066 7.40234 31.8689 6.46465C30.9312 5.52697 29.6594 5.00019 28.3333 5.00019C27.2443 5.00164 26.1863 5.36253 25.3233 6.02685C24.7095 5.19175 23.9078 4.51278 22.9831 4.04481C22.0583 3.57685 21.0364 3.33301 20 3.33301C18.9636 3.33301 17.9417 3.57685 17.0169 4.04481C16.0922 4.51278 15.2905 5.19175 14.6767 6.02685C13.8138 5.36253 12.7557 5.00164 11.6667 5.00019C10.3406 5.00019 9.06882 5.52697 8.13114 6.46465C7.19346 7.40234 6.66667 8.6741 6.66667 10.0002C6.66686 10.5683 6.76496 11.1321 6.95667 11.6669C5.63059 11.6284 4.34355 12.1183 3.37867 13.0288C2.4138 13.9393 1.85013 15.1958 1.81167 16.5219C1.77322 17.8479 2.26312 19.135 3.17361 20.0999C4.0841 21.0647 5.34059 21.6284 6.66667 21.6669C7.38789 21.6632 8.09956 21.5016 8.75167 21.1935C9.34167 21.6319 10.085 22.1302 10.8517 22.6552C12.3489 23.5563 13.7403 24.6224 15 25.8335C14.6149 28.6684 14.0662 31.4787 13.3567 34.2502C13.3389 34.3221 13.331 34.3961 13.3333 34.4702C13.375 35.8202 15.6117 36.5052 19.9767 36.5102H20.0233C24.3883 36.5102 26.625 35.8202 26.6667 34.4702C26.669 34.3961 26.6611 34.3221 26.6433 34.2502C25.9466 31.5087 25.3936 28.7327 24.9867 25.9335C26.1183 24.7716 27.3995 23.7655 28.7967 22.9419C29.7267 22.3119 30.6017 21.7169 31.2583 21.1985C31.9079 21.5032 32.6159 21.663 33.3333 21.6669C34.002 21.6667 34.6639 21.5323 35.2798 21.2718C35.8956 21.0113 36.453 20.6299 36.9188 20.1502C37.3847 19.6705 37.7496 19.1022 37.992 18.479C38.2343 17.8557 38.3492 17.1902 38.3298 16.5218C38.3104 15.8534 38.1571 15.1956 37.879 14.5875C37.6009 13.9794 37.2037 13.4332 36.7108 12.9813C36.2179 12.5294 35.6393 12.181 35.0094 11.9567C34.3795 11.7323 33.7109 11.6366 33.0433 11.6752ZM27.8617 21.5619C24.7133 23.6952 23.3333 24.7435 23.3333 25.8335C23.687 28.6602 24.218 31.4618 24.9233 34.2219C23.3456 34.7789 21.6668 34.9914 20 34.8452C18.3332 34.9914 16.6544 34.7789 15.0767 34.2219C15.782 31.4618 16.3131 28.6602 16.6667 25.8335C16.6667 24.6935 15.1783 23.5685 11.785 21.2735C11.215 20.8885 10.675 20.5202 10.2 20.1835C10.8138 19.5707 11.2582 18.8093 11.49 17.9735C11.6267 18.0285 11.77 18.0585 11.91 18.1002C14.1383 21.0902 15.85 22.6002 17.0067 22.6002C17.1294 22.601 17.2514 22.5824 17.3683 22.5452C17.8017 22.4035 18.3217 21.9935 18.3333 20.8352C18.3567 18.6152 18.35 17.1685 18.3417 16.4119C19.4279 16.7043 20.5721 16.7043 21.6583 16.4119C21.6583 17.1602 21.6433 18.6152 21.6667 20.8352C21.6783 21.9935 22.1983 22.4035 22.6317 22.5452C22.7486 22.5824 22.8706 22.601 22.9933 22.6002C24.15 22.6002 25.8617 21.0835 28.09 18.1002C28.2283 18.0585 28.3717 18.0302 28.5067 17.9752C28.7403 18.8204 29.1927 19.589 29.8183 20.2035C29.2617 20.6135 28.5767 21.0769 27.8617 21.5619ZM16.68 17.0002C16.68 17.8185 16.68 19.0702 16.6667 20.7919C15.7215 20.0408 14.8699 19.1791 14.13 18.2252C15.0774 18.062 15.9605 17.6378 16.68 17.0002ZM23.3333 20.7969C23.315 19.0735 23.3167 17.8219 23.32 17.0035C24.0398 17.6409 24.9227 18.0656 25.87 18.2302C25.1296 19.1836 24.278 20.0453 23.3333 20.7969ZM33.3333 20.0002C32.8939 20.0002 32.4588 19.9133 32.0531 19.7446C31.6474 19.5758 31.279 19.3285 30.9692 19.0168C30.6594 18.7052 30.4143 18.3353 30.248 17.9286C30.0816 17.5219 29.9974 17.0863 30 16.6469C30 16.4921 29.9569 16.3404 29.8755 16.2087C29.7942 16.0771 29.6778 15.9707 29.5394 15.9015C29.4009 15.8323 29.246 15.803 29.0918 15.8169C28.9377 15.8308 28.7905 15.8873 28.6667 15.9802C28.2651 16.2686 27.8052 16.4656 27.3194 16.5575C26.8335 16.6493 26.3335 16.6336 25.8543 16.5117C25.3751 16.3897 24.9285 16.1643 24.5457 15.8514C24.1628 15.5385 23.8532 15.1455 23.6383 14.7002C23.5907 14.5949 23.5216 14.5006 23.4355 14.4234C23.3494 14.3462 23.2482 14.2878 23.1383 14.2519C23.0287 14.2157 22.9126 14.203 22.7977 14.2148C22.6828 14.2266 22.5717 14.2625 22.4717 14.3202C21.7259 14.7619 20.8751 14.995 20.0083 14.995C19.1416 14.995 18.2908 14.7619 17.545 14.3202C17.4445 14.2636 17.3333 14.2285 17.2186 14.2172C17.1038 14.2058 16.9879 14.2184 16.8783 14.2541C16.7686 14.2898 16.6675 14.3479 16.5815 14.4247C16.4954 14.5015 16.4263 14.5953 16.3783 14.7002C16.1641 15.1482 15.8539 15.5436 15.4699 15.8585C15.0858 16.1734 14.6373 16.4 14.1559 16.5222C13.6746 16.6445 13.1723 16.6595 12.6845 16.5661C12.1967 16.4727 11.7355 16.2733 11.3333 15.9819C11.2088 15.89 11.0611 15.8346 10.9069 15.822C10.7526 15.8093 10.5979 15.8399 10.46 15.9102C10.3211 15.9817 10.2046 16.0902 10.1234 16.2237C10.0423 16.3573 9.99956 16.5106 10 16.6669C10 17.3261 9.80451 17.9706 9.43824 18.5188C9.07197 19.0669 8.55137 19.4942 7.94229 19.7465C7.3332 19.9987 6.66298 20.0648 6.01637 19.9361C5.36977 19.8075 4.77583 19.4901 4.30965 19.0239C3.84348 18.5577 3.52601 17.9638 3.39739 17.3172C3.26877 16.6706 3.33478 16.0003 3.58708 15.3912C3.83937 14.7822 4.26661 14.2616 4.81477 13.8953C5.36294 13.529 6.0074 13.3335 6.66667 13.3335C7.39052 13.3357 8.09346 13.5765 8.66667 14.0185C8.79221 14.1094 8.9406 14.1635 9.09517 14.1747C9.24974 14.1858 9.40436 14.1537 9.54167 14.0819C9.68058 14.0083 9.79672 13.8981 9.87751 13.7633C9.95829 13.6284 10.0007 13.474 10 13.3169C10 13.1875 9.96989 13.0599 9.91203 12.9442C9.85417 12.8285 9.77017 12.7278 9.66668 12.6502C9.28995 12.3701 8.97691 12.0133 8.7482 11.6034C8.51949 11.1934 8.38032 10.7396 8.33987 10.2719C8.29942 9.80425 8.35861 9.3333 8.51353 8.89017C8.66846 8.44704 8.9156 8.0418 9.23864 7.7012C9.56168 7.36059 9.95328 7.09236 10.3876 6.91422C10.8219 6.73607 11.2891 6.65205 11.7582 6.6677C12.2274 6.68336 12.6879 6.79833 13.1094 7.00504C13.5309 7.21174 13.9037 7.50547 14.2033 7.86685C14.2915 7.97197 14.4042 8.05371 14.5315 8.10482C14.6588 8.15592 14.7967 8.17481 14.9331 8.1598C15.0694 8.1448 15.2 8.09637 15.3131 8.01881C15.4263 7.94125 15.5185 7.83696 15.5817 7.71519C15.9958 6.89958 16.6276 6.21457 17.4072 5.73608C18.1868 5.25758 19.0836 5.0043 19.9983 5.0043C20.913 5.0043 21.8099 5.25758 22.5895 5.73608C23.369 6.21457 24.0009 6.89958 24.415 7.71519C24.4781 7.83699 24.5703 7.94134 24.6834 8.01897C24.7965 8.0966 24.927 8.1451 25.0633 8.16019C25.1998 8.17519 25.3378 8.15626 25.4651 8.10509C25.5925 8.05392 25.7052 7.97208 25.7933 7.86685C26.0943 7.51019 26.4672 7.22104 26.8875 7.01827C27.3079 6.8155 27.7663 6.70368 28.2328 6.69011C28.6993 6.67654 29.1634 6.76153 29.5948 6.93952C30.0263 7.11751 30.4153 7.3845 30.7365 7.72306C31.0577 8.06162 31.3039 8.46413 31.459 8.90431C31.6141 9.34448 31.6746 9.81242 31.6366 10.2776C31.5985 10.7427 31.4628 11.1946 31.2382 11.6037C31.0136 12.0128 30.7053 12.37 30.3333 12.6519C30.2292 12.7367 30.1452 12.8437 30.0876 12.9651C30.0299 13.0865 30 13.2192 30 13.3535C30 13.5083 30.0431 13.66 30.1245 13.7916C30.2058 13.9233 30.3222 14.0297 30.4607 14.0989C30.5991 14.1681 30.754 14.1974 30.9082 14.1835C31.0623 14.1696 31.2095 14.113 31.3333 14.0202C31.9063 13.5776 32.6093 13.3362 33.3333 13.3335C34.2174 13.3335 35.0652 13.6847 35.6904 14.3098C36.3155 14.935 36.6667 15.7828 36.6667 16.6669C36.6667 17.5509 36.3155 18.3988 35.6904 19.0239C35.0652 19.649 34.2174 20.0002 33.3333 20.0002Z"
                />
              </mask>
              <path
                d="M33.0433 11.6752C33.236 11.1378 33.3341 10.5711 33.3333 10.0002C33.3333 8.6741 32.8066 7.40234 31.8689 6.46465C30.9312 5.52697 29.6594 5.00019 28.3333 5.00019C27.2443 5.00164 26.1863 5.36253 25.3233 6.02685C24.7095 5.19175 23.9078 4.51278 22.9831 4.04481C22.0583 3.57685 21.0364 3.33301 20 3.33301C18.9636 3.33301 17.9417 3.57685 17.0169 4.04481C16.0922 4.51278 15.2905 5.19175 14.6767 6.02685C13.8138 5.36253 12.7557 5.00164 11.6667 5.00019C10.3406 5.00019 9.06882 5.52697 8.13114 6.46465C7.19346 7.40234 6.66667 8.6741 6.66667 10.0002C6.66686 10.5683 6.76496 11.1321 6.95667 11.6669C5.63059 11.6284 4.34355 12.1183 3.37867 13.0288C2.4138 13.9393 1.85013 15.1958 1.81167 16.5219C1.77322 17.8479 2.26312 19.135 3.17361 20.0999C4.0841 21.0647 5.34059 21.6284 6.66667 21.6669C7.38789 21.6632 8.09956 21.5016 8.75167 21.1935C9.34167 21.6319 10.085 22.1302 10.8517 22.6552C12.3489 23.5563 13.7403 24.6224 15 25.8335C14.6149 28.6684 14.0662 31.4787 13.3567 34.2502C13.3389 34.3221 13.331 34.3961 13.3333 34.4702C13.375 35.8202 15.6117 36.5052 19.9767 36.5102H20.0233C24.3883 36.5102 26.625 35.8202 26.6667 34.4702C26.669 34.3961 26.6611 34.3221 26.6433 34.2502C25.9466 31.5087 25.3936 28.7327 24.9867 25.9335C26.1183 24.7716 27.3995 23.7655 28.7967 22.9419C29.7267 22.3119 30.6017 21.7169 31.2583 21.1985C31.9079 21.5032 32.6159 21.663 33.3333 21.6669C34.002 21.6667 34.6639 21.5323 35.2798 21.2718C35.8956 21.0113 36.453 20.6299 36.9188 20.1502C37.3847 19.6705 37.7496 19.1022 37.992 18.479C38.2343 17.8557 38.3492 17.1902 38.3298 16.5218C38.3104 15.8534 38.1571 15.1956 37.879 14.5875C37.6009 13.9794 37.2037 13.4332 36.7108 12.9813C36.2179 12.5294 35.6393 12.181 35.0094 11.9567C34.3795 11.7323 33.7109 11.6366 33.0433 11.6752ZM27.8617 21.5619C24.7133 23.6952 23.3333 24.7435 23.3333 25.8335C23.687 28.6602 24.218 31.4618 24.9233 34.2219C23.3456 34.7789 21.6668 34.9914 20 34.8452C18.3332 34.9914 16.6544 34.7789 15.0767 34.2219C15.782 31.4618 16.3131 28.6602 16.6667 25.8335C16.6667 24.6935 15.1783 23.5685 11.785 21.2735C11.215 20.8885 10.675 20.5202 10.2 20.1835C10.8138 19.5707 11.2582 18.8093 11.49 17.9735C11.6267 18.0285 11.77 18.0585 11.91 18.1002C14.1383 21.0902 15.85 22.6002 17.0067 22.6002C17.1294 22.601 17.2514 22.5824 17.3683 22.5452C17.8017 22.4035 18.3217 21.9935 18.3333 20.8352C18.3567 18.6152 18.35 17.1685 18.3417 16.4119C19.4279 16.7043 20.5721 16.7043 21.6583 16.4119C21.6583 17.1602 21.6433 18.6152 21.6667 20.8352C21.6783 21.9935 22.1983 22.4035 22.6317 22.5452C22.7486 22.5824 22.8706 22.601 22.9933 22.6002C24.15 22.6002 25.8617 21.0835 28.09 18.1002C28.2283 18.0585 28.3717 18.0302 28.5067 17.9752C28.7403 18.8204 29.1927 19.589 29.8183 20.2035C29.2617 20.6135 28.5767 21.0769 27.8617 21.5619ZM16.68 17.0002C16.68 17.8185 16.68 19.0702 16.6667 20.7919C15.7215 20.0408 14.8699 19.1791 14.13 18.2252C15.0774 18.062 15.9605 17.6378 16.68 17.0002ZM23.3333 20.7969C23.315 19.0735 23.3167 17.8219 23.32 17.0035C24.0398 17.6409 24.9227 18.0656 25.87 18.2302C25.1296 19.1836 24.278 20.0453 23.3333 20.7969ZM33.3333 20.0002C32.8939 20.0002 32.4588 19.9133 32.0531 19.7446C31.6474 19.5758 31.279 19.3285 30.9692 19.0168C30.6594 18.7052 30.4143 18.3353 30.248 17.9286C30.0816 17.5219 29.9974 17.0863 30 16.6469C30 16.4921 29.9569 16.3404 29.8755 16.2087C29.7942 16.0771 29.6778 15.9707 29.5394 15.9015C29.4009 15.8323 29.246 15.803 29.0918 15.8169C28.9377 15.8308 28.7905 15.8873 28.6667 15.9802C28.2651 16.2686 27.8052 16.4656 27.3194 16.5575C26.8335 16.6493 26.3335 16.6336 25.8543 16.5117C25.3751 16.3897 24.9285 16.1643 24.5457 15.8514C24.1628 15.5385 23.8532 15.1455 23.6383 14.7002C23.5907 14.5949 23.5216 14.5006 23.4355 14.4234C23.3494 14.3462 23.2482 14.2878 23.1383 14.2519C23.0287 14.2157 22.9126 14.203 22.7977 14.2148C22.6828 14.2266 22.5717 14.2625 22.4717 14.3202C21.7259 14.7619 20.8751 14.995 20.0083 14.995C19.1416 14.995 18.2908 14.7619 17.545 14.3202C17.4445 14.2636 17.3333 14.2285 17.2186 14.2172C17.1038 14.2058 16.9879 14.2184 16.8783 14.2541C16.7686 14.2898 16.6675 14.3479 16.5815 14.4247C16.4954 14.5015 16.4263 14.5953 16.3783 14.7002C16.1641 15.1482 15.8539 15.5436 15.4699 15.8585C15.0858 16.1734 14.6373 16.4 14.1559 16.5222C13.6746 16.6445 13.1723 16.6595 12.6845 16.5661C12.1967 16.4727 11.7355 16.2733 11.3333 15.9819C11.2088 15.89 11.0611 15.8346 10.9069 15.822C10.7526 15.8093 10.5979 15.8399 10.46 15.9102C10.3211 15.9817 10.2046 16.0902 10.1234 16.2237C10.0423 16.3573 9.99956 16.5106 10 16.6669C10 17.3261 9.80451 17.9706 9.43824 18.5188C9.07197 19.0669 8.55137 19.4942 7.94229 19.7465C7.3332 19.9987 6.66298 20.0648 6.01637 19.9361C5.36977 19.8075 4.77583 19.4901 4.30965 19.0239C3.84348 18.5577 3.52601 17.9638 3.39739 17.3172C3.26877 16.6706 3.33478 16.0003 3.58708 15.3912C3.83937 14.7822 4.26661 14.2616 4.81477 13.8953C5.36294 13.529 6.0074 13.3335 6.66667 13.3335C7.39052 13.3357 8.09346 13.5765 8.66667 14.0185C8.79221 14.1094 8.9406 14.1635 9.09517 14.1747C9.24974 14.1858 9.40436 14.1537 9.54167 14.0819C9.68058 14.0083 9.79672 13.8981 9.87751 13.7633C9.95829 13.6284 10.0007 13.474 10 13.3169C10 13.1875 9.96989 13.0599 9.91203 12.9442C9.85417 12.8285 9.77017 12.7278 9.66668 12.6502C9.28995 12.3701 8.97691 12.0133 8.7482 11.6034C8.51949 11.1934 8.38032 10.7396 8.33987 10.2719C8.29942 9.80425 8.35861 9.3333 8.51353 8.89017C8.66846 8.44704 8.9156 8.0418 9.23864 7.7012C9.56168 7.36059 9.95328 7.09236 10.3876 6.91422C10.8219 6.73607 11.2891 6.65205 11.7582 6.6677C12.2274 6.68336 12.6879 6.79833 13.1094 7.00504C13.5309 7.21174 13.9037 7.50547 14.2033 7.86685C14.2915 7.97197 14.4042 8.05371 14.5315 8.10482C14.6588 8.15592 14.7967 8.17481 14.9331 8.1598C15.0694 8.1448 15.2 8.09637 15.3131 8.01881C15.4263 7.94125 15.5185 7.83696 15.5817 7.71519C15.9958 6.89958 16.6276 6.21457 17.4072 5.73608C18.1868 5.25758 19.0836 5.0043 19.9983 5.0043C20.913 5.0043 21.8099 5.25758 22.5895 5.73608C23.369 6.21457 24.0009 6.89958 24.415 7.71519C24.4781 7.83699 24.5703 7.94134 24.6834 8.01897C24.7965 8.0966 24.927 8.1451 25.0633 8.16019C25.1998 8.17519 25.3378 8.15626 25.4651 8.10509C25.5925 8.05392 25.7052 7.97208 25.7933 7.86685C26.0943 7.51019 26.4672 7.22104 26.8875 7.01827C27.3079 6.8155 27.7663 6.70368 28.2328 6.69011C28.6993 6.67654 29.1634 6.76153 29.5948 6.93952C30.0263 7.11751 30.4153 7.3845 30.7365 7.72306C31.0577 8.06162 31.3039 8.46413 31.459 8.90431C31.6141 9.34448 31.6746 9.81242 31.6366 10.2776C31.5985 10.7427 31.4628 11.1946 31.2382 11.6037C31.0136 12.0128 30.7053 12.37 30.3333 12.6519C30.2292 12.7367 30.1452 12.8437 30.0876 12.9651C30.0299 13.0865 30 13.2192 30 13.3535C30 13.5083 30.0431 13.66 30.1245 13.7916C30.2058 13.9233 30.3222 14.0297 30.4607 14.0989C30.5991 14.1681 30.754 14.1974 30.9082 14.1835C31.0623 14.1696 31.2095 14.113 31.3333 14.0202C31.9063 13.5776 32.6093 13.3362 33.3333 13.3335C34.2174 13.3335 35.0652 13.6847 35.6904 14.3098C36.3155 14.935 36.6667 15.7828 36.6667 16.6669C36.6667 17.5509 36.3155 18.3988 35.6904 19.0239C35.0652 19.649 34.2174 20.0002 33.3333 20.0002Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="4"
                mask="url(#path-1-inside-1_404_884)"
              />
            </svg>
          </span>
          <h4 className="mt-3 title font-medium title-5">Planter des arbres</h4>
          <p className="mt-2  text-slate-500">
            Les arbres jouent un rôle très important pour la préservation de
            notre planète. Ils stockent le dioxyde de carbone et purifient ainsi
            l'air que nous respirons. Aussi, chaque arbre planté permet de
            diminuer la pollution de l'air et de purifier l'atmosphère.
          </p>
        </div>
        <div className="service__item flex flex-col  p-10 cursor-pointer  md:lg:xl:border-r">
          <span className="p-5 w-max  icon-service ">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.265 35.7202C11.7301 35.7157 11.204 35.5832 10.7308 35.3337C10.2576 35.0843 9.85103 34.7252 9.54507 34.2864C9.23911 33.8476 9.04268 33.3419 8.9722 32.8117C8.90172 32.2814 8.95925 31.742 9.13997 31.2385L12.485 23.3335H3.96997L13.97 3.3335H33.1133L26.4466 13.3335H35.6383L14.5983 34.7635C13.9715 35.3691 13.1365 35.7115 12.265 35.7202ZM9.3633 20.0002H17.515L12.2416 32.4585L27.7016 16.6668H20.2183L26.885 6.66683H16.03L9.3633 20.0002Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="mt-3 title font-medium title-5">
            Formation sur le recyclage
          </h4>
          <p className="mt-2  text-slate-500">
            Le recyclage est l'un des leviers de la protection de
            l'environnement. Il aide à la fois à limiter le réchauffement
            climatique en diminuant la part des déchets incinérés et l'émission
            de gaz à effet de serre tels que le dioxyde de carbone, le soufre et
            l'azote.
          </p>
        </div>
        <div className="service__item flex flex-col p-10 cursor-pointer  md:lg:xl:border-r">
          <span className="p-5 w-max  icon-service">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 11.6667H13.3333V5H10V11.6667H8.33333V5H5V16.6667C5 17.5507 5.35119 18.3986 5.97631 19.0237C6.60143 19.6488 7.44928 20 8.33333 20H10V35H13.3333V20H15C15.8841 20 16.7319 19.6488 17.357 19.0237C17.9821 18.3986 18.3333 17.5507 18.3333 16.6667V5H15V11.6667ZM8.33333 16.6667V15H15V16.6667H8.33333Z"
                fill="currentColor"
              />
              <path
                d="M30.9667 3.98179C30.2829 3.76999 29.5489 3.78543 28.8747 4.0258C28.2004 4.26617 27.6222 4.71854 27.2267 5.31513L25.4133 8.04346C24.084 10.0402 23.2519 12.3261 22.9867 14.7101L21.8833 24.6351C21.832 25.1007 21.8794 25.5719 22.0225 26.0179C22.1655 26.4639 22.4009 26.8748 22.7134 27.2238C23.0258 27.5727 23.4083 27.8519 23.8359 28.0431C24.2635 28.2343 24.7266 28.3332 25.195 28.3335H30V35.0001H33.3333V7.16679C33.3354 6.45159 33.1061 5.7549 32.6795 5.18083C32.2529 4.60676 31.6521 4.18613 30.9667 3.98179ZM30 25.0001H25.195L26.2983 15.0751C26.5056 13.2215 27.1531 11.4444 28.1867 9.89179L30 7.16679V25.0001Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="mt-3 title font-medium title-5">
            Sensibilisation sur la gestion de déchets ménagers et publics
          </h4>
          <p className="mt-2  text-slate-500">
            La gestion de déchets est bénéfique pour nos enfants, pour notre
            ville, pour notre environnement et notre nature. Votre geste de tri
            contribue à économiser des ressources naturelles, à éviter le
            gaspillage et à limiter les pollutions.
          </p>
        </div>
        <div className="service__item flex flex-col  p-10 cursor-pointer">
          <span className="p-5 w-max  icon-service">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="fill-current"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3333 17L28.3333 16.25L27.3333 17C26.5817 17.5633 20 22.6667 20 28.3333C20 30.5435 20.878 32.6631 22.4408 34.2259C24.0036 35.7887 26.1232 36.6667 28.3333 36.6667C30.5435 36.6667 32.6631 35.7887 34.2259 34.2259C35.7887 32.6631 36.6667 30.5435 36.6667 28.3333C36.6667 22.6667 30.085 17.5633 29.3333 17ZM28.3333 33.3333C27.0073 33.3333 25.7355 32.8066 24.7978 31.8689C23.8601 30.9312 23.3333 29.6594 23.3333 28.3333C23.3333 25.4867 26.365 22.2167 28.3333 20.4867C30.3017 22.2167 33.3333 25.4867 33.3333 28.3333C33.3333 29.6594 32.8066 30.9312 31.8689 31.8689C30.9312 32.8066 29.6594 33.3333 28.3333 33.3333Z"
                fill="currentColor"
              />
              <path
                d="M12.5917 11.9468L11.6667 11.3335L10.7417 11.9502C10.5083 12.1035 5 15.8418 5 21.6668C5 23.4349 5.70238 25.1306 6.95262 26.3809C8.20286 27.6311 9.89856 28.3335 11.6667 28.3335C13.4348 28.3335 15.1305 27.6311 16.3807 26.3809C17.631 25.1306 18.3333 23.4349 18.3333 21.6668C18.3333 15.8418 12.8333 12.1035 12.5917 11.9468ZM11.6667 25.0002C10.7826 25.0002 9.93477 24.649 9.30964 24.0239C8.68452 23.3987 8.33333 22.5509 8.33333 21.6668C8.43825 20.4601 8.78792 19.2874 9.36102 18.2203C9.93412 17.1532 10.7186 16.2141 11.6667 15.4602C12.6146 16.2142 13.399 17.1534 13.9721 18.2205C14.5451 19.2875 14.8949 20.4602 15 21.6668C15 22.5509 14.6488 23.3987 14.0237 24.0239C13.3986 24.649 12.5507 25.0002 11.6667 25.0002Z"
                fill="currentColor"
              />
              <path
                d="M28.3334 10.0002C28.3334 7.87355 25.6667 4.97022 24.5117 3.82189L23.3334 2.64355L22.155 3.82189C21 4.97022 18.3334 7.87355 18.3334 10.0002C18.3334 11.3263 18.8602 12.5981 19.7978 13.5358C20.7355 14.4734 22.0073 15.0002 23.3334 15.0002C24.6595 15.0002 25.9312 14.4734 26.8689 13.5358C27.8066 12.5981 28.3334 11.3263 28.3334 10.0002ZM21.6667 10.0286C22.0566 9.07764 22.622 8.20862 23.3334 7.46689C24.0407 8.20804 24.6057 9.07299 25 10.0186C25.0014 10.4606 24.827 10.885 24.5154 11.1985C24.2038 11.512 23.7804 11.6889 23.3384 11.6902C22.8963 11.6915 22.4719 11.5172 22.1584 11.2056C21.8449 10.894 21.668 10.4706 21.6667 10.0286Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="mt-3 title font-medium title-5">Pavage d'enclose</h4>
          <p className="mt-2  text-slate-500">
            Que vous rêviez d'un jardin moderne, classique ou rustique, le pavés
            de wastes-trans sont faite en plastique recycler et vous permet de
            donner vie à la protection de l'environnement
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-20 py-10 bg-primary-dark shadow-xl shadow-indigo-200">
        <p className="text-white">
          <span className="text-4xl font-medium">Encore confus ?</span> <br />
          <span className="text-lg">
            Contactez-nous pour en savoir plus sur ce que nous faisons
          </span>
        </p>
        <button className="px-5 py-3 font-medium duration-150 bg-primary shadow-xl text-slate-700 hover:bg-white hover:text-slate-900">
          PRENEZ RENDEZ-VOUS
        </button>
      </div>
    </section>
  );
};

export default OurServices;
