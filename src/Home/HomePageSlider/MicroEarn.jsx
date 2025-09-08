import React from "react";

const MicroEarn = () => {
  return (
    <div className="hero bg-base-200 dark:bg-base-100 min-h-screen px-4">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 justify-center">
        {/* Images */}
        <div className="my-5 flex flex-col justify-center items-center gap-6">
          <img
            src="https://miro.medium.com/1*Obg-jyR_bT65Itjnuclvxw.jpeg"
            className="w-full lg:max-w-md rounded-lg shadow-2xl"
            alt="Micro Earn"
          />
          <img
            src="https://geekandblogger.com/wp-content/uploads/2023/02/Ways-to-make-money-online.jpg"
            className="w-full lg:max-w-md rounded-lg shadow-2xl"
            alt="Micro Earn"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left text-base-content">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Micro Earn</h1>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            Micro-earning is an innovative way to make money online by
            completing small, simple tasks that require minimal time and effort.
            Unlike traditional jobs, micro-earning allows individuals to earn
            extra income from home, using just a smartphone or computer. Tasks
            can vary from taking surveys, watching short videos, testing apps,
            performing data entry, or even participating in user feedback
            programs. Although the payment for each task is small, the
            cumulative effect can be significant, especially for students,
            freelancers, or anyone looking to supplement their income.
            <br />
            <br />
            One of the main advantages of micro-earning is its flexibility. You
            can choose when and how much to work, making it ideal for people
            with busy schedules or other commitments. Additionally, it provides
            opportunities to explore new apps, websites, or services, often
            giving insights into emerging technology and market trends.
            <br />
            <br />
            Success in micro-earning requires consistency and strategy. Focusing
            on reliable platforms, understanding task requirements, and managing
            time efficiently can increase earnings over time. While
            micro-earning may not replace a full-time income, it offers a
            practical solution for financial growth, learning new skills, and
            taking control of one’s personal income streams in today’s digital
            economy.
          </p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MicroEarn;
