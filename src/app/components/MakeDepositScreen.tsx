import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import svgPaths from "../../imports/SubscriptionsMakeDeposit/svg-3my4838lxi";
import imgBaseLogo from "figma:asset/b83546ad9ee55429519b62c573824caf04416ea4.png";
import imgGift from "figma:asset/db9d7fe6198ad58b36356dbb9257eb48725de2d5.png";
import { api } from "../lib/api";
import { connectWallet } from "../lib/wallet";

/* ─────────────── Top Navigation ─────────────── */

function NavEthLogo() {
  return (
    <div className="bg-[#526492] overflow-clip relative rounded-full shrink-0 size-[20px]">
      <div className="absolute bg-white blur-[60.526px] inset-[39.5%_39.01%_39%_39.49%] rounded-full" />
      <div className="absolute inset-[18.75%_31.25%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49978 12.5001">
          <path d={svgPaths.p1cc7a6c0} fill="#D9D9D9" />
          <path d={svgPaths.p3b805a00} fill="white" />
          <path d={svgPaths.p14a24d00} fill="#CACACA" />
          <path d={svgPaths.p29833670} fill="white" />
          <path d={svgPaths.p38dd7100} fill="#848484" />
          <path d={svgPaths.pc383540} fill="#D9D9D9" />
        </svg>
      </div>
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="absolute bg-[#f4f0ff] h-[72px] left-0 top-0 w-[1512px] z-10">
      {/* Logo */}
      <div className="absolute flex gap-[11.469px] items-center left-[56px] top-1/2 -translate-y-1/2">
        <div className="relative shrink-0 size-[22.938px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9375 22.9375">
            <path d={svgPaths.p2bdb6900} fill="black" />
          </svg>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold not-italic text-[17.203px] text-black tracking-[1.7203px] uppercase whitespace-nowrap">LucidlY</p>
      </div>

      {/* Nav items */}
      <div className="absolute flex gap-[16px] items-center left-[547px] top-[16px]">
        {/* Pill nav */}
        <div className="bg-[#f4f0ff] h-[40px] relative shrink-0 w-[620px]">
          <div className="absolute h-[40px] left-0 pointer-events-none rounded-[99px] top-0 w-[620px]">
            <div className="absolute bg-[#f4f0ff] inset-0 rounded-[99px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_4px_0px_white]" />
          </div>
          <div className="absolute flex items-center left-0 top-0">
            {["Yields", "Bridge", "Portfolio", "Points"].map((t) => (
              <div key={t} className="flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] rounded-[99px] shrink-0">
                <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] text-[16px] text-black whitespace-nowrap">{t}</p>
              </div>
            ))}
            <div className="bg-[#f8f5ff] flex h-[40px] items-center justify-center px-[20px] py-[3px] rounded-[99px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.08),-4px_-4px_8px_0px_white] shrink-0">
              <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] text-[16px] text-black whitespace-nowrap">Subscriptions</p>
            </div>
            <div className="flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] rounded-[99px] shrink-0">
              <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] text-[16px] text-black whitespace-nowrap">Docs</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-[#f4f0ff] flex items-center justify-center p-[14px] rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip_md_settings)">
                <path d={svgPaths.p1f56fc80} fill="black" />
                <path d={svgPaths.p2febac00} fill="black" />
              </g>
              <defs>
                <clipPath id="clip_md_settings"><rect fill="white" height="20" width="20" /></clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[rgba(0,0,0,0.1)] h-full w-px" />
        </div>

        {/* Chain */}
        <div className="bg-[#f4f0ff] flex items-center justify-center p-[14px] rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]">
          <NavEthLogo />
        </div>

        {/* Connect Wallet */}
        <div className="bg-[rgba(127,86,217,0.15)] flex h-[40px] items-center px-[16px] py-[14px] rounded-[99px] shadow-[-4px_-4px_5px_0px_white,4px_4px_5px_0px_rgba(0,0,0,0.04)] shrink-0">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] text-[#7f56d9] text-[16px] whitespace-nowrap">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── ClaudeStake card (left) ─────────────── */

function ClaudeStakeCard({ planLabel }: { planLabel: string }) {
  return (
    <div className="absolute left-[270px] top-[222px] h-[289px] w-[356px]">
      {/* Outer shadow */}
      <div className="absolute inset-0 bg-[#f4f0ff] rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.12),-4px_-4px_10px_0px_white]" />
      {/* Inner white-border card */}
      <div className="absolute bg-[#f4f0ff] border-2 border-[rgba(255,255,255,0.64)] border-solid h-[263px] left-[12px] rounded-[12px] top-[13px] w-[332px]" />

      {/* Gift image — centered in upper portion */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[calc(50%+32px)] w-[284px] h-[161px] overflow-clip rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.15),-4px_-4px_10px_0px_white]">
        <img
          alt="Gift"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgGift}
        />
      </div>

      {/* ClaudeStake label */}
      <div className="absolute left-1/2 -translate-x-[calc(50%+27px)] top-[213px] flex gap-[16px] items-center">
        {/* Claude starburst icon */}
        <div className="relative shrink-0 size-[40px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <g clipPath="url(#clip_claude_md)" opacity="0.9">
              <rect fill="#F4F0FF" height="40" width="40" />
              <path d={svgPaths.p11889580} fill="#D97757" />
            </g>
            <defs>
              <clipPath id="clip_claude_md"><rect fill="white" height="40" width="40" /></clipPath>
            </defs>
          </svg>
        </div>
        {/* Text */}
        <div className="flex flex-col gap-[2px] h-[44px] items-start justify-center">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] text-[#df8328] text-[20px] whitespace-nowrap">ClaudeStake</p>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[12px] text-black whitespace-nowrap">
            {planLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── USDC coin icon ─────────────── */

function UsdcIcon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[26px] top-1/2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g clipPath="url(#clip_usdc_md)">
          <path d={svgPaths.pc048600} fill="#2775CA" />
          <path d={svgPaths.p3248a900} fill="white" />
          <path d={svgPaths.p31f33900} fill="white" />
        </g>
        <defs>
          <clipPath id="clip_usdc_md"><rect fill="white" height="26" width="26" /></clipPath>
        </defs>
      </svg>
    </div>
  );
}

/* ─────────────── Calendar / wallet icon ─────────────── */

function CalendarIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[16.44%_12.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10.7383">
          <path d={svgPaths.p1e18d9b0} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p22e08880} fill="black" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────── Deposit widget ─────────────── */

function DepositWidget({ amount }: { amount: string }) {
  return (
    <div className="h-[189px] relative rounded-[16px] shrink-0 w-[400px]">
      {/* Outer card shadow */}
      <div className="absolute bg-[#f4f0ff] h-[189px] left-0 rounded-[16px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.1),-4px_-4px_12px_0px_white] top-0 w-[400px]" />

      {/* "Deposit assets from" header row */}
      <div className="absolute flex items-center justify-between left-[24px] top-[12px] w-[352px]">
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[12px] text-black whitespace-nowrap">Deposit USDC from</p>
        {/* Base pill */}
        <div className="bg-[#f4f0ff] flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[99px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-2px_-2px_4px_0px_white]">
          <div className="flex gap-[8px] items-center">
            <div className="relative shrink-0 size-[16px]">
              <img alt="Base" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBaseLogo} />
            </div>
            <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] text-[12px] text-black whitespace-nowrap">Base</p>
          </div>
          {/* Chevron */}
          <div className="h-[12px] overflow-clip relative w-[12px]">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
              <div className="absolute inset-[-11.11%_-5.55%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66917 3.66667">
                  <path d={svgPaths.pd122080} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="0.666667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inner inset (neumorphic pressed area) */}
      <div className="absolute h-[125px] left-[12px] pointer-events-none rounded-[16px] top-[52px] w-[376px]">
        <div className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_6px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_6px_0px_white]" />
      </div>

      {/* Amount */}
      <p className="absolute font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[normal] left-[36px] text-[24px] text-black top-[82px] w-[101px]">{amount}</p>

      {/* Balance row */}
      <div className="absolute flex gap-[4px] items-center left-[36px] top-[137px]">
        <CalendarIcon />
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-black whitespace-nowrap">115,447.00</p>
      </div>

      {/* Slider track arc + USDC circle */}
      {/* Semi-circle arc */}
      <div className="absolute left-[288px] size-[76px] top-[75px]">
        <div className="absolute inset-[-0.66%_-1.32%_12.67%_-1.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 66.8701">
            <g filter="url(#filter_arc_md)">
              <path d={svgPaths.p1d2ce740} shapeRendering="crispEdges" stroke="#7F56D9" strokeOpacity="0.1" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="66.8701" id="filter_arc_md" width="78" x="-4.51728e-08" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.337255 0 0 0 0 0.85098 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_arc" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_arc" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.337255 0 0 0 0 0.85098 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect2_innerShadow_arc" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Left half-fill */}
      <div className="absolute left-[288px] size-[76px] top-[75px]">
        <div className="absolute inset-[-1.96%_46.71%_11.87%_-1.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 68.4642">
            <g filter="url(#filter_half_md)">
              <path d={svgPaths.p19066d00} fill="#F4F0FF" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68.4642" id="filter_half_md" width="42" x="-4.51728e-08" y="-2.6077e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-0.5" dy="-0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_half" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="0.5" dy="0.5" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.337255 0 0 0 0 0.85098 0 0 0 0.15 0" />
                <feBlend in2="effect1_dropShadow_half" mode="normal" result="effect2_dropShadow_half" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_half" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Dot at 0% */}
      <div className="absolute left-[322px] size-[8px] top-[72px]">
        <div className="absolute inset-[-75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g filter="url(#filter_dot_md)">
              <circle cx="10" cy="10" fill="#F4F0FF" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter_dot_md" width="20" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.337255 0 0 0 0 0.85098 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_dot" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-2" dy="-2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="effect1_dropShadow_dot" mode="normal" result="effect2_dropShadow_dot" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_dot" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* USDC circle */}
      <div className="absolute left-[301px] size-[50px] top-[88px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f4f0ff] left-1/2 rounded-full shadow-[1.418px_1.418px_4.253px_0px_rgba(127,86,217,0.12),-1.418px_-1.418px_3.544px_0px_white] size-[50px] top-1/2" />
        <UsdcIcon />
      </div>

      {/* 0% label */}
      <div className="absolute flex flex-col items-center left-[292px] top-[147px] w-[11px]">
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[8px] text-black w-full">0%</p>
      </div>
      {/* MAX label */}
      <div className="absolute flex flex-col items-center left-[346px] top-[147px] w-[17px]">
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[8px] text-black w-full">MAX</p>
      </div>
    </div>
  );
}

