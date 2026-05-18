import svgPaths from "./svg-4w4ldi6ogc";

function ClaudeColor() {
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

function Frame3() {
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ClaudeColor />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4b1f11] text-[14px] whitespace-nowrap">Lucidly Subscriptions is live. Stake $3,000 and get Claude Pro for life.</p>
      <Frame2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f9ebe6] content-stretch flex items-center justify-between px-[56px] py-[12px] relative size-full">
      <Frame1 />
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