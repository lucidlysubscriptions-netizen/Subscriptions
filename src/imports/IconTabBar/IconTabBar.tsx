import svgPaths from "./svg-amkcvusfpr";

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

function Frame() {
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

export default function IconTabBar() {
  return (
    <div className="content-stretch flex gap-[24px] isolate items-center relative size-full" data-name="Icon Tab Bar">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
      <div className="absolute drop-shadow-[0px_2px_1px_rgba(34,53,72,0.05)] inset-0 z-[1]" data-name="Inner Shadow" />
    </div>
  );
}