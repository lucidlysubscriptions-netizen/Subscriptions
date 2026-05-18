import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

/* ─────────────── Withdrawal Complete summary screen ───────────────
   Shown after a full withdrawal closes the stake. The tone adapts to
   whether the user actually earned anything:
     • cardsClaimed > 0  → celebratory recap of a completed stake
     • cardsClaimed === 0 → neutral "you withdrew, nothing was claimed"
*/

interface CompleteState {
  amountWithdrawn?: number;
  cardsClaimed?: number;
  totalRedeemed?: number;
}

function formatUSD(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface SummaryRowProps {
  label: string;
  value: string;
}

function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between w-full py-[14px] border-b border-[rgba(0,0,0,0.06)] last:border-b-0">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] text-[14px] text-black opacity-60">
        {label}
      </p>
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-black">
        {value}
      </p>
    </div>
  );
}

export default function WithdrawalCompleteScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as CompleteState) ?? {};

  const amountWithdrawn = state.amountWithdrawn ?? 0;
  const cardsClaimed = state.cardsClaimed ?? 0;
  const totalRedeemed = state.totalRedeemed ?? 0;

  // Reached directly (no withdrawal context) → send the user home.
  useEffect(() => {
    if (state.amountWithdrawn === undefined) {
      navigate("/", { replace: true });
    }
  }, [state.amountWithdrawn, navigate]);

  const earnedSomething = cardsClaimed > 0;
  const title = earnedSomething
    ? "Your stake is complete"
    : "Withdrawal complete";
  const subtitle = earnedSomething
    ? `You staked, claimed ${cardsClaimed} Claude ${
        cardsClaimed === 1 ? "card" : "cards"
      }, and your principal is back in your wallet.`
    : "Your principal is back in your wallet. You didn't claim any Claude cards this cycle.";

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#f4f0ff]">
      <div className="bg-[#f4f0ff] rounded-[24px] w-[480px] px-[40px] py-[40px] flex flex-col items-center shadow-[8px_8px_24px_0px_rgba(127,86,217,0.12),-8px_-8px_24px_0px_white]">
        {/* Status icon */}
        <div
          className="flex items-center justify-center size-[80px] rounded-full bg-[#e3f3e3] mb-[24px]"
          style={{
            filter:
              "drop-shadow(4px 4px 10px rgba(0,0,0,0.10)) drop-shadow(-4px -4px 10px #FFFFFF)",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#4caf50"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title + subtitle */}
        <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[24px] text-[#280f4b] text-center">
          {title}
        </p>
        <p className="font-['Hanken_Grotesk:Regular',sans-serif] text-[15px] text-black opacity-70 text-center mt-[8px] leading-[22px]">
          {subtitle}
        </p>

        {/* Summary card */}
        <div className="w-full mt-[28px] px-[20px] py-[6px] rounded-[16px] bg-[#f8f5ff] border border-[#e6dbff]">
          <SummaryRow
            label="Principal returned"
            value={`$${formatUSD(amountWithdrawn)}`}
          />
          <SummaryRow
            label="Claude cards claimed"
            value={`${cardsClaimed} ${cardsClaimed === 1 ? "card" : "cards"}`}
          />
          <SummaryRow
            label="Total redeemed"
            value={`$${formatUSD(totalRedeemed)}`}
          />
        </div>

        {/* Actions */}
        <button
          className="w-full h-[52px] mt-[28px] rounded-[99px] bg-[#7f56d9] text-white font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] cursor-pointer shadow-[4px_4px_10px_0px_rgba(127,86,217,0.25),-4px_-4px_10px_0px_white] hover:opacity-95 transition-opacity"
          onClick={() => navigate("/choose-plan")}
        >
          Stake again
        </button>
        <button
          className="w-full h-[48px] mt-[12px] rounded-[99px] text-[#7f56d9] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
