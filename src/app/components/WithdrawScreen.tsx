import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/SubscriptionsWithdraw/svg-9poy3g49eq";
import imgImage15 from "figma:asset/b83546ad9ee55429519b62c573824caf04416ea4.png";
import imgImage39 from "figma:asset/db9d7fe6198ad58b36356dbb9257eb48725de2d5.png";
import { api } from "../lib/api";
import { connectWallet } from "../lib/wallet";

/* ─────────────── Top Navigation ─────────────── */

function TopNavigation() {
  return (
    <div className="absolute bg-[#f4f0ff] h-[72px] left-0 top-0 w-[1512px]">
      {/* Logo */}
      <div className="-translate-y-1/2 absolute flex gap-[11.469px] h-[22px] items-center justify-center left-[56px] top-1/2 w-[118px]">
        <div className="relative shrink-0 size-[22.938px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9375 22.9375">
            <path d={svgPaths.p2bdb6900} fill="black" />
          </svg>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold not-italic shrink-0 text-[17.203px] text-black tracking-[1.7203px] uppercase whitespace-nowrap">LucidlY</p>
      </div>
      {/* Nav items */}
      <div className="absolute flex gap-[16px] items-center left-[547px] top-[16px]">
        {/* Nav pill */}
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
              <g clipPath="url(#clip_wd_settings)">
                <path d={svgPaths.p1f56fc80} fill="black" />
                <path d={svgPaths.p2febac00} fill="black" />
              </g>
              <defs><clipPath id="clip_wd_settings"><rect fill="white" height="20" width="20" /></clipPath></defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[rgba(0,0,0,0.1)] h-full relative shrink-0 w-px" />
        </div>
        {/* Chain (Eth) */}
        <div className="bg-[#f4f0ff] flex items-center justify-center p-[14px] rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]">
          <div className="bg-[#526492] overflow-clip relative rounded-full shrink-0 size-[20px]">
            <div className="absolute bg-white blur-[60px] inset-[39.5%_39%] rounded-full" />
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
        </div>
        {/* Connect Wallet */}
        <div className="bg-[rgba(127,86,217,0.15)] flex h-[40px] items-center px-[16px] py-[14px] rounded-[99px] shadow-[-4px_-4px_5px_0px_white,4px_4px_5px_0px_rgba(0,0,0,0.04)] shrink-0">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] text-[#7f56d9] text-[16px] whitespace-nowrap">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Left panel — Gift card ─────────────── */

function GiftCard({ planLabel }: { planLabel: string }) {
  return (
    <div className="absolute flex flex-col h-[289px] items-start left-[270px] top-[222px] w-[356px]">
      <div className="h-[289px] relative rounded-[16px] shrink-0 w-full">
        {/* Outer neumorphic card */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f4f0ff] h-[289px] left-1/2 rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.12),-4px_-4px_10px_0px_white] top-1/2 w-[356px]" />
        {/* Inner card with peach border */}
        <div className="-translate-x-1/2 absolute bg-[#f4f0ff] border-2 border-[rgba(255,255,255,0.64)] border-solid h-[263px] left-1/2 rounded-[12px] top-[13px] w-[332px]" />

        {/* Gift box image */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.15),-4px_-4px_10px_0px_white] top-[calc(50%-32px)] w-[284px]">
          <div className="h-[161px] relative shrink-0 w-[285px]">
            <img
              alt="Gift box"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage39}
            />
          </div>
        </div>

        {/* ClaudeStake label */}
        <div className="-translate-x-1/2 absolute flex gap-[16px] items-center left-[calc(50%-27px)] top-[213px]">
          {/* Claude starburst */}
          <div className="relative shrink-0 size-[40px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <g clipPath="url(#clip_wd_claude)" opacity="0.9">
                <rect fill="#F4F0FF" height="40" width="40" />
                <path d={svgPaths.p11889580} fill="#D97757" />
              </g>
              <defs><clipPath id="clip_wd_claude"><rect fill="white" height="40" width="40" /></clipPath></defs>
            </svg>
          </div>
          {/* Title + subtitle */}
          <div className="flex flex-col gap-[2px] h-[44px] items-start justify-center">
            <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] text-[#df8328] text-[20px] whitespace-nowrap">ClaudeStake</p>
            <div className="flex items-center justify-center">
              <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[12px] text-black whitespace-nowrap">
                {planLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Withdraw Now Button — multi-state ─────────────── */

type BtnState = "idle" | "success" | "fail" | "retry";

function WithdrawNowButton({ state, onClick }: { state: BtnState; onClick: () => void }) {
  const fills: Record<BtnState, string> = {
    idle:    "#DD8164",
    success: "#22C55E",
    fail:    "#EF4444",
    retry:   "#EF4444",
  };

  const labels: Record<BtnState, string> = {
    idle:    "Withdraw Now",
    success: "Withdraw Successful",
    fail:    "Withdraw Failed",
    retry:   "Try Again",
  };

  const fill = fills[state];
  const isClickable = state === "idle" || state === "retry";

  return (
    <div className="h-[56px] relative shrink-0 w-[400px]">
      <div className="absolute h-[56px] left-0 top-0 w-[400px]">
        <div className="absolute inset-[-14.29%_-3%_-21.43%_-2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 420 76">
            <g filter="url(#filter_wn_btn)">
              <path d={svgPaths.p1fcb0d80} fill={fill} />
              <path d={svgPaths.p36bc2a00} stroke="#F4F0FF" strokeWidth="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76" id="filter_wn_btn" width="420" x="0" y="0">
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
      </div>

      <button
        className={`absolute inset-0 flex gap-[8px] items-center justify-center ${isClickable ? "cursor-pointer" : "cursor-default"}`}
        onClick={isClickable ? onClick : undefined}
      >
        {/* Icon */}
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g clipPath="url(#clip_wn_icon)">
              {/* idle & retry: downward withdraw arrow */}
              {(state === "idle" || state === "retry") && (
                <>
                  <path d={svgPaths.p19b5de80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
                  <path d={svgPaths.p36d7ef80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                </>
              )}
              {/* success: checkmark */}
              {state === "success" && (
                <>
                  <path d="M19 3L14.875 7L13 5.18182" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p36d7ef80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                </>
              )}
              {/* fail / retry: X */}
              {(state === "fail") && (
                <>
                  <path d="M18.5 3L13.5 8M13.5 3L18.5 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p36d7ef80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                </>
              )}
            </g>
            <defs>
              <clipPath id="clip_wn_icon"><rect fill="white" height="20" width="20" /></clipPath>
            </defs>
          </svg>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] text-[16px] text-center text-white whitespace-nowrap">
          {labels[state]}
        </p>
      </button>
    </div>
  );
}

/* ─────────────── Transaction hash row (success only) ─────────────── */

function TxHashRow() {
  return (
    <div className="flex items-center justify-between w-[400px]">
      <div className="flex gap-[6px] items-center">
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

/* ─────────────── Right panel — Withdraw widget ─────────────── */

function WithdrawWidget({ amount, shortAmount }: { amount: string; shortAmount: string }) {
  return (
    <div className="h-[189px] relative rounded-[16px] shrink-0 w-full">
      {/* Card background */}
      <div className="-translate-x-1/2 absolute bg-[#f4f0ff] h-[189px] left-1/2 rounded-[16px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.1),-4px_-4px_12px_0px_white] top-0 w-[400px]" />
      {/* "Withdraw assets from" header */}
      <div className="absolute flex items-center justify-between left-[24px] top-[12px] w-[352px]">
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[12px] text-black whitespace-nowrap">Withdraw assets from</p>
        <div className="bg-[#f4f0ff] flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[99px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-2px_-2px_4px_0px_white] shrink-0">
          <div className="flex gap-[8px] items-center">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
            </div>
            <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] text-[12px] text-black whitespace-nowrap">Base</p>
          </div>
          <div className="flex h-[12px] items-center justify-center shrink-0 w-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67 3.67">
              <path d={svgPaths.pd122080} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="0.667" />
            </svg>
          </div>
        </div>
      </div>
      {/* Inset amount area */}
      <div className="-translate-x-1/2 absolute h-[125px] left-1/2 pointer-events-none rounded-[16px] top-[52px] w-[376px]">
        <div className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_6px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_6px_0px_white]" />
      </div>
      {/* USDC logo */}
      <div className="absolute left-[301px] size-[50px] top-[88px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f4f0ff] left-1/2 rounded-full shadow-[1.418px_1.418px_4.253px_0px_rgba(127,86,217,0.12),-1.418px_-1.418px_3.544px_0px_white] size-[50px] top-1/2" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[26px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <g clipPath="url(#clip_wd_usdc)">
              <path d={svgPaths.pc048600} fill="#2775CA" />
              <path d={svgPaths.p3248a900} fill="white" />
              <path d={svgPaths.p31f33900} fill="white" />
            </g>
            <defs><clipPath id="clip_wd_usdc"><rect fill="white" height="26" width="26" /></clipPath></defs>
          </svg>
        </div>
      </div>
      {/* Amount */}
      <p className="absolute font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[normal] left-[36px] text-[24px] text-black top-[82px]">{amount}</p>
      {/* Balance icon */}
      <div className="absolute flex gap-[4px] items-center left-[36px] top-[137px]">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[16.44%_12.5%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10.7383">
              <path d={svgPaths.p1e18d9b0} fill="black" />
              <path clipRule="evenodd" d={svgPaths.p22e08880} fill="black" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-black whitespace-nowrap">{shortAmount}</p>
      </div>
      {/* 0% / MAX */}
      <div className="absolute flex flex-col items-center left-[292px] top-[147px] w-[11px]">
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] text-[8px] text-black w-full">0%</p>
      </div>
      <div className="absolute flex flex-col items-center left-[346px] top-[147px] w-[17px]">
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-50 text-[8px] text-black w-full">MAX</p>
      </div>
    </div>
  );
}

function RightPanel({ amount, shortAmount, btnState, error, onBtnClick }: {
  amount: string; shortAmount: string;
  btnState: BtnState; error: string | null; onBtnClick: () => void;
}) {
  return (
    <div className="absolute h-[828px] left-[756px] overflow-clip top-[72px] w-[756px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-[32px] items-start left-1/2 top-[calc(50%-125px)] w-[400px]">
        <div className="flex flex-col items-start relative shrink-0 w-full">
          <WithdrawWidget amount={amount} shortAmount={shortAmount} />
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <WithdrawNowButton state={btnState} onClick={onBtnClick} />
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

// Format whole dollars as "3,000.00".
function formatUSD(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function WithdrawScreen() {
  const navigate = useNavigate();

  // The real staked balance and reward history, loaded from the backend.
  // A withdrawal always returns the entire balance ("withdraw all").
  const [balance, setBalance] = useState<number | null>(null);
  const [cardsClaimed, setCardsClaimed] = useState(0);
  const [totalRedeemed, setTotalRedeemed] = useState(0);

  const [btnState, setBtnState] = useState<BtnState>("idle");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // The plan label shown on the gift card, e.g. "Claude Max 5x · $100 / mo".
  const [planLabel, setPlanLabel] = useState("Claude Pro · $20 / mo");

  useEffect(() => {
    const wallet = connectWallet();
    Promise.all([api.getDashboard(wallet), api.getRedemptions(wallet)])
      .then(([dashboard, redemptions]) => {
        setBalance(dashboard.balance);
        setTotalRedeemed(dashboard.totalRedeemed);
        // Count only cards claimed against the stake being withdrawn —
        // not cards from earlier, already-closed stakes.
        const subId = dashboard.subscription?.id;
        setCardsClaimed(
          subId
            ? redemptions.filter((r) => r.subscriptionId === subId).length
            : redemptions.length,
        );
        if (dashboard.subscription) {
          const price = CLAUDE_PRICES[dashboard.subscription.plan.slug] ?? 20;
          setPlanLabel(
            `Claude ${dashboard.subscription.plan.name} · $${price} / mo`,
          );
        }
      })
      .catch(() => {
        // Backend unavailable — treat as nothing to withdraw.
        setBalance(0);
      });
  }, []);

  // Success: go to the Withdrawal Complete summary screen after 1 second.
  useEffect(() => {
    if (btnState === "success") {
      const t = setTimeout(() => {
        navigate("/withdrawal-complete", {
          state: {
            amountWithdrawn: balance ?? 0,
            cardsClaimed,
            totalRedeemed,
          },
        });
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [btnState, balance, cardsClaimed, totalRedeemed, navigate]);

  // Fail → "Try Again" after 1.5 seconds
  useEffect(() => {
    if (btnState === "fail") {
      const t = setTimeout(() => setBtnState("retry"), 1500);
      return () => clearTimeout(t);
    }
  }, [btnState]);

  const nothingToWithdraw = balance !== null && balance <= 0;

  const handleBtnClick = async () => {
    if (submitting) return;
    if (btnState !== "idle" && btnState !== "retry") return;
    if (balance === null) return;
    if (nothingToWithdraw) {
      setError("You have no staked balance to withdraw.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const result = await api.createWithdrawal(connectWallet());
      if (result.status === "success") {
        setBtnState("success");
      } else {
        setBtnState("fail");
        setError("Withdrawal could not be completed.");
      }
    } catch (err: unknown) {
      setBtnState("fail");
      setError(err instanceof Error ? err.message : "Withdrawal failed");
    } finally {
      setSubmitting(false);
    }
  };

  const amountStr = balance === null ? "—" : formatUSD(balance);
  const shortAmount = balance === null ? "—" : balance.toLocaleString();

  return (
    <div className="bg-[#f4f0ff] relative size-full">
      <TopNavigation />
      <GiftCard planLabel={planLabel} />
      <RightPanel
        amount={amountStr}
        shortAmount={shortAmount}
        btnState={btnState}
        error={error ?? (nothingToWithdraw ? "You have no staked balance to withdraw." : null)}
        onBtnClick={handleBtnClick}
      />
    </div>
  );
}