/* ─────────────── Action button (3 states) ────���────────── */

type BtnState = "wallet" | "success" | "fail";

function ActionButton({ state, onClick }: { state: BtnState; onClick: () => void }) {
  const fills: Record<BtnState, string> = {
    wallet:  "#DD8164",
    success: "#22C55E",
    fail:    "#EF4444",
  };

  const labels: Record<BtnState, string> = {
    wallet:  "Connect Wallet",
    success: "Deposit Successful",
    fail:    "Deposit Failed",
  };

  const fill = fills[state];

  return (
    <div className="h-[56px] relative shrink-0 w-[400px]">
      <button className="absolute inset-0 w-full cursor-pointer" onClick={onClick}>
        {/* Background pill */}
        <div className="absolute inset-[-14.29%_-3%_-21.43%_-2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 420 76">
            <g filter="url(#filter_action_btn)">
              <path d={svgPaths.p1fcb0d80} fill={fill} />
              <path d={svgPaths.p36bc2a00} stroke="#F4F0FF" strokeWidth="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76" id="filter_action_btn" width="420" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-4" dy="-4" /><feGaussianBlur stdDeviation="2" /><feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="e1" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" dy="4" /><feGaussianBlur stdDeviation="4" /><feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.337255 0 0 0 0 0.85098 0 0 0 0.15 0" />
                <feBlend in2="e1" mode="normal" result="e2" />
                <feBlend in="SourceGraphic" in2="e2" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Label + icon */}
        <span className="absolute inset-0 flex gap-[8px] items-center justify-center">
          {/* Icon */}
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip_action_icon)">
                {state === "wallet" && (
                  <>
                    <path d={svgPaths.p324b1280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
                    <path d={svgPaths.p6e14750} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                  </>
                )}
                {state === "success" && (
                  <>
                    <path d="M19 3L14.875 7L13 5.18182" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p6e14750} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                  </>
                )}
                {state === "fail" && (
                  <>
                    <path d="M18.5 3L13.5 8M13.5 3L18.5 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p6e14750} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                  </>
                )}
              </g>
              <defs>
                <clipPath id="clip_action_icon"><rect fill="white" height="20" width="20" /></clipPath>
              </defs>
            </svg>
          </div>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] text-[16px] text-white whitespace-nowrap">
            {labels[state]}
          </span>
        </span>
      </button>
    </div>
  );
}

