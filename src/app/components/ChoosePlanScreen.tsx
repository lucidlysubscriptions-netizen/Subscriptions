import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/SubscriptionsChooseSubscriptionsPlan/svg-rpi4m21iao";
import imgGift from "figma:asset/db9d7fe6198ad58b36356dbb9257eb48725de2d5.png";
import { api, type Plan } from "../lib/api";
import { connectWallet } from "../lib/wallet";

/* ─────────────── Shared neumorphic card ─────────────── */

const RAISED_SHADOW =
  "inset -4px -4px 4px 0px rgba(0,0,0,0.08), inset 4px 4px 4px 0px white";
const PRESSED_SHADOW =
  "inset -4px -4px 4px 0px white, inset 4px 4px 4px 0px rgba(0,0,0,0.08)";

interface NeumorphCardProps {
  selected: boolean;
  hovered: boolean;
}

function cardInnerShadow({ selected, hovered }: NeumorphCardProps) {
  return selected || hovered ? PRESSED_SHADOW : RAISED_SHADOW;
}

/* ─────────────── Claude SVG icon ─────────────── */

function ClaudeIcon({ opacity }: { opacity: number }) {
  return (
    <svg
      className="absolute block inset-0 size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 56 56"
    >
      <g opacity={opacity}>
        <path d={svgPaths.p152f0100} fill="#D97757" />
      </g>
    </svg>
  );
}

/* ─────────────── Stake / Database icon ────────────── */

function StakeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p324b1280}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d={svgPaths.p6e14750}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.833333"
        />
      </svg>
    </div>
  );
}

/* ─────────────── Ethereum nav icon ─────────────── */

