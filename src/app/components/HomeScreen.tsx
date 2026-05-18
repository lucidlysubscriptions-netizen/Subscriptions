import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/HomePageClaudeStakeBanner/svg-lkrekl03rg";
import cardSvgPaths from "../../imports/Usd-1/svg-oevj0yivv2";
import tabSvgPaths from "../../imports/IconTabBar/svg-amkcvusfpr";
import bannerSvgPaths from "../../imports/Frame1000005197/svg-4w4ldi6ogc";
import navSvgPaths from "../../imports/TopNavigation/svg-5e4j3wqp6m";

/* ─── Top Nav ─── */
function NavPillBackground() {
  return (
    <div className="absolute h-[40px] left-0 pointer-events-none rounded-[99px] top-0 w-[467px]">
      <div aria-hidden="true" className="absolute bg-[#f4f0ff] inset-0 rounded-[99px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_4px_0px_white]" />
    </div>
  );
}

function NavPillItemYields() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Yields</p>
    </div>
  );
}

function NavPillItemBridge() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Bridge</p>
    </div>
  );
}

function NavPillItemPortfolio() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Portfolio</p>
    </div>
  );
}

function NavPillItemPoints() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Points</p>
    </div>
  );
}

function NavPillItemDocs() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] relative rounded-[99px] shrink-0">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Docs</p>
    </div>
  );
}

function NavPillItems() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0">
      <NavPillItemYields />
      <NavPillItemBridge />
      <NavPillItemPortfolio />
      <NavPillItemPoints />
      <NavPillItemDocs />
    </div>
  );
}

function NavPill() {
  return (
    <div className="bg-[#f4f0ff] h-[40px] relative shrink-0 w-[467px]">
      <NavPillBackground />
      <NavPillItems />
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fi_2099058">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_89)" id="fi_2099058">
          <path d={navSvgPaths.p1f56fc80} fill="var(--fill-0, black)" id="Vector" />
          <path d={navSvgPaths.p2febac00} fill="var(--fill-0, black)" id="Vector_2" />
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
      <SettingsIcon />
    </div>
  );
}

function EthereumGroup() {
  return (
    <div className="absolute inset-[18.75%_31.25%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49978 12.5001">
        <g id="Group">
          <path d={navSvgPaths.p1cc7a6c0} fill="var(--fill-0, #D9D9D9)" id="Vector" />
          <path d={navSvgPaths.p3b805a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={navSvgPaths.p14a24d00} fill="var(--fill-0, #CACACA)" id="Vector_3" />
          <path d={navSvgPaths.p29833670} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={navSvgPaths.p38dd7100} fill="var(--fill-0, #848484)" id="Vector_5" />
          <path d={navSvgPaths.pc383540} fill="var(--fill-0, #D9D9D9)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function EthereumLogo() {
  return (
    <div className="bg-[#526492] overflow-clip relative rounded-[1209.316px] shrink-0 size-[20px]" data-name="Ethereum Logo">
      <div className="absolute bg-white blur-[60.526px] inset-[39.5%_39.01%_39%_39.49%] rounded-[1209.316px]" />
      <EthereumGroup />
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

function NavItems() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[700px] top-[16px]" data-name="Items">
      <NavPill />
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
          <path d={navSvgPaths.p2bdb6900} fill="var(--fill-0, black)" id="Subtract" />
        </svg>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[17.203px] text-black tracking-[1.7203px] uppercase whitespace-nowrap">LucidlY</p>
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="absolute bg-[#f4f0ff] h-[72px] left-0 top-0 w-[1512px]" data-name="Top Navigation">
      <NavItems />
      <Logo />
    </div>
  );
}

/* ─── Announcement Banner ─── */
function BannerClaudeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="claude-color 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_46_444)" id="claude-color 1">
          <path d={bannerSvgPaths.p188dbd00} fill="var(--fill-0, #D97757)" id="Vector" />
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

function BannerGetAccessFrame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="decoration-solid font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dd8164] text-[14px] underline whitespace-nowrap">Get Access</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-up-right">
        <div className="absolute inset-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-9.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96667 7.96667">
              <path d={bannerSvgPaths.pfc25100} id="Icon" stroke="var(--stroke-0, #DD8164)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerGetAccessFrame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <BannerGetAccessFrame3 />
    </div>
  );
}

function BannerContentFrame1({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <BannerClaudeIcon />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4b1f11] text-[14px] whitespace-nowrap">Lucidly Subscriptions is live. Stake $3,000 and get Claude Pro for life.</p>
      <button onClick={onClick} className="cursor-pointer bg-transparent border-none p-0">
        <BannerGetAccessFrame2 />
      </button>
    </div>
  );
}

