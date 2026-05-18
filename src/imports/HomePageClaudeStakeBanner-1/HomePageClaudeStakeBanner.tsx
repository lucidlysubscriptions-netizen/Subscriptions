import svgPaths from "./svg-yu2xn7dumg";

function Top() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Top">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Top" opacity="0.6">
          <path d={svgPaths.p13dbab40} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Padding() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <Top />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Top Yields</p>
      </div>
    </div>
  );
}

function ThirdTab() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Third Tab">
      <Padding />
    </div>
  );
}

function Flagship() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flagship">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Flagship" opacity="0.6">
          <path d={svgPaths.p23903b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Padding1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <Flagship />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Flagship</p>
      </div>
    </div>
  );
}

function ForthTab() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Forth Tab">
      <Padding1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[11.11%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5556 15.5556">
        <g id="Group">
          <g id="Vector">
            <path d={svgPaths.p2906c380} fill="var(--fill-0, black)" />
            <path d={svgPaths.pc37da00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Delta() {
  return (
    <div className="opacity-60 overflow-clip relative shrink-0 size-[20px]" data-name="Delta">
      <Group />
    </div>
  );
}

function Padding2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <Delta />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Delta neutral</p>
      </div>
    </div>
  );
}

function ThirdTab1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Third Tab">
      <Padding2 />
    </div>
  );
}

function Loop() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Loop">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Loop" opacity="0.6">
          <path d={svgPaths.p1b8c1a00} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Padding3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <Loop />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Leverage Looping</p>
      </div>
    </div>
  );
}

function ThirdTab2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Third Tab">
      <Padding3 />
    </div>
  );
}

function Padding4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center mb-[-3px] px-[4px] relative shrink-0" data-name="Padding">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="refresh-cw-05">
        <div className="absolute inset-[14.58%_14.56%_14.58%_14.55%]" data-name="Icon">
          <div className="absolute inset-[-5.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6781 15.6696">
              <path d={svgPaths.p128c1d00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7f56d9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Subscriptions</p>
      </div>
    </div>
  );
}

function FirstTab() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="First Tab">
      <Padding4 />
      <div className="bg-[#7f56d9] h-[3px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="Selection Bar" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-[662px] z-[2]">
      <ThirdTab />
      <ForthTab />
      <ThirdTab1 />
      <ThirdTab2 />
      <FirstTab />
    </div>
  );
}

function IconTabBar() {
  return (
    <div className="absolute content-stretch flex gap-[24px] isolate items-center left-[32px] top-[76px]" data-name="Icon Tab Bar">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <div className="absolute drop-shadow-[0px_2px_1px_rgba(34,53,72,0.05)] inset-0 z-[1]" data-name="Inner Shadow" />
    </div>
  );
}

function Fi() {
  return (
    <div className="absolute right-[24px] size-[24px] top-[8px]" data-name="fi_785116">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_46_447)" id="fi_785116">
          <path d={svgPaths.p1dd20d70} fill="var(--fill-0, #FF6536)" id="Vector" />
          <path d={svgPaths.p2639c780} fill="var(--fill-0, #FF421D)" id="Vector_2" />
          <path d={svgPaths.p3070e300} fill="var(--fill-0, #FBBF00)" id="Vector_3" />
          <path d={svgPaths.p3685a700} fill="var(--fill-0, #FFA900)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_46_447">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#f4f0ff] h-[42px] left-0 rounded-[12px] top-0 w-[668px]" />
      <Fi />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[calc(50%-324px)] not-italic text-[12px] text-black top-[12px] tracking-[0.15px] w-[585px]">
        <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] leading-[18px]">{`Note: `}</span>
        <span className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px]">{`Subscriptions are live. Route your idle USDC's yield into Claude Pro every month.`}</span>
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[42px] left-[32px] overflow-clip rounded-[12px] shadow-[4px_4px_4px_0px_rgba(127,86,217,0.15),-4px_-4px_4px_0px_white] top-[144px] w-[668px]">
      <Group3 />
    </div>
  );
}

