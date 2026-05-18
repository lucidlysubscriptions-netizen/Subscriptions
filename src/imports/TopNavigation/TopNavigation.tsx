import svgPaths from "./svg-5e4j3wqp6m";

function Frame() {
  return (
    <div className="absolute h-[40px] left-0 pointer-events-none rounded-[99px] top-0 w-[467px]">
      <div aria-hidden="true" className="absolute bg-[#f4f0ff] inset-0 rounded-[99px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_4px_0px_white]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Yields</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Bridge</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Portfolio</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Points</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Docs</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0">
      <Frame2 />
      <Frame3 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f4f0ff] h-[40px] relative shrink-0 w-[467px]">
      <Frame />
      <Frame4 />
    </div>
  );
}

function Fi() {
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
      <Fi />
    </div>
  );
}

function Group() {
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
      <Group />
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
    <div className="absolute content-stretch flex gap-[16px] items-center left-[700px] top-[16px]" data-name="Items">
      <Frame1 />
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

export default function TopNavigation() {
  return (
    <div className="bg-[#f4f0ff] relative size-full" data-name="Top Navigation">
      <Items />
      <Logo />
    </div>
  );
}