function AnnouncementBanner({ onDismiss }: { onDismiss: () => void }) {
  const navigate = useNavigate();
  return (
    <div className="absolute bg-[#f9ebe6] content-stretch flex items-center justify-between left-0 px-[56px] py-[12px] top-[72px] w-[1512px]">
      <BannerContentFrame1 onClick={() => navigate("/choose-plan")} />
      <button onClick={onDismiss} className="opacity-50 overflow-clip relative shrink-0 size-[20px] cursor-pointer bg-transparent border-none p-0" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={bannerSvgPaths.p14b78080} id="Icon" stroke="var(--stroke-0, #4B1F11)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

/* ─── Left Panel: Graph ─── */
function BarGroup() {
  const heights = [100, 100, 100, 100, 100, 100, 100, 100, 378, 319, 319, 419, 319, 319, 334, 334, 219, 387, 378, 425, 425, 413, 244, 244, 319, 169, 419, 419, 375, 354, 354, 419, 378, 257, 366, 500, 225, 225, 253, 253, 213, 260, 260, 249, 249, 369, 369, 433, 449, 470, 481, 487, 492, 492];
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[500px] items-end left-0 top-0 w-[620px]">
      {heights.map((h, i) => (
        <div key={i} className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[500px] items-start justify-end min-w-px relative">
          <div className="bg-[#7f56d9] relative rounded-[2px] shrink-0 w-[10px]" style={{ height: `${h}px` }} />
        </div>
      ))}
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
      {/* Bar chart */}
      <div className="absolute inset-[156px_36px_60px_36px] opacity-25 overflow-clip">
        <div className="absolute inset-[0_-24px_0_0] overflow-clip">
          <BarGroup />
        </div>
      </div>
      {/* X-axis labels */}
      <div className="absolute content-stretch flex font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-center justify-between leading-[16px] left-[36px] opacity-90 text-[12px] text-black text-center top-[668px] w-[596px] whitespace-nowrap">
        {["11 AUG", "12 AUG", "13 AUG", "14 AUG", "15 AUG", "16 AUG", "17 AUG"].map((l) => (
          <p key={l} className="opacity-80 relative shrink-0">{l}</p>
        ))}
      </div>
      {/* Header */}
      <div className="absolute content-stretch flex flex-col items-end justify-center left-[36px] top-[32px] w-[596px]">
        <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
          <div className="content-stretch flex items-end relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[12px] text-[rgba(40,15,75,0.6)]">Total Value Locked</p>
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-end leading-[normal] relative shrink-0 text-[#280f4b] w-full">
            <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[40px] tracking-[1.1px] w-full">$585,937</p>
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[12px] w-full">12 November 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Right Panel: Tabs + Note + Card ─── */
function TabTopYieldsIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Top">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Top" opacity="0.6">
          <path d={tabSvgPaths.p13dbab40} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabTopYieldsPadding() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <TabTopYieldsIcon />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Top Yields</p>
      </div>
    </div>
  );
}

function TabTopYields() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Third Tab">
      <TabTopYieldsPadding />
    </div>
  );
}

function TabFlagshipIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flagship">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Flagship" opacity="0.6">
          <path d={tabSvgPaths.p23903b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabFlagshipPadding() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <TabFlagshipIcon />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Flagship</p>
      </div>
    </div>
  );
}

function TabFlagship() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Forth Tab">
      <TabFlagshipPadding />
    </div>
  );
}

function TabDeltaIconGroup() {
  return (
    <div className="absolute inset-[11.11%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5556 15.5556">
        <g id="Group">
          <g id="Vector">
            <path d={tabSvgPaths.p2906c380} fill="var(--fill-0, black)" />
            <path d={tabSvgPaths.pc37da00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TabDeltaIcon() {
  return (
    <div className="opacity-60 overflow-clip relative shrink-0 size-[20px]" data-name="Delta">
      <TabDeltaIconGroup />
    </div>
  );
}

function TabDeltaPadding() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <TabDeltaIcon />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Delta neutral</p>
      </div>
    </div>
  );
}

function TabDelta() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Third Tab">
      <TabDeltaPadding />
    </div>
  );
}

function TabLeverageIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Loop">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Loop" opacity="0.6">
          <path d={tabSvgPaths.p1b8c1a00} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabLeveragePadding() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[4px] relative shrink-0" data-name="Padding">
      <TabLeverageIcon />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Leverage Looping</p>
      </div>
    </div>
  );
}

function TabLeverage() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Third Tab">
      <TabLeveragePadding />
    </div>
  );
}

function TabSubscriptionsPadding() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center mb-[-3px] px-[4px] relative shrink-0" data-name="Padding">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="refresh-cw-05">
        <div className="absolute inset-[14.58%_14.56%_14.58%_14.55%]" data-name="Icon">
          <div className="absolute inset-[-5.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6781 15.6696">
              <path d={tabSvgPaths.p128c1d00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function TabSubscriptions() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="First Tab">
      <TabSubscriptionsPadding />
      <div className="bg-[#7f56d9] h-[3px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="Selection Bar" />
    </div>
  );
}

function IconTabBarFrame() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-[662px] z-[2]">
      <TabTopYields />
      <TabFlagship />
      <TabDelta />
      <TabLeverage />
      <TabSubscriptions />
    </div>
  );
}

function IconTabBar() {
  return (
    <div className="absolute content-stretch flex gap-[24px] isolate items-center left-[32px] top-[76px]" data-name="Icon Tab Bar">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <IconTabBarFrame />
      <div className="absolute drop-shadow-[0px_2px_1px_rgba(34,53,72,0.05)] inset-0 z-[1]" data-name="Inner Shadow" />
    </div>
  );
}