function Fi2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fi_11329460">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fi_11329460">
          <path d={svgPaths.p324b1280} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
          <path d={svgPaths.p6e14750} id="Icon_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%-0.5px)] top-[calc(50%+82px)]">
      <Fi2 />
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Stake Now</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[24px] top-[184px]">
      <div className="absolute h-[40px] left-[24px] top-[184px] w-[270px]">
        <div className="absolute inset-[-20%_-3.7%_-25%_-2.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 58">
            <g filter="url(#filter0_dd_1_111)" id="Rectangle 2">
              <path d={svgPaths.p140c080} fill="var(--fill-0, #DD8164)" />
              <path d={svgPaths.p2c2ff180} stroke="var(--stroke-0, #F4F0FF)" strokeWidth="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58" id="filter0_dd_1_111" width="288" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_111" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-2" dy="-2" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="effect1_dropShadow_1_111" mode="normal" result="effect2_dropShadow_1_111" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_111" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function ClaudeColor() {
  return (
    <div className="absolute left-[24px] size-[56px] top-[24px]" data-name="claude-color 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g clipPath="url(#clip0_1_86)" id="claude-color 1">
          <path d={svgPaths.p152f0100} fill="var(--fill-0, #D97757)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_86">
            <rect fill="white" height="56" width="56" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[195px] top-[24px]">
      <div className="absolute h-[24px] left-[195px] top-[24px] w-[99px]">
        <div className="absolute inset-[-33.33%_-10.1%_-41.67%_-8.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 42">
            <g filter="url(#filter0_dd_1_84)" id="Rectangle 3">
              <path d={svgPaths.p84f8080} fill="var(--fill-0, #F4F0FF)" />
              <path d={svgPaths.p37676240} stroke="var(--stroke-0, #F4F0FF)" strokeWidth="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42" id="filter0_dd_1_84" width="117" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_84" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-2" dy="-2" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="effect1_dropShadow_1_84" mode="normal" result="effect2_dropShadow_1_84" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_84" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] left-[203px] text-[12px] text-black top-[28px] whitespace-nowrap">Lifetime Access</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[244px] left-0 overflow-clip rounded-[16px] top-0 w-[318px]">
      <p className="absolute font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] left-[24px] text-[#280f4b] text-[20px] top-[100px] w-[119px]">ClaudeStake</p>
      <p className="absolute font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] left-[24px] text-[12px] text-[rgba(0,0,0,0.6)] top-[128px] w-[270px]">Anthropic’s advanced AI assistant for conversations, analysis, and creative work</p>
      <ClaudeColor />
      <Group4 />
    </div>
  );
}

function Usd() {
  return (
    <div className="absolute h-[244px] left-[32px] top-[210px] w-[318px]" data-name="USD">
      <div className="absolute h-[244px] left-0 pointer-events-none rounded-[16px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[318px]">
        <div aria-hidden="true" className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4px_-4px_4px_0px_rgba(0,0,0,0.08),inset_4px_4px_4px_0px_white]" />
      </div>
      <Group2 />
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[828px] left-[756px] overflow-clip top-[72px] w-[756px]">
      <IconTabBar />
      <Frame15 />
      <Usd />
    </div>
  );
}

