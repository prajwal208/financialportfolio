import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function formatINR(value: number) {
  return inrFormatter.format(value)
}

function calcEmi(loanAmount: number, annualRate: number, years: number) {
  const P = loanAmount
  const r = annualRate / 12 / 100
  const n = Math.max(1, Math.round(years * 12))

  if (r === 0) {
    const emi = P / n
    const totalPayable = emi * n
    const totalInterest = totalPayable - P
    return { emi, totalPayable, totalInterest }
  }

  const pow = Math.pow(1 + r, n)
  const emi = (P * r * pow) / (pow - 1)
  const totalPayable = emi * n
  const totalInterest = totalPayable - P
  return { emi, totalPayable, totalInterest }
}

function IconCalculator() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 6h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 11h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 11h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 16h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 16h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(2500000)
  const [interestRate, setInterestRate] = useState<number>(8.5)
  const [tenureYears, setTenureYears] = useState<number>(20)

  const emi = useMemo(
    () => calcEmi(loanAmount, interestRate, tenureYears),
    [loanAmount, interestRate, tenureYears],
  )

  const emiRounded = Math.round(emi.emi)
  const totalInterestRounded = Math.round(emi.totalInterest)
  const totalPayableRounded = Math.round(emi.totalPayable)

  return (
    <div className="emiWrap" aria-label="EMI calculator">
      <div className="emiHeader">
        <div className="emiIcon" aria-hidden="true">
          <IconCalculator />
        </div>
        <div className="emiHeaderText">
          <div className="emiEyebrow">EMI Calculator</div>
          <h2 className="emiTitle">Calculate your monthly payments</h2>
          <p className="emiSubtitle">
            Plan your finances with an interactive loan calculator.
          </p>
        </div>
      </div>

      <div className="emiGrid">
        <div className="emiLeftCard">
          <div className="emiSectionTitle">Loan Calculator</div>

          <div className="emiField">
            <div className="emiFieldTop">
              <div className="emiLabel">Loan Amount</div>
              <div className="emiValue">{formatINR(loanAmount)}</div>
            </div>
            <div className="emiRange">
              <input
                aria-label="Loan Amount"
                type="range"
                min={100000}
                max={10000000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
              <div className="emiRangeTicks">
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>
          </div>

          <div className="emiField">
            <div className="emiFieldTop">
              <div className="emiLabel">Interest Rate</div>
              <div className="emiValue">{interestRate.toFixed(1)}% per annum</div>
            </div>
            <div className="emiRange">
              <input
                aria-label="Interest Rate"
                type="range"
                min={6}
                max={20}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <div className="emiRangeTicks">
                <span>6%</span>
                <span>20%</span>
              </div>
            </div>
          </div>

          <div className="emiField">
            <div className="emiFieldTop">
              <div className="emiLabel">Loan Tenure</div>
              <div className="emiValue">{tenureYears} years</div>
            </div>
            <div className="emiRange">
              <input
                aria-label="Loan Tenure"
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
              />
              <div className="emiRangeTicks">
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="emiRightCard">
          <div className="emiSectionTitle emiRightTitle">Your EMI Breakdown</div>

          <div className="emiBigResult">
            <div className="emiBigLabel">Monthly EMI</div>
            <div className="emiBigValue">{formatINR(emiRounded)}</div>
          </div>

          <div className="emiTwoColResults">
            <div className="emiMiniResult">
              <div className="emiMiniLabel">Principal Amount</div>
              <div className="emiMiniValue">{formatINR(loanAmount)}</div>
            </div>
            <div className="emiMiniResult">
              <div className="emiMiniLabel">Total Interest</div>
              <div className="emiMiniValue">{formatINR(totalInterestRounded)}</div>
            </div>
          </div>

          <div className="emiFullResult">
            <div className="emiMiniLabel">Total Amount Payable</div>
            <div className="emiMiniValue">{formatINR(totalPayableRounded)}</div>
          </div>

          <div className="emiApply">
            <div className="emiApplyText">
              <div className="emiApplyStrong">Apply for This Loan</div>
              <div className="emiApplySub">Get personalized lending options in minutes.</div>
            </div>

            <Link className="btn btnPrimary emiApplyBtn" to="/contact">
              Apply <IconArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