function NavEthLogo() {
  return (
    <div className="bg-[#526492] overflow-clip relative rounded-full shrink-0 size-[20px]">
      <div className="absolute bg-white blur-[60.526px] inset-[39.5%_39.01%_39%_39.49%] rounded-full" />
      <div className="absolute inset-[18.75%_31.25%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7.49978 12.5001"
        >
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

/* ─────────────── Top Navigation ─────────────── */

function TopNavigation() {
  return (
    <div className="absolute bg-[#f4f0ff] h-[72px] left-0 top-0 w-[1512px] z-10">
      {/* Logo */}
      <div className="absolute flex gap-[11.469px] items-center left-[56px] top-1/2 -translate-y-1/2">
        <div className="relative shrink-0 size-[22.938px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 22.9375 22.9375"
          >
            <path d={svgPaths.p2bdb6900} fill="black" />
          </svg>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold not-italic text-[17.203px] text-black tracking-[1.7203px] uppercase whitespace-nowrap">
          LucidlY
        </p>
      </div>

      {/* Nav items */}
      <div className="absolute flex gap-[16px] items-center left-[547px] top-[16px]">
        {/* Pill nav */}
        <div className="bg-[#f4f0ff] h-[40px] relative shrink-0 w-fit">
          {/* Track shadow */}
          <div className="absolute inset-0 pointer-events-none rounded-[99px]">
            <div className="absolute bg-[#f4f0ff] inset-0 rounded-[99px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.08),inset_-4px_-4px_4px_0px_white]" />
          </div>
          {/* Tabs */}
          <div className="relative flex items-center">
            {["Yields", "Bridge", "Portfolio", "Points"].map((t) => (
              <div
                key={t}
                className="flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] rounded-[99px] shrink-0"
              >
                <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] text-[16px] text-black whitespace-nowrap">
                  {t}
                </p>
              </div>
            ))}
            <div className="flex h-[40px] items-center justify-center opacity-60 px-[24px] py-[7px] rounded-[99px] shrink-0">
              <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[26px] text-[16px] text-black whitespace-nowrap">
                Docs
              </p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-[#f4f0ff] flex items-center justify-center p-[14px] rounded-[99px] shadow-[4px_4px_5px_0px_rgba(0,0,0,0.08),-4px_-4px_5px_0px_white] shrink-0 size-[40px]">
          <div className="relative shrink-0 size-[20px]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
            >
              <g clipPath="url(#clip_nav_settings)">
                <path d={svgPaths.p1f56fc80} fill="black" />
                <path d={svgPaths.p2febac00} fill="black" />
              </g>
              <defs>
                <clipPath id="clip_nav_settings">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
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
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] text-[#7f56d9] text-[16px] whitespace-nowrap">
            Connect Wallet
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Plan selection card ─────────────── */

interface PlanCardProps {
  label: string;
  sub: string;
  iconOpacity: number;
  selected: boolean;
  onClick: () => void;
}

function PlanCard({ label, sub, iconOpacity, selected, onClick }: PlanCardProps) {
  const [hovered, setHovered] = useState(false);
  const active = selected || hovered;

  return (
    <div
      className="h-[92px] relative shrink-0 w-[200px] cursor-pointer select-none"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shell */}
      <div className="absolute h-[92px] left-0 pointer-events-none rounded-[16px] top-0 w-[200px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
        <div
          className="absolute inset-0 rounded-[inherit] transition-shadow duration-200"
          style={{ boxShadow: cardInnerShadow({ selected, hovered }) }}
        />
      </div>

      {/* Clipped icon */}
      <div className="absolute h-[92px] left-0 overflow-clip rounded-[16px] top-0 w-[200px]">
        <div className="absolute right-[-8px] size-[56px] top-[-8px]">
          <ClaudeIcon opacity={iconOpacity} />
        </div>
      </div>

      {/* Text */}
      <p className="absolute font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] left-[24px] text-[#280f4b] text-[20px] top-[24px] w-[119px]">
        {label}
      </p>
      <p className="absolute font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[normal] left-[24px] text-[12px] text-[rgba(0,0,0,0.6)] top-[52px]">
        {sub}
      </p>
    </div>
  );
}

/* ─────────────── Amount selection card ─────────────── */

interface AmountCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function AmountCard({ label, selected, onClick }: AmountCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[92px] relative shrink-0 w-[200px] cursor-pointer select-none"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute h-[92px] left-0 pointer-events-none rounded-[16px] top-0 w-[200px] shadow-[-4px_-4px_12px_0px_white,4px_4px_12px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute bg-[#f4f0ff] inset-0 rounded-[16px]" />
        <div
          className="absolute inset-0 rounded-[inherit] transition-shadow duration-200"
          style={{ boxShadow: cardInnerShadow({ selected, hovered }) }}
        />
      </div>
      <p className="absolute font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] left-[24px] text-[#280f4b] text-[20px] top-[34px] w-[152px]">
        {label}
      </p>
    </div>
  );
}

/* ─────────────── Left panel ───────────── */

// Preset deposit amount buttons. These are convenience picks for the UI —
// the chosen amount is sent to the backend on the Make Deposit screen.
const AMOUNTS = [
  { id: "3k",  label: "$3,000",  display: "3,000.00"  },
  { id: "12k", label: "$12,500", display: "12,500.00" },
  { id: "24k", label: "$24,000", display: "24,000.00" },
];

// Per-plan icon opacity, applied by position in the catalog.
const ICON_OPACITIES = [0.25, 0.6, 0.9];

// Plan ↔ deposit amount are paired: selecting one auto-selects the other.
const PLAN_TO_AMOUNT: Record<string, string> = {
  pro: "3k",
  max5: "12k",
  max20: "24k",
};
const AMOUNT_TO_PLAN: Record<string, string> = {
  "3k": "pro",
  "12k": "max5",
  "24k": "max20",
};

function LeftPanel({ onBack }: { onBack: () => void }) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("12k");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // Selecting a plan auto-selects its paired deposit amount, and vice versa.
  function handlePlanSelect(slug: string) {
    setSelectedPlan(slug);
    const amount = PLAN_TO_AMOUNT[slug];
    if (amount) setSelectedAmount(amount);
  }
  function handleAmountSelect(id: string) {
    setSelectedAmount(id);
    const plan = AMOUNT_TO_PLAN[id];
    if (plan) setSelectedPlan(plan);
  }

  // Load the plan catalog from the backend on first render.
  useEffect(() => {
    api
      .getPlans()
      .then((fetched) => {
        setPlans(fetched);
        const fallback = fetched.find((p) => p.slug === "max5") ?? fetched[0];
        if (fallback) handlePlanSelect(fallback.slug);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Failed to load plans");
      });
  }, []);

  // Create the subscription, then continue to the deposit screen.
  async function handleStake() {
    if (!selectedPlan || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const wallet = connectWallet();
      await api.createSubscription(wallet, selectedPlan);
      const amt = AMOUNTS.find((a) => a.id === selectedAmount);
      navigate("/make-deposit", {
        state: { amount: amt?.display ?? "3,000.00" },
      });
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Could not create subscription",
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="absolute h-[828px] left-0 overflow-clip top-[72px] w-[756px]">
      {/* Header */}
      <div className="absolute flex flex-col gap-[4px] items-start justify-center left-[56px] text-[#280f4b] top-[56px]">
        <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[24px] tracking-[0.66px] whitespace-nowrap">
          Pick your tier
        </p>
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal opacity-60 text-[16px]">
          {`Each tier funds a different Claude plan, every month, from your principal's yield.`}
        </p>
      </div>

      {/* Plan cards */}
      <div className="absolute flex gap-[32px] items-center left-[56px] top-[144px]">
        {plans.map((p, i) => (
          <PlanCard
            key={p.slug}
            label={p.name}
            sub={p.description}
            iconOpacity={ICON_OPACITIES[i] ?? 0.6}
            selected={selectedPlan === p.slug}
            onClick={() => handlePlanSelect(p.slug)}
          />
        ))}
      </div>

      {/* Error message */}
      {error && (
        <p className="absolute font-['Hanken_Grotesk:Regular',sans-serif] left-[56px] text-[#d92d20] text-[14px] top-[260px]">
          {error}
        </p>
      )}

      {/* Amount header */}
      <div className="absolute flex flex-col gap-[4px] items-start left-[56px] text-[#280f4b] top-[300px]">
        <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[24px] tracking-[0.66px] whitespace-nowrap">
          Choose your deposit
        </p>
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal opacity-60 text-[16px]">
          Minimum $3,000. Withdraw your principal at any time.
        </p>
      </div>

      {/* Amount cards */}
      <div className="absolute flex gap-[32px] items-center left-[56px] top-[388px]">
        {AMOUNTS.map((a) => (
          <AmountCard
            key={a.id}
            label={a.label}
            selected={selectedAmount === a.id}
            onClick={() => handleAmountSelect(a.id)}
          />
        ))}
      </div>

      {/* Back button */}
      <div className="absolute left-[56px] top-[547px]">
        <button
          onClick={onBack}
          className="relative h-[40px] w-[143px] cursor-pointer group"
        >
          <div className="absolute inset-[-20%_-5.59%_-25%_-5.59%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 161 58"
            >
              <g filter="url(#filter_back_btn)">
                <path d={svgPaths.pc2a0700} fill="#F4F0FF" />
                <path
                  d={svgPaths.pf512880}
                  stroke="#F4F0FF"
                  strokeWidth="4"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="58"
                  id="filter_back_btn"
                  width="161"
                  x="0"
                  y="0"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="4" dy="4" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_back"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="-2" dy="-2" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    in2="effect1_dropShadow_back"
                    mode="normal"
                    result="effect2_dropShadow_back"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_back"
                    mode="normal"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <span className="absolute inset-0 flex items-center justify-center font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-black">
            Back
          </span>
        </button>
      </div>

      {/* Stake Now button */}
      <div className="absolute left-[503px] top-[547px]">
        <button
          className="relative h-[40px] w-[217px] cursor-pointer disabled:opacity-60"
          disabled={submitting || !selectedPlan}
          onClick={handleStake}
        >
          <div className="absolute inset-[-20%_-4.61%_-25%_-3.69%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 235 58"
            >
              <g filter="url(#filter_stake_btn)">
                <path d={svgPaths.p2cec6180} fill="#DD8164" />
                <path
                  d={svgPaths.p31f08f80}
                  stroke="#F4F0FF"
                  strokeWidth="4"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="58"
                  id="filter_stake_btn"
                  width="235"
                  x="0"
                  y="0"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="4" dy="4" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_stake"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="-2" dy="-2" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    in2="effect1_dropShadow_stake"
                    mode="normal"
                    result="effect2_dropShadow_stake"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_stake"
                    mode="normal"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <span className="absolute inset-0 flex gap-[8px] items-center justify-center">
            <StakeIcon />
            <span className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white whitespace-nowrap">
              Continue to deposit
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

/* ─────────────── Right panel ─────────────── */

function RightPanel() {
  return (
    <div className="absolute h-[828px] left-[756px] overflow-clip top-[72px] w-[756px]">
      {/* Gift image with shadow card */}
      <div className="absolute left-[44px] top-[56px] h-[376px] w-[668px]">
        {/* Shadow behind image */}
        <div className="absolute inset-0 bg-[#f4f0ff] rounded-[16px] shadow-[4px_4px_12px_0px_rgba(127,86,217,0.12),-4px_-4px_10px_0px_white]" />
        <img
          alt="Gift"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgGift}
        />
      </div>

      {/* Info card */}
      <div className="absolute left-[44px] top-[464px] h-[141px] w-[668px]">
        <div className="absolute bg-[#f8f5ff] border border-[#e6dbff] border-solid h-[141px] left-0 rounded-[16px] top-0 w-[668px]" />
        <div className="absolute flex flex-col gap-[8px] items-start left-[24px] top-[20px] w-[628px]">
          <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] opacity-90 text-[16px] text-black w-full">
            Important Information
          </p>
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

/* ─────────────── Root ─────────────── */

export default function ChoosePlanScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f4f0ff] relative size-full">
      <TopNavigation />
      <LeftPanel onBack={() => navigate("/")} />
      <RightPanel />
    </div>
  );
}