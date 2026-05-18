import { useState, useEffect, useCallback, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { api, type Dashboard, type Deposit, type Redemption, type Withdrawal, type ClaimMethod } from "../lib/api";
import { connectWallet } from "../lib/wallet";
import svgPaths from "../../imports/SubscriptionsDashboard/svg-6kjryg1tst";
import svgPathsClaim from "../../imports/Frame1000005215/svg-3st51hxhr5";
import svgPathsEmail from "../../imports/Frame1000005215-1/svg-lgm9948j43";
import svgPathsSuccess from "../../imports/Frame1000005215-3/svg-8dznfiiknj";
import svgPathsWithdraw from "../../imports/Frame1000005215-4-1/svg-087tho4gl5";

/* ─────────────── Top Navigation ─────────────── */

function TopNavigation() {
  return (
    <div className="absolute bg-[#f4f0ff] h-[72px] left-0 top-0 w-[1512px] z-10">
      <div className="-translate-y-1/2 absolute flex gap-[11.469px] h-[22px] items-center justify-center left-[56px] top-1/2 w-[118px]">
        <div className="relative shrink-0 size-[22.938px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9375 22.9375">
            <path d={svgPaths.p2bdb6900} fill="black" />
          </svg>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold not-italic shrink-0 text-[17.203px] text-black tracking-[1.7203px] uppercase whitespace-nowrap">LucidlY</p>
      </div>
      <div className="absolute flex gap-[16px] items-center left-[547px] top-[16px]">
        <div className="bg-[#f4f0ff] h-[40px] relative shrink-0 w-[620px]">
          <div className="absolute h-[40px] left-0 pointer-events-none rounded-[99px] top-0 w-[620px]">
            <div className="absolute bg-[#f4f0ff] inset-0 rounded-[99px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_4px_0px_white]" />
          </div>
          <div className="absolute flex items-center left-0 top-0">
            {["Yields","Bridge","Portfolio","Points"].map((t) => (
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
        <div className="bg-[#f4f0ff] flex items-center justify-center p-[14px] rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip_ds_settings)">
                <path d={svgPaths.p1f56fc80} fill="black" />
                <path d={svgPaths.p2febac00} fill="black" />
              </g>
              <defs><clipPath id="clip_ds_settings"><rect fill="white" height="20" width="20" /></clipPath></defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch"><div className="bg-[rgba(0,0,0,0.1)] h-full w-px" /></div>
        <div className="bg-[#f4f0ff] flex items-center justify-center p-[14px] rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]">
          <div className="bg-[#526492] overflow-clip relative rounded-full shrink-0 size-[20px]">
            <div className="absolute bg-white blur-[60px] inset-[39.5%_39%] rounded-full" />
            <div className="absolute inset-[18.75%_31.25%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49978 12.5001">
                <path d={svgPaths.p1cc7a6c0} fill="#D9D9D9" /><path d={svgPaths.p3b805a00} fill="white" />
                <path d={svgPaths.p14a24d00} fill="#CACACA" /><path d={svgPaths.p29833670} fill="white" />
                <path d={svgPaths.p38dd7100} fill="#848484" /><path d={svgPaths.pc383540} fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(127,86,217,0.15)] flex h-[40px] items-center px-[16px] py-[14px] rounded-[99px] shadow-[-4px_-4px_5px_0px_white,4px_4px_5px_0px_rgba(0,0,0,0.04)] shrink-0">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] text-[#7f56d9] text-[16px] whitespace-nowrap">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Left panel ─────────────── */

// State of this month's gift card claim.
type GiftCardState =
  | { state: "locked"; unlockDays: number; isFirstCard: boolean } // 30-day lock not elapsed — show the countdown
  | { state: "claimable" } // lock elapsed, not yet claimed — show the claim banner
  | { state: "claimed" } // claimed by email this month — nothing to display
  | { state: "preparing" } // requested on dashboard, link not provisioned yet
  | { state: "ready"; link: string }; // dashboard link provisioned — show it

function WithdrawButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[40px] ml-0 mt-0 relative row-1 w-[160px]">
        <div className="absolute inset-[-20%_-6.25%_-25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 58">
            <g filter="url(#filter_wd_btn)">
              <path d={svgPaths.p391f9a80} fill="#D97757" fillOpacity="0.1" shapeRendering="crispEdges" />
              <path d={svgPaths.p970c900} shapeRendering="crispEdges" stroke="#F4F0FF" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58" id="filter_wd_btn" width="178" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" dy="4" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="e1" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-2" dy="-2" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="e1" mode="normal" result="e2" />
                <feBlend in="SourceGraphic" in2="e2" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <button
        className="col-1 flex gap-[8px] items-center ml-[35px] mt-[10px] relative row-1 cursor-pointer"
        onClick={onClick}
      >
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p19b5de80} stroke="#D97757" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
            <path d={svgPaths.p36d7ef80} stroke="#D97757" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
        <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] text-[#d97757] text-[14px] text-center whitespace-nowrap">Withdraw</p>
      </button>
    </div>
  );
}

const LOCK_DAYS = 30;
const DAY_MS = 24 * 60 * 60 * 1000;

// Whole days remaining until `unlockMs`, never negative. Rounds up so a
// partial day still reads as a full day ("unlocks in 1 day", not "0 days").
function daysUntil(unlockMs: number, nowMs: number): number {
  return Math.max(0, Math.ceil((unlockMs - nowMs) / DAY_MS));
}

// The lock-status card's headline + caption. Driven by the server-computed
// unlock timestamp, so it always agrees with what the backend will allow.
function getCountdown(
  cardUnlocksAt: string | null,
  hasClaimed: boolean,
  nowMs: number,
): { value: string; label: string } {
  const card = hasClaimed ? "next card" : "first card";
  // No funded deposit yet — show the full window as a placeholder.
  if (!cardUnlocksAt) {
    return { value: `${LOCK_DAYS} days`, label: `Until ${card}` };
  }
  const remainingMs = Date.parse(cardUnlocksAt) - nowMs;
  if (remainingMs <= 0) {
    return {
      value: "Today",
      label: `${card[0].toUpperCase()}${card.slice(1)} ready`,
    };
  }
  const days = daysUntil(Date.parse(cardUnlocksAt), nowMs);
  return {
    value: `${days} ${days === 1 ? "day" : "days"}`,
    label: `Until ${card}`,
  };
}

interface LeftPanelProps {
  amount: string;
  totalRedeemed: number;
  cardsUsed: number;
  countdownValue: string;
  countdownLabel: string;
  isActive: boolean;
  depositDate: string;
  giftCard: GiftCardState;
  onClaim: () => void;
  onWithdraw: () => void;
  onStakeAgain: () => void;
}

function LeftPanel({
  amount, totalRedeemed, cardsUsed, countdownValue, countdownLabel,
  isActive, depositDate, giftCard, onClaim, onWithdraw, onStakeAgain,
}: LeftPanelProps) {
  // The claim banner adapts: claim a card, show a pending request, show the
  // delivered gift card link, or — once the stake is closed — prompt a restake.
  let bannerText: string;
  let bannerBg: string;
  let bannerOnClick: (() => void) | undefined;
  if (!isActive) {
    bannerText = "Your stake is closed — stake again to keep getting cards";
    bannerBg = "bg-[#eceaf2]";
    bannerOnClick = onStakeAgain;
  } else if (giftCard.state === "ready") {
    bannerText = "Your Claude Pro gift card is ready — tap to open";
    bannerBg = "bg-gradient-to-r from-[#e3f3e3] to-[#c3e6c4]";
    const { link } = giftCard;
    bannerOnClick = () => window.open(link, "_blank", "noopener,noreferrer");
  } else if (giftCard.state === "preparing") {
    bannerText = "Gift card requested — your link will appear here soon";
    bannerBg = "bg-[#f4ecd8]";
    bannerOnClick = undefined;
  } else if (giftCard.state === "claimed") {
    bannerText = "This month's card is claimed — check your email";
    bannerBg = "bg-[#e3f3e3]";
    bannerOnClick = undefined;
  } else if (giftCard.state === "locked") {
    // 30-day lock still running — show the countdown, not a claim CTA.
    const { unlockDays, isFirstCard } = giftCard;
    const which = isFirstCard ? "first" : "next";
    const when =
      unlockDays === 1 ? "tomorrow" : `in ${unlockDays} days`;
    bannerText = `Your ${which} $20 Claude Pro gift card unlocks ${when}`;
    bannerBg = "bg-[#eceaf2]";
    bannerOnClick = undefined;
  } else {
    bannerText = "Your $20 Claude Pro gift card is ready — claim it now";
    bannerBg = "bg-gradient-to-r from-[#f9ebe6] to-[#f1ccc0]";
    bannerOnClick = onClaim;
  }
  const bannerClickable = bannerOnClick !== undefined;
  return (
    <div className="absolute h-[828px] left-0 overflow-clip top-[72px] w-[756px]">
      {/* ClaudeStake header card */}
      <div className="absolute h-[108px] left-[56px] top-[56px] w-[668px]">
        <div className="absolute h-[108px] left-0 pointer-events-none rounded-[16px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[668px]">
          <div className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4px_-4px_4px_0px_rgba(0,0,0,0.08),inset_4px_4px_4px_0px_white]" />
        </div>
        {/* Claude starburst */}
        <div className="absolute left-[24px] size-[56px] top-[26px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <g clipPath="url(#clip_ds_claude)">
              <path d={svgPaths.p152f0100} fill="#D97757" />
            </g>
            <defs><clipPath id="clip_ds_claude"><rect fill="white" height="56" width="56" /></clipPath></defs>
          </svg>
        </div>
        {/* ClaudeStake + Lifetime Access */}
        <div className="absolute flex flex-col gap-[12px] items-start justify-center left-[101px] top-[24px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] text-[#280f4b] text-[20px] w-[119px]">ClaudeStake</p>
          <div
            className={`flex h-[24px] w-[64px] items-center justify-center rounded-[12px] ${
              isActive ? "bg-[#e3f3e3]" : "bg-[#eceaf2]"
            }`}
            style={{
              filter:
                "drop-shadow(4px 4px 6px rgba(0,0,0,0.10)) drop-shadow(-2px -2px 6px #FFFFFF)",
            }}
          >
            <p
              className={`font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[12px] whitespace-nowrap ${
                isActive ? "text-[#4caf50]" : "text-[rgba(0,0,0,0.45)]"
              }`}
            >
              {isActive ? "Active" : "Closed"}
            </p>
          </div>
        </div>
        {/* Amount + Withdraw */}
        <div className="absolute flex gap-[24px] items-center left-[335px] top-[28px]">
          <div className="flex flex-col gap-[4px] items-end text-black w-[125px]">
            <p className="leading-[0] text-[0px] text-right tracking-[0.66px] w-full">
              <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[32px] text-[24px] text-[rgba(0,0,0,0.5)]">$</span>
              <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[32px] text-[24px]">{amount}</span>
            </p>
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[12px] w-full">
              {isActive ? `Deposit on ${depositDate}` : "Fully withdrawn"}
            </p>
          </div>
          {isActive ? (
            <WithdrawButton onClick={onWithdraw} />
          ) : (
            <button
              onClick={onStakeAgain}
              className="flex h-[40px] w-[160px] items-center justify-center gap-[8px] rounded-[99px] bg-[#dd8164] border-4 border-[#f4f0ff] cursor-pointer shadow-[4px_4px_6px_0px_rgba(0,0,0,0.1),-2px_-2px_6px_0px_white] hover:opacity-95 transition-opacity"
            >
              <span className="relative shrink-0 size-[20px]">
                <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsWithdraw.p324b1280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
                  <path d={svgPathsWithdraw.p6e14750} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                </svg>
              </span>
              <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-white whitespace-nowrap">
                Deposit
              </span>
            </button>
          )}
        </div>
      </div>

      {/* $20 Total Redeemed card */}
      <div className="absolute h-[108px] left-[56px] top-[196px] w-[318px]">
        <div className="absolute h-[108px] left-0 pointer-events-none rounded-[16px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[318px]">
          <div className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4px_-4px_4px_0px_rgba(0,0,0,0.08),inset_4px_4px_4px_0px_white]" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-105px)] overflow-clip rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.15),-4px_-4px_10px_0px_white] size-[76px] top-1/2" style={{ backgroundImage: "linear-gradient(104.671deg, rgb(249,235,230) 19.687%, rgb(241,204,192) 111.98%)" }}>
          <div className="overflow-clip relative shrink-0 size-[32px]">
            <div className="absolute inset-[8.33%]"><div className="absolute inset-[-3.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 28.6667">
                <path d={svgPaths.p3938a880} stroke="#D97757" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div></div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[4px] items-start justify-center left-[120px] text-black top-[28px] w-[190px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[32px] text-[24px] tracking-[0.66px] w-full whitespace-nowrap">
            ${totalRedeemed}
            <span className="font-['Hanken_Grotesk:Regular',sans-serif] text-[12px] opacity-50"> ({cardsUsed}/12 cards)</span>
          </p>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[12px] w-full">Total Redeemed</p>
        </div>
      </div>

      {/* 30 days Lock Status card */}
      <div className="absolute h-[108px] left-[406px] top-[196px] w-[318px]">
        <div className="absolute h-[108px] left-0 pointer-events-none rounded-[16px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[318px]">
          <div className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4px_-4px_4px_0px_rgba(0,0,0,0.08),inset_4px_4px_4px_0px_white]" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-105px)] overflow-clip rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.15),-4px_-4px_10px_0px_white] size-[76px] top-1/2" style={{ backgroundImage: "linear-gradient(104.671deg, rgb(249,235,230) 19.687%, rgb(241,204,192) 111.98%)" }}>
          <div className="overflow-clip relative shrink-0 size-[32px]">
            <div className="absolute inset-[12.5%_16.67%]"><div className="absolute inset-[-4.17%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 26">
                <path d={svgPaths.p13fa5480} stroke="#D97757" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div></div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[4px] items-start justify-center left-[120px] text-black top-[28px] w-[125px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[32px] text-[24px] tracking-[0.66px] w-full">{countdownValue}</p>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[12px] w-full">{countdownLabel}</p>
        </div>
      </div>

      {/* Claim banner — adapts to the gift-card delivery state: claim a card,
          a pending request, the delivered link, or a restake prompt. */}
      <button
        className={`absolute h-[80px] left-[56px] top-[336px] w-[668px] ${
          bannerClickable ? "cursor-pointer" : "cursor-default"
        }`}
        onClick={bannerOnClick}
        disabled={!bannerClickable}
      >
        <div
          className={`absolute h-[80px] left-0 rounded-[16px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[668px] ${bannerBg}`}
        />
        <div className="-translate-y-1/2 absolute flex items-center justify-between left-[24px] top-1/2 w-[620px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[28px] text-[18px] text-black whitespace-nowrap">
            {bannerText}
          </p>
          {bannerClickable && (
            <div className="overflow-clip relative shrink-0 size-[32px]">
              <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4">
                <div className="absolute inset-[-6.25%_-4.69%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 18">
                    <path d={svgPaths.p5566280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </button>

      {/* Important Information */}
      <div className="absolute h-[141px] left-[56px] top-[448px] w-[668px]">
        <div className="absolute bg-[#f8f5ff] border border-[#e6dbff] border-solid h-[141px] left-0 rounded-[16px] top-0 w-[668px]" />
        <div className="absolute flex flex-col gap-[8px] items-start left-[24px] top-[20px] w-[628px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] opacity-90 text-[16px] text-black w-full">Important Information</p>
          <ul className="block font-['Hanken_Grotesk:Regular',sans-serif] font-normal list-disc opacity-80 text-[14px] text-black w-full">
            <li className="mb-0 ms-[21px]">
              <span className="leading-[normal]">
                Your first Claude Pro card arrives 30 days after deposit. After that, a new card arrives every month.
              </span>
            </li>
            <li className="mb-0 ms-[21px]">
              <span className="leading-[normal]">
                Withdraw your principal at any time, withdrawal cancels future cards.
              </span>
            </li>
            <li className="ms-[21px]">
              <span className="leading-[normal]">
                Each card must be redeemed within the calendar month it is issued.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Right panel table ─────────────── */

// A plain text cell for the history tables.
function TextCell({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <p
      className={`font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[12px] whitespace-nowrap ${
        muted ? "text-[rgba(0,0,0,0.45)]" : "text-black"
      }`}
    >
      {children}
    </p>
  );
}

// Generic history table. The first column is left-aligned, the last
// right-aligned, any middle columns left-aligned. Cells are arbitrary nodes.
function TableView({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode[][];
}) {
  const lastIdx = columns.length - 1;
  return (
    <div className="absolute flex flex-col items-start left-[56px] rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] top-[150px] w-[620px]">
      {/* Header */}
      <div className="flex items-center py-[8px] relative shrink-0 w-full">
        <div className="absolute bg-[#f4f0ff] h-[38px] left-0 rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.12),-4px_-4px_10px_0px_white] top-0 w-[622px]" />
        {columns.map((col, i) => {
          const right = i === lastIdx;
          return (
            <div key={i} className="flex-[1_0_0] min-w-px relative">
              <div
                className={`flex flex-row items-center size-full ${right ? "justify-end" : ""}`}
              >
                <div
                  className={`flex items-center py-[4px] relative size-full ${
                    right ? "justify-end pl-[8px] pr-[16px]" : "px-[16px]"
                  }`}
                >
                  <p
                    className={`font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[14px] opacity-60 text-[11px] text-black whitespace-nowrap ${
                      right ? "text-right" : ""
                    }`}
                  >
                    {col}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Rows */}
      {rows.map((cells, r) => (
        <div key={r} className="flex items-center relative shrink-0 w-full">
          <div className="absolute border-[rgba(0,0,0,0.05)] border-b border-solid inset-0 pointer-events-none" />
          {cells.map((cell, i) => {
            const right = i === lastIdx;
            return (
              <div key={i} className="flex-[1_0_0] h-[56px] min-w-px relative">
                <div
                  className={`flex flex-col justify-center py-[16px] relative size-full ${
                    right ? "items-end pl-[8px] pr-[16px]" : "items-start pl-[16px]"
                  }`}
                >
                  {cell}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ─────────────── Empty state — Redemption ─────────────── */

function RedemptionEmptyState({ isActive }: { isActive: boolean }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center left-1/2 top-[calc(50%-104.5px)] w-[291px]">
      <div className="flex flex-col gap-[16px] items-center w-full">
        <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0">
          <div className="bg-[#f4f0ff] col-1 ml-0 mt-0 relative row-1 size-[100px]" />
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[8.5px] mt-[20px] place-items-start relative row-1">
            {/* Receipt paper */}
            <div className="col-1 h-[56px] ml-[26.5px] mt-0 relative row-1 w-[42px]">
              <div className="absolute inset-[-1.79%_-2.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 58">
                  <path d={svgPaths.p105eee00} fill="#F4F0FF" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            {/* Stack */}
            <div className="col-1 h-[66.4px] ml-0 mt-0 relative row-1 w-[61.5px]">
              <div className="absolute inset-[-1.51%_-1.63%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.5 68.4">
                  <path d={svgPaths.p2e3cd180} fill="#F4F0FF" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.paca3b80} fill="#DF8328" />
                  <path clipRule="evenodd" d={svgPaths.p12e22300} fillRule="evenodd" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            {/* Dollar sign */}
            <div className="col-1 h-[29px] ml-[18.5px] mt-[8px] relative row-1 w-[33px]">
              <div className="absolute inset-[0_-3.03%_-3.45%_-3.03%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 30">
                  <path d={svgPaths.p72f2670} stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p9715080} fill="#DF8328" />
                  <rect height="3" rx="1.5" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" width="33" x="1" y="26" />
                </svg>
              </div>
            </div>
            {/* Circle */}
            <div className="col-1 ml-[47.5px] mt-0 relative row-1 size-[26px]">
              <div className="absolute inset-[-3.85%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <circle cx="14" cy="14" fill="#F4F0FF" r="13" stroke="#DF8328" strokeWidth="2" />
                  <path d={svgPaths.p2f068f00} stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p1619d000} stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] text-[16px] text-black text-center whitespace-nowrap">
          {isActive
            ? "Claim your first Claude Pro Subscription"
            : "This stake is closed — no cards were claimed"}
        </p>
      </div>
    </div>
  );
}

/* ─────────────── Empty state — Withdrawal ─────────────── */

function WithdrawalEmptyState() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center left-1/2 top-[calc(50%-104.5px)] w-[180px]">
      <div className="flex flex-col gap-[16px] items-center w-full">
        {/* Illustration */}
        <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0">
          <div className="bg-[#f4f0ff] col-1 ml-0 mt-0 relative row-1 size-[100px]" />
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[8.5px] mt-[20px] place-items-start relative row-1">
            <div className="col-1 h-[56px] ml-[26.5px] mt-0 relative row-1 w-[42px]">
              <div className="absolute inset-[-1.79%_-2.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 58">
                  <path d={svgPaths.p105eee00} fill="#F4F0FF" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[6px] place-items-start relative row-1">
              <div className="col-1 h-[66.4px] ml-0 mt-0 relative row-1 w-[61.5px]">
                <div className="absolute inset-[-1.51%_-1.63%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.5 68.4">
                    <path d={svgPaths.p2e3cd180} fill="#F4F0FF" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.paca3b80} fill="#DF8328" />
                    <path clipRule="evenodd" d={svgPaths.p12e22300} fillRule="evenodd" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="col-1 h-[29px] ml-[18.5px] mt-[8px] relative row-1 w-[33px]">
                <div className="absolute inset-[0_-3.03%_-3.45%_-3.03%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 30">
                    <path d={svgPaths.p72f2670} stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p9715080} fill="#DF8328" />
                    <rect height="3" rx="1.5" stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" width="33" x="1" y="26" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-1 ml-[47.5px] mt-0 relative row-1 size-[26px]">
              <div className="absolute inset-[-3.85%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <circle cx="14" cy="14" fill="#F4F0FF" r="13" stroke="#DF8328" strokeWidth="2" />
                  <path d={svgPaths.p2f068f00} stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p1619d000} stroke="#DF8328" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] text-[16px] text-black text-center whitespace-nowrap">
          You have no withdrawals
        </p>
      </div>
    </div>
  );
}

/* ─────────────── Right panel ─────────────── */

type Tab = "redemption" | "withdrawal";

// Format an ISO timestamp as e.g. "5/8/2026".
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US");
}

// Format whole dollars as "3,000.00".
function formatUSD(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function RightPanel({
  activeTab, onTabChange, redemptions, withdrawals, isActive,
}: {
  activeTab: Tab; onTabChange: (t: Tab) => void;
  redemptions: Redemption[]; withdrawals: Withdrawal[];
  isActive: boolean;
}) {
  const hasClaimed = redemptions.length > 0;
  const hasWithdrawn = withdrawals.length > 0;
  const showRedemptionTable = activeTab === "redemption" && hasClaimed;
  const showWithdrawalTable = activeTab === "withdrawal" && hasWithdrawn;
  const showRedemptionEmpty = activeTab === "redemption" && !hasClaimed;
  const showWithdrawalEmpty = activeTab === "withdrawal" && !hasWithdrawn;

  // Redemption rows: Date · Delivered To · Gift Card. The Gift Card cell
  // keeps delivered links reachable even after the stake is closed.
  const redemptionRows: ReactNode[][] = redemptions.map((r) => [
    <TextCell>{formatDate(r.createdAt)}</TextCell>,
    <TextCell>
      {r.method === "email" ? (r.destination ?? "Email") : "Dashboard"}
    </TextCell>,
    r.giftCardLink ? (
      <a
        href={r.giftCardLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] text-[12px] text-[#7f56d9] underline whitespace-nowrap"
      >
        Open ↗
      </a>
    ) : (
      <TextCell muted>
        {r.method === "dashboard" ? "Preparing…" : "Emailed"}
      </TextCell>
    ),
  ]);
  const withdrawalRows: ReactNode[][] = withdrawals.map((w) => [
    <TextCell>{formatDate(w.createdAt)}</TextCell>,
    <TextCell>{`$${w.amount}`}</TextCell>,
  ]);

  return (
    <div className="absolute h-[828px] left-[756px] overflow-clip top-[72px] w-[756px]">
      {/* Card background — only when there's table content */}
      {(showRedemptionTable || showWithdrawalTable) && (
        <div className="absolute bg-[#f4f0ff] bottom-[269px] h-[433px] right-[56px] rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.12),-4px_-4px_10px_0px_white] w-[668px]" />
      )}

      {/* Tab bar */}
      <div className="absolute flex gap-[32px] isolate items-center left-[32px] top-[58px] w-[668px]">
        <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex gap-[32px] items-center relative z-[2]">
          {/* Redemption History */}
          <button
            className="flex flex-col items-center justify-end cursor-pointer"
            onClick={() => onTabChange("redemption")}
          >
            <div className={`flex h-[44px] items-center justify-center px-[4px] ${activeTab === "redemption" ? "mb-[-3px]" : ""}`}>
              <p className={`font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[14px] text-center whitespace-nowrap ${activeTab === "redemption" ? "text-[#7f56d9]" : "text-[#1d2d3e]"}`}>
                Redemption History
              </p>
            </div>
            {activeTab === "redemption" && <div className="bg-[#7f56d9] h-[3px] rounded-tl-[2px] rounded-tr-[2px] w-full" />}
          </button>
          {/* Withdrawal History */}
          <button
            className="flex flex-col items-center justify-end cursor-pointer"
            onClick={() => onTabChange("withdrawal")}
          >
            <div className={`flex h-[44px] items-center justify-center px-[4px] gap-[4px] ${activeTab === "withdrawal" ? "mb-[-3px]" : ""}`}>
              <p className={`font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[14px] text-center whitespace-nowrap ${activeTab === "withdrawal" ? "text-[#7f56d9]" : "text-[#1d2d3e]"}`}>
                Withdrawal History
              </p>
            </div>
            {activeTab === "withdrawal" && <div className="bg-[#7f56d9] h-[3px] rounded-tl-[2px] rounded-tr-[2px] w-full" />}
          </button>
        </div>
      </div>

      {/* Redemption History content */}
      {showRedemptionTable && (
        <TableView
          columns={["Redemption Date", "Delivered To", "Gift Card"]}
          rows={redemptionRows}
        />
      )}
      {showRedemptionEmpty && <RedemptionEmptyState isActive={isActive} />}

      {/* Withdrawal History content */}
      {showWithdrawalTable && (
        <TableView columns={["Withdraw Date", "Amount"]} rows={withdrawalRows} />
      )}
      {showWithdrawalEmpty && <WithdrawalEmptyState />}
    </div>
  );
}

/* ─────────────── Withdraw Confirmation Modal ─────────────── */

interface WithdrawModalProps {
  onCancel: () => void;
  onConfirm: () => void;
  hasClaimableCard: boolean;
  onClaimFirst: () => void;
}

function WithdrawModal({
  onCancel, onConfirm, hasClaimableCard, onClaimFirst,
}: WithdrawModalProps) {
  // When a card is ready to claim, the modal grows to fit a forfeiture
  // warning and the action buttons shift down to make room.
  const buttonsTop = hasClaimableCard ? "top-[244px]" : "top-[156px]";

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
    >
      {/* Card — 544px wide; taller when a forfeiture warning is shown */}
      <div
        className={`relative bg-[#f4f0ff] rounded-[24px] w-[544px] ${
          hasClaimableCard ? "h-[316px]" : "h-[228px]"
        }`}
      >

        {/* X close — exact Figma position */}
        <button
          className="absolute left-[492px] opacity-50 hover:opacity-80 overflow-clip size-[20px] top-[32px] cursor-pointer transition-opacity"
          onClick={onCancel}
        >
          <div className="absolute inset-1/4">
            <div className="absolute inset-[-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                <path d={svgPathsWithdraw.p14b78080} stroke="#4B1F11" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </button>

        {/* Title + subtitle — exact Figma: left-[32px] top-[32px] w-[446px] */}
        <div className="absolute flex flex-col gap-[12px] items-center left-[32px] text-black top-[32px] w-[446px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[24px] w-full">
            Withdrawing ends your subscription.
          </p>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[22px] opacity-70 relative shrink-0 text-[16px] w-full">
            Gift Cards already received are yours to keep. Gift Cards scheduled in the next 30 days will not be issued
          </p>
        </div>

        {/* Forfeiture warning — only when a card is currently claimable */}
        {hasClaimableCard && (
          <div className="absolute left-[32px] top-[148px] w-[480px] flex items-start gap-[10px] rounded-[12px] bg-[#fdf0d8] border border-[#f0d28a] px-[14px] py-[10px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-[1px] shrink-0">
              <path
                d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                stroke="#B7791F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] text-[13px] leading-[18px] text-[#7a5610]">
              You have a Claude card ready to claim. Withdrawing now forfeits it.{" "}
              <button
                onClick={onClaimFirst}
                className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold underline cursor-pointer text-[#7a5610]"
              >
                Claim it first
              </button>
            </p>
          </div>
        )}

        {/* Cancel button */}
        <button
          className={`absolute left-[32px] ${buttonsTop} h-[40px] w-[170px] cursor-pointer`}
          onClick={onCancel}
        >
          <div className="absolute inset-[-20%_-5.88%_-25%_-4.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188 58">
              <g filter="url(#wc_dd)">
                <path d={svgPathsWithdraw.p10bebe00} fill="#DD8164" />
                <path d={svgPathsWithdraw.p131f4000} stroke="#F4F0FF" strokeWidth="4" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58" id="wc_dd" width="188" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="4" dy="4" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="e1" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-2" dy="-2" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend in2="e1" mode="normal" result="e2" />
                  <feBlend in="SourceGraphic" in2="e2" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-center text-white whitespace-nowrap">Cancel</span>
          </span>
        </button>

        {/* Withdraw button */}
        <button
          className={`absolute left-[312px] ${buttonsTop} h-[40px] w-[200px] cursor-pointer`}
          onClick={onConfirm}
        >
          <div className="absolute inset-[-20%_-5%_-25%_-4%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 218 58">
              <g filter="url(#ww_dd)">
                <path d={svgPathsWithdraw.p33fed800} fill="#F4F0FF" />
                <path d={svgPathsWithdraw.p3a3a3a00} stroke="#F4F0FF" strokeWidth="4" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58" id="ww_dd" width="218" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="4" dy="4" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="e1" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-2" dy="-2" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend in2="e1" mode="normal" result="e2" />
                  <feBlend in="SourceGraphic" in2="e2" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <span className="absolute inset-0 flex gap-[8px] items-center justify-center">
            <span className="relative shrink-0 size-[20px]">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPathsWithdraw.p324b1280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
                <path d={svgPathsWithdraw.p6e14750} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
              </svg>
            </span>
            <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-black whitespace-nowrap">Withdraw</span>
          </span>
        </button>

      </div>
    </div>
  );
}

/* ─────────────── Claim Modal (choose + email steps only) ─────────────── */

function ClaimModal({
  onClose,
  onDashboardClaim,
  onEmailSubmit,
}: {
  onClose: () => void;
  onDashboardClaim: () => void;
  onEmailSubmit: (email: string) => void;
}) {
  const [step, setStep] = useState<"choose" | "email">("choose");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleEmailSubmit = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    onEmailSubmit(email.trim());
  };



  const cardHeight = step === "choose" ? 280 : emailError ? 320 : 296;

  const sharedPillFilter = (id: string) => (
    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58" id={id} width="498" x="0" y="0">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
      <feOffset dx="4" dy="4" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
      <feBlend in2="BackgroundImageFix" mode="normal" result="e1" />
      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
      <feOffset dx="-2" dy="-2" /><feGaussianBlur stdDeviation="3" /><feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
      <feBlend in2="e1" mode="normal" result="e2" />
      <feBlend in="SourceGraphic" in2="e2" mode="normal" result="shape" />
    </filter>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative bg-[#f4f0ff] rounded-[24px] w-[544px] transition-[height] duration-300 overflow-hidden"
        style={{ height: cardHeight }}
      >
        {/* X close */}
        <button
          className="absolute left-[492px] opacity-50 hover:opacity-80 overflow-clip size-[20px] top-[32px] cursor-pointer transition-opacity z-10"
          onClick={onClose}
        >
          <div className="absolute inset-1/4">
            <div className="absolute inset-[-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                <path d={svgPathsClaim.p14b78080} stroke="#4B1F11" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </button>

        {/* Title + subtitle — shared */}
        <div className="absolute flex flex-col gap-[12px] items-center left-[32px] text-black top-[32px] w-[446px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] text-[24px] w-full">Claim your Claude Pro</p>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[22px] opacity-70 text-[16px] w-full">
            Cards already received are yours to keep. Cards scheduled in the next 30 days will not be issued
          </p>
        </div>

        {/* ── STEP 1: Choose ── */}
        {step === "choose" && (
          <div className="absolute flex flex-col gap-[24px] items-start justify-center left-[32px] top-[144px] w-[480px]">
            <button className="relative w-[480px] h-[40px] cursor-pointer" onClick={onDashboardClaim}>
              <div className="absolute inset-[-20%_-2.08%_-25%_-1.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 498 58">
                  <g filter="url(#fcp1)">
                    <path d={svgPathsClaim.pb8fde80} fill="#F4F0FF" />
                    <path d={svgPathsClaim.p462ee00} stroke="#F4F0FF" strokeWidth="4" />
                  </g>
                  <defs>{sharedPillFilter("fcp1")}</defs>
                </svg>
              </div>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-black whitespace-nowrap">
                  Request link on Dashboard
                </span>
              </span>
            </button>

            <button className="relative w-[480px] h-[40px] cursor-pointer" onClick={() => setStep("email")}>
              <div className="absolute inset-[-20%_-2.08%_-25%_-1.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 498 58">
                  <g filter="url(#fcp2)">
                    <path d={svgPathsClaim.pb8fde80} fill="#F4F0FF" />
                    <path d={svgPathsClaim.p462ee00} stroke="#F4F0FF" strokeWidth="4" />
                  </g>
                  <defs>{sharedPillFilter("fcp2")}</defs>
                </svg>
              </div>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-black whitespace-nowrap">Get it on Email</span>
              </span>
            </button>
          </div>
        )}

        {/* ── STEP 2: Email input ── */}
        {step === "email" && (
          <div className="absolute flex flex-col gap-[24px] items-start justify-center left-[32px] top-[144px] w-[480px]">
            {/* Neumorphic inset pill + error */}
            <div className="flex flex-col gap-[8px] w-[480px]">
              <div className="relative w-[480px] h-[56px]">
                <svg className="absolute block inset-0 size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 480 56">
                  <g filter="url(#fei)">
                    <path d={svgPathsEmail.p3a16bd00} fill="#F4F0FF" />
                  </g>
                  <path d={svgPathsEmail.p172bd300} stroke={emailError ? "#D95757" : "#F4F0FF"} strokeWidth="4" />
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="fei" width="488" x="-4" y="-4">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="6" dy="6" /><feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                      <feBlend in2="shape" mode="normal" result="s1" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-6" dy="-6" /><feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="s1" mode="normal" result="s2" />
                    </filter>
                  </defs>
                </svg>
                <input
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(""); }}
                  onKeyDown={(e) => { if (e.key === "Enter") handleEmailSubmit(); }}
                  placeholder="Enter Email"
                  className="absolute inset-0 w-full h-full bg-transparent text-center text-[14px] font-['Hanken_Grotesk:Regular',sans-serif] text-black placeholder-[rgba(0,0,0,0.6)] outline-none rounded-[28px] px-[24px]"
                />
              </div>
              {/* Inline error */}
              {emailError && (
                <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#D95757] text-center w-full">
                  {emailError}
                </p>
              )}
            </div>

            {/* Orange submit */}
            <button className="relative w-[480px] h-[40px] cursor-pointer" onClick={handleEmailSubmit}>
              <div className="absolute inset-[-20%_-2.08%_-25%_-1.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 498 58">
                  <g filter="url(#feb)">
                    <path d={svgPathsEmail.pb8fde80} fill="#D97757" />
                    <path d={svgPathsEmail.p462ee00} stroke="#F4F0FF" strokeWidth="4" />
                  </g>
                  <defs>{sharedPillFilter("feb")}</defs>
                </svg>
              </div>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-center text-white whitespace-nowrap">Get it on Email</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────── Email Success Modal (separate overlay, exact Figma) ─────────────── */

function SuccessModal({ email, onClose }: { email: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Card — 544×368 exactly as in Figma */}
      <div className="relative bg-[#f4f0ff] h-[368px] rounded-[24px] w-[544px]">

        {/* X close — left-492, top-32, opacity-50 (exact Figma) */}
        <button
          className="absolute left-[492px] opacity-50 hover:opacity-80 overflow-clip size-[20px] top-[32px] cursor-pointer transition-opacity"
          onClick={onClose}
        >
          <div className="absolute inset-1/4">
            <div className="absolute inset-[-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                <path d={svgPathsSuccess.p14b78080} stroke="#4B1F11" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </button>

        {/* Green checkmark — centered, size-100, top-88 (exact Figma) */}
        <div className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[100px] top-[88px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.9995 99.9995">
            <path clipRule="evenodd" d={svgPathsSuccess.p346a9400} fill="#00BA00" fillRule="evenodd" />
          </svg>
        </div>

        {/* "Sent to …" + subtitle — centered, top-222, w-446 (exact Figma) */}
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center left-1/2 text-black text-center top-[222px] w-[446px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[24px] w-full">
            Sent to {email.trim() || "your email"}
          </p>
          <div className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] opacity-70 relative shrink-0 text-[16px] w-full">
            <p className="leading-[22px] mb-0">You will receive Claude Pro Subscription on your email.</p>
            <p className="leading-[22px]">Don't forget to check your spam folder.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────── Root ─────────────── */

export default function DashboardScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialWithdrawn = (location.state as { hasWithdrawn?: boolean })?.hasWithdrawn ?? false;

  const [activeTab, setActiveTab] = useState<Tab>(
    initialWithdrawn ? "withdrawal" : "redemption",
  );
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [redemptions, setRedemptions] = useState<Redemption[]>([]);
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");

  // Drives the countdown. Ticking it every minute re-derives the days
  // remaining and lets the banner flip from "locked" to "claimable" the
  // moment the lock elapses — without the user reloading the page.
  const [nowMs, setNowMs] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNowMs(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Load dashboard totals + history lists from the backend.
  const refresh = useCallback(async () => {
    const wallet = connectWallet();
    const [d, r, w, dep] = await Promise.all([
      api.getDashboard(wallet),
      api.getRedemptions(wallet),
      api.getWithdrawals(wallet),
      api.getDeposits(wallet),
    ]);
    setDashboard(d);
    setRedemptions(r);
    setWithdrawals(w);
    setDeposits(dep);
  }, []);

  useEffect(() => {
    refresh().catch(() => {
      /* leave defaults if the backend is unavailable */
    });
  }, [refresh]);

  // Record a claimed reward, then reload the history. `destination` is the
  // delivery email for email claims.
  const recordClaim = async (method: ClaimMethod, destination?: string) => {
    try {
      await api.createRedemption(connectWallet(), method, destination);
      await refresh();
    } catch {
      /* ignore for prototype — the banner already prevents double claims */
    }
  };

  const handleClaimBannerClick = () => setShowClaimModal(true);

  // "Request link on Dashboard" → record the request against this wallet.
  // No address to collect — the gift card link is delivered to the dashboard
  // itself once the team provisions it.
  const handleDashboardClaim = async () => {
    setShowClaimModal(false);
    await recordClaim("dashboard");
    setActiveTab("redemption");
  };

  // Email submitted → close claim modal, open email success modal
  const handleEmailSubmit = (email: string) => {
    setShowClaimModal(false);
    setSuccessEmail(email);
    setShowSuccessModal(true);
  };

  // Email success closed → record the claim with the delivery email
  const handleSuccessClose = async () => {
    setShowSuccessModal(false);
    await recordClaim("email", successEmail);
    setActiveTab("redemption");
  };

  const handleWithdrawClick = () => setShowWithdrawModal(true);

  const handleWithdrawConfirm = () => {
    setShowWithdrawModal(false);
    navigate("/withdraw");
  };

  // Live staked balance + stake state, derived from the backend — never
  // from router state, so a refresh or a withdrawal always shows the truth.
  const balance = dashboard?.balance ?? 0;
  const isActive = !!dashboard?.subscription && balance > 0;

  // Cards and the lock countdown are scoped to the *current* subscription.
  // Deposits/redemptions from a previous, withdrawn stake must not pollute
  // the view (otherwise re-staking inherits the old stake's countdown).
  const activeSubId = dashboard?.subscription?.id;
  const activeDeposits = activeSubId
    ? deposits.filter((d) => d.subscriptionId === activeSubId)
    : [];
  const activeRedemptions = activeSubId
    ? redemptions.filter((r) => r.subscriptionId === activeSubId)
    : [];

  // When the next card unlocks — the server-computed timestamp is the single
  // source of truth, so the client never relies on the device clock to
  // decide eligibility (it only counts down toward that timestamp).
  const cardUnlocksAt = dashboard?.cardUnlocksAt ?? null;

  // Countdown to the next card. Once the stake is closed there is no next
  // card, so the card shows a neutral "closed" state — not a stale 30 days.
  const countdown = isActive
    ? getCountdown(cardUnlocksAt, activeRedemptions.length > 0, nowMs)
    : { value: "—", label: "Stake closed" };

  // Earliest deposit of the current stake, shown on the header card.
  const depositDate =
    activeDeposits.length > 0
      ? formatDate(
          activeDeposits.reduce((earliest, d) =>
            Date.parse(d.createdAt) < Date.parse(earliest.createdAt)
              ? d
              : earliest,
          ).createdAt,
        )
      : "—";

  // Cards claimed in the rolling last 12 months (out of 12) — a rolling
  // window, so the count doesn't reset on Jan 1.
  const YEAR_MS = 365 * 24 * 60 * 60 * 1000;
  const cardsUsed = redemptions.filter(
    (r) => Date.now() - Date.parse(r.createdAt) < YEAR_MS,
  ).length;

  // A card is claimable once the 30-day lock has elapsed and none has been
  // claimed this month for the current stake. Withdrawing while one is
  // claimable forfeits it — the WithdrawModal warns about this.
  const now = new Date(nowMs);
  const claimedThisMonth = activeRedemptions.some((r) => {
    const d = new Date(r.createdAt);
    return (
      d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
    );
  });

  // The lock is "still running" while the server's unlock timestamp is in the
  // future. With no timestamp yet (no funded deposit) there is nothing to
  // claim, so it is treated as locked too.
  const cardLocked = cardUnlocksAt
    ? nowMs < Date.parse(cardUnlocksAt)
    : true;
  const hasClaimableCard = isActive && !cardLocked && !claimedThisMonth;

  // Gift card delivery state for this month's "Request link on Dashboard"
  // claim. While the link is unset the banner shows a pending state; once
  // the team provisions it the banner shows the link itself.
  const dashboardClaimThisMonth = activeRedemptions.find((r) => {
    if (r.method !== "dashboard") return false;
    const d = new Date(r.createdAt);
    return (
      d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
    );
  });
  // Days left on the lock — for the countdown banner. Falls back to the full
  // window when there is no unlock timestamp yet (no funded deposit).
  const unlockDays = cardUnlocksAt
    ? daysUntil(Date.parse(cardUnlocksAt), nowMs)
    : LOCK_DAYS;

  const giftCard: GiftCardState = dashboardClaimThisMonth?.giftCardLink
    ? { state: "ready", link: dashboardClaimThisMonth.giftCardLink }
    : dashboardClaimThisMonth
      ? { state: "preparing" }
      : claimedThisMonth
        ? { state: "claimed" } // claimed via email — link goes to their inbox
        : cardLocked
          ? { state: "locked", unlockDays, isFirstCard: activeRedemptions.length === 0 }
          : { state: "claimable" };

  // While a gift card link is being provisioned, poll the backend so the
  // banner flips to the delivered link as soon as it lands.
  useEffect(() => {
    if (giftCard.state !== "preparing") return;
    const t = setInterval(() => {
      refresh().catch(() => {
        /* keep polling on transient failures */
      });
    }, 1500);
    return () => clearInterval(t);
  }, [giftCard.state, refresh]);

  return (
    <div className="bg-[#f4f0ff] relative size-full">
      <TopNavigation />
      <LeftPanel
        amount={formatUSD(balance)}
        totalRedeemed={dashboard?.totalRedeemed ?? 0}
        cardsUsed={cardsUsed}
        countdownValue={countdown.value}
        countdownLabel={countdown.label}
        isActive={isActive}
        depositDate={depositDate}
        giftCard={giftCard}
        onClaim={handleClaimBannerClick}
        onWithdraw={handleWithdrawClick}
        onStakeAgain={() => navigate("/choose-plan")}
      />
      <RightPanel
        activeTab={activeTab}
        onTabChange={setActiveTab}
        redemptions={redemptions}
        withdrawals={withdrawals}
        isActive={isActive}
      />
      {showClaimModal && (
        <ClaimModal
          onClose={() => setShowClaimModal(false)}
          onDashboardClaim={handleDashboardClaim}
          onEmailSubmit={handleEmailSubmit}
        />
      )}
      {showSuccessModal && (
        <SuccessModal
          email={successEmail}
          onClose={handleSuccessClose}
        />
      )}
      {showWithdrawModal && (
        <WithdrawModal
          hasClaimableCard={hasClaimableCard}
          onCancel={() => setShowWithdrawModal(false)}
          onConfirm={handleWithdrawConfirm}
          onClaimFirst={() => {
            setShowWithdrawModal(false);
            setShowClaimModal(true);
          }}
        />
      )}
    </div>
  );
}