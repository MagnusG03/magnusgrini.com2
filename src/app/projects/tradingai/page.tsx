import img1 from "@/assets/tradingai/profit.webp";
import img2 from "@/assets/tradingai/AdvancedLSTM.webp";
import img3 from "@/assets/tradingai/AdvancedTransformer.webp";
import img4 from "@/assets/tradingai/DRL.webp";
import img5 from "@/assets/tradingai/LSTM.webp";
import img6 from "@/assets/tradingai/LSTMandPPO.webp";
import img7 from "@/assets/tradingai/LSTMandPPO2.webp";
import img8 from "@/assets/tradingai/MultiTransformer.webp";
import img9 from "@/assets/tradingai/TradingAlgorithm.webp";
import Image from "next/image";

export default function TradingAI() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Trading AI</h1>
      <div className="mx-6 sm:mx-0">
        <h3 className="text-lg">
          This is an exploration in the efficacy of different machine learning models for trading on the stock market. In particular, I trained multiple types of models using data from Yahoo Finance on three different commodities, gold, crude oil, and natural gas. After exploring many different models and selecting the best one, I created a trading script that connects to the Oanda trading API and executes trades based on the predicted price of the commoditiy based on the past price history. If the predicted value of the commodity is lower than the current value, it sells some of its shares, and if the predicted value is higher than the current value, it buys some shares. Below is the performance of the trading algorithm using the LSTM model on the real stock market (using fake money).
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img1}
          alt="image of the profit made by the trading algorithm"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="text-lg mt-8">
          As you can see, the trading algorithm was able to make a profit in the short time that it was trading. However, this model was trading at a time when the market was very bullish, so it is unclear if the model would perform well in a bear market.
        </h3>
        <h3 className="text-lg mt-8">
          Throughout the testing of the different models, we compared their performance to a simple buy and hold strategy. Below are the results of these tests for different models.
        </h3>
        <h3 className="my-8 text-2xl font-bold text-center">
          LSTM with minutely, hourly, and daily data
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img2}
          alt="advanced LSTM model results"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="my-8 text-2xl font-bold text-center">
          Transformer
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img3}
          alt="advanced transformer model results"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="my-8 text-2xl font-bold text-center">
          Deep reinforcement Learning (PPO)
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img4}
          alt="deep reinforcement learning model results"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="my-8 text-2xl font-bold text-center">
          LSTM with daily data
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img5}
          alt="simple LSTM model results"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="my-8 text-2xl font-bold text-center">
          LSTM and PPO combined (promising but unreliable)
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img6}
          alt="LSTM and PPO combined model with promising results"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="my-8 text-2xl font-bold text-center">
          LSTM and PPO combined (poor results)
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img7}
          alt="LSTM and PPO combined model with poor results"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="my-8 text-2xl font-bold text-center">
          Transformer on multiple simultaneous commodities
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img8}
          alt="Transformer model results using multiple commodities at once"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <h3 className="text-lg mt-8">
          After testing, the advanced LSTM model was used in the trading algorithm to trade on the real time stock market. The advanced LSTM model was chosen for its reliability, as some models had huge successes and catastrophic failures. Below is the trading algorithm running.
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img9}
          alt="Trading algorithm actively trading using the LSTM model"
          width={1000}
          height={800}
          className=""
          />
        </div>
      </div>
    </div>
  );
}
