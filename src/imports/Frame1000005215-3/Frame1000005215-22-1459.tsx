import svgPaths from "./svg-8dznfiiknj";

function Fi() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[100px] top-[88px]" data-name="fi_14090371">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.9995 99.9995">
        <g id="å¾å±_x0020_1">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p346a9400} fill="var(--fill-0, #00BA00)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center left-1/2 text-black text-center top-[222px] w-[446px]">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[24px] w-full">Sent to user@gmail.com</p>
      <div className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] opacity-70 relative shrink-0 text-[16px] w-full">
        <p className="leading-[22px] mb-0">You will receive Claude Pro Subscription on your email.</p>
        <p className="leading-[22px]">Don’t forget to check your spam folder.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[88px]">
      <Fi />
      <Frame1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f4f0ff] h-[368px] left-0 rounded-[24px] top-0 w-[544px]" />
      <div className="absolute left-[492px] opacity-50 overflow-clip size-[20px] top-[32px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p14b78080} id="Icon" stroke="var(--stroke-0, #4B1F11)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Group />
    </div>
  );
}