function Bar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[100px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[378px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[319px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[319px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[419px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[319px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[319px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[334px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[334px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[219px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[387px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[378px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[425px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[425px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[413px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[244px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[244px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[319px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[169px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[419px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[419px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[375px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[354px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[354px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[419px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[378px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[257px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[366px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[500px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[225px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[225px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[253px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[253px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[213px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[260px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[260px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[249px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[249px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[369px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[369px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[433px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[449px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[470px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[481px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[487px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[492px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function Bar53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative" data-name="Bar">
      <div className="bg-[#7f56d9] h-[492px] relative rounded-[2px] shrink-0 w-[10px]" />
    </div>
  );
}

function BarGroup() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[500px] items-end left-0 top-0 w-[620px]" data-name="BarGroup">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
      <Bar7 />
      <Bar8 />
      <Bar9 />
      <Bar10 />
      <Bar11 />
      <Bar12 />
      <Bar13 />
      <Bar14 />
      <Bar15 />
      <Bar16 />
      <Bar17 />
      <Bar18 />
      <Bar19 />
      <Bar20 />
      <Bar21 />
      <Bar22 />
      <Bar23 />
      <Bar24 />
      <Bar25 />
      <Bar26 />
      <Bar27 />
      <Bar28 />
      <Bar29 />
      <Bar30 />
      <Bar31 />
      <Bar32 />
      <Bar33 />
      <Bar34 />
      <Bar35 />
      <Bar36 />
      <Bar37 />
      <Bar38 />
      <Bar39 />
      <Bar40 />
      <Bar41 />
      <Bar42 />
      <Bar43 />
      <Bar44 />
      <Bar45 />
      <Bar46 />
      <Bar47 />
      <Bar48 />
      <Bar49 />
      <Bar50 />
      <Bar51 />
      <Bar52 />
      <Bar53 />
    </div>
  );
}

function Shape() {
  return (
    <div className="absolute inset-[0_-24px_0_0] overflow-clip" data-name="Shape">
      <BarGroup />
    </div>
  );
}

function Graphic() {
  return (
    <div className="absolute inset-[156px_36px_60px_36px] opacity-25 overflow-clip" data-name="Graphic">
      <Shape />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-center justify-between leading-[16px] left-[36px] opacity-90 text-[12px] text-black text-center top-[668px] w-[596px] whitespace-nowrap">
      <p className="opacity-80 relative shrink-0">11 AUG</p>
      <p className="opacity-80 relative shrink-0">12 AUG</p>
      <p className="opacity-80 relative shrink-0">13 AUG</p>
      <p className="opacity-80 relative shrink-0">14 AUG</p>
      <p className="opacity-80 relative shrink-0">15 AUG</p>
      <p className="opacity-80 relative shrink-0">16 AUG</p>
      <p className="opacity-80 relative shrink-0">17 AUG</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[12px] text-[rgba(40,15,75,0.6)]">Total Value Locked</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-end leading-[normal] relative shrink-0 text-[#280f4b] w-full">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[40px] tracking-[1.1px] w-full">$585,937</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[12px] w-full">12 November 2025</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-end justify-center left-[36px] top-[32px] w-[596px]">
      <Frame5 />
    </div>
  );
}

function Graph() {
  return (
    <div className="absolute bg-[#f4f0ff] h-[716px] left-[56px] rounded-[16px] top-[148px] w-[668px]" data-name="Graph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f4f0ff] h-[716px] left-1/2 rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.12),-4px_-4px_10px_0px_white] top-1/2 w-[668px]" />
      <div className="-translate-x-1/2 absolute h-[692px] left-1/2 pointer-events-none rounded-[12px] top-[12px] w-[644px]">
        <div aria-hidden="true" className="absolute bg-[#f4f0ff] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_10px_10px_18px_0px_rgba(127,86,217,0.12),inset_-8px_-8px_10px_0px_rgba(255,255,255,0.8)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.64)] border-solid inset-0 rounded-[12px]" />
      </div>
      <Graphic />
      <Frame />
      <Frame3 />
    </div>
  );
}

function ClaudeColor1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="claude-color 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_46_444)" id="claude-color 1">
          <path d={svgPaths.p188dbd00} fill="var(--fill-0, #D97757)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_46_444">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="decoration-solid font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dd8164] text-[14px] underline whitespace-nowrap">Get Access</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-up-right">
        <div className="absolute inset-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-9.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96667 7.96667">
              <path d={svgPaths.pfc25100} id="Icon" stroke="var(--stroke-0, #DD8164)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ClaudeColor1 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4b1f11] text-[14px] whitespace-nowrap">Lucidly Subscriptions is live. Stake $3,000 and get Claude Pro for life.</p>
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#f9ebe6] content-stretch flex items-center justify-between left-0 px-[56px] py-[12px] top-[72px] w-[1512px]">
      <Frame20 />
      <div className="opacity-50 overflow-clip relative shrink-0 size-[20px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p14b78080} id="Icon" stroke="var(--stroke-0, #4B1F11)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[40px] left-0 pointer-events-none rounded-[99px] top-0 w-[620px]">
      <div aria-hidden="true" className="absolute bg-[#f4f0ff] inset-0 rounded-[99px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_4px_0px_white]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Yields</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Bridge</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Portfolio</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Points</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Subscriptions</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Docs</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0">
      <Frame11 />
      <Frame12 />
      <Frame14 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f4f0ff] h-[40px] relative shrink-0 w-[620px]">
      <Frame9 />
      <Frame13 />
    </div>
  );
}

function Fi1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fi_2099058">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_89)" id="fi_2099058">
          <path d={svgPaths.p1f56fc80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2febac00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_89">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Settings() {
  return (
    <div className="bg-[#f4f0ff] content-stretch flex items-center justify-center p-[14px] relative rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]" data-name="Settings">
      <Fi1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[18.75%_31.25%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49978 12.5001">
        <g id="Group">
          <path d={svgPaths.p1cc7a6c0} fill="var(--fill-0, #D9D9D9)" id="Vector" />
          <path d={svgPaths.p3b805a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p14a24d00} fill="var(--fill-0, #CACACA)" id="Vector_3" />
          <path d={svgPaths.p29833670} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p38dd7100} fill="var(--fill-0, #848484)" id="Vector_5" />
          <path d={svgPaths.pc383540} fill="var(--fill-0, #D9D9D9)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function EthereumLogo() {
  return (
    <div className="bg-[#526492] overflow-clip relative rounded-[1209.316px] shrink-0 size-[20px]" data-name="Ethereum Logo">
      <div className="absolute bg-white blur-[60.526px] inset-[39.5%_39.01%_39%_39.49%] rounded-[1209.316px]" />
      <Group1 />
    </div>
  );
}

function Chain() {
  return (
    <div className="bg-[#f4f0ff] content-stretch flex items-center justify-center p-[14px] relative rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]" data-name="Chain">
      <EthereumLogo />
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-[rgba(127,86,217,0.15)] content-stretch flex h-[40px] items-center px-[16px] py-[14px] relative rounded-[99px] shadow-[-4px_-4px_5px_0px_white,4px_4px_5px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Profile">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#7f56d9] text-[16px] whitespace-nowrap">Connect Wallet</p>
    </div>
  );
}

function Items() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[547px] top-[16px]" data-name="Items">
      <Frame10 />
      <Settings />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[rgba(0,0,0,0.1)] h-full relative shrink-0 w-px" data-name="Divider" />
      </div>
      <Chain />
      <Profile />
    </div>
  );
}

function Logo() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[11.469px] h-[22px] items-center justify-center left-[56px] top-1/2 w-[118px]" data-name="Logo">
      <div className="relative shrink-0 size-[22.938px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9375 22.9375">
          <path d={svgPaths.p2bdb6900} fill="var(--fill-0, black)" id="Subtract" />
        </svg>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[17.203px] text-black tracking-[1.7203px] uppercase whitespace-nowrap">LucidlY</p>
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="absolute bg-[#f4f0ff] h-[72px] left-0 top-0 w-[1512px]" data-name="Top Navigation">
      <Items />
      <Logo />
    </div>
  );
}

export default function HomePageClaudeStakeBanner() {
  return (
    <div className="bg-[#f4f0ff] relative size-full" data-name="Home Page - ClaudeStake Banner">
      <Frame8 />
      <Graph />
      <Frame19 />
      <TopNavigation />
    </div>
  );
}