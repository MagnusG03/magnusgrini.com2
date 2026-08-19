import img1 from "@/assets/tradingalgorithm/paper_portfolio.webp";
import Image from "next/image";

export default function TradingAlgorithm() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">ML Equity Selection System</h1>
      <div className="mx-6 sm:mx-0">
        <h3 className="text-lg">
          This is an independent project that selects stocks from the S&amp;P 500 and trades them automatically. The algorithm ranks all S&amp;P 500 stocks and holds the names that score highest relative to their peers.
        </h3>
        <h3 className="text-lg mt-8">
          The system runs end to end without supervision. Every evening after the close it refreshes its datasets, scores all 500 or so names, decides what to buy/sell/hold, and queues orders for the next morning&apos;s open. It has been running live since June 2026 on a Linux server I built for this purpose, executing across multiple accounts simultaneously &#40;one paper account and one more recent live account that was implemented after solid paper performance&#41;.
        </h3>
        <h3 className="my-8 text-2xl font-bold text-center">How it works</h3>
        <h3 className="text-lg">
          The system is built in four stages. Collection gathers the data, prediction trains the model and scores every stock, evaluation tests both collection and prediction offline before anything goes live, and execution places the orders.
        </h3>
        <h3 className="text-lg mt-8">
          Collection is written in Rust and runs asynchronously, gathering price and volume history, index and sector context, SEC filings, news sentiment, market regime signals, and data quality flags for roughly 500 names. Every feature is then z-scored cross-sectionally by date. On each trading day, each feature is centered on that day&apos;s average across all stocks and divided by that day&apos;s standard deviation. The model therefore always compares a stock against the other stocks available on that same day rather than against its own history, leaving only relative differences.
        </h3>
        <h3 className="text-lg mt-8">
          Two separate models are trained, both aimed at the same three day window. A ridge regression predicts how much a stock will outperform or underperform the rest of the market over the next three trading days. A logistic regression estimates the probability that a stock finishes among the best performing 10% of the index over that same window. The labels for that classifier are built by ranking every stock on each date by its realized three day excess return and marking the top decile. Both models are fitted on features standardized using training data only, and the most recent stretch of dates is held out as a validation set, which is where the weighting that blends their two outputs into a single score is chosen.
        </h3>
        <h3 className="text-lg mt-8">
          Evaluation is walk-forward. The model trains on at least two years of history, is tested on the quarter immediately after, and then the window rolls forward and the whole process repeats, so nothing is ever scored on data it was trained on. Spread, slippage, and regulatory fees are all modeled to maximize realism. Every run is measured against SPY, an equal weight version of the same universe, and a naive momentum signal using identical trading rules.
        </h3>
        <h3 className="text-lg mt-8">
          Execution follows a fixed set of rules. There is a cap on how many positions can be open at once, a minimum score required to buy, a maximum holding period, take-profit and stop-loss levels, and a cash buffer. Those constants were tuned by grid search, and scored on folds held back from the tuning. Before placing any orders, the system checks that its data is fresh and that the broker state matches what it expects.
        </h3>
        <h3 className="text-lg mt-8">
          The reason the model only runs inference after market close is because we do not have any historical intra day data, and therefore instead have to train the model using data collected at market close for each historical day. This approach also removes the need for optimizing for latency, which is an advantage when going up against competitors with significantly more resources.
        </h3>

        <h3 className="my-8 text-2xl font-bold text-center">Results</h3>
        <h3 className="text-lg">
          The numbers below come from 15 walk-forward folds covering 915 out-of-sample trading days and 683 trades, using the exact policy that runs in production.
        </h3>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-lg border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 pr-4 text-left font-bold">Strategy</th>
                <th className="py-2 pr-4 text-right font-bold">CAGR</th>
                <th className="py-2 pr-4 text-right font-bold">Max drawdown</th>
                <th className="py-2 text-right font-bold">Sharpe</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4">This model</td>
                <td className="py-2 pr-4 text-right">44.9%</td>
                <td className="py-2 pr-4 text-right">-26.9%</td>
                <td className="py-2 text-right">1.61</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4">SPY buy and hold</td>
                <td className="py-2 pr-4 text-right">22.2%</td>
                <td className="py-2 pr-4 text-right">-19.0%</td>
                <td className="py-2 text-right">1.38</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4">Equal weight universe</td>
                <td className="py-2 pr-4 text-right">16.1%</td>
                <td className="py-2 pr-4 text-right">-18.2%</td>
                <td className="py-2 text-right">1.09</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Naive momentum, identical policy</td>
                <td className="py-2 pr-4 text-right">1.4%</td>
                <td className="py-2 pr-4 text-right">-3.4%</td>
                <td className="py-2 text-right">0.41</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg mt-8">
          In order to ensure that the generated returns did not come from the trading rules alone, a naive momentum signal with an identical execution policy was run. The resulting return of 1.4% per year confirms that the returns are derived by the model. Additionally the model was compared to the S&amp;P 500 and an equal weight buy and hold strategy, to ensure that the algorithm returns were not solely due to broad market returns.
        </h3>

        <h3 className="my-8 text-2xl font-bold text-center">Live results so far</h3>
        <h3 className="text-lg">
          Below is the paper trading account as of August 17, 2026, up 38.2% from a starting balance of $100,000.
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
            src={img1}
            alt="paper trading account balance since going live"
            width={1048}
            height={414}
            className="h-auto"
          />
        </div>
        <h3 className="text-lg mt-8">
          The algorithm has not run long enough to prove anything confidently, and a paper account has no real fills, no partial executions, and no market impact. However, the walk-forward backtest, the paper account, and the live account have all been promising so far.
        </h3>

        <h3 className="my-8 text-2xl font-bold text-center">Potential improvements</h3>
        <h3 className="text-lg">
          Execution is where I believe the most improvement can be made. The trading rules are relatively basic, and every selected stock is currently treated identically regardless of how confident the model is in it. Sizing positions by prediction confidence would be a clear next step to try.
        </h3>
        <h3 className="text-lg mt-8">
          Beyond that, the algorithm needs more runtime both in paper and live trading to prove that it actually has an edge.
        </h3>

        <h3 className="text-lg mt-8">
          The source code for this project is private, since it is an active strategy trading real money. I am happy to talk through the architecture, the evaluation setup, and its limitations in more detail.
        </h3>
      </div>
    </div>
  );
}