/* ─────────────── Transaction hash row (success only) ─────────────── */

function TxHashRow() {
  return (
    <div className="flex items-center justify-between w-[400px]">
      <div className="flex gap-[6px] items-center">
        {/* Green check-circle */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="#22C55E" strokeWidth="1.5" />
          <path d="M5 8.5L7 10.5L11 6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal text-[12px] text-[#22C55E]">Transaction Hash</p>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal text-[12px] text-[#22C55E]">#012x23...232</p>
    </div>
  );
}

/* ─────────────── Right panel — deposit + action button ─────────────── */

function RightPanel({ onNavigate, amount }: { onNavigate: (amount: string) => void; amount: string }) {
  const [btnState, setBtnState] = useState<BtnState>("wallet");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (btnState === "success") {
      const t = setTimeout(() => onNavigate(amount), 1000);
      return () => clearTimeout(t);
    }
  }, [btnState, amount, onNavigate]);

  const handleClick = async () => {
    if (submitting) return;

    if (btnState === "wallet") {
      setSubmitting(true);
      setError(null);
      try {
        const wallet = connectWallet();
        // "3,000.00" -> 3000
        const numericAmount = Math.round(parseFloat(amount.replace(/,/g, "")));
        const deposit = await api.createDeposit(wallet, numericAmount);
        setBtnState(deposit.status === "success" ? "success" : "fail");
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Deposit failed");
        setBtnState("fail");
      } finally {
        setSubmitting(false);
      }
    } else if (btnState === "fail") {
      // "Try Again"
      setBtnState("wallet");
      setError(null);
    }
    // success state is non-interactive (auto-redirects)
  };

  return (
    <div className="absolute h-[828px] left-[756px] overflow-clip top-[72px] w-[756px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-[32px] items-start left-1/2 top-[calc(50%-125px)] w-[400px]">
        <DepositWidget amount={amount} />
        <div className="flex flex-col gap-[12px] items-start w-full">
          <ActionButton state={btnState} onClick={handleClick} />
          {btnState === "success" && <TxHashRow />}
          {error && (
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] text-[#d92d20] text-[12px]">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Root ─────────────── */

// Claude's real monthly subscription prices, by plan.
const CLAUDE_PRICES: Record<string, number> = { pro: 20, max5: 100, max20: 200 };

export default function MakeDepositScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const amount: string = (location.state as { amount?: string })?.amount ?? "3,000.00";

  // The plan label shown on the gift card, e.g. "Claude Max 5x · $100 / mo".
  const [planLabel, setPlanLabel] = useState("Claude Pro · $20 / mo");

  useEffect(() => {
    api
      .getUser(connectWallet())
      .then(({ subscription }) => {
        if (subscription) {
          const price = CLAUDE_PRICES[subscription.plan.slug] ?? 20;
          setPlanLabel(`Claude ${subscription.plan.name} · $${price} / mo`);
        }
      })
      .catch(() => {
        /* keep the default label if the backend is unavailable */
      });
  }, []);

  return (
    <div className="bg-[#f4f0ff] relative size-full">
      <TopNavigation />
      <ClaudeStakeCard planLabel={planLabel} />
      <RightPanel onNavigate={(amt) => navigate("/dashboard", { state: { amount: amt } })} amount={amount} />
    </div>
  );
}