function NoteBanner() {
  return (
    <div className="absolute h-[42px] left-[32px] overflow-clip rounded-[12px] shadow-[4px_4px_4px_0px_rgba(127,86,217,0.15),-4px_-4px_4px_0px_white] top-[144px] w-[668px]">
      <div className="absolute bg-[#f4f0ff] h-[42px] left-0 rounded-[12px] top-0 w-[668px]" />
      {/* Fire emoji icon */}
      <div className="absolute right-[24px] size-[24px] top-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_note_fire)">
            <path d={svgPaths.p1dd20d70} fill="var(--fill-0, #FF6536)" />
            <path d={svgPaths.p2639c780} fill="var(--fill-0, #FF421D)" />
            <path d={svgPaths.p3070e300} fill="var(--fill-0, #FBBF00)" />
            <path d={svgPaths.p3685a700} fill="var(--fill-0, #FFA900)" />
          </g>
          <defs>
            <clipPath id="clip0_note_fire">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[calc(50%-324px)] not-italic text-[12px] text-black top-[12px] tracking-[0.15px] w-[585px]">
        <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] leading-[18px]">Note: </span>
        <span className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px]">Already pay for Claude? Already park stables? Now your stables pay your Claude.</span>
      </p>
    </div>
  );
}

/* ─── ClaudeStake Card ─── */
function StakeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={cardSvgPaths.p324b1280} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
          <path d={cardSvgPaths.p6e14750} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function CardButton() {
  return (
    <div className="absolute contents left-[24px] top-[184px]">
      <div className="absolute h-[40px] left-[24px] top-[184px] w-[270px]">
        <div className="absolute inset-[-20%_-3.7%_-25%_-2.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 58">
            <g filter="url(#filter0_dd_1_111)" id="Rectangle 2">
              <path d={cardSvgPaths.p140c080} fill="var(--fill-0, #DD8164)" />
              <path d={cardSvgPaths.p2c2ff180} stroke="var(--stroke-0, #F4F0FF)" strokeWidth="4" />
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%-0.5px)] top-[calc(50%+82px)]">
        <StakeIcon />
        <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Stake Now</p>
      </div>
    </div>
  );
}

function CardClaudeIcon() {
  return (
    <div className="absolute left-[24px] size-[56px] top-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g clipPath="url(#clip0_1_86)" id="claude-color 1">
          <path d={cardSvgPaths.p152f0100} fill="var(--fill-0, #D97757)" />
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

function CardLifetimeAccessBadge() {
  return (
    <div className="absolute contents left-[195px] top-[24px]">
      <div
        className="absolute h-[24px] left-[126px] top-[24px] w-[168px] rounded-[12px] border-4 border-[#f4f0ff] bg-[#f4f0ff]"
        style={{
          filter:
            "drop-shadow(4px 4px 6px rgba(0,0,0,0.10)) drop-shadow(-2px -2px 6px #FFFFFF)",
        }}
      />
      <p className="absolute font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] left-[134px] opacity-80 text-[12px] text-black top-[28px] whitespace-nowrap">Monthly · Withdraw anytime</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute h-[244px] left-0 overflow-clip rounded-[16px] top-0 w-[318px]">
      <p className="absolute font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] left-[24px] text-[#280f4b] text-[20px] top-[100px] w-[119px]">ClaudeStake</p>
      <p className="absolute font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] left-[24px] text-[12px] text-[rgba(0,0,0,0.6)] top-[128px] w-[270px]">The AI you already pay $20/mo for.</p>
      <CardClaudeIcon />
      <CardLifetimeAccessBadge />
    </div>
  );
}

function ClaudeStakeCard() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="absolute h-[244px] left-[32px] top-[210px] w-[318px] cursor-pointer transition-all duration-300"
      data-name="USD"
      onClick={() => navigate("/choose-plan")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute h-[244px] left-0 pointer-events-none rounded-[16px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[318px]">
        <div aria-hidden="true" className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
        <div
          className="absolute inset-0 rounded-[inherit] transition-shadow duration-300"
          style={{
            boxShadow: hovered
              ? "inset -4px -4px 4px 0px white, inset 4px 4px 4px 0px rgba(0,0,0,0.08)"
              : "inset -4px -4px 4px 0px rgba(0,0,0,0.08), inset 4px 4px 4px 0px white",
          }}
        />
      </div>
      <CardButton />
      <CardContent />
    </div>
  );
}

function RightPanel() {
  return (
    <div className="absolute h-[828px] left-[756px] overflow-clip top-[72px] w-[756px]">
      <IconTabBar />
      <NoteBanner />
      <ClaudeStakeCard />
    </div>
  );
}

/* ─── Root ─── */
export default function HomeScreen() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="bg-[#f4f0ff] relative size-full" data-name="Home Page - ClaudeStake Banner">
      <RightPanel />
      <Graph />
      {bannerVisible && <AnnouncementBanner onDismiss={() => setBannerVisible(false)} />}
      <TopNavigation />
    </div>
  );
}
